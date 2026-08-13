const liveProducts = [
  {
    name: 'CeroHero AI',
    url: 'https://ai.cerohero.com',
    host: 'ai.cerohero.com',
    note: 'Independent production RAG + FastAPI app. Open in a new tab if the preview below is blocked. Demo sign-in is on the live page.',
  },
  {
    name: 'SeedLens · PRSTI',
    url: 'https://seedlens-dev.prstiaimind.space',
    host: 'seedlens-dev.prstiaimind.space',
    note: 'Employer product: Precision Crop Intelligence field dashboard (vanilla HTML/JS). Company site: prsti.ai.',
  },
]

const projects = [
  {
    name: 'CeroHero AI',
    live: 'https://ai.cerohero.com',
    blurb:
      'Live LLM microservice I built and operate independently. LangGraph pipeline, pgvector RAG, FastAPI, React/TS dashboard with streaming chat. Keys stay on the server; embeddings run locally.',
    tags: ['FastAPI', 'LangGraph', 'pgvector', 'React'],
  },
  {
    name: 'SeedLens · PRSTI',
    live: 'https://seedlens-dev.prstiaimind.space',
    blurb:
      'Precision Crop Intelligence field dashboard at PRSTI. I personally built FastAPI APIs, scoring/pipeline pieces, the vanilla HTML/JS UI (not React), Ask PRSTI LLM analytics, and phased Cognito/tenancy. Team product — company site at prsti.ai.',
    tags: ['FastAPI', 'PostgreSQL', 'Vanilla JS', 'LLMs'],
  },
  {
    name: 'Basera',
    blurb:
      'Multi-tenant PG / property SaaS: residents, occupancy, rent, expenses, and owner ops on web and mobile. Razorpay with webhook checks, WhatsApp Cloud API, Celery/Redis, 260+ backend tests.',
    tags: ['FastAPI', 'PostgreSQL', 'React Native', 'Razorpay'],
  },
  {
    name: 'Document automation',
    blurb:
      'At Freightify: Pandas, NumPy, regex, OpenCV, and OpenAI on PDFs and images. About 50% faster processing and 30% better extraction accuracy on high-volume files.',
    tags: ['Python', 'OpenCV', 'SQL', 'AWS ECS'],
  },
]

const skills = [
  ['Backend', 'Python · FastAPI · Django · Flask · REST · JWT · Celery · Redis'],
  ['Frontend', 'React · TypeScript · React Native · Angular · Vanilla JS'],
  ['Data & AI', 'PostgreSQL · Pandas · NumPy · LangGraph · RAG · OpenAI APIs'],
  ['Cloud', 'AWS EC2 / ECS / S3 · Docker · Nginx · CI/CD'],
]

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <span className="mark">MMR</span>
        <nav>
          <a href="#live">Live</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <img
          className="avatar"
          src="/profilepicture.jpeg"
          alt="Madan Mohan Reddy"
          width={96}
          height={96}
        />
        <p className="kicker">Hyderabad · 4.2 years · Open to full-time</p>
        <h1>
          Madan Mohan Reddy.
          <br />
          <span>Python full-stack &amp; AI engineer.</span>
        </h1>
        <p className="lede">
          I ship FastAPI services, production LLM features, and the UI the
          product needs — React when I own it, vanilla JS when that is the
          stack. Two live systems: CeroHero AI and PRSTI SeedLens.
        </p>
        <div className="cta">
          <a className="btn primary" href="https://ai.cerohero.com" target="_blank" rel="noreferrer">
            Open CeroHero
          </a>
          <a
            className="btn ghost"
            href="https://seedlens-dev.prstiaimind.space"
            target="_blank"
            rel="noreferrer"
          >
            Open SeedLens
          </a>
        </div>
      </section>

      <section id="live" className="live" aria-label="Live products">
        <h2>Live products</h2>
        <div className="live-grid">
          {liveProducts.map((p) => (
            <article key={p.url} className="live-card">
              <div className="live-head">
                <h3>{p.name}</h3>
                <a href={p.url} target="_blank" rel="noreferrer">
                  {p.host} ↗
                </a>
              </div>
              <p className="live-note">{p.note}</p>
              <div className="frame-wrap">
                <iframe
                  title={p.name}
                  src={p.url}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="work">
        <h2>Selected work</h2>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.name} className="card">
              <h3>
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    {p.name} ↗
                  </a>
                ) : (
                  p.name
                )}
              </h3>
              <p>{p.blurb}</p>
              <ul className="tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <h2>How I work</h2>
        <p>
          Backend-first, UI when the product needs it. I care about API
          contracts, auth, and not putting secrets in the browser. Independent
          work is how I prove I can own a system end to end; employer products
          are where I own specific layers on a team.
        </p>
        <dl className="skills">
          {skills.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contact" className="contact">
        <h2>Let’s talk</h2>
        <p>
          Open to Python backend, GenAI application, and Python full-stack roles
          in Hyderabad or remote.
        </p>
        <ul className="links">
          <li>
            <a href="mailto:Madanmohan46660@gmail.com">Madanmohan46660@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/madan554" target="_blank" rel="noreferrer">
              github.com/madan554
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/madan-mohan-reddy-mucheli/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="tel:+916305581858">+91 63055 81858</a>
          </li>
        </ul>
      </section>

      <footer>
        Built with React · Hosted on GitHub Pages · {new Date().getFullYear()}
      </footer>
    </div>
  )
}
