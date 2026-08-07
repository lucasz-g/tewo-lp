import type { Metadata } from "next";
import Link from "next/link";
import FoldText from "../components/FoldText";
import ArrowIcon from "../components/ArrowIcon";

const valueAreas = [
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
];

export const metadata: Metadata = {
  title: "CycleTrack AI | TEWO",
  description: "Meet CycleTrack AI, a solution by TEWO.",
};

const Cycletrack = () => {
  return (
    <main className="cycletrack-page">
      <div className="cycletrack-ambient" aria-hidden="true" />
      <div className="cycletrack-grid" aria-hidden="true" />

      <section className="cycletrack-hero">

        <h1 className="cycletrack-shiny-text">CycleTrack AI</h1>

        <p className="cycletrack-lead">
          <FoldText
            text="Trace every cycle. Understand impact. Make better decisions."
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
            Explore CycleTrack
            <ArrowIcon direction="down-right" />
          </a>
          <Link className="cycletrack-button cycletrack-button--ghost" href="/">
            About TEWO
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
        Explore
      </div>

      <section id="opportunity" className="cycletrack-opportunity">
        <div className="cycletrack-section-grid">
          <div className="cycletrack-section-copy">
            <span className="cycletrack-section-label">The opportunity</span>
            <h2>
              Packaging is now a
              <span> board-level issue.</span>
            </h2>
            <p>
              Extended Producer Responsibility, PPWR and Digital Product
              Passport mandates are converging with rising ESG reporting
              pressure.
            </p>
            <strong>Brands need proof, not estimates.</strong>
            <Link href="/contact" className="cycletrack-text-link">
              Ask for information <ArrowIcon />
            </Link>
          </div>

          <div className="trace-visual" aria-label="Package traceability network illustration">
            <div className="trace-visual__package">
              <span>01</span>
              <strong>PACK / 2049</strong>
              <div className="trace-visual__code" aria-hidden="true" />
            </div>
            <span className="trace-node trace-node--one">Brand</span>
            <span className="trace-node trace-node--two">Consumer</span>
            <span className="trace-node trace-node--three">Recovery</span>
            <span className="trace-node trace-node--four">Data</span>
            <div className="trace-visual__orbit" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="cycletrack-vision">
        <div className="cycletrack-section-grid cycletrack-section-grid--vision">
          <div className="cycletrack-vision-mark" aria-hidden="true">
            <span>C</span>
            <div />
          </div>

          <div className="cycletrack-section-copy">
            <span className="cycletrack-section-label">Our vision</span>
            <h2>
              Premium brands deserve more than
              <span> recycling.</span>
            </h2>
            <p>
              CycleTrack turns an ordinary QR code into a post-consumer
              traceability network — connecting European manufacturers with
              Latin American communities and recycling partners.
            </p>
            <p>
              One connected journey. Verifiable circular economy outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="cycletrack-value">
        <div className="cycletrack-value__heading">
          <span className="cycletrack-section-label">Where we help</span>
          <h2>How does CycleTrack create value?</h2>
        </div>

        <div className="cycletrack-value__cards">
          {valueAreas.map((area) => (
            <article className="cycletrack-value-card" key={area.title}>
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
        <h2>The future of premium packaging is circular.</h2>
        <p>Trace the journey. Prove the impact. Build lasting value.</p>
        <Link href="/contact">
          Request a demo <ArrowIcon />
        </Link>
      </section>
    </main>
  );
};

export default Cycletrack;
