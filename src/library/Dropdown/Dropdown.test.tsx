// src/components/Dropdown/Dropdown.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' }
];

describe('Dropdown Component', () => {
  it('renders and is visible', () => {
    render(<Dropdown options={sampleOptions} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('has correct styles when disabled', () => {
    render(<Dropdown options={sampleOptions} disabled />);
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeDisabled();
    expect(dropdown).toHaveStyle({
      backgroundColor: '#f5f5f5',
      cursor: 'not-allowed'
    });
  });

  it('shows all options', () => {
    render(<Dropdown options={sampleOptions} />);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(2);
    expect(options[0]).toHaveTextContent('Option 1');
    expect(options[1]).toHaveTextContent('Option 2');
  });

  it('calls onChange when value changes', () => {
    const handleChange = vi.fn();
    render(<Dropdown options={sampleOptions} onChange={handleChange} />);
    
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'option2' }
    });
    
    expect(handleChange).toHaveBeenCalledWith('option2');
  });
});