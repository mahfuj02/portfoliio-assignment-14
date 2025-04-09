// src/components/Text/Text.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text Component', () => {
  it('renders and is visible', () => {
    render(<Text>Sample Text</Text>);
    expect(screen.getByText('Sample Text')).toBeInTheDocument();
  });

  it('has correct styles when disabled', () => {
    render(<Text disabled>Disabled Text</Text>);
    const text = screen.getByText('Disabled Text');
    expect(text).toHaveStyle({
      color: '#999999'
    });
  });

  it('renders heading variant with correct styling', () => {
    render(<Text variant="heading">Heading Text</Text>);
    const heading = screen.getByText('Heading Text');
    expect(heading).toHaveStyle({
      fontWeight: 'bold'
    });
  });

  it('applies custom color when provided', () => {
    render(<Text color="#FF0000">Colored Text</Text>);
    const text = screen.getByText('Colored Text');
    expect(text).toHaveStyle({
      color: '#FF0000'
    });
  });
});