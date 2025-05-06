import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import StarfieldAnimation from '../components/StarfieldAnimation';

const ContactContainer = styled.div`
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

const ContactSection = styled.section`
  padding: 2rem 0 6rem;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  margin-bottom: 3rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const ContactForm = styled.div`
  flex: 2;
`;

const InfoCard = styled.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`;

const InfoItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(9, 105, 218, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div``;

const InfoLabel = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--primary-color);
`;

const InfoText = styled.p`
  color: #a0a0a0;
`;

const InfoLink = styled.a`
  color: #a0a0a0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(31, 34, 46, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a0a0a0;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
  }
`;

const FormCard = styled.div`
  background: rgba(31, 34, 46, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`;

const Form = styled.form``;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #a0a0a0;
  font-size: 0.95rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(31, 34, 46, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(9, 105, 218, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(31, 34, 46, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(9, 105, 218, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(46, 204, 113, 0.1);
  border: 1px solid rgba(46, 204, 113, 0.3);
  color: #2ecc71;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  // Social media links
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/BhekumusaEric',
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bhekumusaerickelvinntshwenya/',
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://x.com/NoahEric_',
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100085082100956',
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <ContactContainer>
      <StarfieldAnimation />

      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>Get In Touch</PageTitle>
          <Divider />
          <PageDescription>
            Have a question or want to work together? Feel free to reach out!
          </PageDescription>
        </motion.div>
      </PageHeader>

      <ContactSection>
        <ContactContent>
          <ContactInfo>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <InfoCard>
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
                }}>
                  <img
                    src="/images/54499080440_5b468ec2b6_o.jpg"
                    alt="Bhekumusa Eric Ntshwenya"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                </div>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Contact Information</InfoTitle>

                <InfoItem>
                  <IconWrapper>
                    <svg width="24" height="24" fill="none" stroke="var(--primary-color)" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </IconWrapper>
                  <InfoContent>
                    <InfoLabel>Email</InfoLabel>
                    <InfoLink href="mailto:bhntshwcjc025@student.wethinkcode.co.za">
                      bhntshwcjc025@student.wethinkcode.co.za
                    </InfoLink>
                  </InfoContent>
                </InfoItem>

                <InfoItem>
                  <IconWrapper>
                    <svg width="24" height="24" fill="none" stroke="var(--primary-color)" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </IconWrapper>
                  <InfoContent>
                    <InfoLabel>Location</InfoLabel>
                    <InfoText>Johannesburg, South Africa</InfoText>
                  </InfoContent>
                </InfoItem>

                <InfoTitle style={{ marginTop: '2rem' }}>Connect With Me</InfoTitle>

                <SocialLinks>
                  {socialLinks.map((link, index) => (
                    <SocialLink
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      whileHover={{ y: -5 }}
                      whileTap={{ y: 0 }}
                    >
                      {link.icon}
                    </SocialLink>
                  ))}
                </SocialLinks>
              </InfoCard>

              <InfoCard>
                <InfoTitle>Resume</InfoTitle>
                <InfoText style={{ marginBottom: '1.5rem' }}>
                  View my professional resume to learn more about my experience and skills.
                </InfoText>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <motion.a
                    href={process.env.PUBLIC_URL + "/static/ats-resume.html"}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary-color)' }}
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    ATS-Friendly Resume
                  </motion.a>

                  <motion.a
                    href={process.env.PUBLIC_URL + "/static/resume.html"}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary-color)' }}
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Visual Resume
                  </motion.a>
                </div>
              </InfoCard>
            </motion.div>
          </ContactInfo>

          <ContactForm>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FormCard>
                <FormTitle>Send Me a Message</FormTitle>

                {submitSuccess && (
                  <SuccessMessage
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Your message has been sent successfully! I'll get back to you soon.
                  </SuccessMessage>
                )}

                <Form onSubmit={handleSubmit}>
                  <FormRow>
                    <FormGroup>
                      <FormLabel htmlFor="name">Your Name</FormLabel>
                      <FormInput
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormLabel htmlFor="email">Your Email</FormLabel>
                      <FormInput
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <FormLabel htmlFor="subject">Subject</FormLabel>
                    <FormInput
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormTextarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                    />
                  </FormGroup>

                  <SubmitButton
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
                          <circle cx="12" cy="12" r="10" opacity="0.25" />
                          <path d="M12 2a10 10 0 0 1 10 10" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </SubmitButton>
                </Form>
              </FormCard>
            </motion.div>
          </ContactForm>
        </ContactContent>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contact;
