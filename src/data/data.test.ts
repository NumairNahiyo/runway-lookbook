import { describe, expect, it } from 'vitest'
import { looks } from './looks'
import { products } from './products'

const images = Object.keys(import.meta.glob('/public/assets/**/*.webp'))
const publicFile = (path: string) => images.includes(`/public${path}`)

describe('data', () => {
  it('every look has a shirt and pants', () => {
    for (const look of looks) {
      const categories = look.products.map((product) => product.category)
      expect(categories).toContain('tops')
      expect(categories).toContain('bottoms')
    }
  })

  it('every look product exists', () => {
    for (const look of looks) {
      expect(look.products.every(Boolean)).toBe(true)
    }
  })

  it('every image file exists', () => {
    for (const item of [...looks, ...products]) {
      expect(publicFile(item.image), item.image).toBe(true)
    }
  })

  it('product ids are unique', () => {
    const ids = products.map((product) => product.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
