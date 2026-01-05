import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useFeaturedProjects } from '../../hooks/usePortfolioData';
import { urlFor } from '../../config/sanity';

const FeaturedProjects = () => {
  const { data: projects } = useFeaturedProjects();

  return (
    <section id="projects" className="py-section">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-medium text-mint uppercase tracking-wider font-mono">
              Portfolio
            </span>
            <h2 className="text-h1-mobile md:text-h1 font-bold font-display text-light-text dark:text-dark-text mt-2">
              Featured Projects
            </h2>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary mt-3 max-w-xl">
              A selection of projects that showcase my skills in building scalable, user-focused applications.
            </p>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-mint font-medium hover:underline"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const isLarge = index === 0;
  
  // Get image URL - handle both Sanity and local images
  const getImageUrl = () => {
    if (!project.thumbnail) return null;
    // If it's already a URL string, use it directly
    if (typeof project.thumbnail === 'string') return project.thumbnail;
    // If it's a Sanity image object, use urlFor
    if (project.thumbnail?.asset) {
      const url = urlFor(project.thumbnail);
      return url?.url?.() || null;
    }
    return null;
  };
  
  const imageUrl = getImageUrl();

  return (
    <article
      className={`group relative rounded-2xl overflow-hidden bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-mint/50 transition-all duration-300 hover:shadow-medium dark:hover:shadow-dark-medium ${
        isLarge ? 'md:col-span-2' : ''
      }`}
    >
      {/* Project Image */}
      {imageUrl && (
        <div className={`relative overflow-hidden ${isLarge ? 'h-64' : 'h-48'}`}>
          <img 
            src={imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-light-surface dark:from-dark-surface via-transparent to-transparent" />
        </div>
      )}
      
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint/5 via-transparent to-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className={`relative p-6 ${isLarge ? 'md:p-8' : ''}`}>
        {/* Year badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint/10 text-mint text-xs font-semibold font-mono mb-4">
          {project.year}
        </div>

        <h3 className={`font-bold font-display text-light-text dark:text-dark-text group-hover:text-mint transition-colors ${
          isLarge ? 'text-2xl' : 'text-xl'
        }`}>
          {project.title}
        </h3>

        <p className={`text-light-text-secondary dark:text-dark-text-secondary mt-3 ${
          isLarge ? 'text-body-lg' : 'text-body'
        }`}>
          {isLarge ? project.longDescription || project.description : project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium font-mono rounded-lg bg-light-bg-secondary dark:bg-dark-surface-hover text-light-text-secondary dark:text-dark-text-secondary border border-light-border dark:border-dark-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-light-border dark:border-dark-border">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-mint hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-mint transition-colors"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjects;
