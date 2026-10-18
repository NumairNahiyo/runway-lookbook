import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

const next = () => fireEvent.click(screen.getByRole('button', { name: 'Next look' }))
const previous = () => fireEvent.click(screen.getByRole('button', { name: 'Previous look' }))

describe('App', () => {
  it('starts on look 24', () => {
    render(<App />)

    expect(screen.getByText('24')).toBeInTheDocument()
  })

  it('moves the carousel and cards together', () => {
    render(<App />)

    next()

    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('Burgundy Overshirt')).toBeInTheDocument()
  })

  it('stops at the first and last look', () => {
    render(<App />)

    for (let i = 0; i < 10; i++) previous()
    expect(screen.getByText('21')).toBeInTheDocument()

    for (let i = 0; i < 10; i++) next()
    expect(screen.getByText('28')).toBeInTheDocument()
  })
})
