import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useEducation } from '../../hooks/usePortfolioData';

const Education = () => {
  const { data: education } = useEducation();

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Present';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section className="py-section">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-accent-primary uppercase tracking-wider">
            Academic Background
          </span>
          <h2 className="text-h1-mobile md:text-h1 font-bold text-light-text dark:text-dark-text mt-2">
            Education
          </h2>
        </div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="group relative p-6 md:p-8 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-accent-primary/50 transition-all duration-300"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-accent-primary via-accent-gradient-via to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="p-4 rounded-2xl bg-accent-primary/10 self-start">
                  <GraduationCap className="w-8 h-8 text-accent-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-light-text-muted dark:text-dark-text-muted">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </span>
                    </div>
                  </div>

                  <p className="text-body-lg text-light-text-secondary dark:text-dark-text-secondary mb-2">
                    {edu.degree} in {edu.field}
                  </p>

                  {edu.description && (
                    <p className="text-sm text-light-text-muted dark:text-dark-text-muted mb-4">
                      {edu.description}
                    </p>
                  )}

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-light-text-secondary dark:text-dark-text-secondary"
                        >
                          <Award className="w-4 h-4 text-accent-primary flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
