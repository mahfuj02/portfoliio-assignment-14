// src/components/Img/Img.tsx
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<ImgProps>`
  display: block;
  width: ${props => typeof props.width === 'number' ? `${props.width}px` : props.width || '100%'};
  height: ${props => typeof props.height === 'number' ? `${props.height}px` : props.height || 'auto'};
  object-fit: ${props => props.objectFit || 'cover'};
  border-radius: ${props => props.rounded ? '8px' : '0'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
  background-color: ${props => props.backgroundColor || 'transparent'};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Img = ({
  src,
  alt,
  disabled = false,
  width,
  height,
  objectFit = 'cover',
  rounded = false,
  backgroundColor
}: ImgProps) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      disabled={disabled}
      width={width}
      height={height}
      objectFit={objectFit}
      rounded={rounded}
      backgroundColor={backgroundColor}
    />
  );
};