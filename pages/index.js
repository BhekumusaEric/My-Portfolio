import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ThreeBackground from '../components/ThreeBackground';
import AnimatedAvatar from '../components/AnimatedAvatar';
import TechStackModel from '../components/TechStackModel';
import ProjectCard from '../components/ProjectCard';
import AIChatbot from '../components/AIChatbot';

// Featured projects data
const featuredProjects = [
  {
    id: 1,
    title: 'SafeWayAI',
    slug: 'safeway-ai',
    description: 'AI-powered emergency detection platform that provides safe routes to destinations and detects danger in real-time.',
    technologies: ['Python', 'Flet', 'Google Maps API', 'Firebase'],
    github: 'https://github.com/BhekumusaEric/MSAIskillshackathon'
  },
  {
    id: 2,
    title: 'Smart Loan Approval Predictor',
    slug: 'smart-loan-approval',
    description: 'Mobile application for Eric Bank System that allows users to apply for loans and get instant approval predictions using ML.',
    technologies: ['Python', 'Kivy', 'Machine Learning'],
    github: 'https://github.com/BhekumusaEric/Smart-Loan-Approval-Predictor'
  },
  {
    id: 3,
    title: 'Eduwize',
    slug: 'eduwize',
    description: 'AI-powered learning platform designed to enhance student learning through personalized study material recommendations.',
    technologies: ['Django', 'Azure Cognitive Services', 'Python'],
    github: 'https://github.com/BhekumusaEric/Eduwize'
  }
];

export default function Home() {
  return (
    <Layout>
      <ThreeBackground />

      {/* Hero Section */}
      <section className="section relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Hi, I'm <span className="gradient-text">Eric Ntshwenya</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                  AI/ML Developer & Problem Solver
                </h2>
                <p className="text-lg text-gray-400 mb-8 max-w-lg">
                  I build intelligent solutions that solve real-world problems. Specializing in AI, machine learning, and web development.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/projects">
                    <motion.a
                      className="px-6 py-3 bg-primary text-white rounded-lg font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View My Work
                    </motion.a>
                  </Link>
                  <Link href="/contact">
                    <motion.a
                      className="px-6 py-3 border border-primary text-primary rounded-lg font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Me
                    </motion.a>
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <AnimatedAvatar />
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-secondary bg-opacity-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-lg text-gray-300 mb-6">
                  I'm a passionate software developer with expertise in AI, mobile applications, and web development. I enjoy building innovative solutions that solve real-world problems and enhance user experiences.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Currently focused on AI and machine learning technologies, I'm constantly exploring new ways to leverage these tools to create impactful applications.
                </p>
                <Link href="/about">
                  <motion.a
                    className="text-primary font-medium flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Learn more about me
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </Link>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <TechStackModel />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Check out some of my recent work. These projects showcase my skills in AI, web development, and problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
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

          <div className="text-center mt-12">
            <Link href="/projects">
              <motion.a
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.a>
            </Link>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance work and full-time positions in AI/ML development.
            </p>
            <Link href="/contact">
              <motion.a
                className="px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI Chatbot */}
      <AIChatbot />
    </Layout>
  );
}
