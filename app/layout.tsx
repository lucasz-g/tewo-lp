import type { Metadata } from "next";
import { Jost, Syne } from "next/font/google";
import Footer from "./components/Footer";
import UniversalNav from "./components/UniversalNav";
import { getLocale } from "./i18n";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const metadataCopy = {
  en: {
    title: "TEWO | Technology and AI Solutions",
    description: "TEWO builds digital products and technology solutions powered by AI.",
  },
  pt: {
    title: "TEWO | Soluções de tecnologia e IA",
    description: "A TEWO cria produtos digitais e soluções tecnológicas com inteligência artificial.",
  },
  es: {
    title: "TEWO | Soluciones de tecnología e IA",
    description: "TEWO crea productos digitales y soluciones tecnológicas con inteligencia artificial.",
  },
  fr: {
    title: "TEWO | Solutions technologiques et IA",
    description: "TEWO conçoit des produits numériques et des solutions technologiques propulsés par l’IA.",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...metadataCopy[await getLocale()],
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg",
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${syne.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <UniversalNav locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
