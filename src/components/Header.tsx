import { useState, useEffect } from 'react';
import styled from 'styled-components';

type HeaderProps = {
    scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;     refs: {
      aboutRef: React.RefObject<HTMLDivElement | null>;
      projectsRef: React.RefObject<HTMLDivElement | null>;
      skillsRef: React.RefObject<HTMLDivElement | null>;
      resourcesRef: React.RefObject<HTMLDivElement | null>;
      devSetupRef: React.RefObject<HTMLDivElement | null>;
      contactRef: React.RefObject<HTMLDivElement | null>;
    };
  };

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s ease;
  padding: ${({ isScrolled }) => (isScrolled ? '15px 0' : '25px 0')};
  background-color: ${({ isScrolled }) => (isScrolled ? 'var(--color-white)' : 'transparent')};
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0 4px 10px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// const LogoImage = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
// `;

const LogoText = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled.li``;

const NavButton = styled.button`
  font-weight: 500;
  transition: color 0.3s ease;
  color: var(--color-secondary);
  
  &:hover {
    color: var(--color-primary);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--color-white);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Header = ({ scrollToSection, refs }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scrolling for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <div className="container">
        <HeaderInner>
          <Logo>
            {/* <LogoImage 
              src="/assets/logo.png" 
              alt="Logo" 
            /> */}
            <LogoText>MAHFUJ AHMED</LogoText>
          </Logo>

          <Nav>
            <NavList>
              <NavItem>
                <NavButton 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  HOME
                </NavButton>
              </NavItem>
              <NavItem>
                <NavButton 
                  onClick={() => scrollToSection(refs.aboutRef)}
                >
                  ABOUT
                </NavButton>
              </NavItem>
              <NavItem>
                <NavButton 
                  onClick={() => scrollToSection(refs.projectsRef)}
                >
                  PROJECTS
                </NavButton>
              </NavItem>
              <NavItem>
                <NavButton 
                  onClick={() => scrollToSection(refs.skillsRef)}
                >
                  SKILLS
                </NavButton>
              </NavItem>
              <NavItem>
                <NavButton 
                  onClick={() => scrollToSection(refs.resourcesRef)}
                >
                  RESOURCES
                </NavButton>
              </NavItem>
              <NavItem>
                <NavButton 
                  onClick={() => scrollToSection(refs.devSetupRef)}
                >
                  DEV SETUP
                </NavButton>
              </NavItem>
              <NavItem>
                <NavButton 
                  onClick={() => scrollToSection(refs.contactRef)}
                >
                  CONTACT
                </NavButton>
              </NavItem>
            </NavList>
          </Nav>

          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </MobileMenuButton>

          {mobileMenuOpen && (
            <MobileMenu>
              <MobileNavList>
                <NavItem>
                  <NavButton 
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setMobileMenuOpen(false);
                    }}
                  >
                    HOME
                  </NavButton>
                </NavItem>
                <NavItem>
                  <NavButton 
                    onClick={() => {
                      scrollToSection(refs.aboutRef);
                      setMobileMenuOpen(false);
                    }}
                  >
                    ABOUT
                  </NavButton>
                </NavItem>
                <NavItem>
                  <NavButton 
                    onClick={() => {
                      scrollToSection(refs.projectsRef);
                      setMobileMenuOpen(false);
                    }}
                  >
                    PROJECTS
                  </NavButton>
                </NavItem>
                <NavItem>
                  <NavButton 
                    onClick={() => {
                      scrollToSection(refs.skillsRef);
                      setMobileMenuOpen(false);
                    }}
                  >
                    SKILLS
                  </NavButton>
                </NavItem>
                <NavItem>
                  <NavButton 
                    onClick={() => {
                      scrollToSection(refs.resourcesRef);
                      setMobileMenuOpen(false);
                    }}
                  >
                    RESOURCES
                  </NavButton>
                </NavItem>
                <NavItem>
                  <NavButton 
                    onClick={() => {
                      scrollToSection(refs.devSetupRef);
                      setMobileMenuOpen(false);
                    }}
                  >
                    DEV SETUP
                  </NavButton>
                </NavItem>
                <NavItem>
                  <NavButton 
                    onClick={() => {
                      scrollToSection(refs.contactRef);
                      setMobileMenuOpen(false);
                    }}
                  >
                    CONTACT
                  </NavButton>
                </NavItem>
              </MobileNavList>
            </MobileMenu>
          )}
        </HeaderInner>
      </div>
    </HeaderContainer>
  );
};

export default Header;