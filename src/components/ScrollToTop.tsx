import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button 
      className={`fixed right-6 bottom-6 p-3 rounded-full bg-secondary-700 hover:bg-secondary-600 shadow-glow transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} className="text-white" />
    </button>
  );
};

export default ScrollToTop;