import Image from "next/image";
import FoldText from "./components/FoldText";
import GradientWaves from "./components/GradientWaves";
import ArrowIcon from "./components/ArrowIcon";
import { getLocale } from "./i18n";

const copy = {
  en: {
    hero: "Digital solutions. Built with technology and AI.", explore: "Explore solutions", cycle: "Meet CycleTrack AI",
    about: "About TEWO", title: "Technology with purpose.", accent: " Built for real impact.",
    lead: "We turn complex challenges into simple, intelligent digital products.", body: "Software, data and AI — connected to move ideas forward.", principles: "TEWO principles",
    items: [["Technology", "Reliable solutions for real challenges."], ["Intelligence", "Data and AI, applied with clarity."], ["Impact", "Relevant products for people and business."]],
  },
  pt: {
    hero: "Soluções digitais. Criadas com tecnologia e IA.", explore: "Explorar soluções", cycle: "Conheça o CycleTrack AI",
    about: "Sobre a TEWO", title: "Tecnologia com propósito.", accent: " Feita para gerar impacto real.",
    lead: "Transformamos desafios complexos em produtos digitais simples e inteligentes.", body: "Software, dados e IA — conectados para impulsionar ideias.", principles: "Princípios da TEWO",
    items: [["Tecnologia", "Soluções confiáveis para desafios reais."], ["Inteligência", "Dados e IA aplicados com clareza."], ["Impacto", "Produtos relevantes para pessoas e negócios."]],
  },
  es: {
    hero: "Soluciones digitales. Creadas con tecnología e IA.", explore: "Explorar soluciones", cycle: "Conoce CycleTrack AI",
    about: "Sobre TEWO", title: "Tecnología con propósito.", accent: " Creada para generar impacto real.",
    lead: "Transformamos retos complejos en productos digitales simples e inteligentes.", body: "Software, datos e IA — conectados para impulsar ideas.", principles: "Principios de TEWO",
    items: [["Tecnología", "Soluciones fiables para retos reales."], ["Inteligencia", "Datos e IA aplicados con claridad."], ["Impacto", "Productos relevantes para personas y empresas."]],
  },
  fr: {
    hero: "Solutions numériques. Conçues avec la technologie et l’IA.", explore: "Explorer les solutions", cycle: "Découvrir CycleTrack AI",
    about: "À propos de TEWO", title: "La technologie avec un but.", accent: " Conçue pour un impact réel.",
    lead: "Nous transformons des défis complexes en produits numériques simples et intelligents.", body: "Logiciel, données et IA — réunis pour faire avancer les idées.", principles: "Principes de TEWO",
    items: [["Technologie", "Des solutions fiables pour des défis réels."], ["Intelligence", "Données et IA appliquées avec clarté."], ["Impact", "Des produits pertinents pour les personnes et les entreprises."]],
  },
} as const;

export default async function Home() {
  const text = copy[await getLocale()];

  return (
    <main className="home-shell">
      <div className="hero-waves" aria-hidden="true">
        <GradientWaves
          horizonColor="#08333e"
          waveColor="#197080"
          crestColor="#dcffff"
          speed={0.32}
          amplitude={2.4}
          waveScale={0.55}
          waveRatio={0.9}
          swell={34}
          turbulence={18}
          tilt={1.11}
          zoom={1}
          height={5.5}
          fogDepth={16}
          detail="medium"
          brightness={1.16}
          opacity={1}
          mouseInteraction
          parallaxStrength={0.35}
          grain
          grainIntensity={0.035}
        />
      </div>
      <div className="hero-scrim" aria-hidden="true" />

      <section id="home" className="hero-section">
        <div className="hero-content">

          <Image
            src="/logo-tewo.svg"
            alt="TEWO"
            width={1332}
            height={172}
            priority
            className="hero-logo"
          />

          <h1 className="home-fold-heading">
            <FoldText
              text={text.hero}
              splitBy="char"
              hinge="top"
              trigger="mount"
              duration={0.65}
              stagger={0.028}
              ease="power3.out"
              perspective={700}
              creaseShading={0.55}
              fontSize="clamp(1rem, 1.6vw, 1.2rem)"
              fontWeight={400}
              color="rgb(211 235 230 / 0.58)"
              className="home-fold-text"
            />
          </h1>

          <div className="hero-actions">
            <a className="button button--primary" href="/solutions">
              {text.explore}
              <ArrowIcon />
            </a>
            <a className="button button--secondary" href="/cycletrack">
              {text.cycle}
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-section__inner">
          <div className="about-section__intro">
            <span className="section-label">{text.about}</span>
            <h2>
              {text.title}
              <span>{text.accent}</span>
            </h2>
          </div>

          <div className="about-section__content">
            <p className="about-section__lead">
              {text.lead}
            </p>
            <p>
              {text.body}
            </p>

            <div className="about-principles" aria-label={text.principles}>
              {text.items.map(([title, description], index) => (
                <div key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
