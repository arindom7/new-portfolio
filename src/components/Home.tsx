import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: #0a192f;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #64ffda;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Name = styled(motion.h1)`
  font-size: 5rem;
  color: #e6f1ff;
  margin: 0;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: #64ffda;
  margin: 1rem 0;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #8892b0;
  line-height: 1.6;
  margin-top: 2rem;
`;

interface HomeProps {
  show: boolean;
}

const Home = ({ show }: HomeProps) => {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContentWrapper>
        {show && (
          <ProfileImage
            src="/images/your-photo.jpg"
            alt="Your Name"
            layoutId="profile-photo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
        )}
        <TextContent>
          <Name
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Arindom Mahanta
          </Name>
          <Title
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Front-end Developer
          </Title>
          <Description
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            I'm a passionate developer with expertise in building modern web applications.
            I love creating beautiful and functional user interfaces while ensuring
            robust backend solutions.
          </Description>
        </TextContent>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home; 