import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odontomax | Clínica Odontológica",
  description:
    "Odontomax: tecnologia de ponta e atendimento humanizado para cuidar do seu sorriso com excelência. Atendemos toda a família em Minas Gerais.",
  openGraph: {
    title: "Odontomax | Clínica Odontológica",
    description:
      "Cuidado dental completo com tecnologia de ponta e atendimento humanizado.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
