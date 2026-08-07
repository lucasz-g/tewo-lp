import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import FoldText from "../components/FoldText";
import { getLocale } from "../i18n";

const copy = {
  en: {
    metadata: {
      title: "Solutions | TEWO",
      description:
        "Explore TEWO solutions for traceability, circular rewards and AI-powered insights.",
    },
    kicker: "TEWO Solutions",
    title: "Solutions",
    lead: "Technology for a traceable, intelligent circular economy.",
    explore: "Explore solutions",
    portfolio: "Our portfolio",
    portfolioTitle: "Built to connect data, value and impact.",
    ready: "Ready to explore?",
    cta: "See what circular intelligence can do for your business.",
    demo: "Request a demo",
    solutions: [
      {
        number: "01",
        name: "CycleTrack",
        description:
          "Track every package. Verify every journey. Generate ESG insights.",
        capabilities: [
          "Smart packaging traceability",
          "Digital Product Passport",
          "Reverse logistics",
          "ESG & PPWR analytics",
          "AI map intelligence",
        ],
        href: "/cycletrack",
        linkLabel: "Explore CycleTrack",
      },
      {
        number: "02",
        name: "DigitalWallet",
        description:
          "Automate incentives, payments and verified rewards across the circular ecosystem.",
        capabilities: [
          "Reward wallet",
          "Automated payouts",
          "Transaction ledger",
          "Reward marketplace",
          "Financial analytics",
        ],
        href: "/contact",
        linkLabel: "Request information",
      },
      {
        number: "03",
        name: "AI Agents",
        description:
          "Turn packaging data into actionable insights for a smarter circular economy.",
        capabilities: [
          "Consumption heatmaps",
          "Packaging demand forecasting",
          "Consumer location insight",
          "Circular economy KPIs",
          "Predictive insights",
        ],
        href: "/contact",
        linkLabel: "Request information",
      },
    ],
  },
  pt: {
    metadata: {
      title: "Soluções | TEWO",
      description:
        "Conheça as soluções TEWO para rastreabilidade, recompensas circulares e insights com IA.",
    },
    kicker: "Soluções TEWO",
    title: "Soluções",
    lead: "Tecnologia para uma economia circular rastreável e inteligente.",
    explore: "Explorar soluções",
    portfolio: "Nosso portfólio",
    portfolioTitle: "Criado para conectar dados, valor e impacto.",
    ready: "Pronto para explorar?",
    cta: "Descubra o que a inteligência circular pode fazer pelo seu negócio.",
    demo: "Solicitar demonstração",
    solutions: [
      {
        number: "01",
        name: "CycleTrack",
        description:
          "Rastreie cada embalagem. Verifique cada jornada. Gere insights ESG.",
        capabilities: [
          "Rastreabilidade inteligente de embalagens",
          "Passaporte Digital de Produto",
          "Logística reversa",
          "Análises ESG e PPWR",
          "Inteligência cartográfica com IA",
        ],
        href: "/cycletrack",
        linkLabel: "Explorar CycleTrack",
      },
      {
        number: "02",
        name: "DigitalWallet",
        description:
          "Automatize incentivos, pagamentos e recompensas verificadas no ecossistema circular.",
        capabilities: [
          "Carteira de recompensas",
          "Pagamentos automatizados",
          "Registro de transações",
          "Marketplace de recompensas",
          "Análises financeiras",
        ],
        href: "/contact",
        linkLabel: "Solicitar informações",
      },
      {
        number: "03",
        name: "Agentes de IA",
        description:
          "Transforme dados de embalagens em insights acionáveis para uma economia circular mais inteligente.",
        capabilities: [
          "Mapas de calor de consumo",
          "Previsão de demanda de embalagens",
          "Insights de localização do consumidor",
          "KPIs de economia circular",
          "Insights preditivos",
        ],
        href: "/contact",
        linkLabel: "Solicitar informações",
      },
    ],
  },
  es: {
    metadata: {
      title: "Soluciones | TEWO",
      description:
        "Descubre las soluciones TEWO de trazabilidad, recompensas circulares e inteligencia artificial.",
    },
    kicker: "Soluciones TEWO",
    title: "Soluciones",
    lead: "Tecnología para una economía circular trazable e inteligente.",
    explore: "Explorar soluciones",
    portfolio: "Nuestro portafolio",
    portfolioTitle: "Creado para conectar datos, valor e impacto.",
    ready: "¿Listo para explorar?",
    cta: "Descubre lo que la inteligencia circular puede hacer por tu empresa.",
    demo: "Solicitar una demo",
    solutions: [
      {
        number: "01",
        name: "CycleTrack",
        description:
          "Rastrea cada envase. Verifica cada recorrido. Genera insights ESG.",
        capabilities: [
          "Trazabilidad inteligente de envases",
          "Pasaporte Digital de Producto",
          "Logística inversa",
          "Análisis ESG y PPWR",
          "Inteligencia cartográfica con IA",
        ],
        href: "/cycletrack",
        linkLabel: "Explorar CycleTrack",
      },
      {
        number: "02",
        name: "DigitalWallet",
        description:
          "Automatiza incentivos, pagos y recompensas verificadas en el ecosistema circular.",
        capabilities: [
          "Cartera de recompensas",
          "Pagos automatizados",
          "Registro de transacciones",
          "Marketplace de recompensas",
          "Análisis financiero",
        ],
        href: "/contact",
        linkLabel: "Solicitar información",
      },
      {
        number: "03",
        name: "Agentes de IA",
        description:
          "Convierte datos de envases en insights accionables para una economía circular más inteligente.",
        capabilities: [
          "Mapas de calor de consumo",
          "Previsión de demanda de envases",
          "Información de ubicación del consumidor",
          "KPIs de economía circular",
          "Insights predictivos",
        ],
        href: "/contact",
        linkLabel: "Solicitar información",
      },
    ],
  },
  fr: {
    metadata: {
      title: "Solutions | TEWO",
      description:
        "Découvrez les solutions TEWO de traçabilité, de récompenses circulaires et d’intelligence artificielle.",
    },
    kicker: "Solutions TEWO",
    title: "Solutions",
    lead: "La technologie au service d’une économie circulaire traçable et intelligente.",
    explore: "Explorer les solutions",
    portfolio: "Notre portefeuille",
    portfolioTitle: "Conçu pour relier données, valeur et impact.",
    ready: "Prêt à explorer ?",
    cta: "Découvrez ce que l’intelligence circulaire peut apporter à votre entreprise.",
    demo: "Demander une démo",
    solutions: [
      {
        number: "01",
        name: "CycleTrack",
        description:
          "Suivez chaque emballage. Vérifiez chaque parcours. Générez des insights ESG.",
        capabilities: [
          "Traçabilité intelligente des emballages",
          "Passeport numérique des produits",
          "Logistique inverse",
          "Analyses ESG et PPWR",
          "Intelligence cartographique par IA",
        ],
        href: "/cycletrack",
        linkLabel: "Explorer CycleTrack",
      },
      {
        number: "02",
        name: "DigitalWallet",
        description:
          "Automatisez les incitations, les paiements et les récompenses vérifiées dans l’écosystème circulaire.",
        capabilities: [
          "Portefeuille de récompenses",
          "Paiements automatisés",
          "Registre des transactions",
          "Marketplace de récompenses",
          "Analyses financières",
        ],
        href: "/contact",
        linkLabel: "Demander des informations",
      },
      {
        number: "03",
        name: "Agents IA",
        description:
          "Transformez les données d’emballage en insights exploitables pour une économie circulaire plus intelligente.",
        capabilities: [
          "Cartes thermiques de consommation",
          "Prévision de la demande d’emballages",
          "Données de localisation des consommateurs",
          "Indicateurs de l’économie circulaire",
          "Insights prédictifs",
        ],
        href: "/contact",
        linkLabel: "Demander des informations",
      },
    ],
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  return copy[await getLocale()].metadata;
}

export default async function Solutions() {
  const text = copy[await getLocale()];

  return (
    <main className="solutions-page">
      <div className="solutions-glow" aria-hidden="true" />
      <div className="solutions-grid" aria-hidden="true" />

      <section className="solutions-hero">
        <span className="solutions-kicker">{text.kicker}</span>
        <h1 className="solutions-title">{text.title}</h1>
        <p className="solutions-lead">
          <FoldText
            text={text.lead}
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
            color="rgb(255 232 216 / 0.74)"
            className="solutions-fold-text"
          />
        </p>
        <a className="solutions-scroll" href="#portfolio">
          {text.explore}
          <ArrowIcon direction="down" />
        </a>
      </section>

      <section id="portfolio" className="solutions-portfolio">
        <div className="solutions-portfolio__heading">
          <span>{text.portfolio}</span>
          <h2>{text.portfolioTitle}</h2>
        </div>

        <div className="solutions-list">
          {text.solutions.map((solution) => (
            <article className="solution-card" key={solution.number}>
              <div className="solution-card__top">
                <span>{solution.number}</span>
                <h3>{solution.name}</h3>
              </div>

              <p className="solution-card__description">{solution.description}</p>

              <ul>
                {solution.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>

              <Link href={solution.href} className="solution-card__link">
                {solution.linkLabel}
                <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="solutions-cta">
        <span>{text.ready}</span>
        <h2>{text.cta}</h2>
        <Link href="/contact">
          {text.demo} <ArrowIcon />
        </Link>
      </section>
    </main>
  );
}
