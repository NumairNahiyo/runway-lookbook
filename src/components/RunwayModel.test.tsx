import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { looks } from '../data/looks'
import RunwayModel from './RunwayModel'

describe('RunwayModel', () => {
  const look = looks[0]

  it('shows the look image', () => {
    render(<RunwayModel look={look} depth={0} />)

    expect(screen.getByAltText(`Look ${look.number}`)).toHaveAttribute('src', look.image)
  })

  it('puts the focused model in front', () => {
    const { rerender } = render(<RunwayModel look={look} depth={0} />)
    expect(screen.getByRole('img')).toHaveStyle({ zIndex: '10' })

    rerender(<RunwayModel look={look} depth={3} />)
    expect(screen.getByRole('img')).toHaveStyle({ zIndex: '7' })
  })
})
