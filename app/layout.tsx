import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://livio.cl"),
  title: {
    default: "LIVIO — La operación logística de tu pyme, en orden",
    template: "%s | LIVIO",
  },
  description: "Software de gestión logística para pymes chilenas con flota propia. Centraliza pedidos, asigna entregas, registra evidencia y cierra el día con control. Piloto abierto — 2 meses gratis.",
  keywords: [
    "software logístico pymes",
    "gestión de entregas Chile",
    "control de flota pequeña",
    "despacho recurrente",
    "software reparto pymes Chile",
    "gestión última milla",
    "pedidos WhatsApp automatización",
    "cierre de caja logística",
    "alternativa SimpliRoute pymes",
    "software distribución agua gas Chile",
  ],
  authors: [{ name: "LIVIO", url: "https://livio.cl" }],
  creator: "LIVIO",
  alternates: {
    canonical: "https://livio.cl",
  },
  openGraph: {
    title: "LIVIO — La operación logística de tu pyme, en orden",
    description: "Centraliza pedidos, asigna entregas, registra evidencia y cierra el día con control. Sin depender de WhatsApp suelto, Excel disperso ni del héroe de siempre.",
    type: "website",
    locale: "es_CL",
    siteName: "LIVIO",
    url: "https://livio.cl",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "LIVIO — Software logístico para pymes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LIVIO — La operación logística de tu pyme, en orden",
    description: "Software de gestión logística para pymes con flota propia. Piloto abierto.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
        <JsonLd />
      </body>
    </html>
  );
}
