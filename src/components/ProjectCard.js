import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styled from 'styled-components';

const Card = styled(motion.div)`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  transform-style: preserve-3d;
  perspective: 1000px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProjectImage = styled.div`
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #2a2d3a 0%, #1a1c24 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease;
  transform: ${props => props.hovered ? 'scale(1.05)' : 'scale(1)'};
`;

const ProjectInitial = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary-color);
`;

const ProjectPreview = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  color: #a0a0a0;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  font-size: 0.95rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(9, 105, 218, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const CardLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardLink = styled.a`
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  
  // Mouse position for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth out the mouse movement
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  
  // Transform mouse position into rotation values
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  
  // Handle mouse move for 3D effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized mouse position
    const xValue = (e.clientX - rect.left) / width - 0.5;
    const yValue = (e.clientY - rect.top) / height - 0.5;
    
    x.set(xValue);
    y.set(yValue);
  };
  
  // Reset card position when mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };
  
  return (
    <Card
      ref={cardRef}
      whileHover={{ scale: 1.02 }}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent>
        <ProjectImage hovered={hovered}>
          <div className="text-center">
            <ProjectInitial>{project.title.charAt(0)}</ProjectInitial>
            <ProjectPreview>Project Preview</ProjectPreview>
          </div>
        </ProjectImage>
        
        <ProjectTitle className="gradient-text">{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        
        <TechStack>
          {project.technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechStack>
        
        <CardLinks>
          {project.github && (
            <CardLink 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Code
            </CardLink>
          )}
          
          <Link to={`/projects/${project.slug}`}>
            <CardLink as="span">
              View Details
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </CardLink>
          </Link>
        </CardLinks>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
