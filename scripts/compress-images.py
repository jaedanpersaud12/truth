"""Compress public/assets images for the web.

Converts every PNG/JPG in public/assets to WebP:
- photos are resized to max 1920px wide and saved lossy (q80)
- graphics/faces (small or alpha images) keep transparency, saved q90
Prints a before/after size report. Originals are deleted after conversion.
"""

import os
from PIL import Image

ASSETS = os.path.join(os.path.dirname(__file__), "..", "public", "assets")
MAX_W = 1920

total_before = total_after = 0

for name in sorted(os.listdir(ASSETS)):
    base, ext = os.path.splitext(name)
    if ext.lower() not in (".png", ".jpg", ".jpeg"):
        continue
    src = os.path.join(ASSETS, name)
    dst = os.path.join(ASSETS, base + ".webp")
    before = os.path.getsize(src)
    total_before += before

    im = Image.open(src)
    has_alpha = im.mode in ("RGBA", "LA") or (
        im.mode == "P" and "transparency" in im.info
    )
    if has_alpha:
        im = im.convert("RGBA")
        # drop alpha if it is fully opaque anyway
        if im.getchannel("A").getextrema()[0] == 255:
            im = im.convert("RGB")
            has_alpha = False
    else:
        im = im.convert("RGB")

    if im.width > MAX_W:
        im = im.resize((MAX_W, round(im.height * MAX_W / im.width)), Image.LANCZOS)

    im.save(dst, "WEBP", quality=90 if has_alpha else 80, method=6)
    os.remove(src)

    after = os.path.getsize(dst)
    total_after += after
    print(f"{name:>14} {before/1024:>8.0f} KB -> {base + '.webp':>14} {after/1024:>7.0f} KB")

print(f"\nTOTAL {total_before/1024/1024:.1f} MB -> {total_after/1024/1024:.1f} MB")
