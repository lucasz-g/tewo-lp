import type { Metadata } from "next";
import Link from "next/link";
import FoldText from "../components/FoldText";

const solutions = [
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
];

export const metadata: Metadata = {
  title: "Solutions | TEWO",
  description:
    "Explore TEWO solutions for traceability, circular rewards and AI-powered insights.",
};

export default function Solutions() {
  return (
    <main className="solutions-page">
      <div className="solutions-glow" aria-hidden="true" />
      <div className="solutions-grid" aria-hidden="true" />

      <section className="solutions-hero">
        <span className="solutions-kicker">TEWO Solutions</span>
        <h1 className="solutions-title">Solutions</h1>
        <p className="solutions-lead">
          <FoldText
            text="Technology for a traceable, intelligent circular economy."
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
          Explore solutions
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section id="portfolio" className="solutions-portfolio">
        <div className="solutions-portfolio__heading">
          <span>Our portfolio</span>
          <h2>Built to connect data, value and impact.</h2>
        </div>

        <div className="solutions-list">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.name}>
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
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="solutions-cta">
        <span>Ready to explore?</span>
        <h2>See what circular intelligence can do for your business.</h2>
        <Link href="/contact">Request a demo ↗</Link>
      </section>
    </main>
  );
}
