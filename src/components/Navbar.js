import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${props => props.scrolled ? '0.75rem 0' : '1.5rem 0'};
  background: ${props => props.scrolled ? 'rgba(11, 12, 16, 0.85)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(15px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'};
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
  font-size: 1.75rem;
  font-weight: 800;
  cursor: pointer;
  letter-spacing: -0.5px;
`;

const NavLinks = styled.nav`
  display: none;
  
  @media (min-width: 992px) {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
`;

const NavItem = styled(motion.div)`
  position: relative;
`;

const NavLink = styled(Link)`
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--light-color)'};
  font-weight: 500;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'rgba(0, 122, 255, 0.1)' : 'transparent'};
  
  &:hover {
    color: var(--primary-color);
    background: rgba(0, 122, 255, 0.05);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-color);
  border-radius: 2px;
`;

const MobileMenuButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--light-color);
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  @media (min-width: 992px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 280px;
  background: rgba(11, 12, 16, 0.98);
  backdrop-filter: blur(20px);
  padding: 5rem 2rem 2rem;
  z-index: 99;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.05);
`;

const MobileNavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--light-color)'};
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 12px;
  background: ${props => props.active ? 'rgba(0, 122, 255, 0.1)' : 'transparent'};
  
  &:hover {
    color: var(--primary-color);
    background: rgba(0, 122, 255, 0.05);
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 98;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Home', 
      path: '/'
    },
    { 
      name: 'About', 
      path: '/about'
    },
    { 
      name: 'Projects', 
      path: '/projects'
    },
    { 
      name: 'Skills', 
      path: '/skills'
    },
    { 
      name: 'Certifications', 
      path: '/certifications'
    },
    { 
      name: 'Achievements', 
      path: '/achievements'
    },
    { 
      name: 'Contact', 
      path: '/contact'
    },
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
            <NavItem key={link.name}>
              <NavLink 
                to={link.path}
                active={location.pathname === link.path ? 1 : 0}
              >
                {link.name}
              </NavLink>
              {location.pathname === link.path && (
                <ActiveIndicator layoutId="nav-indicator" />
              )}
            </NavItem>
          ))}
        </NavLinks>
        
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 18L18 6M6 6L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6H20M4 12H20M4 18H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </MobileMenuButton>
      </NavContent>
      
      <AnimatePresence>
        {isOpen && (
          <>
            <Overlay 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div style={{ marginBottom: '2rem' }}>
                <Logo className="gradient-text">Eric.dev</Logo>
              </div>
              {navLinks.map((link) => (
                <MobileNavLink 
                  key={link.name} 
                  to={link.path}
                  active={location.pathname === link.path ? 1 : 0}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </MobileNavLink>
              ))}
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;
