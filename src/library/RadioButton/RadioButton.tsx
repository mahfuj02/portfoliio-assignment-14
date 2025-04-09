// src/components/RadioButton/RadioButton.tsx
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioWrapper = styled.label<Pick<RadioButtonProps, 'disabled'>>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.7 : 1};
`;

const StyledRadio = styled.input.attrs({ type: 'radio' })<RadioButtonProps>`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${props => props.disabled ? '#cccccc' : '#007bff'};
  border-radius: 50%;
  background-color: ${props => props.backgroundColor || 'white'};
  position: relative;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  &:checked {
    &:after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${props => props.disabled ? '#cccccc' : '#007bff'};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
  }
`;

const Label = styled.span<Pick<RadioButtonProps, 'disabled'>>`
  color: ${props => props.disabled ? '#999999' : '#333333'};
`;

export const RadioButton = ({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
  backgroundColor
}: RadioButtonProps) => {
  return (
    <RadioWrapper disabled={disabled}>
      <StyledRadio
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        backgroundColor={backgroundColor}
      />
      <Label disabled={disabled}>{label}</Label>
    </RadioWrapper>
  );
};