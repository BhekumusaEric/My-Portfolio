import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import StarfieldAnimation from '../components/StarfieldAnimation';
import ProjectCard from '../components/ProjectCard';

const ProjectsContainer = styled.div`
  position: relative;
  padding-top: 80px;
`;

const PageHeader = styled.div`
  text-align: center;
  padding: 4rem 0;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1.5rem;
`;

const PageDescription = styled.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 700px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0 4rem;
  padding: 0 2rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  background-color: ${props => props.active ? 'var(--primary-color)' : 'rgba(31, 34, 46, 0.7)'};
  color: ${props => props.active ? 'white' : '#a0a0a0'};

  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : 'rgba(31, 34, 46, 0.9)'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 5rem 0;
  grid-column: 1 / -1;
`;

const EmptyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #a0a0a0;
  margin-bottom: 1rem;
`;

const EmptyDescription = styled.p`
  color: #777;
  max-width: 500px;
  margin: 0 auto;
`;

// Enhanced Projects data - Updated to include recent work and expanded skill set
// This showcases the developer's growth and diverse technical capabilities
export const allProjects = [
  {
    id: 101,
    title: 'Apply4Me',
    slug: 'apply4me',
    description: 'The flagship automation platform revolutionizing South African higher education applications through advanced web scraping and process automation. Served 10,000+ users.',
    technologies: ['React', 'Node.js', 'Python', 'Web Scraping', 'Automation'],
    category: 'Full Stack / Automation',
    github: 'https://github.com/BhekumusaEric/',
    demo: 'https://apply4me-eta.vercel.app/',
    image: '/images/projects/apply4me.jpg',
    featured: true,
    stats: '10,000+ Users Served'
  },
  {
    id: 102,
    title: 'SAAIO Training Grounds',
    slug: 'saaio-training',
    description: 'An interactive AI education platform for students competing in the International Olympiad in AI. Features a "Read → Practice" pattern with an in-browser Python environment (Pyodide).',
    technologies: ['React', 'Python', 'Pyodide', 'AI/ML'],
    category: 'AI / EdTech',
    github: 'https://github.com/BhekumusaEric/',
    demo: 'https://ai-learning-system-ten.vercel.app/',
    image: '/images/projects/saaio.jpg',
    featured: true
  },
  {
    id: 103,
    title: 'Digital Inclusion Program (DIP)',
    slug: 'dip',
    description: 'A coding literacy platform built pro bono for WeThinkCode_ × IDC SEF partnership to train communities across South Africa in Python and basic ML.',
    technologies: ['React', 'Python', 'EdTech'],
    category: 'Social Impact / EdTech',
    github: 'https://github.com/BhekumusaEric/',
    demo: 'https://ai-learning-system-ten.vercel.app/dip/login',
    image: '/images/projects/dip.jpg'
  },
  {
    id: 104,
    title: 'Work Readiness Program (WRP)',
    slug: 'wrp',
    description: 'A workplace skills platform featuring interactive modules, an AI mock interview bot, and a CV builder, built pro bono for WeThinkCode_ community rollout.',
    technologies: ['React', 'AI Bot', 'Web Development'],
    category: 'Social Impact / Web',
    github: 'https://github.com/BhekumusaEric/',
    demo: 'https://ai-learning-system-ten.vercel.app/wrp/login',
    image: '/images/projects/wrp.jpg'
  },
  {
    id: 1,
    title: 'SafeWayAI',
    slug: 'safeway-ai',
    description: 'AI-powered emergency detection platform that provides safe routes to destinations, detects danger in real-time, and allows users to report incidents.',
    technologies: ['Python', 'Flet', 'Google Maps API', 'Firebase', 'Machine Learning'],
    category: 'AI/ML',
    github: 'https://github.com/BhekumusaEric/MSAIskillshackathon',
    demo: 'https://github.com/BhekumusaEric/MSAIskillshackathon',
    image: '/images/projects/safeway-ai.jpg'
  },
  {
    id: 2,
    title: 'Smart Loan Approval Predictor',
    slug: 'smart-loan-approval',
    description: 'A mobile application for Eric Bank System that allows users to apply for loans and get instant approval predictions using machine learning.',
    technologies: ['Python', 'Kivy', 'Machine Learning', 'SQLite'],
    category: 'AI/ML',
    github: 'https://github.com/BhekumusaEric/Smart-Loan-Approval-Predictor',
    demo: 'https://github.com/BhekumusaEric/Smart-Loan-Approval-Predictor',
    image: '/images/projects/loan-approval.jpg'
  },
  {
    id: 3,
    title: 'Eduwize',
    slug: 'eduwize',
    description: 'AI-powered learning platform designed to enhance student learning through personalized study material recommendations and performance tracking.',
    technologies: ['Django', 'Azure Cognitive Services', 'Python', 'PostgreSQL'],
    category: 'Web Development',
    github: 'https://github.com/BhekumusaEric/Eduwize',
    demo: 'https://github.com/BhekumusaEric/Eduwize',
    image: '/images/projects/eduwize.jpg'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  // Updated categories to reflect expanded project portfolio and skill diversity
  const categories = ['All', 'AI/ML', 'Web Development', 'Blockchain', 'Java Development', 'Data Science', 'Cloud Development', 'Framework'];

  // Filter projects based on selected category
  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === filter);

  return (
    <ProjectsContainer>
      <StarfieldAnimation />

      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>My Projects</PageTitle>
          <Divider />
          <PageDescription>
            Explore my portfolio of projects spanning AI/ML, web development, and blockchain technologies.
          </PageDescription>
        </motion.div>
      </PageHeader>

      <FilterContainer>
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <FilterButton
              active={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </FilterButton>
          </motion.div>
        ))}
      </FilterContainer>

      <ProjectsGrid>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))
        ) : (
          <EmptyState>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <EmptyTitle>No projects found</EmptyTitle>
              <EmptyDescription>
                No projects match the selected filter. Try selecting a different category.
              </EmptyDescription>
            </motion.div>
          </EmptyState>
        )}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
