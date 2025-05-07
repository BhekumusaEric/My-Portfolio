import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import StarfieldAnimation from '../components/StarfieldAnimation';
import { allProjects } from './Projects'; // Import projects data

const ProjectDetailContainer = styled.div`
  position: relative;
  padding-top: 80px;
  min-height: 100vh;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(-5px);
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 3rem;
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0;
`;

const TechTag = styled.span`
  background: rgba(9, 105, 218, 0.1);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 3fr 2fr;
  }
`;

const ProjectDescription = styled.div`
  color: #a0a0a0;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const ProjectLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &.primary {
    background: var(--primary-color);
    color: white;
    
    &:hover {
      background: #0056b3;
    }
  }
  
  &.secondary {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    
    &:hover {
      background: rgba(9, 105, 218, 0.1);
    }
  }
`;

const ProjectImage = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #2a2d3a 0%, #1a1c24 100%);
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectInitial = styled.div`
  font-size: 5rem;
  font-weight: 800;
  color: var(--primary-color);
`;

const NotFound = styled.div`
  text-align: center;
  padding: 5rem 0;
`;

const NotFoundTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Find the project with the matching slug
    const foundProject = allProjects.find(p => p.slug === slug);
    setProject(foundProject);
    setLoading(false);
  }, [slug]);
  
  if (loading) {
    return (
      <ProjectDetailContainer>
        <StarfieldAnimation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
      </ProjectDetailContainer>
    );
  }
  
  if (!project) {
    return (
      <ProjectDetailContainer>
        <StarfieldAnimation />
        <div className="container mx-auto px-4 py-8">
          <NotFound>
            <NotFoundTitle>Project Not Found</NotFoundTitle>
            <p>The project you're looking for doesn't exist or has been removed.</p>
            <BackButton to="/projects">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </BackButton>
          </NotFound>
        </div>
      </ProjectDetailContainer>
    );
  }
  
  return (
    <ProjectDetailContainer>
      <StarfieldAnimation />
      <div className="container mx-auto px-4 py-8">
        <BackButton to="/projects">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </BackButton>
        
        <ProjectHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectTitle className="gradient-text">{project.title}</ProjectTitle>
            
            <TechStack>
              {project.technologies.map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </TechStack>
          </motion.div>
        </ProjectHeader>
        
        <ProjectContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProjectDescription>
              <p>{project.description}</p>
              
              <ProjectLinks>
                {project.github && (
                  <ProjectLink 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View Code
                  </ProjectLink>
                )}
                
                {project.demo && (
                  <ProjectLink 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z" />
                      <path d="M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z" />
                    </svg>
                    Live Demo
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectDescription>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ProjectImage>
              {project.image ? (
                <img 
                  src={process.env.PUBLIC_URL + project.image} 
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <ProjectInitial>{project.title.charAt(0)}</ProjectInitial>
              )}
            </ProjectImage>
          </motion.div>
        </ProjectContent>
      </div>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail;
