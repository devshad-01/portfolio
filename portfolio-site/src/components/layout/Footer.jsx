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

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="border-t border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block text-xl font-bold font-display text-light-text dark:text-dark-text"
            >
              <span className="text-mint">{'<'}</span>
              Shad
              <span className="text-mint">{' />'}</span>
            </Link>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary max-w-xs">
              {siteConfig.description}. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold font-display text-light-text dark:text-dark-text uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-mint transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold font-display text-light-text dark:text-dark-text uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-light-bg-secondary dark:bg-dark-surface-hover text-light-text-secondary dark:text-dark-text-secondary hover:text-mint hover:bg-mint/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
              {contactInfo.location}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-light-border dark:border-dark-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-light-text-muted dark:text-dark-text-muted flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-amber fill-amber" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
