import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

/**
 * PROFESSIONAL EXPERIENCE TIMELINE COMPONENT
 * 
 * This component creates a visually appealing timeline showcasing Bhekumusa Eric's
 * professional journey, key milestones, certifications, and career progression.
 * 
 * Key Features:
 * - Vertical timeline with alternating left/right layout
 * - Animated timeline items with stagger effects
 * - Different icons for different types of milestones
 * - Responsive design that stacks on mobile
 * - Color-coded timeline markers for different categories
 * - Hover effects and smooth animations
 * 
 * Design Philosophy:
 * - Clean, professional presentation
 * - Clear chronological progression
 * - Visual hierarchy with icons and colors
 * - Emphasis on growth and achievement
 * 
 * Usage:
 * - Can be embedded in About page or dedicated Experience section
 * - Supports different milestone types: education, certification, project, achievement
 */

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
`;

// Main timeline line running down the center
const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
  transform: translateX(-50%);
  border-radius: 2px;
  
  @media (max-width: 768px) {
    left: 30px;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  width: 100%;
  
  /* Alternating layout for desktop */
  &:nth-child(odd) {
    padding-right: 50%;
    text-align: right;
    
    @media (max-width: 768px) {
      padding-right: 0;
      padding-left: 80px;
      text-align: left;
    }
  }
  
  &:nth-child(even) {
    padding-left: 50%;
    text-align: left;
    
    @media (max-width: 768px) {
      padding-left: 80px;
    }
  }
`;

// Timeline marker/dot with different colors for different types
const TimelineMarker = styled.div`
  position: absolute;
  top: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid var(--bg-color);
  z-index: 2;
  
  /* Color coding based on milestone type */
  background: ${props => {
    switch (props.type) {
      case 'education': return '#4CAF50'; // Green for education
      case 'certification': return '#2196F3'; // Blue for certifications
      case 'project': return '#FF9800'; // Orange for major projects
      case 'achievement': return '#FFD700'; // Gold for achievements
      case 'skill': return '#9C27B0'; // Purple for skill expansion
      default: return 'var(--primary-color)';
    }
  }};
  
  /* Positioning for alternating layout */
  ${TimelineItem}:nth-child(odd) & {
    right: -10px;
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
  
  ${TimelineItem}:nth-child(even) & {
    left: -10px;
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
  
  /* Hover effect */
  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
`;

// Icon container within the marker
const TimelineIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
  color: white;
  font-weight: bold;
`;

// Content card for each timeline item
const TimelineCard = styled.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

const TimelineDate = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
`;

const TimelineDescription = styled.p`
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TimelineTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TimelineTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: rgba(var(--primary-color-rgb), 0.2);
  color: var(--primary-color);
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ExperienceTimeline = ({ experiences = [] }) => {
  // Default timeline data showcasing Bhekumusa's professional journey
  const defaultExperiences = [
    {
      id: 1,
      date: '2024',
      title: 'Sappas Hackathon Winner',
      description: 'Emerged victorious in the prestigious Sappas hackathon competition, demonstrating exceptional problem-solving skills and innovative thinking in a competitive tech environment.',
      type: 'achievement',
      icon: '🏆',
      tags: ['Competition', 'Innovation', 'Problem Solving']
    },
    {
      id: 2,
      date: '2024',
      title: 'Java & C# Skill Expansion',
      description: 'Successfully expanded programming expertise to include enterprise-level Java and C# development, adding significant value to full-stack development capabilities.',
      type: 'skill',
      icon: '💻',
      tags: ['Java', 'C#', 'Enterprise Development']
    },
    {
      id: 3,
      date: '2024',
      title: 'Cloud Computing Certifications',
      description: 'Achieved Microsoft Azure Fundamentals and AWS Cloud Practitioner certifications, validating expertise in modern cloud infrastructure and services.',
      type: 'certification',
      icon: '☁️',
      tags: ['Azure', 'AWS', 'Cloud Architecture']
    },
    {
      id: 4,
      date: '2023-2024',
      title: 'AI/ML Project Portfolio Development',
      description: 'Developed multiple AI and machine learning projects including SafeWayAI, NeuroStrike, and Smart Loan Approval Predictor, showcasing practical AI application skills.',
      type: 'project',
      icon: '🤖',
      tags: ['Machine Learning', 'AI Development', 'Python']
    },
    {
      id: 5,
      date: '2023',
      title: 'WeThinkCode_ Enrollment',
      description: 'Accepted into the prestigious WeThinkCode_ software development academy, joining an elite program focused on practical coding skills and industry readiness.',
      type: 'education',
      icon: '🎓',
      tags: ['Education', 'Software Development', 'Practical Skills']
    },
    {
      id: 6,
      date: '2023',
      title: 'Full-Stack Development Mastery',
      description: 'Achieved proficiency in full-stack web development using React, Django, and modern web technologies, enabling end-to-end application development.',
      type: 'skill',
      icon: '🌐',
      tags: ['React', 'Django', 'Full-Stack', 'Web Development']
    }
  ];

  const timelineData = experiences.length > 0 ? experiences : defaultExperiences;

  return (
    <TimelineContainer>
      <TimelineLine />
      
      {timelineData.map((experience, index) => (
        <TimelineItem
          key={experience.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ scale: 1.02 }}
        >
          <TimelineMarker type={experience.type}>
            <TimelineIcon>{experience.icon}</TimelineIcon>
          </TimelineMarker>
          
          <TimelineCard>
            <TimelineDate>{experience.date}</TimelineDate>
            <TimelineTitle>{experience.title}</TimelineTitle>
            <TimelineDescription>{experience.description}</TimelineDescription>
            
            {experience.tags && (
              <TimelineTags>
                {experience.tags.map((tag, tagIndex) => (
                  <TimelineTag key={tagIndex}>{tag}</TimelineTag>
                ))}
              </TimelineTags>
            )}
          </TimelineCard>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default ExperienceTimeline;
