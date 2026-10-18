import { describe, expect, it, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import type { PanInfo } from 'motion/react'
import { useStepGestures } from './useStepGestures'

const wheel = (deltaX: number, deltaY: number) => ({ deltaX, deltaY }) as React.WheelEvent
const pan = (x: number) => ({ offset: { x, y: 0 } }) as PanInfo

describe('useStepGestures', () => {
  it('steps forward on scroll down and back on scroll left', () => {
    const onStep = vi.fn()
    const first = renderHook(() => useStepGestures(onStep)).result.current
    const second = renderHook(() => useStepGestures(onStep)).result.current

    first.onWheel(wheel(0, 100))
    second.onWheel(wheel(-100, 0))

    expect(onStep.mock.calls).toEqual([[1], [-1]])
  })

  it('ignores tiny scrolls', () => {
    const onStep = vi.fn()
    const { result } = renderHook(() => useStepGestures(onStep))

    result.current.onWheel(wheel(0, 5))

    expect(onStep).not.toHaveBeenCalled()
  })

  it('steps only once for a fast scroll', () => {
    const onStep = vi.fn()
    const { result } = renderHook(() => useStepGestures(onStep))

    result.current.onWheel(wheel(0, 100))
    result.current.onWheel(wheel(0, 100))
    result.current.onWheel(wheel(0, 100))

    expect(onStep).toHaveBeenCalledTimes(1)
  })

  it('steps on swipe', () => {
    const onStep = vi.fn()
    const { result } = renderHook(() => useStepGestures(onStep))

    result.current.onPanEnd(new PointerEvent('pointerup'), pan(-100))
    result.current.onPanEnd(new PointerEvent('pointerup'), pan(100))
    result.current.onPanEnd(new PointerEvent('pointerup'), pan(20))

    expect(onStep.mock.calls).toEqual([[1], [-1]])
  })
})
