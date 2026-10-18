import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('shows the logo and search', () => {
    render(<Header />)

    expect(screen.getByText('RUNWAY')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })

  it('shows every nav link', () => {
    render(<Header />)

    for (const link of ['Men', 'Runway', 'Women', 'Kids', 'Home', 'Perfumes']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('marks Runway as the active page', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Runway' })).toHaveClass('active')
    expect(screen.getByRole('link', { name: 'Men' })).not.toHaveClass('active')
  })

  it('shows the account links', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Log in' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shopping bag' })).toBeInTheDocument()
  })
})
