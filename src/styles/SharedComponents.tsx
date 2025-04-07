import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding: 12px 24px;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 1rem;
`;

export const PrimaryButton = styled(Button)`
  background-color: var(--color-primary);
  color: var(--color-white);
  
  &:hover {
    background-color: #6a3bce;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: var(--color-primary);
  text-align: center;
  border: 2px solid var(--color-primary);
  width: 200px;
  
  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

export const SectionDescription = styled.p`
  text-align: center;
  color: var(--color-gray);
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
`;

export const Underline = styled.div`
  width: 80px;
  height: 4px;
  background-color: var(--color-primary);
  margin: 0 auto 2.5rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
`;

export const Card = styled.div`
  background-color: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;