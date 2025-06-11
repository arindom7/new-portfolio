import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const gradientBg = `linear-gradient(135deg, #0a192f 60%, #1e3c72 100%)`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 0 0 #64ffda44, 0 0 20px 0 #64ffda44;
  }
  50% {
    box-shadow: 0 0 40px 10px #64ffda99, 0 0 60px 20px #64ffda33;
  }
  100% {
    box-shadow: 0 0 0 0 #64ffda44, 0 0 20px 0 #64ffda44;
  }
`;

const IntroContainer = styled(motion.div)`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${gradientBg};
  overflow: hidden;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProfileImage = styled(motion.img)`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #64ffda;
  box-shadow: 0 8px 32px 0 #64ffda33;
  animation: ${glow} 3s infinite;
  background: #112240;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.08) rotate(-2deg);
    box-shadow: 0 0 60px 10px #64ffda99;
  }
`;

const Name = styled(motion.div)`
  font-size: 4.5rem;
  color: #e6f1ff;
  font-weight: 800;
  letter-spacing: 2px;
  text-align: center;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Subtitle = styled(motion.div)`
  font-size: 2rem;
  color: #64ffda;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  letter-spacing: 1px;
`;

const Title = styled(motion.div)`
  font-size: 1.3rem;
  color: #bfc9d1;
  margin-bottom: 2.5rem;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;

const Letter = styled(motion.span)`
  display: inline-block;
  margin: 0 2px;
`;

const BgBlur = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 350px;
  height: 350px;
  background: #64ffda44;
  filter: blur(80px);
  z-index: 0;
  border-radius: 50%;
`;

const BgBlur2 = styled.div`
  position: absolute;
  bottom: 5%;
  right: 10%;
  width: 250px;
  height: 250px;
  background: #1e3c72aa;
  filter: blur(90px);
  z-index: 0;
  border-radius: 50%;
`;

const PatternSVG = styled.svg`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  opacity: 0.13;
  @media (max-width: 900px) {
    opacity: 0.08;
  }
`;

interface IntroProps {
  showHome: boolean;
}

const Intro = ({ showHome }: IntroProps) => {
  const name = "Arindom Mahanta";
  const subtitle = "Front End Developer";
  const title = "";

  const letterVariants = {
    initial: { y: 0 },
    hover: (i: number) => ({
      y: -10,
      color: "#64ffda",
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <IntroContainer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <PatternSVG width="300" height="300" viewBox="0 0 300 300" style={{top: 0, left: 0}}>
        <circle cx="60" cy="60" r="50" fill="none" stroke="#64ffda" strokeWidth="2" />
        <rect x="180" y="30" width="60" height="60" rx="15" fill="none" stroke="#fff" strokeWidth="2" />
        <polygon points="150,200 180,250 120,250" fill="none" stroke="#64ffda" strokeWidth="2" />
      </PatternSVG>
      <PatternSVG width="200" height="200" viewBox="0 0 200 200" style={{bottom: 0, right: 0}}>
        <circle cx="160" cy="160" r="30" fill="none" stroke="#fff" strokeWidth="2" />
        <rect x="20" y="120" width="40" height="40" rx="10" fill="none" stroke="#64ffda" strokeWidth="2" />
        <polygon points="100,20 120,60 80,60" fill="none" stroke="#fff" strokeWidth="2" />
      </PatternSVG>
      <BgBlur />
      <BgBlur2 />
      <ProfileImageWrapper>
        {!showHome && (
          <ProfileImage
            src="/images/your-photo.jpg"
            alt="Your Name"
            layoutId="profile-photo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        )}
      </ProfileImageWrapper>
      <Name
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        {name.split("").map((letter, index) => (
          <Letter
            key={`name-${index}`}
            custom={index}
            variants={letterVariants}
            initial="initial"
            whileHover="hover"
          >
            {letter}
          </Letter>
        ))}
      </Name>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        {subtitle}
      </Subtitle>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </Title>
    </IntroContainer>
  );
};

export default Intro; 