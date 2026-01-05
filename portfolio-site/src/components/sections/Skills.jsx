import { Code } from 'lucide-react';
import { useSkills } from '../../hooks/usePortfolioData';

const Skills = () => {
  const { data: skills } = useSkills();

  // Flatten skills into a single array with category labels
  const allSkills = Object.entries(skills).flatMap(([category, skillList]) =>
    skillList.map(skill => ({ name: skill, category }))
  );

  return (
    <section id="skills" className="py-section bg-nb-gray dark:bg-dark-bg">
      <div className="max-w-narrow mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-16 flex items-center justify-center bg-nb-gray-dark dark:bg-dark-surface border-4 border-nb-black rounded-full shadow-brutal-sm">
            <Code className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-h1-mobile md:text-h1 font-black text-nb-black dark:text-white">
            Technical Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-4">
          {allSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-3 bg-white dark:bg-dark-surface px-6 py-3 border-4 border-nb-black rounded-full shadow-brutal-sm dark:shadow-brutal-sm-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200 cursor-default"
            >
              <div className="w-2 h-2 bg-nb-black dark:bg-white rounded-full" />
              <span className="font-black text-lg text-nb-black dark:text-dark-text">{skill.name}</span>
              <span className="text-xs font-bold text-gray-500 dark:text-dark-text-muted uppercase">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
