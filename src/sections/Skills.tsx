import { useEffect, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import { 
  Palette, Pencil, Search, Layers, CheckCircle, Check, 
  BrainCircuit, LineChart, MessagesSquare, Languages, Figma 
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface ToolSkill {
  name: string;
  level: number;
}

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = document.querySelectorAll('.skill-card');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const designSkills: Skill[] = [
    { name: 'UI/UX Design (Web & Mobile)', icon: <Palette size={24} className="text-accent-400" /> },
    { name: 'Prototyping & Wireframing', icon: <Pencil size={24} className="text-accent-400" /> },
    { name: 'UX Research & Analysis', icon: <Search size={24} className="text-accent-400" /> },
    { name: 'Interaction Design', icon: <Layers size={24} className="text-accent-400" /> },
    { name: 'Usability Testing', icon: <CheckCircle size={24} className="text-accent-400" /> },
    { name: 'Quality Assurance', icon: <Check size={24} className="text-accent-400" /> },
    { name: 'Information Architecture', icon: <Layers size={24} className="text-accent-400" /> },
    { name: 'Brand Identity Design', icon: <Palette size={24} className="text-accent-400" /> },
  ];

  const softSkills: Skill[] = [
    { name: 'Critical Thinking & Problem-Solving', icon: <BrainCircuit size={24} className="text-accent-400" /> },
    { name: 'Project Management', icon: <LineChart size={24} className="text-accent-400" /> },
    { name: 'Communication', icon: <MessagesSquare size={24} className="text-accent-400" /> },
  ];

  const tools: ToolSkill[] = [
    { name: 'Figma', level: 95 },
    { name: 'Adobe XD', level: 90 },
    { name: 'Sketch', level: 85 },
  ];

  const languages: Skill[] = [
    { name: 'English', icon: <Languages size={24} className="text-accent-400" /> },
    { name: 'Urdu', icon: <Languages size={24} className="text-accent-400" /> },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 relative" 
      ref={skillsRef}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary-900 rounded-full filter blur-[150px] opacity-20 transform -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="A comprehensive overview of my professional abilities and specialized skill sets."
        />

        {/* Outer grid: Design Skills full width, Tools + Soft Skills side by side */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          {/* Design Skills */}
          <div className="skill-card opacity-0 bg-primary-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-700 shadow-lg transform hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-display font-semibold text-white mb-6">Design Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {designSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 bg-primary-700/50 rounded-lg transition-transform hover:-translate-y-1"
                >
                  {skill.icon}
                  <span className="ml-3 text-white/90">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nested grid for Tools and Soft Skills side by side */}
          <div className="grid grid-cols-2 gap-8">

            {/* Tools */}
            <div className="skill-card opacity-0 bg-primary-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-700 shadow-lg transform hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-display font-semibold text-white mb-6 flex items-center">
                <Figma size={24} className="mr-2 text-accent-400" /> 
                Tools
              </h3>
              <div className="space-y-6">
                {tools.map((tool, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/90">{tool.name}</span>
                      <span className="text-accent-400">{tool.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-primary-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-secondary-700 to-accent-500 rounded-full"
                        style={{ width: `${tool.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills and Languages */}
            <div className="skill-card opacity-0 bg-primary-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-700 shadow-lg transform hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-display font-semibold text-white mb-6 flex items-center">
                <BrainCircuit size={24} className="mr-2 text-accent-400" />
                Soft Skills
              </h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-3 bg-primary-700/50 rounded-lg transition-transform hover:-translate-y-1"
                  >
                    {skill.icon}
                    <span className="ml-3 text-white/90">{skill.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-display font-semibold text-white mb-4 flex items-center">
                  <Languages size={24} className="mr-2 text-accent-400" />
                  Languages
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((language, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-3 bg-primary-700/50 rounded-lg transition-transform hover:-translate-y-1"
                    >
                      {language.icon}
                      <span className="ml-3 text-white/90">{language.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
