import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
  basePath?: string;
  isSubPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ basePath = './', isSubPage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: `${basePath}#home` },
    { label: 'About', href: `${basePath}#about` },
    { label: 'Products', href: `${basePath}#products` },
    { label: 'Vision', href: `${basePath}#vision` },
    { label: 'Contact', href: `${basePath}#contact` },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isSubPage && href.startsWith('#')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href={`${basePath}#home`}
            onClick={(e) => handleLinkClick(e, `${basePath}#home`)}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-easyflow-600 rounded-lg p-1"
            aria-label="EasyFlow - Home"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-slate-200/90 shadow-xs flex items-center justify-center p-1 group-hover:border-easyflow-300 transition-colors">
              <img
                src={`${basePath}assets/easyflow-mark.png`}
                alt="EasyFlow Official Logo"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-easyflow-navy flex items-center gap-1.5">
                EasyFlow
                <span className="w-1.5 h-1.5 rounded-full bg-easyflow-600"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold -mt-0.5">
                Technologies
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-easyflow-600 rounded-lg hover:bg-easyflow-50 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {isSubPage ? (
              <a
                href={`${basePath}#products`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-easyflow-600 hover:bg-easyflow-700 shadow-sm hover:shadow-md transition-all active:scale-[0.98] group"
              >
                <span>Back to Main Website</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            ) : (
              <a
                href="#products"
                onClick={(e) => handleLinkClick(e, '#products')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-easyflow-600 hover:bg-easyflow-700 shadow-sm hover:shadow-md transition-all active:scale-[0.98] group"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-easyflow-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-easyflow-600 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-lg px-4 pt-3 pb-6 animate-fade-in">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-3 text-base font-medium text-slate-700 hover:text-easyflow-600 hover:bg-easyflow-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <a
                href={`${basePath}#products`}
                onClick={(e) => handleLinkClick(e, `${basePath}#products`)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-white bg-easyflow-600 hover:bg-easyflow-700 shadow-sm transition-all"
              >
                {isSubPage ? (
                  <>
                    <ArrowRight className="w-4 h-4 text-easyflow-accent" />
                    <span>Back to Main Website</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-easyflow-accent" />
                    <span>Explore Our Products</span>
                  </>
                )}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
