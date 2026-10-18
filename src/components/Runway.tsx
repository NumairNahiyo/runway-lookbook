import { motion } from 'motion/react'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Look } from '../data/looks'
import { useStepGestures } from '../hooks/useStepGestures'
import RunwayModel from './RunwayModel'
import './Runway.css'

type Props = {
  looks: Look[]
  active: number
  onStep: (direction: number) => void
}

export default function Runway({ looks, active, onStep }: Props) {
  const gestures = useStepGestures(onStep)

  return (
    <section className="runway">
      <div className="runway-intro">
        <h1>2024 Spring Collection</h1>
        <p>
          We work with monitoring programmes to ensure compliance with our social, environmental and health and
          safety standards for our products.
        </p>
      </div>

      <motion.div className="runway-stage" {...gestures}>
        {looks.map((look, index) => (
          <RunwayModel key={look.id} look={look} depth={active - index} />
        ))}
      </motion.div>

      <button className="runway-arrow left" onClick={() => onStep(-1)} aria-label="Previous look">
        <ChevronLeft size={16} />
      </button>
      <button className="runway-arrow right" onClick={() => onStep(1)} aria-label="Next look">
        <ChevronRight size={16} />
      </button>

      <ChevronDown className="runway-down" size={18} />

      <div className="runway-footer">
        <span className="look-number">
          LOOK{' '}
          <motion.b key={looks[active].number} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {looks[active].number}
          </motion.b>
        </span>
        <button className="shop-look">SHOP THE LOOK</button>
      </div>
    </section>
  )
}
