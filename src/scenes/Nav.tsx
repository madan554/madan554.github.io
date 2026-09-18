import { useMotion } from '../motion/MotionRoot'

const items = [
  ['#top', 'Start'],
  ['#work', 'Work'],
  ['#live', 'Live'],
  ['#system', 'System'],
  ['#about', 'About'],
  ['#contact', 'Contact'],
]

export function Nav() {
  const { scrollTo } = useMotion()
  return (
    <header className="nav">
      <a
        className="mark"
        href="#top"
        onClick={(e) => {
          e.preventDefault()
          scrollTo('#top')
        }}
      >
        MMR
      </a>
      <nav>
        {items.map(([href, label]) => (
          <a
            key={href}
            href={href}
            onClick={(e) => {
              e.preventDefault()
              scrollTo(href)
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
