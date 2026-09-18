import { live } from '../data/site'
import { useMotion } from '../motion/MotionRoot'

export function LiveStrip() {
  const { setCursor } = useMotion()
  return (
    <section id="live" className="live-strip">
      <header className="scene-kicker">
        <p>Running now</p>
        <h2>Open the actual systems.</h2>
      </header>
      <div className="live-split">
        <article>
          <div className="live-head">
            <h3>CeroHero AI</h3>
            <a
              href={live.cerohero}
              target="_blank"
              rel="noreferrer"
              onPointerEnter={() => setCursor('VIEW')}
              onPointerLeave={() => setCursor('')}
            >
              ai.cerohero.com ↗
            </a>
          </div>
          <div className="frame-wrap">
            <iframe
              title="CeroHero AI"
              src={live.cerohero}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </article>
        <article>
          <div className="live-head">
            <h3>Basera</h3>
            <a
              href={live.basera}
              target="_blank"
              rel="noreferrer"
              onPointerEnter={() => setCursor('VIEW')}
              onPointerLeave={() => setCursor('')}
            >
              getbasera.com ↗
            </a>
          </div>
          <p className="live-note">
            Embeds are blocked by the host. The live product is the link.
          </p>
          <a
            className="btn ghost"
            href={live.basera}
            target="_blank"
            rel="noreferrer"
            onPointerEnter={() => setCursor('VIEW')}
            onPointerLeave={() => setCursor('')}
          >
            Open Basera
          </a>
        </article>
      </div>
    </section>
  )
}
