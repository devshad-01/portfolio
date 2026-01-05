import { Briefcase, Mail, Github, Linkedin, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAbout, useContact } from '../../hooks/usePortfolioData';
import { urlFor } from '../../config/sanity';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { data: about } = useAbout();
  const { data: contact } = useContact();
  const [mounted, setMounted] = useState(false);
  
  const avatarUrl = about?.avatar ? urlFor(about.avatar)?.url() : null;
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-gradient-to-br from-nb-blue via-accent-primary to-nb-purple dark:from-gray-900 dark:via-dark-bg dark:to-gray-800 py-16 md:py-24 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-gradient-x" />
      
      {/* Geometric shapes with animation */}
      <div className="absolute -left-20 top-1/4 w-80 h-80 bg-nb-pink/20 rounded-full blur-3xl animate-pulse-slow hidden lg:block" />
      <div className="absolute -right-20 top-1/3 w-96 h-96 bg-nb-orange/20 rounded-full blur-3xl animate-pulse-slow hidden lg:block" />
      <div className="absolute left-1/2 bottom-0 w-64 h-64 bg-nb-purple/15 rounded-full blur-3xl animate-pulse-slower" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBWNzBoMzBWMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-20" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + i * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text block */}
          <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-up">
            {/* Status badge with animation */}
            <div className="inline-block mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-sm border-4 border-nb-black rounded-full shadow-brutal-sm dark:shadow-brutal-sm-dark hover:scale-105 transition-transform duration-300 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                  <div className="relative w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
                </div>
                <span className="text-sm font-black uppercase tracking-wider text-nb-black">
                  {contact?.availability || 'Open to Opportunities'}
                </span>
                <Sparkles className="w-4 h-4 text-nb-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Main heading with gradient */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight md:leading-none mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/95 to-white/90">
                {about?.name || 'Shadrack Mutinda'}
              </span>
            </h1>
            
            {/* Animated subtitle */}
            <div className="overflow-hidden mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/95 mb-4 animate-slide-up">
                {about?.title || 'Senior Software Engineer'}
              </h2>
            </div>

            {/* Description with enhanced typography */}
            <div className="relative">
              <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-12 leading-relaxed relative z-10">
                {about?.intro || 'Experienced full-stack developer specializing in scalable web applications, cloud architecture, and enterprise solutions.'}
              </p>
              {/* Highlight effect */}
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-nb-orange to-nb-pink rounded-full" />
            </div>

            {/* CTA Buttons with enhanced interaction */}
            <div className="hero-buttons flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-nb-black to-gray-900 text-white font-black uppercase border-4 border-nb-black rounded-full shadow-brutal hover:shadow-brutal-press hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300 hover:scale-105"
              >
                <Briefcase className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span>View Work</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-nb-black font-black uppercase border-4 border-nb-black rounded-full shadow-brutal hover:shadow-brutal-press hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </div>

            {/* Social Icons with enhanced hover effects */}
            <div className="hero-social flex justify-center lg:justify-start gap-4">
              {[
                { icon: Github, href: contact?.github, label: 'GitHub' },
                { icon: Linkedin, href: contact?.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: contact?.email ? `mailto:${contact.email}` : '', label: 'Email' }
              ].map((social, index) => (
                social.href && (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-14 h-14 flex items-center justify-center bg-white/95 backdrop-blur-sm border-4 border-nb-black rounded-full shadow-brutal hover:shadow-brutal-press hover:translate-y-[-4px] transition-all duration-300 hover:rotate-6"
                    style={{ transitionDelay: `${index * 50}ms` }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-nb-black transition-transform group-hover:scale-110" />
                    {/* Tooltip effect */}
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-nb-black text-white text-xs font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.label}
                    </span>
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Avatar Image with enhanced styling */}
          {avatarUrl && (
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-left">
              <div className="relative w-full max-w-md">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-nb-orange/30 via-nb-pink/20 to-nb-purple/30 rounded-3xl blur-xl animate-pulse-slow" />
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl border-8 border-white/20 shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-br from-nb-orange/10 to-nb-purple/10 mix-blend-overlay" />
                  <img
                    src={avatarUrl}
                    alt={about?.name || 'Profile'}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-nb-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-white/50 rounded-tl-2xl" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-white/50 rounded-tr-2xl" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-white/50 rounded-bl-2xl" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-white/50 rounded-br-2xl" />
                </div>
                
                {/* Floating tech badges */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full border-4 border-nb-black shadow-brutal-sm animate-float-slow">
                  <span className="text-sm font-black text-nb-black">🚀 8+ Years Exp</span>
                </div>
                <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full border-4 border-nb-black shadow-brutal-sm animate-float-slower">
                  <span className="text-sm font-black text-nb-black">⭐ Full-Stack</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-4 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;