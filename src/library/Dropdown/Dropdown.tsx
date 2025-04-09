// src/components/Dropdown/Dropdown.tsx
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<Omit<DropdownProps, 'options'>>`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: ${props => props.disabled ? '#f5f5f5' : props.backgroundColor || 'white'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  width: 100%;
  font-size: 14px;
  color: ${props => props.disabled ? '#999' : '#333'};

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

export const Dropdown = ({
  options,
  value,
  onChange,
  disabled = false,
  placeholder,
  backgroundColor
}: DropdownProps) => {
  return (
    <StyledSelect
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};