import { useSkills } from '../../hooks/usePortfolioData';

const Skills = () => {
  const { data: skills } = useSkills();

  const categoryColors = {
    'Backend': { bg: 'bg-mint/10', text: 'text-mint', border: 'border-mint/20' },
    'Frontend': { bg: 'bg-amber/10', text: 'text-amber', border: 'border-amber/20' },
    'DevOps & Cloud': { bg: 'bg-mint-light/10', text: 'text-mint-light', border: 'border-mint-light/20' },
    'Databases': { bg: 'bg-charcoal-light/10', text: 'text-charcoal dark:text-sage', border: 'border-charcoal/20 dark:border-sage/20' },
  };

  const categoryIcons = {
    'Backend': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    'Frontend': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'DevOps & Cloud': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    'Databases': (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  };

  return (
    <section className="py-section bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-mint uppercase tracking-wider font-mono">
            Technical Expertise
          </span>
          <h2 className="text-h1-mobile md:text-h1 font-bold font-display text-light-text dark:text-dark-text mt-2">
            Skills & Technologies
          </h2>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary mt-3 max-w-xl mx-auto">
            A comprehensive toolkit built through years of building real-world applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, skillList]) => {
            const colors = categoryColors[category] || { bg: 'bg-mint/10', text: 'text-mint', border: 'border-mint/20' };
            const icon = categoryIcons[category];
            
            return (
              <div
                key={category}
                className="group p-6 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-mint/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${colors.bg} ${colors.text}`}>
                    {icon}
                  </div>
                  <h3 className="font-semibold font-display text-light-text dark:text-dark-text">
                    {category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-sm font-medium font-mono rounded-lg ${colors.bg} ${colors.text} ${colors.border} border transition-all duration-200 hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
