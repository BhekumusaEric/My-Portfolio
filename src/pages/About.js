import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import StarfieldAnimation from '../components/StarfieldAnimation';
import AchievementBadges from '../components/AchievementBadges'; // Added to showcase achievements
import ExperienceTimeline from '../components/ExperienceTimeline'; // Professional journey timeline

const AboutContainer = styled.div`
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

const Section = styled.section`
  padding: 5rem 0;

  &:nth-child(even) {
    background: rgba(31, 34, 46, 0.3);
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  flex: 1;
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
    ${props => props.right ? 'margin-left: 3rem;' : 'margin-right: 3rem;'}
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  color: #a0a0a0;
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const InfoCard = styled.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const InfoContent = styled.p`
  color: #a0a0a0;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCategory = styled.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const SkillsList = styled.ul`
  list-style: none;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;

  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--primary-color);
    margin-right: 0.75rem;
  }
`;

const About = () => {
  // Enhanced skills data - Updated to reflect recent skill expansion and achievements
  // This showcases the developer's comprehensive technical capabilities and professional growth
  const skills = {
    technical: [
      'Python', 'JavaScript', 'Java', 'C#', 'React', 'Django', 'Flask',
      'TensorFlow', 'Machine Learning', 'Neural Networks', 'Data Analysis',
      'AWS', 'Azure', 'Cloud Computing', 'Git', 'HTML/CSS', 'Blockchain',
      'Data Science', 'AI Development', 'Full-Stack Development'
    ],
    soft: [
      'Problem Solving', 'Communication', 'Teamwork', 'Leadership',
      'Adaptability', 'Time Management', 'Critical Thinking',
      'Competitive Programming', 'Innovation', 'Project Management'
    ]
  };

  return (
    <AboutContainer>
      <StarfieldAnimation />

      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>About Me</PageTitle>
          <Divider />
          <PageDescription>
            Get to know more about me, my background, and what drives me as a developer.
          </PageDescription>
        </motion.div>
      </PageHeader>

      <Section>
        <SectionContent>
          <Column>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle className="gradient-text">My Story</SectionTitle>
              <Paragraph>
                I'm Bhekumusa Eric Ntshwenya, a passionate software developer and hackathon winner with expertise spanning AI/ML, web development, and enterprise programming. My journey in tech began with curiosity about solving real-world problems and has evolved into a proven track record of innovative solutions and competitive success.
              </Paragraph>
              <Paragraph>
                Currently studying at WeThinkCode_, I've recently expanded my technical arsenal to include Java and C# development, adding enterprise-level programming capabilities to my existing expertise in Python, JavaScript, and AI technologies. This expansion reflects my commitment to staying current with industry demands and versatile problem-solving approaches.
              </Paragraph>
              <Paragraph>
                My recent victory in the prestigious Sappas hackathon demonstrates my ability to innovate under pressure and deliver exceptional results in competitive environments. This achievement, combined with my growing portfolio of AI-powered applications like SafeWayAI and NeuroStrike, showcases my capability to transform complex ideas into practical, impactful solutions.
              </Paragraph>
              <Paragraph>
                What drives me is the intersection of cutting-edge technology and meaningful impact. Whether developing cloud-based data processing systems on AWS, creating neural network implementations, or building full-stack web applications, I'm passionate about leveraging diverse technologies to create solutions that matter. My work spans from AI safety applications to enterprise development frameworks, reflecting both technical depth and breadth.
              </Paragraph>
              <Paragraph>
                Beyond coding, I'm committed to continuous learning and professional growth. My recent certifications in cloud computing and expansion into Java and C# development demonstrate my dedication to staying at the forefront of technology trends and industry best practices.
              </Paragraph>
            </motion.div>
          </Column>

          <Column right>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glass-effect coin-container" style={{
                marginBottom: '2rem',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                width: '250px',
                height: '250px',
                margin: '0 auto 2rem'
              }}>
                <img
                  src={process.env.PUBLIC_URL + "./images/54499080440_5b468ec2b6_o.jpg"}
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

              <SectionTitle className="gradient-text">Quick Facts</SectionTitle>

              <InfoCard>
                <InfoTitle>Location</InfoTitle>
                <InfoContent>Johannesburg, South Africa</InfoContent>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Focus Areas</InfoTitle>
                <InfoContent>AI/ML Development, Enterprise Java/C#, Cloud Computing, Full-Stack Development</InfoContent>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Recent Achievement</InfoTitle>
                <InfoContent>🏆 Sappas Hackathon Winner 2024</InfoContent>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Programming Languages</InfoTitle>
                <InfoContent>Python, JavaScript, Java, C#, SQL</InfoContent>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Languages</InfoTitle>
                <InfoContent>English (Fluent), Zulu (Native)</InfoContent>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Certifications</InfoTitle>
                <InfoContent>SAP Tech Consultant, Cisco CCNA, Cisco IT Essentials A+, Java & C# Certified</InfoContent>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Interests</InfoTitle>
                <InfoContent>AI Research, Competitive Programming, Open Source, Cloud Architecture</InfoContent>
              </InfoCard>

              {/* Achievement Badges - Visual representation of major accomplishments */}
              <div style={{ marginTop: '2rem' }}>
                <InfoTitle style={{ textAlign: 'center', marginBottom: '1rem' }}>Major Achievements</InfoTitle>
                <AchievementBadges />
              </div>
            </motion.div>
          </Column>
        </SectionContent>
      </Section>

      <Section>
        <SectionContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <SectionTitle className="gradient-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>My Skills</SectionTitle>

            <SkillsContainer>
              <SkillCategory>
                <CategoryTitle>Technical Skills</CategoryTitle>
                <SkillsList>
                  {skills.technical.map((skill, index) => (
                    <SkillItem key={index}>{skill}</SkillItem>
                  ))}
                </SkillsList>
              </SkillCategory>

              <SkillCategory>
                <CategoryTitle>Soft Skills</CategoryTitle>
                <SkillsList>
                  {skills.soft.map((skill, index) => (
                    <SkillItem key={index}>{skill}</SkillItem>
                  ))}
                </SkillsList>
              </SkillCategory>
            </SkillsContainer>
          </motion.div>
        </SectionContent>
      </Section>

      {/* Professional Experience Timeline - New section showcasing career progression */}
      <Section>
        <SectionContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <SectionTitle className="gradient-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Professional Journey
            </SectionTitle>
            <ExperienceTimeline />
          </motion.div>
        </SectionContent>
      </Section>
    </AboutContainer>
  );
};

export default About;
