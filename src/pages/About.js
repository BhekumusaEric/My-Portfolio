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
                I'm Bhekumusa Eric Ntshwenya, a passionate software developer and <strong>4-time hackathon winner</strong> with expertise in Python, automation, and enterprise programming. My journey in tech is driven by a desire to solve real-world problems through innovative code and intelligent systems.
              </Paragraph>
              <Paragraph>
                I've successfully built and launched projects like <strong>Apply4Me</strong>, an automation platform that has served over 10,000 users, and <strong>SAAIO Training Grounds</strong>, an interactive AI education platform for international olympiad students.
              </Paragraph>
              <Paragraph>
                Currently, I am working as a <strong>Business Analyst Intern at WesBank FML</strong>, where I translate business requirements into technical solutions and support Agile project delivery. Previously, I served as a <strong>Project Manager Intern at Umuzi.Org</strong> and a <strong>Placement Supervisor at WeThinkCode</strong>.
              </Paragraph>
              <Paragraph>
                My competitive success includes 1st place wins at the <strong>Microsoft SAPPAS</strong>, <strong>Amazon Q</strong>, <strong>Meta LLAMA</strong>, and <strong>W&R SETA</strong> hackathons. These experiences have honed my ability to innovate under pressure and deliver high-impact solutions.
              </Paragraph>
              <Paragraph>
                Beyond coding, I'm committed to continuous learning and professional growth. My recent certifications in cloud computing, SAP Database Administration, and expansion into Java and C# development demonstrate my dedication to staying at the forefront of technology trends and industry best practices.
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

              <SectionTitle className="gradient-text">Quick Facts</SectionTitle>

              <InfoCard>
                <InfoTitle>Location</InfoTitle>
                <InfoContent>Johannesburg, South Africa</InfoContent>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Focus Areas</InfoTitle>
                <InfoContent>AI/ML Development, Enterprise Programming, SAP HANA, Project Management</InfoContent>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Recent Achievement</InfoTitle>
                <InfoContent>🏆 <strong>4-time Hackathon Winner</strong> (Microsoft, Amazon, Meta, W&R SETA)</InfoContent>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Programming Languages</InfoTitle>
                <InfoContent>Python (Proficient), JavaScript, Java (Good), C# (Beginner), VB.Net</InfoContent>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Languages</InfoTitle>
                <InfoContent>English (Fluent), Zulu (Native)</InfoContent>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Certifications</InfoTitle>
                <InfoContent>SAP Database Administrator - SAP Hana, SAP Tech Consultant, Cisco CCNA, Cisco IT Essentials A+</InfoContent>
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
