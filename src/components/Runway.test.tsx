import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { looks } from '../data/looks'
import Runway from './Runway'

describe('Runway', () => {
  it('shows the collection title', () => {
    render(<Runway looks={looks} active={0} onStep={vi.fn()} />)

    expect(screen.getByRole('heading', { name: '2024 Spring Collection' })).toBeInTheDocument()
  })

  it('shows every model', () => {
    render(<Runway looks={looks} active={0} onStep={vi.fn()} />)

    expect(screen.getAllByRole('img')).toHaveLength(looks.length)
  })

  it('shows the active look number', () => {
    render(<Runway looks={looks} active={3} onStep={vi.fn()} />)

    expect(screen.getByText(String(looks[3].number))).toBeInTheDocument()
  })

  it('steps with the arrows', () => {
    const onStep = vi.fn()
    render(<Runway looks={looks} active={3} onStep={onStep} />)

    fireEvent.click(screen.getByRole('button', { name: 'Next look' }))
    fireEvent.click(screen.getByRole('button', { name: 'Previous look' }))

    expect(onStep.mock.calls).toEqual([[1], [-1]])
  })

  it('steps when scrolled', () => {
    const onStep = vi.fn()
    const { container } = render(<Runway looks={looks} active={3} onStep={onStep} />)

    fireEvent.wheel(container.querySelector('.runway-stage')!, { deltaY: 100 })

    expect(onStep).toHaveBeenCalledWith(1)
  })

  it('has a shop the look button', () => {
    render(<Runway looks={looks} active={0} onStep={vi.fn()} />)

    expect(screen.getByRole('button', { name: 'SHOP THE LOOK' })).toBeInTheDocument()
  })
})
