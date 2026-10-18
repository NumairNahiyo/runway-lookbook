import type { Transition } from 'motion/react'

export function outfitFocus(isActive: boolean) {
  return isActive ? { opacity: 1, scale: 1 } : { opacity: 0.4, scale: 0.92 }
}

export const outfitSpring: Transition = {
  type: 'spring',
  stiffness: 120,
  damping: 20,
}
