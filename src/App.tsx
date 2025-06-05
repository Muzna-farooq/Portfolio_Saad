import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;