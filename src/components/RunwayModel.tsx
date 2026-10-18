import { motion } from 'motion/react'
import type { Look } from '../data/looks'
import { modelPosition, runwaySpring } from '../animations/runway'

type Props = {
  look: Look
  depth: number
}

export default function RunwayModel({ look, depth }: Props) {
  return (
    <motion.img
      className="runway-model"
      src={look.image}
      alt={`Look ${look.number}`}
      draggable={false}
      initial={false}
      animate={modelPosition(depth)}
      transition={runwaySpring}
      style={{ zIndex: 10 - Math.abs(depth) }}
    />
  )
}
