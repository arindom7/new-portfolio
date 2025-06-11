import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsContainer = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: #112240;
  border-radius: 8px;
  padding: 2rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: #e6f1ff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechItem = styled.span`
  color: #64ffda;
  font-size: 0.9rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: #e6f1ff;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #64ffda;
  }
`;

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Project One",
      description: "A full-stack web application that helps the farmers in various ways.",
      image: "/images/project1.jpg",
      technologies: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/arindom7/MidBLOOM-new",
      live: "https://arindom7.github.io/MidBLOOM-new/"
    },
    {
      title: "Project Two",
      description: "An website that can make your unterstand your medications.",
      image: "/images/project2.jpg",
      technologies: ["React", "Steller api", "Groq api", "Firebase"],
      github: "https://github.com/Rupamjb/Healiofy",
      live: "https://healiofy.vercel.app/"
    },
    {
      title: "Project Three",
      description: "A plateform that helps the HR's for selecting the employees.",
      image: "/images/project3.jpg",
      technologies: ["React", "TypeScript", "GraphQL", "AWS"],
      github: "https://github.com/RidDevs/HireWise",
      live: "https://riddevs.github.io/HireWise/homenew"
    }
  ];

  return (
    <ProjectsContainer id="projects">
      <ContentWrapper>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.technologies.map(tech => (
                  <TechItem key={tech}>{tech}</TechItem>
                ))}
              </TechStack>
              <ProjectLinks>
                <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </ProjectLink>
                <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </ProjectLink>
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentWrapper>
    </ProjectsContainer>
  );
};

export default Projects; 