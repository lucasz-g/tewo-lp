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
    portfolio: "Our flagship product",
    portfolioTitle: "Three layers, one integrated operation.",
    intro:
      "CycleTrack gives every package a digital identity and follows it through the whole chain. Around that core, DigitalWallet turns recovery into rewards, CycleChat answers PPWR and data questions in plain language, and the Command Center turns everything into decisions.",
    exploreProduct: "Explore CycleTrack",
    ready: "Ready to explore?",
    cta: "See what circular intelligence can do for your business.",
    demo: "Request a demo",
    solutions: [
      {
        number: "01",
        layer: "Identity",
        name: "Digital Passport",
        description:
          "Track every package. Verify every journey. Generate ESG insights.",
        capabilities: [
          "Smart packaging traceability",
          "Unique product code",
          "Reverse logistics",
          "CycleChat — PPWR agent and data queries",
          "ESG & PPWR analytics",
          "AI map intelligence",
        ],
      },
      {
        number: "02",
        layer: "Incentives",
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
      },
      {
        number: "03",
        layer: "Intelligence",
        name: "Command Center",
        description:
          "Dashboards, AI and alerts that turn packaging data into decisions.",
        capabilities: [
          "Operational dashboards",
          "Consumption heatmaps",
          "Smart alerts",
          "Packaging demand forecasting",
          "Circular economy KPIs",
          "Predictive insights",
        ],
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
    portfolio: "Nosso carro-chefe",
    portfolioTitle: "Três camadas, uma operação integrada.",
    intro:
      "O CycleTrack dá a cada embalagem uma identidade digital e a acompanha por toda a cadeia. Em torno desse núcleo, a DigitalWallet transforma o retorno em recompensa, o CycleChat responde perguntas de PPWR e dados em linguagem natural, e o Command Center transforma tudo isso em decisões.",
    exploreProduct: "Explorar o CycleTrack",
    ready: "Pronto para explorar?",
    cta: "Descubra o que a inteligência circular pode fazer pelo seu negócio.",
    demo: "Solicitar demonstração",
    solutions: [
      {
        number: "01",
        layer: "Identidade",
        name: "Digital Passport",
        description:
          "Rastreie cada embalagem. Verifique cada jornada. Gere insights ESG.",
        capabilities: [
          "Rastreabilidade inteligente de embalagens",
          "Código único de produto",
          "Logística reversa",
          "CycleChat — agente PPWR e consulta de dados",
          "Análises ESG e PPWR",
          "Inteligência cartográfica com IA",
        ],
      },
      {
        number: "02",
        layer: "Incentivos",
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
      },
      {
        number: "03",
        layer: "Inteligência",
        name: "Command Center",
        description:
          "Dashboards, IA e alertas que transformam dados de embalagens em decisões.",
        capabilities: [
          "Dashboards operacionais",
          "Mapas de calor de consumo",
          "Alertas inteligentes",
          "Previsão de demanda de embalagens",
          "KPIs de economia circular",
          "Insights preditivos",
        ],
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
    portfolio: "Nuestro producto estrella",
    portfolioTitle: "Tres capas, una sola operación integrada.",
    intro:
      "CycleTrack da a cada envase una identidad digital y lo acompaña por toda la cadena. Alrededor de ese núcleo, DigitalWallet convierte la recuperación en recompensa, CycleChat responde preguntas de PPWR y datos en lenguaje natural, y el Command Center lo convierte todo en decisiones.",
    exploreProduct: "Explorar CycleTrack",
    ready: "¿Listo para explorar?",
    cta: "Descubre lo que la inteligencia circular puede hacer por tu empresa.",
    demo: "Solicitar una demo",
    solutions: [
      {
        number: "01",
        layer: "Identidad",
        name: "Digital Passport",
        description:
          "Rastrea cada envase. Verifica cada recorrido. Genera insights ESG.",
        capabilities: [
          "Trazabilidad inteligente de envases",
          "Código único de producto",
          "Logística inversa",
          "CycleChat — agente PPWR y consulta de datos",
          "Análisis ESG y PPWR",
          "Inteligencia cartográfica con IA",
        ],
      },
      {
        number: "02",
        layer: "Incentivos",
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
      },
      {
        number: "03",
        layer: "Inteligencia",
        name: "Command Center",
        description:
          "Dashboards, IA y alertas que convierten los datos de envases en decisiones.",
        capabilities: [
          "Dashboards operativos",
          "Mapas de calor de consumo",
          "Alertas inteligentes",
          "Previsión de demanda de envases",
          "KPIs de economía circular",
          "Insights predictivos",
        ],
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
    portfolio: "Notre produit phare",
    portfolioTitle: "Trois couches, une seule opération intégrée.",
    intro:
      "CycleTrack donne à chaque emballage une identité numérique et le suit tout au long de la chaîne. Autour de ce noyau, DigitalWallet transforme la récupération en récompense, CycleChat répond aux questions PPWR et données en langage naturel, et le Command Center transforme le tout en décisions.",
    exploreProduct: "Explorer CycleTrack",
    ready: "Prêt à explorer ?",
    cta: "Découvrez ce que l’intelligence circulaire peut apporter à votre entreprise.",
    demo: "Demander une démo",
    solutions: [
      {
        number: "01",
        layer: "Identité",
        name: "Digital Passport",
        description:
          "Suivez chaque emballage. Vérifiez chaque parcours. Générez des insights ESG.",
        capabilities: [
          "Traçabilité intelligente des emballages",
          "Code produit unique",
          "Logistique inverse",
          "CycleChat — agent PPWR et requêtes de données",
          "Analyses ESG et PPWR",
          "Intelligence cartographique par IA",
        ],
      },
      {
        number: "02",
        layer: "Incitations",
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
      },
      {
        number: "03",
        layer: "Intelligence",
        name: "Command Center",
        description:
          "Tableaux de bord, IA et alertes qui transforment les données d’emballage en décisions.",
        capabilities: [
          "Tableaux de bord opérationnels",
          "Cartes thermiques de consommation",
          "Alertes intelligentes",
          "Prévision de la demande d’emballages",
          "Indicateurs de l’économie circulaire",
          "Insights prédictifs",
        ],
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
          <h2>CycleTrack</h2>
          <p className="solutions-portfolio__subtitle">{text.portfolioTitle}</p>
        </div>

        <div className="solutions-list">
          {text.solutions.map((solution) => (
            <article className="solution-card" key={solution.number}>
              <div className="solution-card__top">
                <span>{solution.number}</span>
                <h3>{solution.name}</h3>
              </div>

              <span className="solution-card__layer">{solution.layer}</span>

              <p className="solution-card__description">{solution.description}</p>

              <ul>
                {solution.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="solutions-explore">
          <Link href="/cycletrack" className="explore-button">
            <span>{text.exploreProduct}</span>
            <ArrowIcon />
          </Link>
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
