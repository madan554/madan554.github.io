import { useMemo, useState } from 'react'
import { edges, nodes, worlds, type NodeId } from '../data/site'
import { useMotion } from './MotionRoot'

const projectNodes: Record<string, NodeId[]> = {
  basera: worlds[0].nodes as NodeId[],
  cerohero: worlds[1].nodes as NodeId[],
}

export function Constellation() {
  const { project, setCursor, coarse } = useMotion()
  const [hover, setHover] = useState<NodeId | null>(null)

  const active = useMemo(() => {
    if (hover) {
      const linked = new Set<NodeId>([hover])
      for (const [a, b] of edges) {
        if (a === hover) linked.add(b)
        if (b === hover) linked.add(a)
      }
      return linked
    }
    if (project) return new Set(projectNodes[project])
    return new Set(nodes.map((n) => n.id))
  }, [hover, project])

  return (
    <section id="system" className="constellation-scene">
      <header className="scene-kicker">
        <p>The graph</p>
        <h2>How the work is actually connected.</h2>
      </header>
      <svg viewBox="0 0 100 100" className="constellation" aria-label="Engineering constellation">
        {edges.map(([a, b]) => {
          const na = nodes.find((n) => n.id === a)!
          const nb = nodes.find((n) => n.id === b)!
          const on = active.has(a) && active.has(b)
          return (
            <line
              key={`${a}-${b}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              className={on ? 'edge on' : 'edge'}
            />
          )
        })}
        {nodes.map((n) => {
          const on = active.has(n.id)
          return (
            <g
              key={n.id}
              className={on ? 'node on' : 'node'}
              transform={`translate(${n.x} ${n.y})`}
              onPointerEnter={() => {
                setHover(n.id)
                setCursor(n.id)
              }}
              onPointerLeave={() => {
                setHover(null)
                setCursor('')
              }}
            >
              <circle r={coarse ? 1.8 : 1.4} />
              <text x="2.4" y="0.8">
                {n.id}
              </text>
            </g>
          )
        })}
      </svg>
      <p className="constellation-hint">
        Hover a node. Scroll a product and its path lights up. This is not a particle field — these
        are the pieces I actually ship with.
      </p>
    </section>
  )
}
