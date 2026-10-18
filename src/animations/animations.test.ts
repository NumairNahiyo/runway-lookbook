import { describe, expect, it } from 'vitest'
import { modelPosition } from './runway'
import { outfitFocus } from './products'

describe('modelPosition', () => {
  it('shows the focused model sharp and full size', () => {
    expect(modelPosition(0)).toMatchObject({ scale: 1, opacity: 1, filter: 'blur(0px)' })
  })

  it('makes older models smaller', () => {
    expect(modelPosition(1).scale).toBeGreaterThan(modelPosition(2).scale)
    expect(modelPosition(2).scale).toBeGreaterThan(modelPosition(3).scale)
  })

  it('hides upcoming and far away models', () => {
    expect(modelPosition(-1).opacity).toBe(0)
    expect(modelPosition(9).opacity).toBe(0)
  })
})

describe('outfitFocus', () => {
  it('dims cards that are not active', () => {
    expect(outfitFocus(true)).toEqual({ opacity: 1, scale: 1 })
    expect(outfitFocus(false).opacity).toBeLessThan(1)
  })
})
