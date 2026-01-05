import { useState, useMemo } from 'react';
import { ExternalLink, Github, Search, Filter, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/usePortfolioData';

const ProjectsPage = () => {
  const { data: projects } = useProjects();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get unique categories
  const categories = useMemo(() => {
    if (!projects || !Array.isArray(projects)) return ['all'];
    const cats = new Set(projects.map(p => p?.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (!projects || !Array.isArray(projects)) return [];
    
    return projects.filter(project => {
      if (!project) return false;
      
      const matchesSearch = 
        (project.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
        (project.description?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
        (project.techStack && Array.isArray(project.techStack) && project.techStack.some(tech => 
          (tech?.toLowerCase() || '').includes(searchQuery.toLowerCase())
        ));
      
      const matchesCategory = 
        selectedCategory === 'all' || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [projects, searchQuery, selectedCategory]);

  const getCategoryLabel = (cat) => {
    const labels = {
      all: 'All Projects',
      fullstack: 'Full Stack',
      backend: 'Backend',
      frontend: 'Frontend',
      devops: 'DevOps',
      mobile: 'Mobile',
    };
    return labels[cat] || cat;
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-h1-mobile md:text-h1 font-bold text-light-text dark:text-dark-text mb-4">
            All Projects
          </h1>
          <p className="text-body-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl">
            A collection of projects I've worked on, from full-stack applications to DevOps automation.
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-light-text-muted dark:text-dark-text-muted" />
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder:text-light-text-muted dark:placeholder:text-dark-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-light-text-muted dark:text-dark-text-muted" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-accent-primary text-white'
                    : 'bg-light-surface dark:bg-dark-surface text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-bg-secondary dark:hover:bg-dark-surface-hover border border-light-border dark:border-dark-border'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
              No projects found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-accent-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  if (!project) return null;
  
  return (
    <article
      className="group relative p-6 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-accent-primary/50 transition-all duration-300 hover:shadow-medium dark:hover:shadow-dark-medium"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-accent-primary text-white text-xs font-semibold">
          Featured
        </div>
      )}

      {/* Content */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-accent-primary uppercase tracking-wider">
              {project.year || '2024'}
            </span>
            {project.category && (
              <>
                <span className="w-1 h-1 rounded-full bg-light-text-muted dark:bg-dark-text-muted" />
                <span className="text-xs text-light-text-muted dark:text-dark-text-muted capitalize">
                  {project.category}
                </span>
              </>
            )}
          </div>
          <h3 className="text-xl font-semibold text-light-text dark:text-dark-text group-hover:text-accent-primary transition-colors">
            {project.title || 'Untitled Project'}
          </h3>
        </div>

        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary line-clamp-2">
          {project.description || 'No description available'}
        </p>

        {/* Tech Stack */}
        {project.techStack && Array.isArray(project.techStack) && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-light-bg-secondary dark:bg-dark-surface-hover text-light-text-secondary dark:text-dark-text-secondary"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-light-bg-secondary dark:bg-dark-surface-hover text-light-text-muted dark:text-dark-text-muted">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Long Description (if available) */}
        {project.longDescription && (
          <p className="text-sm text-light-text-muted dark:text-dark-text-muted line-clamp-3">
            {project.longDescription}
          </p>
        )}

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-light-border dark:border-dark-border">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-primary hover:underline"
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
              className="inline-flex items-center gap-1.5 text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-accent-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectsPage;
