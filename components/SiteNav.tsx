function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1.15" fill="currentColor" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="1"
        y="4"
        width="22"
        height="16"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M10 8.5v7l6-3.5z" fill="currentColor" />
    </svg>
  );
}

export function SiteNav() {
  return (
    <div className="site-nav-wrap">
      <nav className="site-nav">
        <span className="wordmark">In Search of the Truth</span>
        <div className="site-nav-links">
          <a
            href="https://insearchofthetruth.net"
            target="_blank"
            rel="noreferrer"
          >
            Video Archive
          </a>
          <a href="#contact">Contact</a>
          <div className="site-nav-socials">
            {/* placeholder targets — swap in the project's real handles */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <IconInstagram />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <IconYouTube />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
