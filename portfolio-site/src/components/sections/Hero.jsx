import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAbout, useContact } from '../../hooks/usePortfolioData';

const Hero = () => {
  const { data: about } = useAbout();
  const { data: contact } = useContact();
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs - updated with mint/amber colors */}
        <div className="absolute top-20 -left-40 w-80 h-80 bg-mint/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-amber/15 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-mint-light/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-content mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint/10 border border-mint/20 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
            </span>
            <span className="text-sm font-medium text-mint">
              {contact?.availability || 'Available for opportunities'}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-hero-mobile md:text-hero text-light-text dark:text-dark-text font-display mb-6 animate-slide-up">
            <span className="block">Hi, I'm</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-mint via-mint-light to-amber bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                {about?.name?.split(' ')[0] || 'Developer'}
              </span>
              <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-amber animate-float" />
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-h2-mobile md:text-h2 text-light-text-secondary dark:text-dark-text-secondary font-display mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
            {about?.title || 'Full Stack Developer'}
          </h2>

          {/* Description */}
          <p className="text-body-lg text-light-text-muted dark:text-dark-text-muted leading-relaxed mb-10 max-w-2xl animate-slide-up" style={{ animationDelay: '200ms' }}>
            {about?.intro || 'Building scalable applications and solving complex problems.'}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-mint text-white font-medium hover:bg-mint-dark shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-light-border dark:border-dark-border text-light-text dark:text-dark-text font-medium hover:border-mint hover:text-mint transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-light-border dark:border-dark-border animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div>
              <div className="text-2xl font-bold text-mint">3+</div>
              <div className="text-sm text-light-text-muted dark:text-dark-text-muted">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-mint">15+</div>
              <div className="text-sm text-light-text-muted dark:text-dark-text-muted">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-mint">5+</div>
              <div className="text-sm text-light-text-muted dark:text-dark-text-muted">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
