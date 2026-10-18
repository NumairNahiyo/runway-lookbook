import { useRef } from 'react'
import type { PanInfo } from 'motion/react'

export function useStepGestures(onStep: (direction: number) => void) {
  const lastWheel = useRef(0)

  const onWheel = (event: React.WheelEvent) => {
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
    const now = Date.now()
    if (Math.abs(delta) < 20 || now - lastWheel.current < 600) return
    lastWheel.current = now
    onStep(delta > 0 ? 1 : -1)
  }

  const onPanEnd = (_: PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 60) onStep(info.offset.x < 0 ? 1 : -1)
  }

  return { onWheel, onPanEnd }
}
