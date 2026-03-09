import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "LIVIO - La operación logística de tu pyme, en orden",
  description: "Centraliza pedidos, asigna entregas, da seguimiento, registra evidencia y cierra el día con control.",
  keywords: ["software logístico", "gestión de entregas", "control operativo", "pymes", "distribución"],
  openGraph: {
    title: "LIVIO - La operación logística de tu pyme, en orden",
    description: "Centraliza pedidos, asigna entregas, da seguimiento, registra evidencia y cierra el día con control.",
    type: "website",
    locale: "es_ES",
    siteName: "LIVIO",
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LIVIO - La operación logística de tu pyme, en orden",
    description: "Centraliza pedidos, asigna entregas, da seguimiento, registra evidencia y cierra el día con control.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-text-primary focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
