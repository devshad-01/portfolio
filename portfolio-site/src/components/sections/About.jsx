import { User } from 'lucide-react';
import { useAbout } from '../../hooks/usePortfolioData';

const About = () => {
  const { data: about } = useAbout();

  return (
    <section id="about" className="py-section bg-light-bg dark:bg-dark-bg-secondary">
      <div className="max-w-narrow mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-16 flex items-center justify-center bg-accent-primary border-4 border-nb-black rounded-full shadow-brutal-sm">
            <User className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-h1-mobile md:text-h1 font-black text-light-text dark:text-dark-text">
            Professional Profile
          </h2>
        </div>

        {/* About Card */}
        <div className="bg-nb-gray dark:bg-dark-surface p-8 md:p-10 border-4 border-nb-black rounded-nb shadow-brutal dark:shadow-brutal-dark hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all duration-200">
          <p className="text-lg text-light-text dark:text-dark-text leading-relaxed mb-6">
            {about.intro}
          </p>
          
          {about.journey && (
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-6">
              {about.journey}
            </p>
          )}
          
          {about.current && (
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              {about.current}
            </p>
          )}

          {/* Resume CTA */}
          {about.resume && (
            <div className="mt-8 pt-6 border-t-4 border-nb-black dark:border-dark-border">
              <a
                href={about.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-nb-black text-white font-black uppercase border-4 border-nb-black rounded-full shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
