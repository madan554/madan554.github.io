import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { worlds } from '../data/site'
import { useMotion } from '../motion/MotionRoot'
import { BaseraObject, CeroHeroObject } from './ProductObjects'

gsap.registerPlugin(ScrollTrigger)

export function ProjectWorld() {
  const { reduced, setProject, setCursor } = useMotion()

  useGSAP(() => {
    const root = document.querySelector('.project-world')
    if (!root) return

    const mobile = window.matchMedia('(max-width: 959px)').matches
    if (reduced || mobile) {
      setProject('basera')
      return
    }

    let last: 'basera' | 'cerohero' = 'basera'
    setProject('basera')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: '+=240%',
        pin: true,
        scrub: 0.55,
        onUpdate: (self) => {
          const next = self.progress < 0.48 ? 'basera' : 'cerohero'
          if (next !== last) {
            last = next
            setProject(next)
          }
        },
      },
    })

    tl.fromTo(
      '.world-basera .product-object',
      { scale: 0.72, rotateX: 12, y: 80, filter: 'blur(8px)' },
      { scale: 1, rotateX: 0, y: 0, filter: 'blur(0px)', duration: 1.2 },
      0,
    )
      .fromTo('.world-basera .world-copy', { x: 48, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, 0.15)
      .to('.world-basera', { xPercent: -110, opacity: 0.15, duration: 1 }, 1.4)
      .fromTo(
        '.world-cerohero',
        { xPercent: 40, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1 },
        1.45,
      )
      .fromTo(
        '.world-cerohero .product-object',
        { scale: 0.78, rotateY: -14, filter: 'blur(8px)' },
        { scale: 1, rotateY: 0, filter: 'blur(0px)', duration: 1 },
        1.5,
      )

    return () => setProject(null)
  }, { dependencies: [reduced] })

  return (
    <section className="project-world" id="work">
      {worlds.map((w) => (
        <article key={w.id} className={`world world-${w.id}`}>
          <div className="world-visual">
            {w.id === 'basera' ? <BaseraObject /> : <CeroHeroObject />}
          </div>
          <div className="world-copy">
            <p className="world-index">{w.id === 'basera' ? '01' : '02'}</p>
            <h2>{w.name}</h2>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>{w.role}</dd>
              </div>
              <div>
                <dt>Problem</dt>
                <dd>{w.problem}</dd>
              </div>
              <div>
                <dt>System</dt>
                <dd>{w.system}</dd>
              </div>
              <div>
                <dt>Result</dt>
                <dd>{w.result}</dd>
              </div>
            </dl>
            <a
              className="btn primary"
              href={w.live}
              target="_blank"
              rel="noreferrer"
              onPointerEnter={() => setCursor('VIEW')}
              onPointerLeave={() => setCursor('')}
            >
              Open {w.host}
            </a>
          </div>
        </article>
      ))}
    </section>
  )
}
