// src/components/HeroImage/HeroImage.tsx
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<HeroImageProps>`
  position: relative;
  width: 100%;
  height: ${props => props.height || '500px'};
  overflow: hidden;
  background-color: ${props => props.backgroundColor || '#000'};
  opacity: ${props => props.disabled ? 0.7 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'default'};
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div<{ overlayColor?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.overlayColor || 'rgba(0, 0, 0, 0.4)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1<{ textColor?: string }>`
  color: ${props => props.textColor || '#fff'};
  font-size: 3rem;
  text-align: center;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p<{ textColor?: string }>`
  color: ${props => props.textColor || '#fff'};
  font-size: 1.5rem;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const HeroImage = ({
  src,
  alt,
  title,
  subtitle,
  height,
  disabled = false,
  overlayColor,
  backgroundColor,
  textColor
}: HeroImageProps) => {
  return (
    <HeroContainer 
      height={height}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      <HeroImg src={src} alt={alt} />
      <Overlay overlayColor={overlayColor}>
        {title && <Title textColor={textColor}>{title}</Title>}
        {subtitle && <Subtitle textColor={textColor}>{subtitle}</Subtitle>}
      </Overlay>
    </HeroContainer>
  );
};