import styled from 'styled-components';
import { SectionTitle, SectionDescription, Underline, PrimaryButton } from '../styles/SharedComponents';

const AboutSection = styled.section`
  background-color: var(--color-white);
`;

const AboutContent = styled.div`
  display: grid;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutInfo = styled.div``;

const AboutTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const AboutText = styled.p`
  color: var(--color-gray);
  margin-bottom: 1.5rem;
`;

const SkillsContainer = styled.div``;

const SkillsTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillItem = styled.div`
  background-color: var(--color-light);
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
`;

const About = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 
    'Node.js', 'Express', 'MongoDB', 'Git', 'GitHub', 
    'Responsive Design', 'RESTful APIs'
  ];
  
  return (
    <AboutSection>
      <div className="container">
        <SectionTitle>ABOUT ME</SectionTitle>
        <Underline />
        
        <SectionDescription>
          Here you will find more information about me, what I do, and my current skills mostly in terms
          of programming and technology
        </SectionDescription>
        
        <AboutContent>
          <AboutInfo>
            <AboutTitle>Get to know me!</AboutTitle>
            
            <AboutText>
              I'm a <strong>Frontend Focused Web Developer</strong> building and managing the 
              Front-end of Websites and Web Applications that leads to the success of the 
              overall product. Check out some of my work in the Projects section.
            </AboutText>
            
            <AboutText>
              I also like sharing content related to the stuff that I have learned over the 
              years in <strong>Web Development</strong> so it can help other people of the Dev 
              Community. Feel free to connect or follow me on my social media profiles.
            </AboutText>
            
            <AboutText>
              I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If 
              you have a good opportunity that matches my skills and experience then don't 
              hesitate to contact me.
            </AboutText>
            
            <PrimaryButton>CONTACT ME</PrimaryButton>
          </AboutInfo>
          
          <SkillsContainer>
            <SkillsTitle>My Skills</SkillsTitle>
            
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillsGrid>
          </SkillsContainer>
        </AboutContent>
      </div>
    </AboutSection>
  );
};

export default About;