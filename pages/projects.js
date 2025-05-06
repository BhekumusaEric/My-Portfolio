import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import AIChatbot from '../components/AIChatbot';

// Projects data
const allProjects = [
  {
    id: 1,
    title: 'SafeWayAI',
    slug: 'safeway-ai',
    description: 'AI-powered emergency detection platform that provides safe routes to destinations, detects danger in real-time, and allows users to report incidents. The app integrates with Google Maps and uses real crime data to analyze route safety.',
    technologies: ['Python', 'Flet', 'Google Maps API', 'Firebase', 'Machine Learning'],
    category: 'AI/ML',
    github: 'https://github.com/BhekumusaEric/MSAIskillshackathon'
  },
  {
    id: 2,
    title: 'Smart Loan Approval Predictor',
    slug: 'smart-loan-approval',
    description: 'A mobile application for Eric Bank System that allows users to apply for loans and get instant approval predictions using machine learning. The app analyzes user data to determine loan eligibility.',
    technologies: ['Python', 'Kivy', 'Machine Learning', 'SQLite'],
    category: 'AI/ML',
    github: 'https://github.com/BhekumusaEric/Smart-Loan-Approval-Predictor'
  },
  {
    id: 3,
    title: 'Eduwize',
    slug: 'eduwize',
    description: 'AI-powered learning platform designed to enhance student learning through personalized study material recommendations, quizzes with performance tracking, and resource management.',
    technologies: ['Django', 'Azure Cognitive Services', 'Python', 'PostgreSQL'],
    category: 'Web Development',
    github: 'https://github.com/BhekumusaEric/Eduwize'
  },
  {
    id: 4,
    title: 'My Phone Repair Website',
    slug: 'phone-repair-website',
    description: 'A personal website for a mobile repair shop, showcasing services and allowing customers to book repairs online.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    github: 'https://github.com/BhekumusaEric/myphonerepairwebsite'
  },
  {
    id: 5,
    title: 'CharityBlockchain',
    slug: 'charity-blockchain',
    description: 'Ethereum blockchain project aimed at ensuring complete transparency in charity transactions. Integrates a solidity contract with a metamask wallet on Ganache interfaced accounts and deployment using Node.js.',
    technologies: ['Blockchain', 'Solidity', 'Ethereum', 'Node.js'],
    category: 'Blockchain',
    github: 'https://github.com/BhekumusaEric/CharityBlockchain'
  },
  {
    id: 6,
    title: 'TruBudget',
    slug: 'trubudget',
    description: 'A blockchain-based workflow tool for efficient and transparent project management.',
    technologies: ['Blockchain', 'JavaScript', 'React'],
    category: 'Blockchain',
    github: 'https://github.com/BhekumusaEric/TruBudget'
  },
  {
    id: 7,
    title: 'QuickMart Grocery Store',
    slug: 'quickmart',
    description: 'An online grocery store that allows customers to browse and purchase groceries from the comfort of their homes. The store offers a wide range of products, including fresh produce, dairy, and household items.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    category: 'Web Development',
    github: 'https://github.com/BhekumusaEric/QuickMart-Grocery-Store'
  },
  {
    id: 8,
    title: 'Sales And Stock Management System',
    slug: 'sales-stock-management',
    description: 'A comprehensive system for managing sales and inventory for retail businesses.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    category: 'Web Development',
    github: 'https://github.com/BhekumusaEric/SalesAndStockManagementSystem'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI/ML', 'Web Development', 'Blockchain'];

  // Filter projects based on selected category
  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === filter);

  return (
    <Layout title="Projects | Bhekumusa Eric Ntshwenya">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my portfolio of projects spanning AI/ML, web development, and blockchain technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-6 py-2 rounded-full ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                } transition-colors`}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-bold text-gray-400 mb-4">No projects found</h3>
              <p className="text-gray-500">
                No projects match the selected filter. Try selecting a different category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary bg-opacity-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects and creative ideas. Let's create something amazing together!
            </p>
            <a
              href="https://github.com/BhekumusaEric"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium mr-4 inline-block"
            >
              View GitHub
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium inline-block"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* AI Chatbot */}
      <AIChatbot />
    </Layout>
  );
}
