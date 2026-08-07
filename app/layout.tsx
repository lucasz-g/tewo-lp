import type { Metadata } from "next";
import { Jost, Syne } from "next/font/google";
import UniversalNav from "./components/UniversalNav";
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

export const metadata: Metadata = {
  title: "TEWO | Technology and AI Solutions",
  description:
    "TEWO builds digital products and technology solutions powered by AI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <UniversalNav />
        {children}
      </body>
    </html>
  );
}
