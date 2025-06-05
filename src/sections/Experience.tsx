import { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Sr. UI/UX Designer",
      company: "Nuclieos",
      period: "Nov 2024 – April 2025",
      description: [
        "Led brand identity development for tech startups",
        "Conducted extensive UX research to inform design decisions",
        "Created detailed design documentation for development teams",
        "Developed high-fidelity prototypes for client approval"
      ],
      skills: ["Brand Identity", "Prototyping", "UX Research", "Design Documentation"]
    },
    {
      title: "Sr. UI/UX Designer",
      company: "Lambda Logics",
      period: "Sept 2023 – Nov 2024",
      description: [
        "Designed intuitive mobile and web interfaces",
        "Created detailed wireframes and interactive prototypes",
        "Collaborated with developers to ensure design implementation",
        "Solved complex UX problems through innovative design solutions"
      ],
      skills: ["Mobile UI", "Web Design", "Wireframing", "Prototyping"]
    },
    {
      title: "Sr. UI/UX Designer",
      company: "Geeklone Technologies",
      period: "June 2022 – March 2023",
      description: [
        "Designed SAAS & AI-based applications",
        "Worked on cutting-edge LLM products",
        "Conducted user research and usability studies",
        "Performed quality assurance on final implementations"
      ],
      skills: ["SAAS Design", "AI Interfaces", "User Research", "QA"]
    },
    {
      title: "Sr. UI/UX Designer (Team Lead)",
      company: "Ciel Technologies",
      period: "Oct 2021 – March 2022",
      description: [
        "Led design teams on multiple projects",
        "Created mobile and web UI/UX designs",
        "Mentored junior designers",
        "Optimized UX for improved conversion rates"
      ],
      skills: ["Team Leadership", "Mobile/Web Design", "Mentoring", "UX Optimization"]
    },
    {
      title: "UI/UX Designer",
      company: "DeveloperzLoop",
      period: "July 2021 – Oct 2021",
      description: [
        "Full-stack UI/UX design from concept to implementation",
        "Conducted UX research and competitor analysis",
        "Performed quality assurance on final products"
      ],
      skills: ["Full-Stack UI/UX", "UX Research", "QA"]
    },
    {
      title: "Graphic & UI/UX Designer (Freelance)",
      company: "Upwork",
      period: "March 2020 – June 2021",
      description: [
        "Designed mobile app interfaces and user experiences",
        "Created wireframes and interactive mockups",
        "Developed brand identity for clients",
        "Prepared comprehensive design documentation"
      ],
      skills: ["Mobile Design", "Wireframing", "Branding", "Documentation"]
    },
    {
      title: "Junior UI/UX Designer",
      company: "Parentheses",
      period: "Feb 2018 – April 2020",
      description: [
        "Created UI/UX designs for mobile and web applications",
        "Developed brand identity materials",
        "Designed print materials and marketing collateral",
        "Created social media content"
      ],
      skills: ["Mobile/Web Design", "Branding", "Print Design", "Social Content"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-secondary-900 rounded-full filter blur-[150px] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Professional Experience" 
          subtitle="A timeline of my professional journey, highlighting key roles and accomplishments."
        />
        
        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary-700 transform -translate-x-1/2"></div>
          
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`experience-item opacity-0 translate-y-10 transition-all duration-500 relative mb-12 ${
                index % 2 === 0 ? 'md:pl-10 md:pr-12 md:text-right' : 'md:pr-10 md:pl-12'
              } md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute top-0 w-5 h-5 rounded-full bg-accent-400 shadow-glow z-20 transform translate-y-2">
                <div className="absolute inset-0 border-2 border-accent-400 rounded-full animate-pulse"></div>
                <div className={`absolute top-2 ${
                  index % 2 === 0 ? 'left-0' : 'right-0'
                } w-10 h-0.5 bg-secondary-700`}></div>
              </div>
              
              {/* Content Card */}
              <div className="bg-primary-800/60 backdrop-blur-sm rounded-xl p-6 border border-primary-700 shadow-lg hover:shadow-glow transition-all duration-300">
                <h3 className="text-xl font-display font-semibold text-white">{exp.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-accent-400 font-medium">🔹 {exp.company}</p>
                  <p className="text-white/60 text-sm">{exp.period}</p>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-white/80 flex items-start">
                      <span className="text-accent-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="bg-primary-700 text-white/80 px-3 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;