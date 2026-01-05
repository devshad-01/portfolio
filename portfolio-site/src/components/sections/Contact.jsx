import { Mail, Github, Linkedin, Twitter, MapPin, Send } from 'lucide-react';
import { useContact } from '../../hooks/usePortfolioData';

const Contact = () => {
  const { data: contact } = useContact();

  const socialLinks = [
    { icon: Github, href: contact.github, label: 'GitHub', color: 'hover:bg-charcoal hover:text-white dark:hover:bg-sage dark:hover:text-charcoal' },
    { icon: Linkedin, href: contact.linkedin, label: 'LinkedIn', color: 'hover:bg-[#0A66C2] hover:text-white' },
    { icon: Twitter, href: contact.twitter, label: 'Twitter', color: 'hover:bg-[#1DA1F2] hover:text-white' },
  ];

  return (
    <section id="contact" className="py-section bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-mint uppercase tracking-wider font-mono">
              Let's Connect
            </span>
            <h2 className="text-h1-mobile md:text-h1 font-bold font-display text-light-text dark:text-dark-text mt-2">
              Get in Touch
            </h2>
            <p className="text-body-lg text-light-text-secondary dark:text-dark-text-secondary mt-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact Card */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-mint/10 to-amber/10 rounded-full blur-3xl -z-10" />
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left - Email CTA */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-h2-mobile md:text-h2 font-bold font-display text-light-text dark:text-dark-text mb-2">
                    Drop me a line
                  </h3>
                  <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
                    I typically respond within 24 hours
                  </p>
                </div>

                <a
                  href={`mailto:${contact.email}`}
                  className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-mint text-white font-medium hover:bg-mint-dark shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send an Email</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <p className="text-sm text-light-text-muted dark:text-dark-text-muted font-mono">
                  {contact.email}
                </p>
              </div>

              {/* Right - Social & Location */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold font-display text-light-text dark:text-dark-text uppercase tracking-wider mb-4">
                    Connect on Social
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-xl bg-light-bg-secondary dark:bg-dark-surface-hover text-light-text-secondary dark:text-dark-text-secondary transition-all duration-200 ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {contact.location && (
                  <div>
                    <h4 className="text-sm font-semibold font-display text-light-text dark:text-dark-text uppercase tracking-wider mb-3">
                      Location
                    </h4>
                    <div className="flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary">
                      <MapPin className="w-4 h-4 text-mint" />
                      <span>{contact.location}</span>
                    </div>
                  </div>
                )}

                {contact.availability && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint/10 border border-mint/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
                    </span>
                    <span className="text-sm font-medium text-mint">
                      {contact.availability}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
