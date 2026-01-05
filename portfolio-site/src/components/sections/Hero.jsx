import { Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAbout, useContact } from '../../hooks/usePortfolioData';
import { urlFor } from '../../config/sanity';

const Hero = () => {
  const { data: about } = useAbout();
  const { data: contact } = useContact();
  
  // Use Sanity avatar when available; otherwise use a local/dev fallback image
  // (Unsplash) so you can preview locally without pushing to Sanity.
  const sanityAvatar = about?.avatar ? urlFor(about.avatar)?.url() : null;
  const fallbackAvatar = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop';
  const avatarUrl = sanityAvatar || fallbackAvatar;
  
  return (
    <section className="bg-accent-primary dark:bg-dark-bg py-12 md:py-20 relative overflow-hidden min-h-[520px] md:min-h-[600px]">
      {/* Decorative shapes */}
      <div className="absolute left-8 top-16 w-40 h-40 bg-nb-pink/30 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute right-8 top-12 w-48 h-48 bg-nb-orange/30 rounded-full blur-3xl hidden lg:block" />
      
      {/* Side Avatar removed from absolute layer — will be placed inside centered layout below */}
      
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center lg:justify-between gap-8 lg:gap-12">
          {/* Text block */}
          <div className="w-full lg:w-3/5 text-left">
        {/* Status badge */}
        <div className="inline-block mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border-4 border-nb-black rounded-full shadow-brutal-sm dark:shadow-brutal-sm-dark">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-black uppercase tracking-wide text-nb-black">
              {contact?.availability || 'Open to Opportunities'}
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-[56px] md:text-[84px] leading-tight font-black text-white mb-4">
          {about?.name || 'Shadrack Mutinda'}
        </h1>
        
        <h2 className="text-[28px] md:text-[36px] font-black text-white/90 mb-6">
          {about?.title || 'Senior Software Engineer'}
        </h2>

        {/* Description */}
        <p className="text-[18px] md:text-[19px] text-white/80 max-w-[650px] mb-10">
          {about?.intro || 'Experienced full-stack developer specializing in scalable web applications, cloud architecture, and enterprise solutions.'}
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons flex flex-wrap gap-4 mb-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-nb-black text-white font-black uppercase border-4 border-nb-black rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
          >
            <Briefcase className="w-5 h-5" />
            View Work
          </Link>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-nb-black font-black uppercase border-4 border-nb-black rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
            Contact
          </a>
        </div>

          {/* Social Icons */}
          <div className="hero-social flex gap-4 mt-2">
          {contact?.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-white border-4 border-nb-black rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
            >
              <Github className="w-6 h-6 text-nb-black" />
            </a>
          )}
          {contact?.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-white border-4 border-nb-black rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
            >
              <Linkedin className="w-6 h-6 text-nb-black" />
            </a>
          )}
          {contact?.email && (
            <a
              href={`mailto:${contact.email}`}
              className="w-14 h-14 flex items-center justify-center bg-white border-4 border-nb-black rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
            >
              <Mail className="w-6 h-6 text-nb-black" />
            </a>
          )}
          </div>
          </div>

          {/* Image block - right side, shows on lg and part of centered layout */}
          {avatarUrl && (
            <div className="hidden lg:block w-2/5 flex-shrink-0 z-0">
              <div className="w-full h-[520px] md:h-[600px] overflow-hidden">
                <img
                  src={avatarUrl}
                  alt={about?.name || 'Profile'}
                  className="w-full h-full object-cover object-top"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 100%)'
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
