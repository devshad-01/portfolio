import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aboutData, contactInfo } from '../../data/portfolio';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <div className="absolute top-20 -left-40 w-80 h-80 bg-accent-primary/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-accent-secondary/15 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-accent-gradient-via/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
        
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-status-success/10 border border-status-success/20 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success"></span>
            </span>
            <span className="text-sm font-medium text-status-success">
              {contactInfo.availability}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-hero-mobile md:text-hero text-light-text dark:text-dark-text mb-6 animate-slide-up">
            <span className="block">Hi, I'm</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-accent-primary via-accent-gradient-via to-accent-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                {aboutData.name.split(' ')[0]}
              </span>
              <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-accent-primary animate-float" />
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-h2-mobile md:text-h2 text-light-text-secondary dark:text-dark-text-secondary mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
            {aboutData.title}
          </h2>

          {/* Description */}
          <p className="text-body-lg text-light-text-muted dark:text-dark-text-muted leading-relaxed mb-10 max-w-2xl animate-slide-up" style={{ animationDelay: '200ms' }}>
            {aboutData.intro}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-primary text-white font-medium hover:bg-accent-primary-hover shadow-glow hover:shadow-glow-strong transition-all duration-300"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-light-border dark:border-dark-border text-light-text dark:text-dark-text font-medium hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-light-border dark:border-dark-border animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div>
              <div className="text-2xl font-bold text-light-text dark:text-dark-text">3+</div>
              <div className="text-sm text-light-text-muted dark:text-dark-text-muted">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-light-text dark:text-dark-text">15+</div>
              <div className="text-sm text-light-text-muted dark:text-dark-text-muted">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-light-text dark:text-dark-text">5+</div>
              <div className="text-sm text-light-text-muted dark:text-dark-text-muted">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
