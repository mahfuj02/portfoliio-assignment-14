import styled from 'styled-components';

type SkillCardProps = {
  title: string;
  skills: string[];
};

const CardContainer = styled.div`
  background-color: var(--color-light);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--color-secondary);
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--color-white);
  padding: 0.75rem 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const SkillDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-primary);
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillDot />
            <SkillName>{skill}</SkillName>
          </SkillItem>
        ))}
      </SkillsList>
    </CardContainer>
  );
};

export default SkillCard;