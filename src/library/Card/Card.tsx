// src/components/Card/Card.tsx
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.disabled ? '#f5f5f5' : props.backgroundColor || 'white'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  overflow: hidden;
  cursor: ${props => (props.onClick && !props.disabled) ? 'pointer' : props.disabled ? 'not-allowed' : 'default'};
  opacity: ${props => props.disabled ? 0.7 : 1};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    ${props => !props.disabled && props.onClick && `
      transform: translateY(-4px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    `}
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3<{ disabled?: boolean }>`
  margin: 0 0 8px 0;
  font-size: 1.25rem;
  color: ${props => props.disabled ? '#999' : '#333'};
`;

const CardSubtitle = styled.h4<{ disabled?: boolean }>`
  margin: 0 0 16px 0;
  font-size: 1rem;
  color: ${props => props.disabled ? '#999' : '#666'};
  font-weight: normal;
`;

export const Card = ({
  title,
  subtitle,
  children,
  image,
  imageAlt,
  disabled = false,
  backgroundColor,
  onClick,
  width,
  height
}: CardProps) => {
  return (
    <StyledCard
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={!disabled ? onClick : undefined}
      width={width}
      height={height}
    >
      {image && <CardImage src={image} alt={imageAlt || ''} />}
      <CardContent>
        {title && <CardTitle disabled={disabled}>{title}</CardTitle>}
        {subtitle && <CardSubtitle disabled={disabled}>{subtitle}</CardSubtitle>}
        {children}
      </CardContent>
    </StyledCard>
  );
};