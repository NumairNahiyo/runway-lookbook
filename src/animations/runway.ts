import type { Transition } from 'motion/react'

const spots = [
  { left: '76%', scale: 1, opacity: 1, filter: 'blur(0px)' },
  { left: '57%', scale: 0.84, opacity: 1, filter: 'blur(0px)' },
  { left: '40%', scale: 0.7, opacity: 1, filter: 'blur(1px)' },
  { left: '25%', scale: 0.58, opacity: 0.8, filter: 'blur(3px)' },
  { left: '12%', scale: 0.48, opacity: 0.5, filter: 'blur(5px)' },
]

const gone = { left: '2%', scale: 0.4, opacity: 0, filter: 'blur(8px)' }
const waiting = { left: '95%', scale: 1.1, opacity: 0, filter: 'blur(0px)' }

export function modelPosition(depth: number) {
  if (depth < 0) return waiting
  return spots[depth] ?? gone
}

export const runwaySpring: Transition = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
}
