import { AlsoShipped } from './scenes/AlsoShipped'
import { ContactScene } from './scenes/ContactScene'
import { HeroField } from './scenes/HeroField'
import { LiveStrip } from './scenes/LiveStrip'
import { Nav } from './scenes/Nav'
import { ProjectWorld } from './scenes/ProjectWorld'
import { TypeBeat } from './scenes/TypeBeat'
import { Constellation } from './motion/Constellation'
import { Cursor } from './motion/Cursor'
import { MotionProvider } from './motion/MotionRoot'

export default function App() {
  return (
    <MotionProvider>
      <Cursor />
      <Nav />
      <HeroField />
      <TypeBeat />
      <ProjectWorld />
      <LiveStrip />
      <Constellation />
      <AlsoShipped />
      <ContactScene />
    </MotionProvider>
  )
}
