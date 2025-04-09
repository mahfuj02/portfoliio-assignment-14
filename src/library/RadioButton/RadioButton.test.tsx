// src/components/RadioButton/RadioButton.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  it('renders and is visible', () => {
    render(
      <RadioButton
        label="Test Radio"
        name="test"
        value="test"
      />
    );
    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByText('Test Radio')).toBeInTheDocument();
  });

  it('has correct styles when disabled', () => {
    render(
      <RadioButton
        label="Disabled Radio"
        name="test"
        value="test"
        disabled
      />
    );
    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
    expect(radio).toHaveStyle({
      cursor: 'not-allowed'
    });
  });

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn();
    render(
      <RadioButton
        label="Clickable Radio"
        name="test"
        value="testValue"
        onChange={handleChange}
      />
    );
    
    fireEvent.click(screen.getByRole('radio'));
    expect(handleChange).toHaveBeenCalledWith('testValue');
  });

  it('can be checked', () => {
    render(
      <RadioButton
        label="Checked Radio"
        name="test"
        value="test"
        checked
      />
    );
    expect(screen.getByRole('radio')).toBeChecked();
  });
});