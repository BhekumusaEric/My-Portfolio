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

// Projects data
export const allProjects = [
  {
    id: 1,
    title: 'SafeWayAI',
    slug: 'safeway-ai',
    description: 'AI-powered emergency detection platform that provides safe routes to destinations, detects danger in real-time, and allows users to report incidents. The app integrates with Google Maps and uses real crime data to analyze route safety.',
    technologies: ['Python', 'Flet', 'Google Maps API', 'Firebase', 'Machine Learning'],
    category: 'AI/ML',
    github: 'https://github.com/BhekumusaEric/MSAIskillshackathon',
    demo: 'https://github.com/BhekumusaEric/MSAIskillshackathon',
    image: './images/projects/safeway-ai.jpg'
  },
  {
    id: 2,
    title: 'Smart Loan Approval Predictor',
    slug: 'smart-loan-approval',
    description: 'A mobile application for Eric Bank System that allows users to apply for loans and get instant approval predictions using machine learning. The app analyzes user data to determine loan eligibility.',
    technologies: ['Python', 'Kivy', 'Machine Learning', 'SQLite'],
    category: 'AI/ML',
    github: 'https://github.com/BhekumusaEric/Smart-Loan-Approval-Predictor',
    demo: 'https://github.com/BhekumusaEric/Smart-Loan-Approval-Predictor',
    image: './images/projects/loan-approval.jpg'
  },
  {
    id: 3,
    title: 'Eduwize',
    slug: 'eduwize',
    description: 'AI-powered learning platform designed to enhance student learning through personalized study material recommendations, quizzes with performance tracking, and resource management.',
    technologies: ['Django', 'Azure Cognitive Services', 'Python', 'PostgreSQL'],
    category: 'Web Development',
    github: 'https://github.com/BhekumusaEric/Eduwize',
    demo: 'https://github.com/BhekumusaEric/Eduwize',
    image: './images/projects/eduwize.jpg'
  },
  {
    id: 4,
    title: 'My Phone Repair Website',
    slug: 'phone-repair-website',
    description: 'A personal website for a mobile repair shop, showcasing services and allowing customers to book repairs online.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    github: 'https://github.com/BhekumusaEric/myphonerepairwebsite',
    demo: 'https://bhekumusaeric.github.io/myphonerepairwebsite/',
    image: './images/projects/phone-repair.jpg'
  },
  {
    id: 5,
    title: 'CharityBlockchain',
    slug: 'charity-blockchain',
    description: 'Ethereum blockchain project aimed at ensuring complete transparency in charity transactions. Integrates a solidity contract with a metamask wallet on Ganache interfaced accounts and deployment using Node.js.',
    technologies: ['Blockchain', 'Solidity', 'Ethereum', 'Node.js'],
    category: 'Blockchain',
    github: 'https://github.com/BhekumusaEric/CharityBlockchain',
    demo: 'https://github.com/BhekumusaEric/CharityBlockchain',
    image: './images/projects/charity-blockchain.jpg'
  },
  {
    id: 6,
    title: 'TruBudget',
    slug: 'trubudget',
    description: 'A blockchain-based workflow tool for efficient and transparent project management.',
    technologies: ['Blockchain', 'JavaScript', 'React'],
    category: 'Blockchain',
    github: 'https://github.com/BhekumusaEric/TruBudget',
    demo: 'https://github.com/BhekumusaEric/TruBudget',
    image: './images/projects/trubudget.jpg'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI/ML', 'Web Development', 'Blockchain'];

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
