// src/components/HeroImage/HeroImage.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  it('renders and is visible', () => {
    render(
      <HeroImage
        src="test-hero.jpg"
        alt="Test hero"
        title="Test Title"
        subtitle="Test Subtitle"
      />
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('has correct styles when disabled', () => {
    render(
      <HeroImage
        src="test-hero.jpg"
        alt="Disabled hero"
        disabled
      />
    );
    const container = screen.getByRole('img').parentElement;
    expect(container).toHaveStyle({
      opacity: 0.7,
      cursor: 'not-allowed'
    });
  });

  it('renders without title and subtitle', () => {
    render(
      <HeroImage
        src="test-hero.jpg"
        alt="Hero without text"
      />
    );
    const title = screen.queryByRole('heading');
    expect(title).not.toBeInTheDocument();
  });

  it('applies custom height when provided', () => {
    render(
      <HeroImage
        src="test-hero.jpg"
        alt="Custom height hero"
        height="300px"
      />
    );
    const container = screen.getByRole('img').parentElement;
    expect(container).toHaveStyle({
      height: '300px'
    });
  });
});