import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMotion } from '../motion/MotionRoot'

gsap.registerPlugin(ScrollTrigger)

export function TypeBeat() {
  const { reduced } = useMotion()

  useGSAP(() => {
    if (reduced || window.matchMedia('(max-width: 959px)').matches) return
    const root = document.querySelector('.type-beat')
    if (!root) return
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: '+=140%',
        pin: true,
        scrub: 0.5,
      },
    })
    tl.fromTo('.line-a', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1 })
      .fromTo('.line-b', { y: 36, opacity: 0, letterSpacing: '0.4em' }, { y: 0, opacity: 1, letterSpacing: '-0.03em', duration: 1 })
      .fromTo('.line-c', { filter: 'blur(10px)', opacity: 0, x: 40 }, { filter: 'blur(0px)', opacity: 1, x: 0, duration: 1 })
  }, { dependencies: [reduced] })

  return (
    <section className="type-beat" aria-label="Building systems that think">
      <p className="line line-a">BUILDING</p>
      <p className="line line-b">SYSTEMS</p>
      <p className="line line-c">THAT THINK.</p>
    </section>
  )
}
