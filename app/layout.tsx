import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lore-engine.ethankim.cc"),
  applicationName: "LoreEngine",
  title: {
    default: "LoreEngine | Gaming Industry Intelligence",
    template: "%s | LoreEngine"
  },
  description:
    "An AI-assisted gaming industry intelligence dashboard for weekly briefs, market context, and signal tracking.",
  authors: [{ name: "Ethan Kim", url: "https://ethankim.cc" }],
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "LoreEngine | Gaming Industry Intelligence",
    description:
      "The gaming industry, distilled weekly: gaming, AI, platform, hardware, esports, and market signals in one ranked brief.",
    url: "/",
    siteName: "LoreEngine",
    images: [
      {
        url: "/loreengine-og.svg",
        width: 1200,
        height: 630,
        alt: "LoreEngine gaming industry intelligence dashboard preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LoreEngine | Gaming Industry Intelligence",
    description:
      "The gaming industry, distilled weekly with AI-assisted briefs and market context.",
    images: ["/loreengine-og.svg"]
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
