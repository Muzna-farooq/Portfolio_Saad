import { GraduationCap, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  icon: React.ReactNode;
}

const Education = () => {
  const education: EducationItem[] = [
    {
      degree: "BSCS — Computer Science",
      institution: "Arid Agriculture University",
      period: "2013–2017",
      icon: <GraduationCap size={28} className="text-accent-400" />
    },
    {
      degree: "MCSE — Microsoft Certified Solutions Expert",
      institution: "Vvork Cloud Technologies",
      period: "2018–2019",
      icon: <Award size={28} className="text-accent-400" />
    }
  ];
  
  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-900 rounded-full filter blur-[150px] opacity-10 transform -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Education & Certifications" 
          subtitle="My academic background and professional certifications that have shaped my skills."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <div 
              key={index} 
              className="bg-primary-800/60 backdrop-blur-sm rounded-xl p-6 border border-primary-700 shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-700/80 flex items-center justify-center mr-4 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-white">{item.degree}</h3>
                  <p className="text-accent-400 mt-1">{item.institution}</p>
                  <p className="text-white/60 mt-2">{item.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;