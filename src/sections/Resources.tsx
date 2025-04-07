import styled from 'styled-components';
import { SectionTitle, SectionDescription, Underline } from '../styles/SharedComponents';
import { Resource } from '../types';
import ResourceCard from '../components/ResourcesCard';

const ResourcesSection = styled.section`
  background-color: var(--color-light);
`;

const ResourcesGrid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Resources = () => {
  const resources: Resource[] = [
    {
      id: 1,
      title: "MDN Web Docs",
      image: "/assets/resources/mdn.png",
      summary: "Comprehensive documentation for web technologies including HTML, CSS, and JavaScript.",
      link: "https://developer.mozilla.org/"
    },
    {
      id: 2,
      title: "React Documentation",
      image: "/assets/resources/react.png",
      summary: "Official documentation and guides for building applications with React.",
      link: "https://reactjs.org/docs/getting-started.html"
    },
    {
      id: 3,
      title: "TypeScript Handbook",
      image: "/assets/resources/typescript.png",
      summary: "The official TypeScript documentation with guides and examples.",
      link: "https://www.typescriptlang.org/docs/"
    },
    {
      id: 4,
      title: "Tailwind CSS",
      image: "/assets/resources/tailwind.png",
      summary: "Documentation for the utility-first CSS framework used in this project.",
      link: "https://tailwindcss.com/docs"
    },
    {
      id: 5,
      title: "CSS-Tricks",
      image: "/assets/resources/css-tricks.png",
      summary: "Tips, tricks, and techniques for front-end web developers with a focus on CSS.",
      link: "https://css-tricks.com/"
    },
    {
      id: 6,
      title: "GitHub",
      image: "/assets/resources/github.png",
      summary: "Web-based platform for version control and collaboration using Git.",
      link: "https://github.com/"
    }
  ];
  
  return (
    <ResourcesSection>
      <div className="container">
        <SectionTitle>RESOURCES</SectionTitle>
        <Underline />
        
        <SectionDescription>
          A collection of helpful resources, tools, and websites that I've found valuable throughout my
          web development journey.
        </SectionDescription>
        
        <ResourcesGrid>
          {resources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </ResourcesGrid>
      </div>
    </ResourcesSection>
  );
};

export default Resources;