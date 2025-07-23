import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

/**
 * ACHIEVEMENT BADGES COMPONENT
 * 
 * This component creates visually appealing badges for major achievements,
 * hackathon wins, and professional milestones. It's designed to be reusable
 * across different pages of the portfolio.
 * 
 * Key Features:
 * - Animated badge reveals with stagger effects
 * - Trophy and medal icons for different achievement types
 * - Hover effects with detailed information
 * - Responsive design for mobile and desktop
 * - Color-coded badges based on achievement type
 * 
 * Usage:
 * - Can be embedded in About page, Home page, or dedicated Achievements section
 * - Supports different badge types: hackathon, certification, project, recognition
 */

const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
`;

const Badge = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* Badge type styling - different colors for different achievements */
  background: ${props => {
    switch (props.type) {
      case 'hackathon': return 'linear-gradient(135deg, #FFD700, #FFA500)'; // Gold for hackathon wins
      case 'certification': return 'linear-gradient(135deg, #4CAF50, #45a049)'; // Green for certifications
      case 'project': return 'linear-gradient(135deg, #2196F3, #1976D2)'; // Blue for major projects
      case 'recognition': return 'linear-gradient(135deg, #9C27B0, #7B1FA2)'; // Purple for recognition
      default: return 'linear-gradient(135deg, var(--primary-color), var(--accent-color))';
    }
  }};
  
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

const BadgeIcon = styled.div`
  margin-right: 0.5rem;
  font-size: 1.2rem;
`;

const BadgeText = styled.span`
  white-space: nowrap;
`;

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
  }
  
  ${TooltipContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const AchievementBadges = ({ achievements = [] }) => {
  // Default achievements if none provided - showcasing Bhekumusa's key accomplishments
  const defaultAchievements = [
    {
      id: 1,
      text: 'Sappas Hackathon Winner',
      type: 'hackathon',
      icon: '🏆',
      tooltip: 'Won the prestigious Sappas Hackathon competition'
    },
    {
      id: 2,
      text: 'SAP Tech Consultant',
      type: 'certification',
      icon: '🏢',
      tooltip: 'SAP Tech Consultant Certification - Enterprise Solutions Expert'
    },
    {
      id: 3,
      text: 'AI/ML Specialist',
      type: 'certification',
      icon: '🤖',
      tooltip: 'Machine Learning and AI Development Expert'
    },
    {
      id: 4,
      text: 'Full-Stack Developer',
      type: 'project',
      icon: '💻',
      tooltip: 'Proficient in both frontend and backend development'
    },
    {
      id: 5,
      text: 'Java Developer',
      type: 'certification',
      icon: '☕',
      tooltip: 'Recently added Java to professional toolkit'
    },
    {
      id: 6,
      text: 'C# Developer',
      type: 'certification',
      icon: '#️⃣',
      tooltip: 'Recently mastered C# and .NET development'
    },
    {
      id: 7,
      text: 'Open Source Contributor',
      type: 'recognition',
      icon: '🌟',
      tooltip: 'Active contributor to open source projects'
    },
    {
      id: 8,
      text: 'Cisco CCNA Certified',
      type: 'certification',
      icon: '🌐',
      tooltip: 'Cisco Certified Network Associate - Professional networking expertise'
    },
    {
      id: 9,
      text: 'WeThinkCode_ Student',
      type: 'recognition',
      icon: '🎓',
      tooltip: 'Studying at prestigious WeThinkCode_ academy'
    }
  ];

  const badgesToShow = achievements.length > 0 ? achievements : defaultAchievements;

  return (
    <BadgesContainer>
      {badgesToShow.map((achievement, index) => (
        <TooltipContainer key={achievement.id}>
          <Badge
            type={achievement.type}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05,
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
          >
            <BadgeIcon>{achievement.icon}</BadgeIcon>
            <BadgeText>{achievement.text}</BadgeText>
          </Badge>
          <Tooltip>{achievement.tooltip}</Tooltip>
        </TooltipContainer>
      ))}
    </BadgesContainer>
  );
};

export default AchievementBadges;
