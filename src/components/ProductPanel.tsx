import { motion } from 'motion/react'
import type { Look } from '../data/looks'
import { outfitFocus, outfitSpring } from '../animations/products'
import { useStepGestures } from '../hooks/useStepGestures'
import ProductCard from './ProductCard'
import './ProductPanel.css'

type Props = {
  looks: Look[]
  active: number
  onStep: (direction: number) => void
}

export default function ProductPanel({ looks, active, onStep }: Props) {
  const gestures = useStepGestures(onStep)

  return (
    <motion.aside className="product-panel" {...gestures}>
      <motion.div className="outfit-track" animate={{ x: `${-active * 100}%` }} transition={outfitSpring}>
        {looks.map((look, index) => (
          <motion.div
            key={look.id}
            className="outfit"
            initial={false}
            animate={outfitFocus(index === active)}
            transition={outfitSpring}
          >
            {look.products
              .filter((product) => product.category !== 'accessories')
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.aside>
  )
}
