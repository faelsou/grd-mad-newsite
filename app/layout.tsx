import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  style: ["normal", "italic"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "GRD MAD — Fábrica de móveis planejados em São Paulo",
    template: "%s · GRD MAD",
  },
  description: site.description,
  metadataBase: new URL("https://grdmad.com.br"),
  openGraph: {
    title: "GRD MAD — A fábrica por trás de lojistas que entregam no prazo",
    description: site.description,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${dmSerif.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink text-[#f6f1e8]">
        <Header />
        {children}
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
