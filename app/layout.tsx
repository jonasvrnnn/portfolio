import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonas Verbruggen | Developer Portfolio",
  description:
    "Portfolio van Jonas Verbruggen, student graduaat Programmeren aan AP Hogeschool.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
