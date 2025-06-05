import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface ProjectType {
  id: number;
  title: string;
  category: string;
  images: string[];
  description: string;
  tags: string[];
}

// Move projects outside component to avoid re-creating array on every render
const projects: ProjectType[] = [
  {
    id: 1,
    title: "Emanda",
    category: "web",
    images: ["/images/project/1.png"],
    description: `Emanda is a platform designed to assist business consulting firms and companies in determining their business valuation, creating automated data rooms, setting business goals and plans, and monitoring them on a daily basis. Its aim is to simplify business.`,
    tags: ["Business", "Consulting", "Automation", "Valuation"]
  },
  {
    id: 2,
    title: "Luminary Group",
    category: "web",
    images: ["/images/project/2.png"],
    description: `This design showcases the epitome of architectural excellence and modern luxury. With a sleek, minimalistic interface, the website emphasizes Luminary Group’s dedication to innovation and artistry.`,
    tags: ["Architecture", "Luxury", "Design", "Innovation"]
  },
    {
    id: 3,
    title: "Miss Marple’s Tearoom",
    category: "branding",
    images: [
      "/images/project/3.png"
    ],
    description: `Miss Marple's Tearoom blends timeless elegance with the charm of a traditional English tearoom, offering an inviting space for tea lovers to unwind. As part of this project, I crafted a visual identity and experience that captures the essence of comfort and sophistication.`,
    tags: ["Branding", "Visual Identity", "Design", "Elegance"]
  },
    {
    id: 4,
    title: "L.E.V.8",
    category: "web",
    images: [
      "/images/project/4.png"
    ],
    description: `A robust safety and risk management software designed for industries to streamline compliance, monitor staff, and mitigate risks. The platform offers features such as event tracking, staff compliance, supplier management, eLearning integration, document handling, and checklist creation.`,
    tags: ["Safety", "Risk Management", "Compliance", "eLearning"]
  },
    {
    id: 5,
    title: "BriefCase",
    category: "web",
    images: [
      "/images/project/5(1).png",
      "/images/project/5(2).png",
      "/images/project/5(3).png"
    ],
    description: `Master the art of case briefing. Our AI-powered tool creates efficient, comprehensive, and customizable case briefs tailored to your learning goals. Engage with the tool to generate potential questions and test your understanding on key takeaways.`,
    tags: ["AI", "Education", "Tool", "Learning"]
  },
    {
    id: 6,
    title: "Net Consent",
    category: "web",
    images: [
      "/images/project/6(1).png"
    ],
    description: `Software to manage and maintain company's data and internal systems management interface. A streamlined layout with a focus on functionality and clarity. Toggle options for enabling secure connections and synchronization. A user-friendly design for seamless server configuration and management.`,
    tags: ["Software", "Data Management", "UI/UX", "Security"]
  },
    {
    id: 7,
    title: "Healthcare Management Board",
    category: "web",
    images: [
      "/images/project/6(2).png"
    ],
    description: `This is a user-friendly healthcare management dashboard designed for efficient patient management and consultation scheduling. The interface includes key metrics such as total patients, income, appointments, and treatments. It also displays upcoming and previous consultations in an organized sidebar. A detailed table lists patient information with their medical concerns, priority levels, and actions required.`,
    tags: ["Healthcare", "Dashboard", "Patient Management", "Scheduling"]
  },
  {
    id: 8,
    title: "Al-Siraat Enrolment Management System",
    category: "web",
    images: [
        "/images/project/7(1).png",
        "/images/project/7(2).png",
      ],
    description: `An efficient enrolment management system developed for Al-Siraat. It streamlines the admission process, allowing easy application tracking, document uploads, and status updates. The platform ensures transparency between school staff and parents with user-friendly interfaces and automated notifications.`,
    tags: ["Education", "Admissions", "Management System", "Web App"]
  },
    {
    id: 9,
    title: "Step Counter",
    category: "mobile",
    images: ["/images/project/8.png"],
    description: "A sleek and intuitive fitness dashboard designed to help users monitor and achieve their health goals. The platform tracks daily steps, heart rate, calories burned, and weekly activity averages through real-time data visualization. With a user-friendly interface, it’s ideal for fitness enthusiasts and wearable device users aiming to maintain an active and healthy lifestyle.",
    tags: ["Health", "Fitness", "Mobile App"]
  },
    {
    id: 10,
    title: "Water Reminder System",
    category: "mobile",
    images: ["/images/project/9.png"],
    description: "A smart application designed to help users stay hydrated by tracking daily water intake and sending timely reminders. It provides personalized hydration recommendations based on age, weight, and activity level. The system offers a customizable, user-friendly interface ideal for promoting healthy hydration habits.",
    tags: ["Health", "Hydration", "Mobile App"]
  },
    {
    id: 11,
    title: "Crypto Trainer",
    category: "web",
    images: ["/images/project/10.png"],
    description: "The Crypto Trading Training project is built to educate aspiring traders on both fundamental and advanced cryptocurrency trading techniques. It offers a structured learning experience enriched with real-world trading scenarios, helping users gain practical insights and hands-on experience.",
    tags: ["Crypto", "Education", "Trading"]
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]); // removed projects from deps

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Design' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'branding', label: 'Branding' },
  ];

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-900 rounded-full filter blur-[150px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A selection of my recent design work across different platforms and industries."
        />

        {/* Filters */}
        <div className="flex justify-center mb-12 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 m-2 rounded-full text-sm font-medium transition-colors ${
                filter === category.value 
                  ? 'bg-secondary-800 text-white shadow-glow' 
                  : 'bg-primary-800/70 text-white/70 hover:bg-primary-700'
              }`}
              onClick={() => setFilter(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-primary-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-glow border border-primary-700 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    className="px-4 py-2 bg-secondary-800 text-white rounded-lg flex items-center shadow-glow transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye size={18} className="mr-2" />
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-display font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm line-clamp-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="bg-primary-700 text-white/70 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-primary-700 text-white/70 px-3 py-1 rounded-full text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            ></div>
            <div className="relative bg-primary-800 rounded-xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto animate-fade-in">
              <button 
                className="absolute top-4 right-4 text-white/70 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>

              <div className="relative h-72 sm:h-96 overflow-hidden">
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={`${selectedProject.title} image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute top-1/2 left-2 -translate-y-1/2 bg-secondary-800/80 hover:bg-secondary-800 text-white rounded-full p-2"
                      aria-label="Previous Image"
                    >
                      &#8592;
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute top-1/2 right-2 -translate-y-1/2 bg-secondary-800/80 hover:bg-secondary-800 text-white rounded-full p-2"
                      aria-label="Next Image"
                    >
                      &#8594;
                    </button>
                  </>
                )}
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-display font-bold text-white">{selectedProject.title}</h2>
                <div className="mt-1 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="bg-primary-700 text-white/70 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-white/80">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
