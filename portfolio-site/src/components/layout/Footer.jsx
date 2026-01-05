import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { contactInfo, siteConfig } from '../../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: contactInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: contactInfo.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: contactInfo.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${contactInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-nb-black border-t-4 border-nb-black">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white text-nb-black font-black uppercase border-4 border-white rounded-full"
          >
            <div className="w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center text-white text-sm font-black">
              SM
            </div>
            Shad Mirza
          </Link>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white text-nb-black border-4 border-white rounded-full hover:bg-accent-primary hover:border-accent-primary hover:text-white transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t-2 border-gray-700 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-sm font-bold text-gray-400">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm font-bold text-gray-400 flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-nb-pink fill-nb-pink" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
