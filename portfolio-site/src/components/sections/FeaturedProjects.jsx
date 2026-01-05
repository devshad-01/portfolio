import { Link } from 'react-router-dom';
import { Briefcase, ExternalLink, Github } from 'lucide-react';
import { useFeaturedProjects } from '../../hooks/usePortfolioData';
import { urlFor } from '../../config/sanity';

const FeaturedProjects = () => {
  const { data: projects } = useFeaturedProjects();

  // Color palette for project headers
  const colors = ['bg-nb-pink', 'bg-nb-orange', 'bg-nb-cyan', 'bg-accent-primary'];

  return (
    <section id="projects" className="py-section bg-light-bg dark:bg-dark-bg-secondary">
      <div className="max-w-content mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-16 flex items-center justify-center bg-nb-gray-dark dark:bg-dark-surface border-4 border-nb-black rounded-full shadow-brutal-sm">
            <Briefcase className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-h1-mobile md:text-h1 font-black text-light-text dark:text-dark-text">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              color={colors[index % colors.length]} 
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-nb-black dark:bg-white text-white dark:text-nb-black font-black uppercase border-4 border-nb-black rounded-full shadow-brutal dark:shadow-brutal-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, color }) => {
  const getImageUrl = () => {
    if (!project.thumbnail) return null;
    if (typeof project.thumbnail === 'string') return project.thumbnail;
    if (project.thumbnail?.asset) {
      const url = urlFor(project.thumbnail);
      return url?.url?.() || null;
    }
    return null;
  };
  
  const imageUrl = getImageUrl();

  return (
    <article className="group bg-white dark:bg-dark-surface border-4 border-nb-black rounded-nb overflow-hidden shadow-brutal dark:shadow-brutal-dark hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-200">
      {/* Project Header / Image */}
      <div className={`h-40 ${color} flex items-center justify-center border-b-4 border-nb-black relative overflow-hidden`}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 bg-white border-4 border-nb-black rounded-nb-sm" />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-black text-nb-black dark:text-dark-text mb-3">
          {project.title}
        </h3>
        
        <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack?.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-bold bg-nb-gray dark:bg-dark-surface-hover border-2 border-gray-300 dark:border-dark-border rounded-full text-light-text-secondary dark:text-dark-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-white dark:bg-dark-surface font-bold text-sm border-2 border-accent-primary text-accent-primary rounded-lg hover:bg-blue-50 dark:hover:bg-dark-surface-hover transition-colors"
            >
              <Github className="w-4 h-4" />
              Repository
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent-primary font-bold text-sm border-2 border-accent-primary text-white rounded-lg hover:bg-accent-primary-hover transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjects;
