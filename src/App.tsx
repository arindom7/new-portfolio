import { useState, useEffect } from 'react';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Intro from './components/Intro';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0a192f;
  color: #e6f1ff;
`;

const ScrollArrow = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  color: #64ffda;
  font-size: 2rem;
  z-index: 10;
  background: rgba(10, 25, 47, 0.85);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 24px 0 #64ffda33;
  border: 2px solid #64ffda;
  transition: background 0.3s, box-shadow 0.3s, border-color 0.3s;
  &:hover {
    background: #64ffda;
    color: #0a192f;
    box-shadow: 0 0 32px 4px #64ffda99;
    border-color: #fff;
  }
`;

function App() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    if (!showHome) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showHome]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowHome(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHome = () => {
    setShowHome(true);
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <AppContainer>
      <Intro showHome={showHome} />
      <ScrollArrow
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={scrollToHome}
      >
        <FaChevronDown />
      </ScrollArrow>
      <Home show={showHome} />
      <About />
      <Projects />
      <Contact />
    </AppContainer>
  );
}

export default App; 