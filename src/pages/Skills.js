import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import StarfieldAnimation from '../components/StarfieldAnimation';

const SkillsContainer = styled.div`
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
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(${props => props.columns || 2}, 1fr);
  }
`;

const SkillCard = styled.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
`;

const SkillCategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const SkillLevel = styled.span`
  color: #a0a0a0;
`;

const SkillBar = styled.div`
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const SkillProgress = styled.div`
  height: 100%;
  background: ${props => props.color || 'var(--primary-color)'};
  border-radius: 4px;
  width: ${props => props.level}%;
  transition: width 1s ease-in-out;
`;

const SoftSkillCard = styled.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
`;

const SoftSkillTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
`;

const SoftSkillDescription = styled.p`
  color: #a0a0a0;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const LearningSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LearningCard = styled.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const LearningTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const LearningList = styled.ul`
  list-style: none;
`;

const LearningItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  color: #a0a0a0;
  
  svg {
    margin-right: 0.75rem;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
`;

const Skills = () => {
  // Technical skills data
  const technicalSkills = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, color: '#3776AB' },
        { name: 'JavaScript', level: 85, color: '#F7DF1E' },
        { name: 'HTML', level: 90, color: '#E34F26' },
        { name: 'CSS', level: 85, color: '#1572B6' },
        { name: 'SQL', level: 80, color: '#4479A1' },
      ]
    },
    {
      category: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 85, color: '#FF6F00' },
        { name: 'Scikit-Learn', level: 90, color: '#F7931E' },
        { name: 'Natural Language Processing', level: 80, color: '#8BC34A' },
        { name: 'Computer Vision', level: 75, color: '#9C27B0' },
        { name: 'Data Analysis', level: 85, color: '#03A9F4' },
      ]
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'React', level: 80, color: '#61DAFB' },
        { name: 'Django', level: 85, color: '#092E20' },
        { name: 'Flask', level: 90, color: '#000000' },
        { name: 'RESTful APIs', level: 85, color: '#FF5722' },
        { name: 'Responsive Design', level: 80, color: '#9C27B0' },
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 90, color: '#F05032' },
        { name: 'Azure', level: 75, color: '#0078D4' },
        { name: 'Docker', level: 70, color: '#2496ED' },
        { name: 'VS Code', level: 95, color: '#007ACC' },
        { name: 'Linux', level: 80, color: '#FCC624' },
      ]
    }
  ];
  
  // Soft skills data
  const softSkills = [
    { 
      name: 'Problem Solving', 
      description: 'Analytical approach to breaking down complex problems into manageable components.' 
    },
    { 
      name: 'Communication', 
      description: 'Clear and effective communication of technical concepts to both technical and non-technical audiences.' 
    },
    { 
      name: 'Teamwork', 
      description: 'Collaborative mindset with experience working in diverse teams on various projects.' 
    },
    { 
      name: 'Adaptability', 
      description: 'Quick to learn new technologies and adapt to changing project requirements.' 
    },
    { 
      name: 'Time Management', 
      description: 'Efficient prioritization of tasks to meet deadlines and deliver high-quality work.' 
    },
    { 
      name: 'Critical Thinking', 
      description: 'Ability to evaluate information objectively and make sound decisions.' 
    },
  ];
  
  // Learning data
  const learning = {
    current: [
      'Advanced Deep Learning Techniques',
      'Cloud Architecture on Azure',
      'Blockchain Development',
      'Next.js and Modern React Patterns'
    ],
    future: [
      'Quantum Computing',
      'Augmented Reality Development',
      'Edge Computing and IoT',
      'Advanced Natural Language Processing'
    ]
  };
  
  return (
    <SkillsContainer>
      <StarfieldAnimation />
      
      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>My Skills</PageTitle>
          <Divider />
          <PageDescription>
            A comprehensive overview of my technical expertise and professional capabilities.
          </PageDescription>
        </motion.div>
      </PageHeader>
      
      <Section>
        <SectionContent>
          <SectionTitle className="gradient-text">Technical Skills</SectionTitle>
          
          <SkillsGrid>
            {technicalSkills.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <SkillCard>
                  <SkillCategoryTitle>{category.category}</SkillCategoryTitle>
                  
                  {category.skills.map((skill, skillIndex) => (
                    <SkillItem key={skillIndex}>
                      <SkillHeader>
                        <SkillName>{skill.name}</SkillName>
                        <SkillLevel>{skill.level}%</SkillLevel>
                      </SkillHeader>
                      <SkillBar>
                        <SkillProgress level={skill.level} color={skill.color} />
                      </SkillBar>
                    </SkillItem>
                  ))}
                </SkillCard>
              </motion.div>
            ))}
          </SkillsGrid>
        </SectionContent>
      </Section>
      
      <Section>
        <SectionContent>
          <SectionTitle className="gradient-text">Soft Skills</SectionTitle>
          
          <SkillsGrid columns={3}>
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SoftSkillCard>
                  <SoftSkillTitle>{skill.name}</SoftSkillTitle>
                  <SoftSkillDescription>{skill.description}</SoftSkillDescription>
                </SoftSkillCard>
              </motion.div>
            ))}
          </SkillsGrid>
        </SectionContent>
      </Section>
      
      <Section>
        <SectionContent>
          <SectionTitle className="gradient-text">Continuous Learning</SectionTitle>
          
          <LearningSection>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LearningCard>
                <LearningTitle>Currently Learning</LearningTitle>
                <LearningList>
                  {learning.current.map((item, index) => (
                    <LearningItem key={index}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>{item}</span>
                    </LearningItem>
                  ))}
                </LearningList>
              </LearningCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <LearningCard>
                <LearningTitle>Future Interests</LearningTitle>
                <LearningList>
                  {learning.future.map((item, index) => (
                    <LearningItem key={index}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      <span>{item}</span>
                    </LearningItem>
                  ))}
                </LearningList>
              </LearningCard>
            </motion.div>
          </LearningSection>
        </SectionContent>
      </Section>
    </SkillsContainer>
  );
};

export default Skills;
