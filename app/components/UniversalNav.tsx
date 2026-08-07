import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "./ArrowIcon";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale } from "../i18n";

const copy = {
  en: { home: "Home", solutions: "Solutions", talk: "Talk to us", navigation: "Main navigation", language: "Language" },
  pt: { home: "Início", solutions: "Soluções", talk: "Fale conosco", navigation: "Navegação principal", language: "Idioma" },
  es: { home: "Inicio", solutions: "Soluciones", talk: "Hablemos", navigation: "Navegación principal", language: "Idioma" },
  fr: { home: "Accueil", solutions: "Solutions", talk: "Parlons-nous", navigation: "Navigation principale", language: "Langue" },
} as const;

export default function UniversalNav({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const links = [
    { label: text.home, href: "/" },
    { label: text.solutions, href: "/solutions" },
  ];

  return (
    <header className="universal-nav">
      <nav className="universal-nav__inner" aria-label={text.navigation}>
        <Link href="/" className="universal-nav__brand" aria-label={`TEWO — ${text.home}`}>
          <Image
            src="/logo-tewo.svg"
            alt="TEWO"
            width={1332}
            height={172}
            priority
          />
        </Link>

        <div className="universal-nav__links">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} label={text.language} />
          <Link className="universal-nav__cta" href="/contact">
            {text.talk}
            <ArrowIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
}
