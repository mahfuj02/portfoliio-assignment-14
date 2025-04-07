import styled from 'styled-components';
import { SectionTitle, SectionDescription, Underline } from '../styles/SharedComponents';
import ContactForm from '../components/ContactForm';

const ContactSection = styled.section`
  background-color: var(--color-light);
`;

const Contact = () => {
  return (
    <ContactSection>
      <div className="container">
        <SectionTitle>CONTACT</SectionTitle>
        <Underline />
        
        <SectionDescription>
          Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
        </SectionDescription>
        
        <ContactForm />
      </div>
    </ContactSection>
  );
};

export default Contact;