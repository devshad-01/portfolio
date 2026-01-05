import { useState } from 'react';
import { useSkills } from '../../hooks/usePortfolioData';

const Skills = () => {
  const { data: skills } = useSkills();
  const [activeTab, setActiveTab] = useState('Frontend');

  // Map skills to skillicons.dev icon names
  const skillIconMap = {
    'React': 'react',
    'Next.js': 'nextjs',
    'TypeScript': 'ts',
    'JavaScript': 'js',
    'Tailwind CSS': 'tailwind',
    'HTML/CSS': 'html',
    'Vue.js': 'vue',
    'Python': 'python',
    'Django': 'django',
    'Flask': 'flask',
    'Node.js': 'nodejs',
    'Express': 'express',
    'PostgreSQL': 'postgresql',
    'MongoDB': 'mongodb',
    'MySQL': 'mysql',
    'Docker': 'docker',
    'Kubernetes': 'kubernetes',
    'AWS': 'aws',
    'Git': 'git',
    'GitHub Actions': 'githubactions',
    'Linux': 'linux',
    'Jenkins': 'jenkins'
  };

  const getSkillIcon = (skill) => {
    const iconName = skillIconMap[skill];
    return iconName ? `https://skillicons.dev/icons?i=${iconName}` : null;
  };

  // Map categories to display names
  const categoryMap = {
    'Frontend': 'Frontend',
    'Backend': 'Backend',
    'DevOps': 'DevOps & Cloud'
  };

  const tabs = Object.keys(categoryMap);

  return (
    <section id="skills" className="py-section bg-white dark:bg-dark-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-nb-black dark:text-white mb-3">
            💻 Technologies & Tools
          </h2>
          <p className="text-lg font-semibold text-accent-primary">
            Tools and technologies I work with
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b-2 border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-bold text-lg transition-all ${
                activeTab === tab
                  ? 'text-nb-black dark:text-white border-b-4 border-nb-black dark:border-white'
                  : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            >
              {categoryMap[tab]}
            </button>
          ))}
        </div>

        {/* Skills Grid - Compact */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills[activeTab]?.map((skill, index) => {
            const iconUrl = getSkillIcon(skill);
            return (
              <div
                key={`${skill}-${index}`}
                className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-dark-surface border-3 border-nb-black rounded-2xl shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200 min-w-[120px]"
              >
                {iconUrl && (
                  <img 
                    src={iconUrl} 
                    alt={skill}
                    className="w-12 h-12"
                  />
                )}
                <span className="text-sm font-bold text-nb-black dark:text-white text-center">
                  {skill}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
