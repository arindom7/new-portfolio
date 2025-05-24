import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 6rem 2rem;
  background-color: #0a192f;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #e6f1ff;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: #64ffda;
  }
`;

const ContactText = styled(motion.p)`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

const Label = styled.label`
  color: #e6f1ff;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  background-color: #112240;
  border: 1px solid #233554;
  border-radius: 4px;
  color: #e6f1ff;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background-color: #112240;
  border: 1px solid #233554;
  border-radius: 4px;
  color: #e6f1ff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: transparent;
  border: 1px solid #64ffda;
  border-radius: 4px;
  color: #64ffda;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialLink = styled.a`
  color: #e6f1ff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #64ffda;
  }
`;

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <ContactContainer id="contact">
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </SectionTitle>
        <ContactText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </ContactText>
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" required />
          </FormGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialLink>
        </SocialLinks>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact; 