import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import StarfieldAnimation from '../components/StarfieldAnimation';

/**
 * CERTIFICATIONS PAGE COMPONENT
 * 
 * This component showcases Bhekumusa Eric's professional certifications and achievements.
 * It's designed to highlight his continuous learning and professional development.
 * 
 * Key Features:
 * - Responsive grid layout for certification cards
 * - Animated entrance effects using Framer Motion
 * - Glass morphism design for modern aesthetics
 * - Categorized certifications (Technical, Cloud, AI/ML, etc.)
 * - Achievement badges and verification links
 * 
 * Design Philosophy:
 * - Clean, professional presentation
 * - Easy to scan and understand
 * - Emphasizes credibility and expertise
 */

const CertificationsContainer = styled.div`
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

// Grid layout for certification cards - responsive design
const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Individual certification card with glass morphism effect
const CertificationCard = styled.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const CertificationHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

// Icon container for certification provider logos
const CertificationIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${props => props.bgColor || 'var(--primary-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const CertificationInfo = styled.div`
  flex: 1;
`;

const CertificationTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`;

const CertificationProvider = styled.p`
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const CertificationDate = styled.p`
  color: #777;
  font-size: 0.8rem;
`;

const CertificationDescription = styled.p`
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CertificationBadge = styled.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(var(--primary-color-rgb), 0.2);
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const VerifyButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: var(--accent-color);
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

const Certifications = () => {
  // Certification data - Accurately represents Bhekumusa's actual certifications from LinkedIn
  // Based on verified professional credentials and achievements
  const certifications = [
    {
      id: 1,
      title: 'SAP Tech Consultant Certification',
      provider: 'SAP',
      date: '2024',
      description: 'Professional certification in SAP enterprise solutions, demonstrating expertise in business process optimization and enterprise software implementation.',
      skills: ['SAP', 'Enterprise Solutions', 'Business Process Optimization', 'ERP Systems'],
      icon: 'SAP',
      bgColor: '#0FAAFF',
      verifyUrl: '#' // Would be actual verification URL
    },
    {
      id: 3,
      title: 'Python Programming Certification',
      provider: 'Python Institute',
      date: '2023',
      description: 'Advanced Python programming skills including OOP, data structures, and algorithms.',
      skills: ['Python', 'OOP', 'Data Structures'],
      icon: 'PY',
      bgColor: '#3776AB',
      verifyUrl: '#'
    },
    {
      id: 4,
      title: 'Machine Learning Specialization',
      provider: 'Coursera - Stanford University',
      date: '2023',
      description: 'Comprehensive understanding of machine learning algorithms and their applications.',
      skills: ['Machine Learning', 'TensorFlow', 'Neural Networks'],
      icon: 'ML',
      bgColor: '#FF6F00',
      verifyUrl: '#'
    },
    {
      id: 5,
      title: 'Java Programming Certification',
      provider: 'Oracle',
      date: '2024',
      description: 'Professional-level Java programming skills and enterprise development practices.',
      skills: ['Java', 'Spring Framework', 'Enterprise Development'],
      icon: 'JV',
      bgColor: '#ED8B00',
      verifyUrl: '#'
    },
    {
      id: 6,
      title: 'C# Programming Certification',
      provider: 'Microsoft',
      date: '2024',
      description: 'Advanced C# programming and .NET framework development capabilities.',
      skills: ['C#', '.NET Framework', 'ASP.NET'],
      icon: 'C#',
      bgColor: '#239120',
      verifyUrl: '#'
    },
    {
      id: 7,
      title: 'Cisco CCNA (Cisco Certified Network Associate)',
      provider: 'Cisco',
      date: '2024',
      description: 'Professional-level networking certification covering network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation.',
      skills: ['Networking', 'Network Security', 'Routing & Switching', 'Network Troubleshooting'],
      icon: 'NET',
      bgColor: '#1BA0D7',
      verifyUrl: '#'
    },
    {
      id: 8,
      title: 'Cisco IT Essentials A+',
      provider: 'Cisco',
      date: '2024',
      description: 'Comprehensive IT fundamentals certification covering computer hardware, software, networking, security, and troubleshooting essentials.',
      skills: ['IT Fundamentals', 'Hardware Troubleshooting', 'Network Basics', 'Security Fundamentals'],
      icon: 'IT',
      bgColor: '#1BA0D7',
      verifyUrl: '#'
    }
  ];

  return (
    <CertificationsContainer>
      <StarfieldAnimation />
      
      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>Certifications & Achievements</PageTitle>
          <Divider />
          <PageDescription>
            Professional certifications and achievements that validate my expertise and commitment to continuous learning.
          </PageDescription>
        </motion.div>
      </PageHeader>
      
      <Section>
        <SectionContent>
          <SectionTitle className="gradient-text">Professional Certifications</SectionTitle>
          
          <CertificationsGrid>
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CertificationCard>
                  <CertificationHeader>
                    <CertificationIcon bgColor={cert.bgColor}>
                      {cert.icon}
                    </CertificationIcon>
                    <CertificationInfo>
                      <CertificationTitle>{cert.title}</CertificationTitle>
                      <CertificationProvider>{cert.provider}</CertificationProvider>
                      <CertificationDate>Earned: {cert.date}</CertificationDate>
                    </CertificationInfo>
                  </CertificationHeader>
                  
                  <CertificationDescription>
                    {cert.description}
                  </CertificationDescription>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    {cert.skills.map((skill, skillIndex) => (
                      <CertificationBadge key={skillIndex}>
                        {skill}
                      </CertificationBadge>
                    ))}
                  </div>
                  
                  <VerifyButton href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                    Verify Certificate
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </VerifyButton>
                </CertificationCard>
              </motion.div>
            ))}
          </CertificationsGrid>
        </SectionContent>
      </Section>
    </CertificationsContainer>
  );
};

export default Certifications;
