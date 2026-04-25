import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lunaclinic.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LUNA | Clinica de Fisioterapia Pediatrica em Franca-SP",
    template: "%s | LUNA Clinica",
  },
  description:
    "Clinica de fisioterapia pediatrica em Franca-SP. A LUNA oferece avaliacao, estimulacao precoce e atendimento humanizado para o desenvolvimento infantil.",
  keywords:
    "clinica de fisioterapia em Franca SP, fisioterapia pediatrica Franca, fisioterapia infantil Franca, desenvolvimento infantil Franca, estimulacao precoce Franca, atraso motor infantil",
  authors: [{ name: "LUNA - Centro de Desenvolvimento Infantil" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LUNA | Clinica de Fisioterapia Pediatrica em Franca-SP",
    description:
      "Acolhimento, tecnica e cuidado para o desenvolvimento infantil em Franca-SP.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "LUNA Clinica",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUNA | Fisioterapia Pediatrica em Franca-SP",
    description:
      "Clinica de fisioterapia pediatrica em Franca-SP com atendimento especializado e humanizado.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  category: "healthcare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
