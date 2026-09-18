import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export type ProjectFocus = 'basera' | 'cerohero' | null

export const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 }

const frames = new Set<() => void>()

export function useFrame(fn: () => void) {
  useEffect(() => {
    frames.add(fn)
    fn()
    return () => {
      frames.delete(fn)
    }
  }, [fn])
}

type MotionState = {
  reduced: boolean
  coarse: boolean
  project: ProjectFocus
  setProject: (id: ProjectFocus) => void
  cursor: string
  setCursor: (label: string) => void
  scrollTo: (hash: string) => void
}

const Motion = createContext<MotionState | null>(null)

export function useMotion() {
  const ctx = useContext(Motion)
  if (!ctx) throw new Error('useMotion outside provider')
  return ctx
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(false)
  const [coarse, setCoarse] = useState(false)
  const [project, setProject] = useState<ProjectFocus>(null)
  const [cursor, setCursor] = useState('')
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointerFine = window.matchMedia('(pointer: fine)')
    const sync = () => {
      setReduced(motion.matches)
      setCoarse(!pointerFine.matches)
    }
    sync()
    motion.addEventListener('change', sync)
    pointerFine.addEventListener('change', sync)
    return () => {
      motion.removeEventListener('change', sync)
      pointerFine.removeEventListener('change', sync)
    }
  }, [])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.tx = e.clientX / window.innerWidth
      pointer.ty = e.clientY / window.innerHeight
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    const lerp = reduced ? 1 : 0.12

    if (reduced) {
      const tick = gsap.ticker.add(() => {
        pointer.x = pointer.tx
        pointer.y = pointer.ty
        frames.forEach((fn) => fn())
      })
      return () => {
        window.removeEventListener('pointermove', onMove)
        gsap.ticker.remove(tick)
      }
    }

    const lenis = new Lenis({ autoRaf: false, duration: 1.05, lerp: 0.1 })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)

    const tick = gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
      pointer.x += (pointer.tx - pointer.x) * lerp
      pointer.y += (pointer.ty - pointer.y) * lerp
      frames.forEach((fn) => fn())
    })
    gsap.ticker.lagSmoothing(0)

    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', onResize)
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisRef.current = null
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [reduced])

  const value = useMemo<MotionState>(
    () => ({
      reduced,
      coarse,
      project,
      setProject,
      cursor,
      setCursor,
      scrollTo: (hash: string) => {
        if (hash === '#top') {
          if (lenisRef.current) lenisRef.current.scrollTo(0)
          else window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
          return
        }
        const el = document.querySelector(hash)
        if (!el) return
        if (lenisRef.current) lenisRef.current.scrollTo(el as HTMLElement, { offset: -20 })
        else el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
      },
    }),
    [reduced, coarse, project, cursor],
  )

  return <Motion.Provider value={value}>{children}</Motion.Provider>
}
