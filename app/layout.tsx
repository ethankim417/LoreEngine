import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LoreEngine | AI Gaming Industry Intelligence",
  description:
    "AI-powered gaming industry intelligence dashboard for studios, investors, and creators.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
