import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
  padding: ${props => props.scrolled ? '0.5rem 0' : '1rem 0'};
  background: ${props => props.scrolled ? 'rgba(31, 34, 46, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
`;

const NavLinks = styled.nav`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

const NavLink = styled(motion.a)`
  color: var(--light-color);
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: var(--light-color);
  font-size: 1.5rem;
  cursor: pointer;
  display: block;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: rgba(31, 34, 46, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  display: block;
  padding: 0.75rem 2rem;
  color: var(--light-color);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <NavbarContainer scrolled={scrolled}>
      <NavContent>
        <Link to="/">
          <Logo 
            className="gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Eric.dev
          </Logo>
        </Link>
        
        <NavLinks>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path}>
              <NavLink 
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.name}
              </NavLink>
            </Link>
          ))}
        </NavLinks>
        
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </MobileMenuButton>
      </NavContent>
      
      {isOpen && (
        <MobileMenu
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path}>
              <MobileNavLink onClick={() => setIsOpen(false)}>
                {link.name}
              </MobileNavLink>
            </Link>
          ))}
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
