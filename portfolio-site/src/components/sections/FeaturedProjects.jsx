import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useFeaturedProjects } from '../../hooks/usePortfolioData';

const FeaturedProjects = () => {
  const { data: projects, loading } = useFeaturedProjects();

  if (loading) {
    return (
      <section id="projects" className="py-section">
        <div className="max-w-content mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="py-section">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-medium text-accent-primary uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-h1-mobile md:text-h1 font-bold text-light-text dark:text-dark-text mt-2">
              Featured Projects
            </h2>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary mt-3 max-w-xl">
              A selection of projects that showcase my skills in building scalable, user-focused applications.
            </p>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-accent-primary font-medium hover:underline"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects && Array.isArray(projects) && projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project._id || project.id || index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  if (!project) return null;
  
  const isLarge = index === 0;

  return (
    <article
      className={`group relative rounded-2xl overflow-hidden bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-accent-primary/50 transition-all duration-300 hover:shadow-medium dark:hover:shadow-dark-medium ${
        isLarge ? 'md:col-span-2' : ''
      }`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className={`relative p-6 ${isLarge ? 'md:p-8' : ''}`}>
        {/* Year badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-semibold mb-4">
          {project.year || '2024'}
        </div>

        <h3 className={`font-bold text-light-text dark:text-dark-text group-hover:text-accent-primary transition-colors ${
          isLarge ? 'text-2xl' : 'text-xl'
        }`}>
          {project.title || 'Untitled Project'}
        </h3>

        <p className={`text-light-text-secondary dark:text-dark-text-secondary mt-3 ${
          isLarge ? 'text-body-lg' : 'text-body'
        }`}>
          {isLarge ? (project.longDescription || project.description) : project.description || 'No description available'}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.techStack && Array.isArray(project.techStack) ? project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-light-bg-secondary dark:bg-dark-surface-hover text-light-text-secondary dark:text-dark-text-secondary border border-light-border dark:border-dark-border"
            >
              {tech}
            </span>
          )) : null}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-light-border dark:border-dark-border">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:underline"
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
              className="inline-flex items-center gap-2 text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary transition-colors"
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
