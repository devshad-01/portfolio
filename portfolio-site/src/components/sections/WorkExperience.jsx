import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { useWorkExperience } from '../../hooks/usePortfolioData';
import { contactInfo } from '../../data/portfolio';

const WorkExperience = () => {
  const { data: experiences } = useWorkExperience();

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Present';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric' });
  };

  return (
    <section className="py-section bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div className="max-w-content mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-accent-primary/10">
                <Briefcase className="w-5 h-5 text-accent-primary" />
              </div>
              <h2 className="text-h2-mobile md:text-h2 font-bold text-light-text dark:text-dark-text">
                Work
              </h2>
            </div>

            <div className="space-y-1">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="group relative flex gap-4 p-4 rounded-xl hover:bg-light-surface dark:hover:bg-dark-surface transition-all duration-200"
                >
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-[1.65rem] top-14 bottom-0 w-px bg-light-border dark:bg-dark-border" />
                  )}
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 mt-1">
                    <div className={`w-3 h-3 rounded-full border-2 ${
                      exp.current 
                        ? 'border-accent-primary bg-accent-primary' 
                        : 'border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface group-hover:border-accent-primary'
                    } transition-colors`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-light-text dark:text-dark-text group-hover:text-accent-primary transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary flex items-center gap-2">
                          {exp.role}
                          <span className="px-2 py-0.5 text-xs rounded-full bg-light-bg-secondary dark:bg-dark-surface-hover">
                            {exp.type}
                          </span>
                        </p>
                      </div>
                      <span className="text-sm font-medium text-light-text-muted dark:text-dark-text-muted whitespace-nowrap">
                        {formatDate(exp.startDate).split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* LinkedIn CTA */}
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-accent-primary group transition-all duration-200"
            >
              <div className="p-2 rounded-lg bg-[#0A66C2]">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium text-light-text dark:text-dark-text">LinkedIn</p>
                <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
                  Always available for new experience
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-light-text-muted dark:text-dark-text-muted group-hover:text-accent-primary transition-colors" />
            </a>
          </div>

          {/* Featured Projects Preview */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-accent-secondary/10">
                <svg className="w-5 h-5 text-accent-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-h2-mobile md:text-h2 font-bold text-light-text dark:text-dark-text">
                Latest side/freelance project.
              </h2>
            </div>

            <FeaturedProjectsList />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedProjectsList = () => {
  const featuredProjects = [
    {
      title: 'HMS',
      description: 'Hospital management application...',
      tech: ['React', 'Spring Boot', 'Docker']
    },
    {
      title: 'SafeLife',
      description: 'Urban security application...',
      tech: ['Next', 'Laravel', 'MySQL']
    },
    {
      title: 'Pro Sales',
      description: 'Commercial management application...',
      tech: ['React', 'Node', 'PostgreSql', 'Mongo']
    },
  ];

  return (
    <div className="space-y-4">
      {featuredProjects.map((project, index) => (
        <div
          key={project.title}
          className="group p-4 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-accent-primary/50 transition-all duration-200"
        >
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-light-text dark:text-dark-text group-hover:text-accent-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-light-text-muted dark:text-dark-text-muted mb-3">
              {project.description}
            </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg bg-light-bg-secondary dark:bg-dark-surface-hover text-light-text-secondary dark:text-dark-text-secondary border border-light-border dark:border-dark-border"
                  >
                    <TechIcon tech={tech} />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
        </div>
      ))}
    </div>
  );
};

const TechIcon = ({ tech }) => {
  const icons = {
    React: '⚛️',
    'Spring Boot': '🌱',
    Docker: '🐳',
    Next: '▲',
    Laravel: '🔺',
    MySQL: '🐬',
    Node: '🟢',
    PostgreSql: '🐘',
    Mongo: '🍃',
  };
  
  return <span className="text-xs">{icons[tech] || '•'}</span>;
};

export default WorkExperience;
