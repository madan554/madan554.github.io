import { useCallback, useRef } from 'react'
import { pointer, useFrame } from './MotionRoot'
import { useMotion } from './MotionRoot'

export function Cursor() {
  const { coarse, cursor } = useMotion()
  const dot = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLSpanElement>(null)

  const tick = useCallback(() => {
    if (!dot.current) return
    const x = pointer.tx * window.innerWidth
    const y = pointer.ty * window.innerHeight
    dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
  }, [])

  useFrame(tick)

  if (coarse) return null

  return (
    <div ref={dot} className={`cursor${cursor ? ' is-hot' : ''}`} aria-hidden="true">
      <i />
      <span ref={label}>{cursor}</span>
    </div>
  )
}
