// src/components/Img/Img.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Img } from './Img';

describe('Img Component', () => {
  it('renders and is visible', () => {
    render(
      <Img
        src="test-image.jpg"
        alt="Test image"
      />
    );
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Test image');
    expect(img).toHaveAttribute('src', 'test-image.jpg');
  });

  it('has correct styles when disabled', () => {
    render(
      <Img
        src="test-image.jpg"
        alt="Disabled image"
        disabled
      />
    );
    const img = screen.getByRole('img');
    expect(img).toHaveStyle({
      opacity: 0.6,
      cursor: 'not-allowed'
    });
  });

  it('applies rounded corners when rounded prop is true', () => {
    render(
      <Img
        src="test-image.jpg"
        alt="Rounded image"
        rounded
      />
    );
    const img = screen.getByRole('img');
    expect(img).toHaveStyle({
      borderRadius: '8px'
    });
  });

  it('applies custom dimensions when provided', () => {
    render(
      <Img
        src="test-image.jpg"
        alt="Custom size image"
        width={200}
        height={150}
      />
    );
    const img = screen.getByRole('img');
    expect(img).toHaveStyle({
      width: '200px',
      height: '150px'
    });
  });
});