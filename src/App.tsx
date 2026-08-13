const projects = [
  {
    name: 'CeroHero AI',
    live: 'https://cerohero.ai',
    blurb:
      'Live LLM microservice for sustainability recommendations. LangGraph pipeline, pgvector RAG, FastAPI, and a React dashboard with streaming chat. Keys stay on the server.',
    tags: ['FastAPI', 'LangGraph', 'pgvector', 'React'],
  },
  {
    name: 'Basera',
    blurb:
      'Multi-tenant PG / property SaaS: residents, occupancy, rent, expenses, and owner ops on web and mobile. Razorpay with webhook checks, WhatsApp Cloud API, Celery/Redis, 260+ backend tests.',
    tags: ['FastAPI', 'PostgreSQL', 'React Native', 'Razorpay'],
  },
  {
    name: 'Precision Crop Intelligence',
    blurb:
      'At PRSTI: FastAPI + Postgres product that turns satellite indices into field scores, advisories, and NL analytics for seed and rice teams. Dashboard APIs, Cognito auth (phased).',
    tags: ['FastAPI', 'PostgreSQL', 'Analytics', 'LLMs'],
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
  ['Frontend', 'React · TypeScript · React Native · Angular'],
  ['Data & AI', 'PostgreSQL · Pandas · NumPy · LangGraph · RAG · OpenAI APIs'],
  ['Cloud', 'AWS EC2 / ECS / S3 · Docker · Nginx · CI/CD'],
]

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <span className="mark">MMR</span>
        <nav>
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
          I ship FastAPI services, React UIs, and production LLM features — not
          demos. Currently building crop-intelligence systems at PRSTI. Side
          products: CeroHero AI and Basera.
        </p>
        <div className="cta">
          <a className="btn primary" href="https://cerohero.ai" target="_blank" rel="noreferrer">
            See CeroHero live
          </a>
          <a className="btn ghost" href="mailto:Madanmohan46660@gmail.com">
            Email me
          </a>
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
          work is how I prove I can own a system end to end.
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
