import Image from "next/image";
import Link from "next/link";
import type { Locale } from "../i18n";
import ArrowIcon from "./ArrowIcon";

const copy = {
  en: {
    statement: "Technology, data and AI for ideas that move forward.",
    navigation: "Footer navigation",
    home: "Home",
    solutions: "Solutions",
    cycletrack: "CycleTrack",
    contact: "Contact",
    rights: "All rights reserved.",
    location: "São Paulo · Brazil",
  },
  pt: {
    statement: "Tecnologia, dados e IA para ideias que avançam.",
    navigation: "Navegação do rodapé",
    home: "Início",
    solutions: "Soluções",
    cycletrack: "CycleTrack",
    contact: "Contato",
    rights: "Todos os direitos reservados.",
    location: "São Paulo · Brasil",
  },
  es: {
    statement: "Tecnología, datos e IA para ideas que avanzan.",
    navigation: "Navegación del pie de página",
    home: "Inicio",
    solutions: "Soluciones",
    cycletrack: "CycleTrack",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
    location: "São Paulo · Brasil",
  },
  fr: {
    statement: "Technologie, données et IA pour faire avancer les idées.",
    navigation: "Navigation du pied de page",
    home: "Accueil",
    solutions: "Solutions",
    cycletrack: "CycleTrack",
    contact: "Contact",
    rights: "Tous droits réservés.",
    location: "São Paulo · Brésil",
  },
} as const;

export default function Footer({ locale }: { locale: Locale }) {
  const text = copy[locale];
  const links = [
    { label: text.home, href: "/" },
    { label: text.solutions, href: "/solutions" },
    { label: text.cycletrack, href: "/cycletrack" },
    { label: text.contact, href: "/contact" },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <Link href="/" className="site-footer__brand" aria-label={`TEWO — ${text.home}`}>
            <Image src="/logo-tewo.svg" alt="TEWO" width={1332} height={172} />
          </Link>

          <p>{text.statement}</p>

          <nav className="site-footer__links" aria-label={text.navigation}>
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
                {link.href === "/contact" ? <ArrowIcon /> : null}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} TEWO Systems SL.</span>
          <span>{text.rights}</span>
          <span>{text.location}</span>
        </div>
      </div>
    </footer>
  );
}
