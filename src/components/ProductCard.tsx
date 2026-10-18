import { Heart, Plus } from 'lucide-react'
import type { Product } from '../data/products'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <article className="product-card">
      <Heart className="product-like" size={14} />
      <img src={product.image} alt={product.name} draggable={false} />
      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>£{product.price.toFixed(2)}</p>
        </div>
        <button aria-label={`Add ${product.name}`}>
          <Plus size={12} />
        </button>
      </div>
    </article>
  )
}
