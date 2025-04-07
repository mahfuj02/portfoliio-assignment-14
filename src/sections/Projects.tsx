import styled from 'styled-components';
import { SectionTitle, SectionDescription, Underline } from '../styles/SharedComponents';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

const ProjectsSection = styled.section`
  background-color: var(--color-light);
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Component Library",
      description: "A UI component library built with React to streamline web development with reusable, customizable elements.",
      image: "https://www.fraktio.fi/hs-fs/hubfs/Esimerkkej%C3%A4%20komponenteista.png?width=1850&height=1080&name=Esimerkkej%C3%A4%20komponenteista.png",
      link: "https://github.com/yourusername/component-library",
      techList: ["React", "TypeScript", "Storybook", "CSS"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A comprehensive task management application with features for organizing, prioritizing, and tracking progress on projects.",
      image: "https://plaky.com/assets/images/web-assets/single-project.png",
      link: "https://github.com/yourusername/task-management",
      techList: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce website with product catalog, shopping cart, and checkout functionality.",
      image: "https://lh3.googleusercontent.com/547qstTP97bHCAO2UYucA6AfX-rqA6P3VV8J2MtNXl9haUWKYsl-oRJttXpsUHxN-0GoI3QCghLMvEl4XqNgPEGTLFBvbAtezQh3i3M_wOse6x6cnU7ztRdc6EWLd0sI1FHT5MN6jZsTgaU2DKJUhdE",
      link: "https://github.com/yourusername/ecommerce-platform",
      techList: ["React", "Redux", "Node.js", "Stripe API"]
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "An interactive weather application providing real-time forecasts and meteorological data for locations worldwide.",
      image: "https://www.figma.com/community/resource/c5ab864c-3b63-4997-8366-38b4b9603d95/thumbnail",
      link: "https://github.com/yourusername/weather-dashboard",
      techList: ["JavaScript", "HTML", "CSS", "Weather API"]
    }
  ];

  return (
    <ProjectsSection>
      <div className="container">
        <SectionTitle>PROJECTS</SectionTitle>
        <Underline />
        
        <SectionDescription>
          Here you will find some of the personal and client projects that I've created, each with its own
          description and technologies used.
        </SectionDescription>
        
        <ProjectsList>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isEven={index % 2 === 0}
            />
          ))}
        </ProjectsList>
      </div>
    </ProjectsSection>
  );
};

export default Projects;