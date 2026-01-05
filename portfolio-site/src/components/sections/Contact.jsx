import { Mail, Linkedin, Phone } from 'lucide-react';
import { useContact } from '../../hooks/usePortfolioData';

const Contact = () => {
  const { data: contact } = useContact();

  return (
    <section id="contact" className="py-section bg-nb-gray-dark dark:bg-dark-bg border-t-4 border-b-4 border-nb-black">
      <div className="max-w-narrow mx-auto px-6 text-center">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 flex items-center justify-center bg-white border-4 border-nb-black rounded-full shadow-brutal-sm">
            <Phone className="w-7 h-7 text-nb-black" />
          </div>
          <h2 className="text-h1-mobile md:text-h1 font-black text-white">
            Let's Connect
          </h2>
        </div>

        <p className="text-xl font-bold text-gray-300 mb-10">
          I'm always interested in collaborating on innovative projects and exploring new opportunities.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:mutinda.shadrack20@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-nb-black font-black uppercase border-4 border-nb-black rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          
          <a
            href="https://www.linkedin.com/in/shadrackmutinda/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-primary text-white font-black uppercase border-4 border-accent-primary rounded-full shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-press transition-all duration-200"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>

        {/* Availability Status */}
        {contact.availability && (
          <div className="mt-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 border-4 border-green-500 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-black uppercase text-green-400">
                {contact.availability}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
