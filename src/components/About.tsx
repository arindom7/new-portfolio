import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 6rem 2rem;
  background-color: #0a192f;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #e6f1ff;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 4px;
    background-color: #64ffda;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled(motion.div)`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #e6f1ff;
  
  &::before {
    content: '▹';
    color: #64ffda;
  }
`;

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'HTML',
    'React',
    'C++',
    'Python',
    'SQL',
    'C'
  ];

  return (
    <AboutContainer id="about">
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </SectionTitle>
        <AboutContent>
          <TextContent
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Hello! I'm a passionate front-end developer. I enjoy creating
              seamless user experiences and building robust applications that solve
              real-world problems.
            </p>
            <p>
              My journey in software development began with a curiosity about how
              things work on the web, which led me to dive deep into various
              technologies and frameworks. I'm constantly learning and exploring
              new tools to enhance my development skills.
            </p>
          </TextContent>
          <SkillsGrid
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <SkillItem
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill}
              </SkillItem>
            ))}
          </SkillsGrid>
        </AboutContent>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About; 