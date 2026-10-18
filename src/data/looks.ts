import { productById, type Product } from './products'

export type Look = {
  id: string
  number: number
  image: string
  products: Product[]
}

const look = (number: number, id: string, productIds: string[]): Look => ({
  id,
  number,
  image: `/assets/looks/${id}.webp`,
  products: productIds.map((productId) => productById[productId]),
})

export const looks = [
  look(21, 'sage-overshirt', ['sage-zip-jacket', 'olive-trouser', 'black-crossbody', 'leather-sandals']),
  look(22, 'black-tee-trouser', ['black-tee', 'black-drawstring-trouser', 'folded-suede-jacket', 'leather-sandals']),
  look(23, 'brown-suede-set', ['brown-overshirt', 'brown-trouser', 'canvas-tote', 'suede-slip-ons']),
  look(24, 'navy-knit-polo', ['navy-knit-polo', 'cream-trouser', 'derby-shoes']),
  look(25, 'burgundy-workwear', ['burgundy-overshirt', 'burgundy-trouser', 'suede-slip-ons']),
  look(26, 'cream-polo-grey', ['cream-polo', 'grey-trouser', 'penny-loafers']),
  look(27, 'olive-zip-cream', ['olive-zip-cardigan', 'ivory-trouser', 'black-crossbody', 'derby-shoes']),
  look(28, 'cream-polo-blue', ['ivory-polo', 'slate-trouser', 'penny-loafers']),
]
