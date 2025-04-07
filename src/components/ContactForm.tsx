import { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../styles/SharedComponents';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input<{ hasError?: boolean }>`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ hasError }) => hasError ? 'red' : 'var(--color-gray-light)'};
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  background-color: var(--color-white-light);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const Textarea = styled.textarea<{ hasError?: boolean }>`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ hasError }) => hasError ? 'red' : 'var(--color-gray-light)'};
  background-color: var(--color-white-light);
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
`;

const SuccessMessage = styled.div`
  background-color: #4CAF50;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send the form data to your backend
      console.log('Form data submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Show success message
      setFormSubmitted(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }
  };
  
  return (
    <>
      {formSubmitted && (
        <SuccessMessage>
          Your message has been sent successfully!
        </SuccessMessage>
      )}
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            hasError={!!formErrors.name}
          />
          {formErrors.name && <ErrorMessage>{formErrors.name}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            hasError={!!formErrors.email}
          />
          {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            hasError={!!formErrors.subject}
          />
          {formErrors.subject && <ErrorMessage>{formErrors.subject}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            hasError={!!formErrors.message}
          />
          {formErrors.message && <ErrorMessage>{formErrors.message}</ErrorMessage>}
        </FormGroup>
        
        <PrimaryButton type="submit">SEND MESSAGE</PrimaryButton>
      </Form>
    </>
  );
};

export default ContactForm;