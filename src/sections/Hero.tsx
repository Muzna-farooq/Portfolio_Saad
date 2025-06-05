import { useState, useEffect } from 'react';
import { Phone, Mail, Globe, ArrowDown } from 'lucide-react';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden relative"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-900 rounded-full filter blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-600 rounded-full filter blur-[150px] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Hi, I'm <span className="text-accent-400">Saad Khalid</span>
              <span className="block mt-2">UI/UX & Product Designer</span>
            </h1>

            <p className="mt-6 text-xl text-white/80 max-w-xl">
              Creating engaging, intuitive experiences for mobile and web — blending creativity with usability.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center text-white/70 hover:text-white transition-colors">
                <Phone size={18} className="mr-3 text-accent-400" />
                <span>+92 324 5757508</span>
              </div>
              <div className="flex items-center text-white/70 hover:text-white transition-colors">
                <Mail size={18} className="mr-3 text-accent-400" />
                <a href="mailto:saadkhalid29@gmail.com">saadkhalid29@gmail.com</a>
              </div>
              <div className="flex items-center text-white/70 hover:text-white transition-colors cursor-pointer">
                <Globe size={18} className="mr-3 text-accent-400" />
                <a 
                  href="https://drive.google.com/file/d/144B_HC3h6Quy5jx87tM2yrM3huigCDe3/preview" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  Portfolio
                </a>
              </div>
            </div>

  <div className="mt-10 flex flex-wrap gap-4">
    <a 
      href="#projects" 
      className="px-6 py-3 bg-secondary-800 hover:bg-secondary-700 text-white font-medium rounded-lg transition-colors shadow-glow"
      onClick={(e) => {
        e.preventDefault();
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          window.scrollTo({
            top: projectsSection.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }}
    >
      View Projects
    </a>
    <a 
      href="#contact" 
      className="px-6 py-3 bg-transparent border border-accent-400 hover:bg-accent-900/20 text-white font-medium rounded-lg transition-colors"
      onClick={(e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          window.scrollTo({
            top: contactSection.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }}
    >
      Contact Me
    </a>
  </div>
</div>

          
          <div className={`flex justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Profile illustration or stylized image placeholder */}
              <div className="w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-secondary-800 to-accent-900 rounded-full overflow-hidden shadow-glow-lg">
              <img 
              src="/your-photo.jpeg" 
              alt="Saad Khalid" 
              className="w-full h-full object-cover rounded-full" 
              />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-800 px-4 py-3 rounded-lg shadow-lg">
                <p className="text-sm font-medium text-white">
                  <span className="text-accent-400">8+</span> Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <a 
              href="#skills" 
              className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const skillsSection = document.getElementById('skills');
                if (skillsSection) {
                  window.scrollTo({
                    top: skillsSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;