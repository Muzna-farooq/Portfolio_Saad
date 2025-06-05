import {Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-800 py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-display font-bold text-white">
              Saad<span className="text-accent-400">.</span>
            </h2>
            <p className="mt-2 text-white/60 text-sm">
              UI/UX & Product Designer
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/saad-butt-3142ba120/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-700 hover:bg-secondary-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-white" />
              </a>
              <a 
                href="mailto:saadkhalid29@gmail.com" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-700 hover:bg-secondary-800 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-700 text-center text-white/50 text-sm">
          <p>© {currentYear} Saad Khalid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;