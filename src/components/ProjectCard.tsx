import styled from 'styled-components';
import { Project } from '../types';
import { SecondaryButton } from '../styles/SharedComponents';

type ProjectCardProps = {
  project: Project;
  isEven: boolean;
};

const ProjectCardContainer = styled.div<{ isEven: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
  
  @media (min-width: 768px) {
    flex-direction: ${({ isEven }) => isEven ? 'row' : 'row-reverse'};
  }
`;

const ProjectImage = styled.div`
  @media (min-width: 768px) {
    flex: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex: 1;
    justify-content: center;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: var(--color-gray);
  margin-bottom: 1.5rem;
`;

const TechListTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechItem = styled.span`
  background-color: var(--color-light);
  color: var(--color-secondary);
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
`;

const ProjectCard = ({ project, isEven }: ProjectCardProps) => {
  const { title, description, image, link, techList } = project;
  
  return (
    <ProjectCardContainer isEven={isEven}>
      <ProjectImage>
        <Image src={image} alt={title} />
        </ProjectImage>
      
      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        
        <TechListTitle>Technologies Used:</TechListTitle>
        <TechList>
          {techList.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechList>
        
        <SecondaryButton as="a" href={link} target="_blank" rel="noopener noreferrer">
          VIEW PROJECT
        </SecondaryButton>
      </ProjectContent>
    </ProjectCardContainer>
  );
};

export default ProjectCard;