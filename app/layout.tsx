import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "In Search of the Truth — Truth Booth 2026",
  description:
    "The Truth Booth is a giant, inflatable speech bubble and video recording booth traveling the world in search of the truth. A project by ©AUSE COLLECTIVE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
