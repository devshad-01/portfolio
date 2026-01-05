import { useState, useMemo } from 'react';
import { ExternalLink, Github, Search, Filter, ArrowLeft, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/usePortfolioData';
import { urlFor } from '../config/sanity';

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
    <div className="pt-24 pb-20 bg-nb-gray dark:bg-dark-bg min-h-screen">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white dark:bg-dark-surface text-nb-black dark:text-white font-black uppercase text-sm border-4 border-nb-black rounded-full shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-nb-cyan border-4 border-nb-black rounded-full shadow-brutal-sm">
              <Briefcase className="w-7 h-7 text-nb-black" />
            </div>
            <h1 className="text-h1-mobile md:text-h1 font-black text-nb-black dark:text-white">
              All Projects
            </h1>
          </div>
          <p className="text-xl font-bold text-gray-600 dark:text-gray-300 max-w-2xl">
            A collection of projects I've worked on, from full-stack applications to DevOps automation.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Search */}
            <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-nb-black dark:text-white" />
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-dark-surface text-nb-black dark:text-white font-bold border-4 border-nb-black rounded-nb placeholder:text-gray-400 focus:outline-none focus:shadow-brutal-sm transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-nb-black dark:text-white" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-black uppercase text-sm border-4 border-nb-black rounded-full transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-accent-primary text-white shadow-brutal-sm'
                    : 'bg-white dark:bg-dark-surface text-nb-black dark:text-white hover:translate-x-[2px] hover:translate-y-[2px]'
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
            <div className="inline-block p-8 bg-white border-4 border-nb-black rounded-nb shadow-brutal">
              <p className="text-xl font-black text-nb-black mb-4">
                No projects found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-accent-primary text-white font-black uppercase border-4 border-nb-black rounded-full shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  if (!project) return null;
  
  // Get alternating colors for cards
  const colors = ['bg-nb-pink', 'bg-nb-orange', 'bg-nb-cyan', 'bg-accent-primary'];
  const headerColor = colors[index % colors.length];
  
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
      className="group bg-white dark:bg-dark-surface border-4 border-nb-black rounded-nb shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-200 overflow-hidden"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Project Header */}
      <div className={`${headerColor} p-4 border-b-4 border-nb-black`}>
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-white text-nb-black font-black uppercase text-xs border-2 border-nb-black rounded-full">
            {project.category || 'Project'}
          </span>
          <span className="text-nb-black font-black text-sm">
            {project.year || '2024'}
          </span>
        </div>
      </div>

      {/* Project Image */}
      {imageUrl && (
        <div className="relative h-48 overflow-hidden border-b-4 border-nb-black">
          <img 
            src={imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 right-3 px-3 py-1 bg-nb-orange text-nb-black text-xs font-black uppercase border-2 border-nb-black rounded-full shadow-brutal-sm">
              Featured
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-black text-nb-black dark:text-white">
          {project.title || 'Untitled Project'}
        </h3>

        <p className="text-sm font-bold text-gray-600 dark:text-gray-300 line-clamp-2">
          {project.description || 'No description available'}
        </p>

        {/* Tech Stack */}
        {project.techStack && Array.isArray(project.techStack) && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-black uppercase bg-nb-gray dark:bg-dark-surface-hover text-nb-black dark:text-white border-2 border-nb-black rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-3 py-1 text-xs font-black bg-nb-gray dark:bg-dark-surface-hover text-gray-500 border-2 border-gray-400 rounded-full">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t-2 border-nb-black">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-nb-black text-white font-black uppercase text-xs border-2 border-nb-black rounded-full hover:bg-gray-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary text-white font-black uppercase text-xs border-2 border-nb-black rounded-full hover:bg-blue-600 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectsPage;
