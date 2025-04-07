import { useRef } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Resources from './sections/Resources';
import DevSetup from './sections/DevSetup';
import Contact from './sections/Contact';
// import Hero from './sections/Hero';
// import About from './sections/About';
// import Projects from './sections/Projects';
// import Skills from './sections/Skills';
// import Resources from './sections/Resources';
// import DevSetup from './sections/DevSetup';
// import Contact from './sections/Contact';
// import Footer from './components/Footer';

const App = () => {
  // Create refs for each section for smooth scrolling
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const devSetupRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Function to scroll to sections
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <GlobalStyles />
      <div className="app-wrapper">
      <Header 
        scrollToSection={scrollToSection}
        refs={{ aboutRef, projectsRef, skillsRef, resourcesRef, devSetupRef, contactRef }}
      />
      
      <main>
        <Hero scrollToProjects={() => scrollToSection(projectsRef)} />
    
        <div ref={aboutRef}>
          <About />
        </div>
        
        <div ref={projectsRef}>
          <Projects />
        </div>
        
        <div ref={skillsRef}>
          <Skills />
        </div>
        
        <div ref={resourcesRef}>
          <Resources />
        </div>
        
        <div ref={devSetupRef}>
          <DevSetup />
        </div>
        
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      
      <Footer />
      </div>
    </>
  );
};

export default App;