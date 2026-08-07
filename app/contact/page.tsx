import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | TEWO",
  description: "Talk to TEWO about technology, AI and circular solutions.",
};

export default function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-grid" aria-hidden="true" />

      <section className="contact-hero">
        <div className="contact-hero__copy">
          <span className="contact-kicker">Contact TEWO</span>
          <h1>
            Let&apos;s build what
            <span> comes next.</span>
          </h1>
          <p>
            Tell us about the challenge. We&apos;ll explore how technology, data
            and AI can move it forward.
          </p>

          <div className="contact-actions">
            <a className="contact-primary-action" href="tel:+34610633694">
              Call us <span aria-hidden="true">↗</span>
            </a>
            <Link href="/solutions" className="contact-secondary-action">
              Explore solutions
            </Link>
          </div>
        </div>

        <aside className="contact-panel" aria-label="TEWO contact details">
          <div className="contact-panel__status">
            <span aria-hidden="true" />
            Open for conversations
          </div>

          <dl>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href="tel:+551197317-7486">+55 11 97317-7486</a>
              </dd>
            </div>
            <div>
              <dt>Office</dt>
              <dd>São Paulo · Brazil</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>Monday–Friday · 8:00–18:00</dd>
            </div>
          </dl>

          <div className="contact-panel__footer">
            <span>TEWO Systems SL.</span>
            <span>Technology with purpose.</span>
          </div>
        </aside>
      </section>

      <section className="contact-brief">
        <div>
          <span>Start with context</span>
          <h2>A good conversation begins with the right question.</h2>
        </div>

        <div className="contact-brief__topics">
          <span>Product strategy</span>
          <span>Custom software</span>
          <span>Artificial intelligence</span>
          <span>Circular solutions</span>
          <span>Data & integrations</span>
        </div>
      </section>
    </main>
  );
}
