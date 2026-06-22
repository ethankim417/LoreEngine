import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lore-engine.ethankim.cc"),
  applicationName: "LoreEngine",
  title: {
    default: "LoreEngine | Gaming Industry Intelligence",
    template: "%s | LoreEngine"
  },
  description:
    "LoreEngine is a weekly gaming industry intelligence dashboard tracking games, AI, market signals, platforms, engines, and studios.",
  authors: [{ name: "Ethan Kim", url: "https://ethankim.cc" }],
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "LoreEngine | Gaming Industry Intelligence",
    description:
      "A weekly gaming industry brief tracking games, AI, platforms, engines, studios, and market signals.",
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
      "A weekly gaming industry brief tracking games, AI, platforms, engines, studios, and market signals.",
    images: ["/loreengine-og.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-dark" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('loreengine-theme')==='light'?'light':'dark';var e=document.documentElement;e.dataset.theme=t;e.classList.remove('theme-light','theme-dark');e.classList.add('theme-'+t)}catch(e){document.documentElement.dataset.theme='dark';document.documentElement.classList.add('theme-dark')}"
          }}
        />
      </head>
      <body className="theme-dark" data-theme="dark" suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
