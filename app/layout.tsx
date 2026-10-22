import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Lama Lama", template: "%s — Lama Lama" },
  description:
    "Höcker Advocaten, Amsterdam. Ondernemingsrecht, arbeidsrecht, IE/ICT, media & marketing, collectieve acties en geschillenbeslechting.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400..800;1,8..60,400&family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400&display=swap"
        />
      </head>
      <body>
        <Providers>
          <a className="skip" href="#app">
            Naar de inhoud
          </a>
          <Header />
          <main id="app">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
