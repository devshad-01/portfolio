import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Contact', href: '/#contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    if (href === '/projects') return location.pathname === '/projects';
    return false;
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white dark:bg-dark-bg border-b-4 border-nb-black py-4`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center gap-3 bg-white dark:bg-dark-surface px-4 py-2 border-4 border-nb-black rounded-full shadow-brutal-sm">
              <div className="w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center text-white font-black text-sm">
                SM
              </div>
              <div className="hidden sm:block">
                <div className="font-black text-sm text-nb-black dark:text-white">Shadrack Mutinda</div>
                <div className="text-xs text-gray-500 dark:text-gray-300">Software Engineer</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-nb-black dark:text-white font-bold hover:text-accent-primary transition-all ${
                  isActive(item.href) ? 'underline decoration-4 underline-offset-4 text-accent-primary' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 bg-white border-4 border-nb-black rounded-full shadow-brutal-sm"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-nb-black" />
              ) : (
                <Moon className="w-5 h-5 text-nb-black" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex px-6 py-2 bg-accent-primary text-white font-bold text-sm border-2 border-nb-black rounded-full hover:bg-accent-primary/90 transition-colors"
            >
              Get in Touch
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 bg-white border-3 border-nb-black rounded-full shadow-brutal-sm"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-nb-black" />
              ) : (
                <Menu className="w-5 h-5 text-nb-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64 pt-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-2 bg-white border-4 border-nb-black rounded-nb p-4 shadow-brutal">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-4 py-3 rounded-lg font-bold transition-all ${
                  isActive(item.href)
                    ? 'bg-accent-primary text-white'
                    : 'text-nb-black hover:bg-nb-gray'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
