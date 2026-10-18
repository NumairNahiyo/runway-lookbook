export type Category = 'tops' | 'bottoms' | 'accessories'

export type Product = {
  id: string
  name: string
  price: number
  category: Category
  image: string
}

const product = (category: Category, id: string, name: string, price: number): Product => ({
  id,
  name,
  price,
  category,
  image: `/assets/products/${category}/${id}.webp`,
})

export const products = [
  product('tops', 'navy-knit-polo', 'Navy Knit Polo', 39.99),
  product('tops', 'black-tee', 'Boxy Black T-Shirt', 19.99),
  product('tops', 'cream-polo', 'Cream Knit Polo', 29.99),
  product('tops', 'olive-zip-cardigan', 'Olive Zip Cardigan', 49.99),
  product('tops', 'brown-overshirt', 'Brown Suede Overshirt', 59.99),
  product('tops', 'burgundy-overshirt', 'Burgundy Overshirt', 54.99),
  product('tops', 'sage-zip-jacket', 'Sage Zip Jacket', 64.99),
  product('tops', 'ivory-polo', 'Ivory Textured Polo', 29.99),

  product('bottoms', 'cream-trouser', 'Cream Tapered Trouser', 39.99),
  product('bottoms', 'black-drawstring-trouser', 'Black Drawstring Trouser', 35.99),
  product('bottoms', 'brown-trouser', 'Brown Wide Trouser', 44.99),
  product('bottoms', 'burgundy-trouser', 'Burgundy Wide Trouser', 44.99),
  product('bottoms', 'grey-trouser', 'Grey Wool Trouser', 49.99),
  product('bottoms', 'ivory-trouser', 'Ivory Pleated Trouser', 39.99),
  product('bottoms', 'olive-trouser', 'Olive Relaxed Trouser', 42.99),
  product('bottoms', 'slate-trouser', 'Slate Straight Trouser', 44.99),

  product('accessories', 'canvas-tote', 'Canvas Tote', 24.99),
  product('accessories', 'black-crossbody', 'Black Crossbody Bag', 29.99),
  product('accessories', 'black-cap', 'Black Cap', 14.99),
  product('accessories', 'folded-suede-jacket', 'Suede Jacket', 89.99),
  product('accessories', 'penny-loafers', 'Penny Loafers', 79.99),
  product('accessories', 'leather-sandals', 'Leather Sandals', 34.99),
  product('accessories', 'suede-slip-ons', 'Suede Slip-Ons', 49.99),
  product('accessories', 'derby-shoes', 'Derby Shoes', 74.99),
  product('accessories', 'tan-sandals', 'Tan Sandals', 34.99),
]

export const productById = Object.fromEntries(products.map((item) => [item.id, item]))
