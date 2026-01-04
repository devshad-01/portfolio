import { useAbout } from '../../hooks/usePortfolioData';

const About = () => {
  const { data: about } = useAbout();

  return (
    <section id="about" className="py-section">
      <div className="max-w-content mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left side - Heading */}
          <div className="lg:col-span-2">
            <span className="text-sm font-medium text-accent-primary uppercase tracking-wider">
              Get to Know Me
            </span>
            <h2 className="text-h1-mobile md:text-h1 font-bold text-light-text dark:text-dark-text mt-2">
              About Me
            </h2>
            
            {/* Avatar placeholder */}
            <div className="mt-8 relative">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-accent-primary/20 via-accent-gradient-via/20 to-accent-secondary/20 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-xl bg-accent-primary/10 -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-lg bg-accent-secondary/10 -z-10" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Intro */}
            <p className="text-body-lg text-light-text dark:text-dark-text leading-relaxed">
              {about.intro}
            </p>

            {/* Journey */}
            <div>
              <h3 className="text-h3 font-semibold text-light-text dark:text-dark-text mb-3">
                My Journey
              </h3>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {about.journey}
              </p>
            </div>

            {/* Current */}
            <div>
              <h3 className="text-h3 font-semibold text-light-text dark:text-dark-text mb-3">
                What I'm Doing Now
              </h3>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {about.current}
              </p>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-h3 font-semibold text-light-text dark:text-dark-text mb-3">
                Beyond Code
              </h3>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {about.interests}
              </p>
            </div>

            {/* Resume CTA */}
            {about.resume && (
              <div className="pt-4">
                <a
                  href={about.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-light-bg-secondary dark:bg-dark-surface-hover text-light-text dark:text-dark-text font-medium hover:bg-accent-primary hover:text-white transition-all duration-300"
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
      </div>
    </section>
  );
};

export default About;
