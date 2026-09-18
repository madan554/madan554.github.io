import { useCallback, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { traces } from '../data/site'
import { pointer, useFrame, useMotion } from '../motion/MotionRoot'

export function HeroTrace() {
  const { reduced, coarse, setCursor } = useMotion()
  const root = useRef<HTMLElement>(null)
  const board = useRef<HTMLDivElement>(null)
  const hot = useRef<string | null>(null)

  const paint = useCallback((scan: number) => {
    const el = root.current
    if (!el) return
    el.dataset.scan = String(scan)
    el.querySelectorAll<HTMLElement>('.run-step').forEach((step) => {
      const run = step.closest<HTMLElement>('.run')
      const mine = Number(step.dataset.i) === scan
      const focused = !hot.current || run?.dataset.id === hot.current
      step.classList.toggle('on', mine && focused)
    })
    el.querySelectorAll<HTMLElement>('.run').forEach((run) => {
      run.classList.toggle('is-hot', hot.current === run.dataset.id)
    })
  }, [])

  useGSAP(() => {
    const el = root.current
    if (!el) return
    paint(1)
    if (reduced) return
    const state = { t: 0 }
    let last = -1
    gsap.to(state, {
      t: 4,
      duration: 9.6,
      repeat: -1,
      ease: 'none',
      onUpdate: () => {
        if (hot.current) return
        const i = Math.floor(state.t) % 4
        if (i === last) return
        last = i
        paint(i)
      },
    })
  }, { dependencies: [reduced, paint] })

  const tick = useCallback(() => {
    if (!board.current || reduced || coarse) return
    const dx = (pointer.x - 0.5) * 16
    const dy = (pointer.y - 0.5) * 10
    board.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`
  }, [reduced, coarse])

  useFrame(tick)

  return (
    <aside className="hero-trace" ref={root} aria-label="Two live systems">
      <div className="trace-board" ref={board}>
        <p className="trace-kicker">
          In production <span>2 live systems</span>
        </p>
        {traces.map((run) => (
          <article
            key={run.id}
            className={`run run-${run.id}`}
            data-id={run.id}
            onPointerEnter={() => {
              hot.current = run.id
              setCursor('VIEW')
            }}
            onPointerMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const y = (e.clientY - rect.top) / rect.height
              paint(Math.min(3, Math.max(0, Math.floor(y * 4))))
            }}
            onPointerLeave={() => {
              hot.current = null
              setCursor('')
            }}
          >
            <a
              className="run-head"
              href={run.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="run-index">{run.index}</span>
              <span className="run-name">{run.name}</span>
              <span className="run-host">{run.host}</span>
            </a>
            <p className="run-figure">
              {run.figure}
              <span>{run.figureHint}</span>
            </p>
            {run.id === 'cerohero' ? (
              <div className="run-ranks" aria-hidden="true">
                {run.scores.map((score, i) => (
                  <i key={i} style={{ ['--s' as string]: `${score * 100}%` }} />
                ))}
              </div>
            ) : (
              <i className="run-meter" style={{ ['--fill' as string]: '87%' }} aria-hidden="true" />
            )}
            <p className="run-q">
              <b>q</b>
              {run.query}
            </p>
            <ol className="run-steps">
              {run.steps.map(([label, detail], i) => (
                <li key={label} className="run-step" data-i={i}>
                  <i className="tick" />
                  <code>{label}</code>
                  <em>{detail}</em>
                </li>
              ))}
            </ol>
            <p className="run-foot">{run.footnote}</p>
          </article>
        ))}
      </div>
    </aside>
  )
}
