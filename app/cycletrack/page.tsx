import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import FoldText from "../components/FoldText";
import ProductGallery from "../components/ProductGallery";
import { getLocale } from "../i18n";

const cycletrackImages = [
  "/cycletrack/homepage(1).png",
  "/cycletrack/global-tracking(2).png",
  "/cycletrack/dashboards(3).png",
  "/cycletrack/cyclechat(4).png",
  "/cycletrack/digitalpassport(5).png",
  "/cycletrack/esganalyitcs(6).png",
] as const;

const cycletrackProductCode = "PKG-LOT-2026-8841-0001";

const copy = {
  en: {
    metadata: {
      title: "CycleTrack | TEWO",
      description: "Meet CycleTrack, a traceability solution by TEWO.",
    },
    lead: "Trace every cycle. Understand impact. Make better decisions.",
    exploreCycletrack: "Explore CycleTrack",
    aboutTewo: "About TEWO",
    explore: "Explore",
    opportunity: "The opportunity",
    opportunityTitle: "Packaging is now a",
    opportunityAccent: " board-level issue.",
    opportunityBody:
      "Extended Producer Responsibility, PPWR and Digital Product Passport mandates are converging with rising ESG reporting pressure.",
    opportunityIdentity:
      "Each bottle receives a unique digital identity — the foundation of its Digital Product Passport.",
    opportunityProof: "Brands need proof, not estimates.",
    askInfo: "Ask for information",
    traceAria: "Unique product identity connected to the traceability network",
    identityCodeLabel: "Unique product code",
    nodes: ["Brand", "Consumer", "Recovery", "Data"],
    vision: "Our vision",
    visionTitle: "Premium brands deserve more than",
    visionAccent: " recycling.",
    visionBody:
      "CycleTrack links a unique product code to each bottle’s digital identity, creating a post-consumer traceability network that connects European manufacturers with Latin American communities and recycling partners.",
    visionClosing: "One connected journey. Verifiable circular economy outcomes.",
    visionNetworkAria:
      "Bottle connected to suppliers, distributors, points of sale, collectors and recyclers",
    visionNodes: ["Suppliers", "Distributors", "Points of sale", "Collectors", "Recyclers"],
    product: "The product",
    productTitle: "See CycleTrack in action.",
    productBody:
      "From global tracking to ESG analytics, every screen turns circularity data into clear, verifiable decisions.",
    productScreens: [
      "CycleTrack home screen",
      "CycleTrack global tracking screen",
      "CycleTrack dashboards screen",
      "CycleChat assistant screen",
      "CycleTrack digital passport screen",
      "CycleTrack ESG analytics screen",
    ],
    help: "Where we help",
    valueTitle: "How does CycleTrack create value?",
    valueAreas: [
      {
        number: "01",
        title: "Financial value",
        summary: "Turn recovery into measurable business value.",
        points: [
          "Protect brand equity with a lifecycle aligned to premium positioning.",
          "Create new value streams from tracked packaging recovery.",
          "Improve operational efficiency through data-driven decisions.",
          "Strengthen loyalty, investor confidence and market differentiation.",
        ],
      },
      {
        number: "02",
        title: "Compliance",
        summary: "Move from reactive reporting to informed action.",
        points: [
          "Monitor PPWR, EPR schemes and evolving sustainability requirements.",
          "Identify packaging risks before they impact the business.",
          "Provide traceability across the lifecycle, from production to recovery.",
          "Support environmental, financial and regulatory decisions with evidence.",
        ],
      },
      {
        number: "03",
        title: "Social impact",
        summary: "Connect every participant in the circular ecosystem.",
        points: [
          "Transform premium packaging from waste into a circular asset.",
          "Reconnect consumers with the brand story beyond consumption.",
          "Connect brands, consumers, collectors and recyclers.",
          "Support local circular economies through visibility and incentives.",
        ],
      },
    ],
    closingTitle: "The future of premium packaging is circular.",
    closingBody: "Trace the journey. Prove the impact. Build lasting value.",
    demo: "Request a demo",
  },
  pt: {
    metadata: {
      title: "CycleTrack | TEWO",
      description: "Conheça o CycleTrack, a solução de rastreabilidade da TEWO.",
    },
    lead: "Rastreie cada ciclo. Entenda o impacto. Tome decisões melhores.",
    exploreCycletrack: "Explorar CycleTrack",
    aboutTewo: "Sobre a TEWO",
    explore: "Explore",
    opportunity: "A oportunidade",
    opportunityTitle: "As embalagens agora são um",
    opportunityAccent: " tema estratégico.",
    opportunityBody:
      "Responsabilidade Estendida do Produtor, PPWR e Passaporte Digital de Produto convergem com a crescente pressão por relatórios ESG.",
    opportunityIdentity:
      "Cada garrafa recebe uma identidade digital única — a base do seu Passaporte Digital do Produto.",
    opportunityProof: "As marcas precisam de evidências, não estimativas.",
    askInfo: "Solicitar informações",
    traceAria: "Identidade única do produto conectada à rede de rastreabilidade",
    identityCodeLabel: "Código único do produto",
    nodes: ["Marca", "Consumidor", "Recuperação", "Dados"],
    vision: "Nossa visão",
    visionTitle: "Marcas premium merecem mais do que",
    visionAccent: " reciclagem.",
    visionBody:
      "O CycleTrack vincula um código único de produto à identidade digital de cada garrafa, criando uma rede de rastreabilidade pós-consumo que conecta fabricantes europeus a comunidades latino-americanas e parceiros de reciclagem.",
    visionClosing: "Uma jornada conectada. Resultados verificáveis para a economia circular.",
    visionNetworkAria:
      "Garrafa conectada a fornecedores, distribuidores, pontos de venda, coletores e recicladores",
    visionNodes: ["Fornecedores", "Distribuidores", "Pontos de venda", "Coletores", "Recicladores"],
    product: "O produto",
    productTitle: "Veja o CycleTrack em ação.",
    productBody:
      "Do rastreamento global à análise ESG, cada tela transforma dados de circularidade em decisões claras e verificáveis.",
    productScreens: [
      "Tela inicial do CycleTrack",
      "Tela de rastreamento global do CycleTrack",
      "Tela de dashboards do CycleTrack",
      "Tela do assistente CycleChat",
      "Tela do passaporte digital do CycleTrack",
      "Tela de análise ESG do CycleTrack",
    ],
    help: "Onde ajudamos",
    valueTitle: "Como o CycleTrack gera valor?",
    valueAreas: [
      {
        number: "01",
        title: "Valor financeiro",
        summary: "Transforme a recuperação em valor de negócio mensurável.",
        points: [
          "Proteja o valor da marca com um ciclo de vida alinhado ao posicionamento premium.",
          "Crie novas fontes de valor com a recuperação rastreada de embalagens.",
          "Melhore a eficiência operacional com decisões orientadas por dados.",
          "Fortaleça a lealdade, a confiança de investidores e a diferenciação no mercado.",
        ],
      },
      {
        number: "02",
        title: "Conformidade",
        summary: "Passe de relatórios reativos para ações bem informadas.",
        points: [
          "Monitore PPWR, sistemas EPR e requisitos de sustentabilidade em evolução.",
          "Identifique riscos de embalagem antes que afetem o negócio.",
          "Ofereça rastreabilidade em todo o ciclo, da produção à recuperação.",
          "Sustente decisões ambientais, financeiras e regulatórias com evidências.",
        ],
      },
      {
        number: "03",
        title: "Impacto social",
        summary: "Conecte cada participante do ecossistema circular.",
        points: [
          "Transforme embalagens premium de resíduo em ativo circular.",
          "Reconecte consumidores à história da marca após o consumo.",
          "Conecte marcas, consumidores, coletores e recicladores.",
          "Apoie economias circulares locais com visibilidade e incentivos.",
        ],
      },
    ],
    closingTitle: "O futuro das embalagens premium é circular.",
    closingBody: "Rastreie a jornada. Comprove o impacto. Construa valor duradouro.",
    demo: "Solicitar demonstração",
  },
  es: {
    metadata: {
      title: "CycleTrack | TEWO",
      description: "Conoce CycleTrack, la solución de trazabilidad de TEWO.",
    },
    lead: "Rastrea cada ciclo. Comprende el impacto. Toma mejores decisiones.",
    exploreCycletrack: "Explorar CycleTrack",
    aboutTewo: "Sobre TEWO",
    explore: "Explorar",
    opportunity: "La oportunidad",
    opportunityTitle: "Los envases son ahora un",
    opportunityAccent: " asunto estratégico.",
    opportunityBody:
      "La Responsabilidad Ampliada del Productor, el PPWR y el Pasaporte Digital de Producto convergen con la creciente presión de los informes ESG.",
    opportunityIdentity:
      "Cada botella recibe una identidad digital única — la base de su Pasaporte Digital de Producto.",
    opportunityProof: "Las marcas necesitan pruebas, no estimaciones.",
    askInfo: "Solicitar información",
    traceAria: "Identidad única del producto conectada a la red de trazabilidad",
    identityCodeLabel: "Código único del producto",
    nodes: ["Marca", "Consumidor", "Recuperación", "Datos"],
    vision: "Nuestra visión",
    visionTitle: "Las marcas premium merecen más que",
    visionAccent: " reciclaje.",
    visionBody:
      "CycleTrack vincula un código único de producto con la identidad digital de cada botella y crea una red de trazabilidad posconsumo que conecta a fabricantes europeos, comunidades latinoamericanas y socios de reciclaje.",
    visionClosing: "Un recorrido conectado. Resultados verificables de economía circular.",
    visionNetworkAria:
      "Botella conectada con proveedores, distribuidores, puntos de venta, recolectores y recicladores",
    visionNodes: ["Proveedores", "Distribuidores", "Puntos de venta", "Recolectores", "Recicladores"],
    product: "El producto",
    productTitle: "Descubre CycleTrack en acción.",
    productBody:
      "Del seguimiento global al análisis ESG, cada pantalla convierte los datos de circularidad en decisiones claras y verificables.",
    productScreens: [
      "Pantalla de inicio de CycleTrack",
      "Pantalla de seguimiento global de CycleTrack",
      "Pantalla de paneles de CycleTrack",
      "Pantalla del asistente CycleChat",
      "Pantalla del pasaporte digital de CycleTrack",
      "Pantalla de análisis ESG de CycleTrack",
    ],
    help: "Dónde ayudamos",
    valueTitle: "¿Cómo genera valor CycleTrack?",
    valueAreas: [
      {
        number: "01",
        title: "Valor financiero",
        summary: "Convierte la recuperación en valor empresarial medible.",
        points: [
          "Protege el valor de marca con un ciclo de vida alineado al posicionamiento premium.",
          "Crea nuevas fuentes de valor mediante la recuperación trazada de envases.",
          "Mejora la eficiencia operativa con decisiones basadas en datos.",
          "Refuerza la fidelidad, la confianza del inversor y la diferenciación en el mercado.",
        ],
      },
      {
        number: "02",
        title: "Cumplimiento",
        summary: "Pasa de informes reactivos a acciones informadas.",
        points: [
          "Supervisa el PPWR, los sistemas EPR y los requisitos de sostenibilidad.",
          "Identifica riesgos de envases antes de que afecten al negocio.",
          "Aporta trazabilidad durante todo el ciclo, desde la producción hasta la recuperación.",
          "Respalda decisiones ambientales, financieras y regulatorias con pruebas.",
        ],
      },
      {
        number: "03",
        title: "Impacto social",
        summary: "Conecta a cada participante del ecosistema circular.",
        points: [
          "Convierte envases premium de residuos en activos circulares.",
          "Reconecta a los consumidores con la historia de la marca tras el consumo.",
          "Conecta marcas, consumidores, recolectores y recicladores.",
          "Apoya economías circulares locales mediante visibilidad e incentivos.",
        ],
      },
    ],
    closingTitle: "El futuro de los envases premium es circular.",
    closingBody: "Rastrea el recorrido. Demuestra el impacto. Construye valor duradero.",
    demo: "Solicitar una demo",
  },
  fr: {
    metadata: {
      title: "CycleTrack | TEWO",
      description: "Découvrez CycleTrack, la solution de traçabilité de TEWO.",
    },
    lead: "Suivez chaque cycle. Mesurez l’impact. Prenez de meilleures décisions.",
    exploreCycletrack: "Explorer CycleTrack",
    aboutTewo: "À propos de TEWO",
    explore: "Explorer",
    opportunity: "L’opportunité",
    opportunityTitle: "L’emballage est désormais un",
    opportunityAccent: " enjeu stratégique.",
    opportunityBody:
      "La responsabilité élargie du producteur, le PPWR et le passeport numérique des produits convergent avec la pression croissante du reporting ESG.",
    opportunityIdentity:
      "Chaque bouteille reçoit une identité numérique unique — la base de son passeport numérique de produit.",
    opportunityProof: "Les marques ont besoin de preuves, pas d’estimations.",
    askInfo: "Demander des informations",
    traceAria: "Identité unique du produit reliée au réseau de traçabilité",
    identityCodeLabel: "Code produit unique",
    nodes: ["Marque", "Consommateur", "Collecte", "Données"],
    vision: "Notre vision",
    visionTitle: "Les marques premium méritent mieux que",
    visionAccent: " le recyclage.",
    visionBody:
      "CycleTrack associe un code produit unique à l’identité numérique de chaque bouteille et crée un réseau de traçabilité post-consommation reliant les fabricants européens, les communautés latino-américaines et les partenaires du recyclage.",
    visionClosing: "Un parcours connecté. Des résultats vérifiables pour l’économie circulaire.",
    visionNetworkAria:
      "Bouteille reliée aux fournisseurs, distributeurs, points de vente, collecteurs et recycleurs",
    visionNodes: ["Fournisseurs", "Distributeurs", "Points de vente", "Collecteurs", "Recycleurs"],
    product: "Le produit",
    productTitle: "Découvrez CycleTrack en action.",
    productBody:
      "Du suivi mondial à l’analyse ESG, chaque écran transforme les données de circularité en décisions claires et vérifiables.",
    productScreens: [
      "Écran d’accueil de CycleTrack",
      "Écran de suivi mondial de CycleTrack",
      "Écran des tableaux de bord de CycleTrack",
      "Écran de l’assistant CycleChat",
      "Écran du passeport numérique de CycleTrack",
      "Écran d’analyse ESG de CycleTrack",
    ],
    help: "Notre contribution",
    valueTitle: "Comment CycleTrack crée-t-il de la valeur ?",
    valueAreas: [
      {
        number: "01",
        title: "Valeur financière",
        summary: "Transformez la collecte en valeur commerciale mesurable.",
        points: [
          "Protégez la valeur de la marque grâce à un cycle de vie cohérent avec son positionnement premium.",
          "Créez de nouvelles sources de valeur grâce au suivi de la récupération des emballages.",
          "Améliorez l’efficacité opérationnelle avec des décisions guidées par les données.",
          "Renforcez la fidélité, la confiance des investisseurs et la différenciation sur le marché.",
        ],
      },
      {
        number: "02",
        title: "Conformité",
        summary: "Passez d’un reporting réactif à une action éclairée.",
        points: [
          "Suivez le PPWR, les dispositifs REP et l’évolution des exigences de durabilité.",
          "Identifiez les risques liés aux emballages avant qu’ils n’affectent l’activité.",
          "Assurez la traçabilité sur tout le cycle, de la production à la récupération.",
          "Appuyez les décisions environnementales, financières et réglementaires sur des preuves.",
        ],
      },
      {
        number: "03",
        title: "Impact social",
        summary: "Reliez chaque acteur de l’écosystème circulaire.",
        points: [
          "Transformez les emballages premium de déchets en actifs circulaires.",
          "Reconnectez les consommateurs à l’histoire de la marque après l’usage.",
          "Reliez marques, consommateurs, collecteurs et recycleurs.",
          "Soutenez les économies circulaires locales par la visibilité et les incitations.",
        ],
      },
    ],
    closingTitle: "L’avenir des emballages premium est circulaire.",
    closingBody: "Suivez le parcours. Prouvez l’impact. Créez une valeur durable.",
    demo: "Demander une démo",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  return copy[await getLocale()].metadata;
}

export default async function Cycletrack() {
  const text = copy[await getLocale()];
  const galleryItems = text.productScreens.map((label, index) => ({
    image: cycletrackImages[index],
    label,
  }));

  return (
    <main className="cycletrack-page">
      <div className="cycletrack-ambient" aria-hidden="true" />
      <div className="cycletrack-grid" aria-hidden="true" />

      <section className="cycletrack-hero">
        <h1 className="cycletrack-shiny-text">CycleTrack</h1>

        <p className="cycletrack-lead">
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
            color="rgb(220 242 237 / 0.7)"
            className="cycletrack-fold-text"
          />
        </p>

        <div className="cycletrack-actions">
          <a className="cycletrack-button cycletrack-button--primary" href="#opportunity">
            {text.exploreCycletrack}
            <ArrowIcon direction="down-right" />
          </a>
          <Link className="cycletrack-button cycletrack-button--ghost" href="/">
            {text.aboutTewo}
          </Link>
        </div>

        <div className="cycletrack-orbit" aria-hidden="true">
          <span className="cycletrack-orbit__core" />
          <span className="cycletrack-orbit__ring cycletrack-orbit__ring--one" />
          <span className="cycletrack-orbit__ring cycletrack-orbit__ring--two" />
        </div>
      </section>

      <div className="cycletrack-scroll-hint" aria-hidden="true">
        <span />
        {text.explore}
      </div>

      <section id="opportunity" className="cycletrack-opportunity">
        <div className="cycletrack-section-grid">
          <div className="cycletrack-section-copy">
            <span className="cycletrack-section-label">{text.opportunity}</span>
            <h2>
              {text.opportunityTitle}
              <span>{text.opportunityAccent}</span>
            </h2>
            <p>{text.opportunityBody}</p>
            <strong>{text.opportunityProof}</strong>
            <Link href="/contact" className="cycletrack-text-link">
              {text.askInfo} <ArrowIcon />
            </Link>
          </div>

          <div className="trace-visual-column">
            <div className="trace-visual" role="img" aria-label={text.traceAria}>
              <div className="trace-visual__package" aria-hidden="true">
                <span>{text.identityCodeLabel}</span>
                {/* <strong>{cycletrackProductCode}</strong> */}

                <svg className="trace-visual__bottle" viewBox="0 0 90 160">
                  <path d="M34 8h22v25c0 7 3 12 10 20 8 9 12 21 12 34v50c0 9-7 16-16 16H28c-9 0-16-7-16-16V87c0-13 4-25 12-34 7-8 10-13 10-20V8Z" />
                  <path d="M34 17h22M27 59c10 6 26 8 38 0" />
                  <circle cx="45" cy="96" r="19" />
                  <path d="M35 96h20M45 86v20" />
                </svg>

                <span className="trace-visual__passport-mark">DPP / 0001</span>
              </div>
              <span className="trace-node trace-node--one">{text.nodes[0]}</span>
              <span className="trace-node trace-node--two">{text.nodes[1]}</span>
              <span className="trace-node trace-node--three">{text.nodes[2]}</span>
              <span className="trace-node trace-node--four">{text.nodes[3]}</span>
              <div className="trace-visual__orbit" aria-hidden="true" />
            </div>

            <strong className="cycletrack-identity-statement">
              {text.opportunityIdentity}
            </strong>
          </div>
        </div>
      </section>

      <section className="cycletrack-vision">
        <div className="cycletrack-section-grid cycletrack-section-grid--vision">
          <div
            className="cycletrack-vision-network"
            role="img"
            aria-label={text.visionNetworkAria}
          >
            <svg
              className="cycletrack-vision-network__diagram"
              viewBox="0 0 560 560"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="vision-network-glow">
                  <stop offset="0" stopColor="#66d5bb" stopOpacity="0.2" />
                  <stop offset="1" stopColor="#66d5bb" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="vision-network-line" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#9ee3d3" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#5cbda7" stopOpacity="0.12" />
                </linearGradient>
              </defs>

              <circle className="cycletrack-vision-network__glow" cx="280" cy="280" r="245" />
              <circle className="cycletrack-vision-network__ring" cx="280" cy="280" r="218" />
              <circle className="cycletrack-vision-network__ring" cx="280" cy="280" r="154" />
              <circle className="cycletrack-vision-network__ring" cx="280" cy="280" r="91" />

              <path
                className="cycletrack-vision-network__route"
                d="M118 94L443 96L507 281L399 474L117 456Z"
              />
              <path className="cycletrack-vision-network__link" d="M116 94L260 254" />
              <path className="cycletrack-vision-network__link" d="M445 96L301 254" />
              <path className="cycletrack-vision-network__link" d="M507 281L317 281" />
              <path className="cycletrack-vision-network__link" d="M399 474L301 313" />
              <path className="cycletrack-vision-network__link" d="M117 456L259 313" />
              <circle className="cycletrack-vision-network__scan" cx="280" cy="280" r="34" />
            </svg>

            <div className="cycletrack-vision-network__bottle-frame" aria-hidden="true">
              <Image
                className="cycletrack-vision-network__bottle"
                src="/cycletrack/vision-bottle.png"
                alt=""
                fill
                sizes="(max-width: 900px) 55vw, 16rem"
              />
            </div>

            {text.visionNodes.map((node, index) => (
              <span
                className={`cycletrack-vision-network__node cycletrack-vision-network__node--${index + 1}`}
                key={node}
              >
                {node}
              </span>
            ))}
          </div>

          <div className="cycletrack-section-copy">
            <span className="cycletrack-section-label">{text.vision}</span>
            <h2>
              {text.visionTitle}
              <span>{text.visionAccent}</span>
            </h2>
            <p>{text.visionBody}</p>
            <p>{text.visionClosing}</p>
          </div>
        </div>
      </section>

      <section className="cycletrack-product">
        <div className="cycletrack-product__heading">
          <span className="cycletrack-section-label">{text.product}</span>
          <h2>{text.productTitle}</h2>
          <p>{text.productBody}</p>
        </div>

        <div className="cycletrack-product__carousel">
          <ProductGallery items={galleryItems} />
        </div>
      </section>

      <section className="cycletrack-value">
        <div className="cycletrack-value__heading">
          <span className="cycletrack-section-label">{text.help}</span>
          <h2>{text.valueTitle}</h2>
        </div>

        <div className="cycletrack-value__cards">
          {text.valueAreas.map((area) => (
            <article className="cycletrack-value-card" key={area.number}>
              <div className="cycletrack-value-card__header">
                <span>{area.number}</span>
                <h3>{area.title}</h3>
              </div>
              <p>{area.summary}</p>
              <ul>
                {area.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cycletrack-closing">
        <span>CycleTrack</span>
        <h2>{text.closingTitle}</h2>
        <p>{text.closingBody}</p>
        <Link href="/contact">
          {text.demo} <ArrowIcon />
        </Link>
      </section>
    </main>
  );
}
