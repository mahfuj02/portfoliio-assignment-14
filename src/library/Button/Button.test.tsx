import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button Component', () => {
  it('renders and is visible', () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument()
  })

  it('has correct styles when disabled', () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole('button', { name: 'Disabled Button' })
    expect(button).toHaveStyle({
      backgroundColor: '#cccccc',
      cursor: 'not-allowed'
    })
  })

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    
    const button = screen.getByRole('button', { name: 'Click Me' })
    await userEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick} disabled>Click Me</Button>)
    
    const button = screen.getByRole('button', { name: 'Click Me' })
    await userEvent.click(button)
    
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="small">Small Button</Button>)
    let button = screen.getByRole('button', { name: 'Small Button' })
    expect(button).toHaveStyle({ padding: '8px 16px' })

    rerender(<Button size="large">Large Button</Button>)
    button = screen.getByRole('button', { name: 'Large Button' })
    expect(button).toHaveStyle({ padding: '16px 32px' })
  })
})