import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import StarfieldAnimation from '../components/StarfieldAnimation';
import ProjectCard from '../components/ProjectCard';
import AchievementBadges from '../components/AchievementBadges'; // Showcase achievements on home page

const HomeContainer = styled.div`
  position: relative;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`;

const HeroText = styled(motion.div)`
  flex: 1;
  margin-bottom: 3rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
    margin-right: 3rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #a0a0a0;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const HeroVisual = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 400px;
`;

const Section = styled.section`
  padding: 6rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #a0a0a0;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ViewAllButton = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const CallToAction = styled.section`
  padding: 6rem 0;
  background: linear-gradient(rgba(9, 105, 218, 0.1), rgba(9, 105, 218, 0.05));
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
`;

// Featured projects data
const featuredProjects = [
  {
    id: 101,
    title: 'Apply4Me',
    slug: 'apply4me',
    description: 'Flagship automation platform serving 10,000+ users with advanced web scraping and process automation.',
    technologies: ['React', 'Python', 'Automation'],
    github: 'https://github.com/BhekumusaEric/',
    demo: 'https://apply4me-eta.vercel.app/',
    image: '/images/projects/apply4me.jpg'
  },
  {
    id: 102,
    title: 'SAAIO Training Grounds',
    slug: 'saaio-training',
    description: 'Interactive AI education platform with an in-browser Python environment for high school students.',
    technologies: ['React', 'Pyodide', 'AI/ML'],
    github: 'https://github.com/BhekumusaEric/',
    demo: 'https://ai-learning-system-ten.vercel.app/',
    image: '/images/projects/saaio.jpg'
  },
  {
    id: 1,
    title: 'SafeWayAI',
    slug: 'safeway-ai',
    description: 'AI-powered emergency detection platform providing safe routes and real-time danger alerts.',
    technologies: ['Python', 'Flet', 'ML'],
    github: 'https://github.com/BhekumusaEric/MSAIskillshackathon',
    demo: 'https://github.com/BhekumusaEric/MSAIskillshackathon',
    image: '/images/projects/safeway-ai.jpg'
  }
];

const Home = () => {
  return (
    <HomeContainer>
      <StarfieldAnimation />

      <HeroSection>
        <HeroContent>
          <HeroText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroTitle>
              Hi, I'm <span className="gradient-text">Bhekumusa Eric Ntshwenya</span>
            </HeroTitle>
            <HeroSubtitle>
              Software Developer & Problem Solver
            </HeroSubtitle>
            <HeroDescription>
              I build intelligent automation solutions that solve real-world problems. Specializing in Python, automation, and full-stack development.
              <strong style={{color: 'var(--primary-color)'}}> 4-time Hackathon Winner</strong> (Microsoft, Amazon, Meta, W&R SETA) with a track record of delivering high-impact products like Apply4Me (10,000+ users).
            </HeroDescription>

            <ButtonGroup>
              <Link to="/projects">
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
            </ButtonGroup>
          </HeroText>

          <HeroVisual
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-effect coin-container" style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <img
                src={process.env.PUBLIC_URL + "/images/54499080440_5b468ec2b6_o.jpg"}
                alt="Bhekumusa Eric Ntshwenya"
                className="coin-rotate"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '50%'
                }}
              />
            </div>
          </HeroVisual>
        </HeroContent>
      </HeroSection>

      <Section style={{ padding: '2rem 0', background: 'rgba(0, 122, 255, 0.03)' }}>
        <div className="container">
          <SectionSubtitle style={{ marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Professional Recognition & Certifications
          </SectionSubtitle>
          <AchievementBadges />
        </div>
      </Section>

      <Section>
        <SectionTitle>Featured Projects</SectionTitle>
        <Divider />
        <SectionSubtitle>
          Check out some of my recent work. These projects showcase my skills in AI, web development, and problem-solving.
        </SectionSubtitle>

        <ProjectsGrid>
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
        </ProjectsGrid>

        <ViewAllButton>
          <Link to="/projects">
            <motion.button
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </Link>
        </ViewAllButton>
      </Section>

      <CallToAction>
        <CTAContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CTATitle>Let's Work Together</CTATitle>
            <CTADescription>
              I'm currently available for freelance work and full-time positions in AI/ML development.
            </CTADescription>
            <Link to="/contact">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </CTAContent>
      </CallToAction>
    </HomeContainer>
  );
};

export default Home;
