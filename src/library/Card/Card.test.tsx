// src/components/Card/Card.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
  it('renders and is visible', () => {
    render(
      <Card title="Test Card" subtitle="Test Subtitle">
        Card Content
      </Card>
    );
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('has correct styles when disabled', () => {
    render(
      <Card disabled title="Disabled Card">
        Content
      </Card>
    );
    const card = screen.getByText('Disabled Card').parentElement?.parentElement;
    expect(card).toHaveStyle({
      backgroundColor: '#f5f5f5',
      opacity: 0.7,
      cursor: 'not-allowed'
    });
  });

  it('renders image when provided', () => {
    render(
      <Card
        image="test-image.jpg"
        imageAlt="Test image"
        title="Card with Image"
      >
        Content
      </Card>
    );
    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });

  it('handles click events when not disabled', () => {
    const handleClick = vi.fn();
    render(
      <Card onClick={handleClick} title="Clickable Card">
        Content
      </Card>
    );
    
    fireEvent.click(screen.getByText('Clickable Card'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('does not handle click events when disabled', () => {
    const handleClick = vi.fn();
    render(
      <Card onClick={handleClick} disabled title="Disabled Card">
        Content
      </Card>
    );
    
    fireEvent.click(screen.getByText('Disabled Card'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});