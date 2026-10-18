import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { productById } from '../data/products'
import ProductCard from './ProductCard'

describe('ProductCard', () => {
  const product = productById['navy-knit-polo']

  it('shows the product name and price', () => {
    render(<ProductCard product={product} />)

    expect(screen.getByRole('heading', { name: 'Navy Knit Polo' })).toBeInTheDocument()
    expect(screen.getByText('£39.99')).toBeInTheDocument()
  })

  it('shows the product image', () => {
    render(<ProductCard product={product} />)

    expect(screen.getByAltText('Navy Knit Polo')).toHaveAttribute('src', '/assets/products/tops/navy-knit-polo.webp')
  })

  it('has an add button', () => {
    render(<ProductCard product={product} />)

    expect(screen.getByRole('button', { name: 'Add Navy Knit Polo' })).toBeInTheDocument()
  })
})
