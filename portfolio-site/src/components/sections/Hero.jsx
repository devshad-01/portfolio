import { Briefcase, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAbout, useContact } from '../../hooks/usePortfolioData';
import { urlFor } from '../../config/sanity';
import { useEffect, useState } from 'react';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import { Highlighter } from '@/components/ui/highlighter';
import { PixelImage } from '@/components/ui/pixel-image';

const Hero = () => {
  const { data: about } = useAbout();
  const { data: contact } = useContact();
  const [mounted, setMounted] = useState(false);
  
  const avatarUrl = about?.avatar ? urlFor(about.avatar)?.url() : null;
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative bg-nb-blue overflow-hidden py-section">
      {/* Brutalist background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-nb-pink rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-nb-orange rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-nb-cyan rounded-full blur-3xl" />
      </div>

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0">
        <DotPattern
          width={40}
          height={40}
          cx={1.5}
          cy={1.5}
          cr={1.5}
          className={cn(
            "fill-white/10",
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
          )}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center lg:justify-between gap-12 lg:gap-16">
          
          {/* Content */}
          <div className="space-y-8 max-w-2xl" data-aos="fade-up">
            
            {/* Status badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border-4 border-nb-black rounded-full shadow-brutal">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-black text-nb-black uppercase">
                {contact?.availability || 'Available for opportunities'}
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white">
                {about?.name || 'Shadrack Mutinda'}
              </h1>
              
              <h2 className="text-2xl sm:text-3xl font-black text-[#b5ff6d]">
                {about?.title || 'Senior Software Engineer'}
              </h2>
            </div>

            {/* Description */}
            <p className="text-xl font-bold text-white leading-relaxed max-w-xl">
              Experienced{' '}
              <Highlighter action="highlight" color="#ec4899" strokeWidth={1} padding={1}>
                full-stack developer
              </Highlighter>{' '}
              specializing in{' '}
              <Highlighter action="underline" color="#f97316" strokeWidth={1} padding={1}>
                scalable web applications
              </Highlighter>
              ,{' '}
              <Highlighter action="highlight" color="#06b6d4" strokeWidth={1} padding={1}>
                cloud architecture
              </Highlighter>
              , and enterprise solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: 'https://github.com/devshad-01', label: 'GitHub', showText: true, text: '@devshad-01', isSignature: true },
                { icon: Linkedin, href: contact?.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: contact?.email ? `mailto:${contact.email}` : '', label: 'Email' }
              ].map((social) => (
                social.href && (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200 ${
                      social.showText 
                        ? 'px-6 py-3 gap-2 bg-[#b5ff6d] border-4 border-[#b5ff6d]' 
                        : 'w-14 h-14 bg-white border-4 border-nb-black'
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon className={`w-5 h-5 ${social.showText ? 'text-nb-black' : 'text-nb-black'}`} />
                    {social.showText && (
                      <span className="text-sm font-black text-nb-black">{social.text}</span>
                    )}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Avatar */}
          {avatarUrl && (
            <div className="relative flex justify-center lg:justify-start lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:z-10" data-aos="fade-left">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden">
                  <PixelImage
                    src={avatarUrl}
                    grid="8x8"
                    grayscaleAnimation
                    pixelFadeInDuration={1000}
                    maxAnimationDelay={1200}
                    colorRevealDelay={1500}
                    className="scale-[1.8] transform"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;