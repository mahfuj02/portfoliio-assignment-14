import { ReactNode } from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  padding: ${props => 
    props.size === 'small' ? '8px 16px' : 
    props.size === 'large' ? '16px 32px' : 
    '12px 24px'
  };
  border-radius: 4px;
  border: none;
  background-color: ${props => props.disabled ? '#cccccc' : props.backgroundColor || '#007bff'};
  color: white;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  
  &:hover {
    opacity: ${props => props.disabled ? 1 : 0.8};
  }
  
  @media (max-width: 768px) {
    padding: ${props => 
      props.size === 'small' ? '6px 12px' : 
      props.size === 'large' ? '14px 28px' : 
      '10px 20px'
    };
  }
`;

export const Button = ({ 
  children,
  disabled = false,
  backgroundColor,
  onClick,
  size = 'medium'
}: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={onClick}
      size={size}
    >
      {children}
    </StyledButton>
  );
};