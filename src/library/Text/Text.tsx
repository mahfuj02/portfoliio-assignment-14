// src/components/Text/Text.tsx
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<TextProps>`
  margin: 0;
  color: ${props => props.disabled ? '#999999' : props.color || '#333333'};
  
  ${props => {
    switch (props.variant) {
      case 'heading':
        return `
          font-weight: bold;
          font-size: ${
            props.size === 'small' ? '18px' :
            props.size === 'large' ? '32px' :
            '24px'
          };
        `;
      case 'caption':
        return `
          font-size: ${
            props.size === 'small' ? '12px' :
            props.size === 'large' ? '16px' :
            '14px'
          };
          color: #666666;
        `;
      default:
        return `
          font-size: ${
            props.size === 'small' ? '14px' :
            props.size === 'large' ? '18px' :
            '16px'
          };
        `;
    }
  }}

  @media (max-width: 768px) {
    ${props => props.variant === 'heading' && `
      font-size: ${
        props.size === 'small' ? '16px' :
        props.size === 'large' ? '28px' :
        '20px'
      };
    `}
  }
`;

export const Text = ({
  children,
  variant = 'body',
  disabled = false,
  color,
  size = 'medium'
}: TextProps) => {
  return (
    <StyledText
      variant={variant}
      disabled={disabled}
      color={color}
      size={size}
    >
      {children}
    </StyledText>
  );
};