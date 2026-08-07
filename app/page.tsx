import Image from "next/image";
import FoldText from "./components/FoldText";
import GradientWaves from "./components/GradientWaves";

export default function Home() {
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
              text="Digital solutions. Built with technology and AI."
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
              Explore solutions
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--secondary" href="/cycletrack">
              Meet CycleTrack AI
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-section__inner">
          <div className="about-section__intro">
            <span className="section-label">About TEWO</span>
            <h2>
              Technology with purpose.
              <span> Built for real impact.</span>
            </h2>
          </div>

          <div className="about-section__content">
            <p className="about-section__lead">
              We turn complex challenges into simple, intelligent digital
              products.
            </p>
            <p>
              Software, data and AI — connected to move ideas forward.
            </p>

            <div className="about-principles" aria-label="TEWO principles">
              <div>
                <span>01</span>
                <strong>Technology</strong>
                <p>Reliable solutions for real challenges.</p>
              </div>
              <div>
                <span>02</span>
                <strong>Intelligence</strong>
                <p>Data and AI, applied with clarity.</p>
              </div>
              <div>
                <span>03</span>
                <strong>Impact</strong>
                <p>Relevant products for people and business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
