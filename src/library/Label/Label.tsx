// src/components/Label/Label.tsx
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.disabled ? '#999999' : '#333333'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background-color: ${props => props.disabled ? '#f5f5f5' : props.backgroundColor || 'transparent'};
  padding: 4px 8px;
  border-radius: 4px;

  ${props => props.required && `
    &:after {
      content: '*';
      color: #ff4444;
      margin-left: 4px;
    }
  `}

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 3px 6px;
  }
`;

export const Label = ({
  children,
  disabled = false,
  htmlFor,
  required = false,
  backgroundColor,
}: LabelProps) => {
  return (
    <StyledLabel
      disabled={disabled}
      htmlFor={htmlFor}
      required={required}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledLabel>
  );
};