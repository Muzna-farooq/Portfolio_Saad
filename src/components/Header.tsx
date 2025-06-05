import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-primary-900/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-2xl font-display font-bold text-white hover:text-accent-300 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            Saad<span className="text-accent-400">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`font-medium transition-all duration-200 hover:text-accent-300 ${
                  activeSection === item.id 
                    ? 'text-accent-400 border-b-2 border-accent-400' 
                    : 'text-white/80'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-primary-800 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`py-2 px-4 font-medium transition-colors rounded-lg ${
                activeSection === item.id 
                  ? 'bg-secondary-800 text-white' 
                  : 'text-white/80 hover:bg-primary-700'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;