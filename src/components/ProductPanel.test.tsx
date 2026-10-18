import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { looks } from '../data/looks'
import ProductPanel from './ProductPanel'

describe('ProductPanel', () => {
  it('shows a shirt and pants card for every look', () => {
    render(<ProductPanel looks={looks} active={0} onStep={vi.fn()} />)

    expect(screen.getAllByRole('article')).toHaveLength(looks.length * 2)
  })

  it('does not show accessories', () => {
    render(<ProductPanel looks={looks} active={0} onStep={vi.fn()} />)

    expect(screen.getByText('Navy Knit Polo')).toBeInTheDocument()
    expect(screen.getByText('Cream Tapered Trouser')).toBeInTheDocument()
    expect(screen.queryByText('Derby Shoes')).not.toBeInTheDocument()
  })

  it('steps when the cards are scrolled sideways', () => {
    const onStep = vi.fn()
    const { container } = render(<ProductPanel looks={looks} active={3} onStep={onStep} />)

    fireEvent.wheel(container.querySelector('.product-panel')!, { deltaX: -100 })

    expect(onStep).toHaveBeenCalledWith(-1)
  })
})
