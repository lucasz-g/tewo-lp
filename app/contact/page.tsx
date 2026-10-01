import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "../components/ArrowIcon";
import { getLocale } from "../i18n";

const copy = {
  en: { metadata: { title: "Contact | TEWO", description: "Talk to TEWO about technology, AI and circular solutions." }, kicker: "Contact TEWO", title: "Let's build what", accent: "comes next.", lead: "Tell us about the challenge. We'll explore how technology, data and AI can move it forward.", call: "Call us", explore: "Explore solutions", status: "Open for conversations", email: "Email", phone: "Phone", office: "Office", officeValue: "São Paulo · Brazil", hours: "Hours", schedule: "Monday–Friday · 8:00–18:00", purpose: "Technology with purpose.", context: "Start with context", question: "A good conversation begins with the right question.", details: "TEWO contact details", topics: ["Product strategy", "Custom software", "Artificial intelligence", "Circular solutions", "Data & integrations"] },
  pt: { metadata: { title: "Contato | TEWO", description: "Converse com a TEWO sobre tecnologia, IA e soluções circulares." }, kicker: "Contato TEWO", title: "Vamos construir o que", accent: "vem a seguir.", lead: "Conte-nos sobre o desafio. Vamos explorar como tecnologia, dados e IA podem fazê-lo avançar.", call: "Ligue para nós", explore: "Explorar soluções", status: "Abertos a conversas", email: "E-mail", phone: "Telefone", office: "Escritório", officeValue: "São Paulo · Brasil", hours: "Horário", schedule: "Segunda–sexta · 8:00–18:00", purpose: "Tecnologia com propósito.", context: "Comece pelo contexto", question: "Uma boa conversa começa com a pergunta certa.", details: "Dados de contato da TEWO", topics: ["Estratégia de produto", "Software sob medida", "Inteligência artificial", "Soluções circulares", "Dados e integrações"] },
  es: { metadata: { title: "Contacto | TEWO", description: "Habla con TEWO sobre tecnología, IA y soluciones circulares." }, kicker: "Contacto TEWO", title: "Construyamos lo que", accent: "viene después.", lead: "Cuéntanos el reto. Exploraremos cómo la tecnología, los datos y la IA pueden impulsarlo.", call: "Llámanos", explore: "Explorar soluciones", status: "Abiertos a conversar", email: "Correo", phone: "Teléfono", office: "Oficina", officeValue: "São Paulo · Brasil", hours: "Horario", schedule: "Lunes–viernes · 8:00–18:00", purpose: "Tecnología con propósito.", context: "Empieza por el contexto", question: "Una buena conversación empieza con la pregunta adecuada.", details: "Datos de contacto de TEWO", topics: ["Estrategia de producto", "Software a medida", "Inteligencia artificial", "Soluciones circulares", "Datos e integraciones"] },
  fr: { metadata: { title: "Contact | TEWO", description: "Échangez avec TEWO sur la technologie, l’IA et les solutions circulaires." }, kicker: "Contact TEWO", title: "Construisons ce qui", accent: "vient ensuite.", lead: "Parlez-nous du défi. Nous explorerons comment la technologie, les données et l’IA peuvent le faire avancer.", call: "Appelez-nous", explore: "Explorer les solutions", status: "Ouverts à la discussion", email: "E-mail", phone: "Téléphone", office: "Bureau", officeValue: "São Paulo · Brésil", hours: "Horaires", schedule: "Lundi–vendredi · 8:00–18:00", purpose: "La technologie avec un but.", context: "Commencez par le contexte", question: "Une bonne conversation commence par la bonne question.", details: "Coordonnées de TEWO", topics: ["Stratégie produit", "Logiciel sur mesure", "Intelligence artificielle", "Solutions circulaires", "Données et intégrations"] },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  return copy[await getLocale()].metadata;
}

export default async function Contact() {
  const text = copy[await getLocale()];

  return (
    <main className="contact-page">
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-grid" aria-hidden="true" />

      <section className="contact-hero">
        <div className="contact-hero__copy">
          <span className="contact-kicker">{text.kicker}</span>
          <h1>
            {text.title}
            <span>{text.accent}</span>
          </h1>
          <p>
            {text.lead}
          </p>

          <div className="contact-actions">
            <a className="contact-primary-action" href="tel:+34610633694">
              {text.call} <ArrowIcon />
            </a>
            <Link href="/solutions" className="contact-secondary-action">
              {text.explore}
            </Link>
          </div>
        </div>

        <aside className="contact-panel" aria-label={text.details}>
          <div className="contact-panel__status">
            <span aria-hidden="true" />
            {text.status}
          </div>

          <dl>
            <div>
              <dt>{text.phone}</dt>
              <dd>
                <a href="tel:+551197317-7486">+55 11 97317-7486</a>
              </dd>
            </div>
            <div>
              <dt>{text.email}</dt>
              <dd>
                <a href="mailto:adriano.garcia@tewo.com.br">adriano.garcia@tewo.com.br</a>
              </dd>
            </div>
            <div>
              <dt>{text.office}</dt>
              <dd>{text.officeValue}</dd>
            </div>
            <div>
              <dt>{text.hours}</dt>
              <dd>{text.schedule}</dd>
            </div>
          </dl>

          <div className="contact-panel__footer">
            <span>TEWO Systems SL.</span>
            <span>{text.purpose}</span>
          </div>
        </aside>
      </section>

      <section className="contact-brief">
        <div>
          <span>{text.context}</span>
          <h2>{text.question}</h2>
        </div>

        <div className="contact-brief__topics">
          {text.topics.map((topic) => <span key={topic}>{topic}</span>)}
        </div>
      </section>
    </main>
  );
}
