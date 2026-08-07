import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "./ArrowIcon";

const links = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
];

export default function UniversalNav() {
  return (
    <header className="universal-nav">
      <nav className="universal-nav__inner" aria-label="Main navigation">
        <Link href="/" className="universal-nav__brand" aria-label="TEWO — home">
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
          <Link className="universal-nav__cta" href="/contact">
            Talk to us
            <ArrowIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
}
