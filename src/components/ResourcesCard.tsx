import styled from 'styled-components';
import { Resource } from '../types';

type ResourceCardProps = {
  resource: Resource;
};

const CardContainer = styled.div`
  background-color: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: var(--color-light);
`;

const ResourceImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ContentContainer = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Summary = styled.p`
  color: var(--color-gray);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
`;

const Link = styled.a`
  color: var(--color-primary);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #6a3bce;
  }
`;

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const { title, image, summary, link } = resource;
  
  return (
    <CardContainer>
      <ImageContainer>
        <ResourceImage src={image} alt={title} />
      </ImageContainer>
      
      <ContentContainer>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        
        <Link href={link} target="_blank" rel="noopener noreferrer">
          Visit Resource
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </ContentContainer>
    </CardContainer>
  );
};

export default ResourceCard;