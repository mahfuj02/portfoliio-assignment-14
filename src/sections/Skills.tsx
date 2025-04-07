import styled from 'styled-components';
import { SectionTitle, SectionDescription, Underline } from '../styles/SharedComponents';
import SkillCard from '../components/SkillCard';

const SkillsSection = styled.section`
  background-color: var(--color-white);
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Skills = () => {
  const skillCategories = {
    languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP'],
    frameworks: ['React', 'Node.js', 'Express', 'WordPress', 'Bootstrap', 'Tailwind CSS'],
    tools: ['Git', 'GitHub', 'VS Code', 'npm', 'Webpack', 'Docker', 'Responsive Design', 'RESTful APIs']
  };
  
  return (
    <SkillsSection>
      <div className="container">
        <SectionTitle>SKILLS</SectionTitle>
        <Underline />
        
        <SectionDescription>
          Here's a comprehensive list of my technical skills and the technologies I work with.
        </SectionDescription>
        
        <SkillsGrid>
          <SkillCard title="Languages" skills={skillCategories.languages} />
          <SkillCard title="Frameworks & Libraries" skills={skillCategories.frameworks} />
          <SkillCard title="Tools & Technologies" skills={skillCategories.tools} />
        </SkillsGrid>
      </div>
    </SkillsSection>
  );
};

export default Skills;