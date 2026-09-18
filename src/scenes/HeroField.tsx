import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { live } from '../data/site'
import { useMotion } from '../motion/MotionRoot'
import { HeroTrace } from './HeroTrace'

gsap.registerPlugin(ScrollTrigger)

export function HeroField() {
  const { reduced, setCursor } = useMotion()

  useGSAP(() => {
    if (reduced) return
    const field = document.querySelector('.hero-field')
    if (!field) return
    if (window.matchMedia('(max-width: 959px)').matches) return
    gsap.timeline({
      scrollTrigger: {
        trigger: field,
        start: 'top top',
        end: '+=90%',
        scrub: 0.6,
      },
    })
      .to('.hero-identity', { y: -32 }, 0)
      .to('.hero-trace', { y: -20, opacity: 0.72 }, 0)
  }, { dependencies: [reduced] })

  return (
    <section className="hero-field" id="top">
      <div className="hero-identity">
        <img className="avatar" src="/profile.png" alt="Madan Mohan Reddy" width={88} height={88} />
        <p className="kicker">Hyderabad · 4.2 years · Open to full-time</p>
        <h1>Madan Mohan Reddy</h1>
        <p className="role-line">Python full-stack &amp; AI engineer</p>
        <p className="lede hero-lede">
          I ship FastAPI services, production LLM features, and the UI the product needs.
          Two live systems: CeroHero AI and Basera.
        </p>
        <div className="cta hero-cta">
          <a
            className="btn primary"
            href={live.cerohero}
            target="_blank"
            rel="noreferrer"
            onPointerEnter={() => setCursor('VIEW')}
            onPointerLeave={() => setCursor('')}
          >
            Open CeroHero
          </a>
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
        </div>
      </div>
      <HeroTrace />
    </section>
  )
}
