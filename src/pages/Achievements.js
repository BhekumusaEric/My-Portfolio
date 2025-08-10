import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import StarfieldAnimation from '../components/StarfieldAnimation';
import AchievementBadges from '../components/AchievementBadges';

/**
 * ACHIEVEMENTS PAGE COMPONENT
 * 
 * This page showcases Bhekumusa Eric's major achievements, hackathon wins,
 * and professional milestones. It's designed to highlight competitive
 * success and recognition in the tech industry.
 * 
 * Key Features:
 * - Prominent display of Sappas hackathon win
 * - Timeline of major achievements
 * - Interactive achievement cards with details
 * - Statistics and metrics
 * - Links to verification and proof
 * 
 * Design Philosophy:
 * - Celebratory and impressive presentation
 * - Clear hierarchy of achievements
 * - Professional credibility focus
 */

const AchievementsContainer = styled.div`
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

// Featured achievement card for major wins like hackathons
const FeaturedAchievement = styled.div`
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
  }
`;

const FeaturedIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const FeaturedTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const FeaturedDescription = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturedDate = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #666;
`;

// Achievement timeline
const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--primary-color);
    transform: translateX(-50%);
  }
  
  @media (max-width: 768px) {
    &:before {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  
  &:nth-child(odd) {
    padding-right: 50%;
    text-align: right;
    
    @media (max-width: 768px) {
      padding-right: 0;
      padding-left: 60px;
      text-align: left;
    }
  }
  
  &:nth-child(even) {
    padding-left: 50%;
    
    @media (max-width: 768px) {
      padding-left: 60px;
    }
  }
`;

const TimelineMarker = styled.div`
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: 50%;
  border: 4px solid var(--bg-color);
  
  ${TimelineItem}:nth-child(odd) & {
    right: -10px;
    
    @media (max-width: 768px) {
      left: 10px;
    }
  }
  
  ${TimelineItem}:nth-child(even) & {
    left: -10px;
    
    @media (max-width: 768px) {
      left: 10px;
    }
  }
`;

const TimelineCard = styled.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const TimelineTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const TimelineDate = styled.div`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.p`
  color: #a0a0a0;
  line-height: 1.6;
`;

const Achievements = () => {
  // Timeline data for major achievements
  const timelineAchievements = [
    {
      id: 1,
      title: 'Sappas Hackathon Winner',
      date: '2024',
      description: 'Won the prestigious Sappas hackathon competition, demonstrating exceptional problem-solving skills and innovative thinking in a competitive environment.'
    },
    {
      id: 2,
      title: 'Java & C# Skill Expansion',
      date: '2024',
      description: 'Successfully expanded programming expertise to include Java and C# development, adding enterprise-level programming capabilities to the toolkit.'
    },
    {
      id: 3,
      title: 'SAP Tech Consultant Certification',
      date: '2025',
      description: 'Professional certification in SAP enterprise solutions, demonstrating expertise in business process optimization and enterprise software implementation.'
    },
    {
      id: 7,
      title: "CCNA",
      date: '2025',
      description: 'Professional-level networking certification covering network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation.'
    },
    {
      id: 8,
      title: 'IT Essentials A+',
      date: '2025',
      description: 'Comprehensive IT fundamentals certification covering computer hardware, software, networking, security, and troubleshooting essentials.'
    },
    {
      id: 6,
      title: 'Python Programming Certification',
      date: '2024',
      description: 'Advanced Python programming skills including OOP, data structures, and algorithms.'
    },
    {
      id: 5,
      title: 'WeThinkCode_ Enrollment',
      date: '2024',
      description: 'Accepted into the prestigious WeThinkCode_ software development academy, joining an elite program focused on practical coding skills.'
    }
  ];

  return (
    <AchievementsContainer>
      <StarfieldAnimation />
      
      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>Achievements & Recognition</PageTitle>
          <Divider />
          <PageDescription>
            Celebrating milestones, victories, and recognition earned through dedication and innovation in technology.
          </PageDescription>
        </motion.div>
      </PageHeader>
      
      {/* Achievement Badges Section */}
      <Section>
        <SectionContent>
          <SectionTitle className="gradient-text">Achievement Highlights</SectionTitle>
          <AchievementBadges />
        </SectionContent>
      </Section>
      
      {/* Featured Achievement - Sappas Hackathon Win */}
      <Section>
        <SectionContent>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FeaturedAchievement>
              <FeaturedIcon>🏆</FeaturedIcon>
              <FeaturedTitle>Sappas Hackathon Winner</FeaturedTitle>
              <FeaturedDescription>
                Emerged victorious in the competitive Sappas hackathon, showcasing innovative problem-solving 
                and technical excellence. This achievement demonstrates the ability to work under pressure, 
                collaborate effectively, and deliver exceptional results in a competitive environment.
              </FeaturedDescription>
              <FeaturedDate>2024</FeaturedDate>
            </FeaturedAchievement>
          </motion.div>
        </SectionContent>
      </Section>
      
      {/* Achievement Timeline */}
      <Section>
        <SectionContent>
          <SectionTitle className="gradient-text">Achievement Timeline</SectionTitle>
          
          <Timeline>
            {timelineAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <TimelineItem>
                  <TimelineMarker />
                  <TimelineCard>
                    <TimelineTitle>{achievement.title}</TimelineTitle>
                    <TimelineDate>{achievement.date}</TimelineDate>
                    <TimelineDescription>{achievement.description}</TimelineDescription>
                  </TimelineCard>
                </TimelineItem>
              </motion.div>
            ))}
          </Timeline>
        </SectionContent>
      </Section>
    </AchievementsContainer>
  );
};

export default Achievements;
