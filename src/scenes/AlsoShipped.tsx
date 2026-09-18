import { alsoShipped, skills } from '../data/site'

export function AlsoShipped() {
  return (
    <section className="also" id="about">
      <header className="scene-kicker">
        <p>Also shipped</p>
        <h2>Employer work that still counts.</h2>
      </header>
      <div className="also-grid">
        {alsoShipped.map((p) => (
          <article key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.blurb}</p>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <dl className="skills">
        {skills.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
