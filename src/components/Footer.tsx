import React from 'react';
import { Mail } from 'lucide-react';

interface FooterProps {
  basePath?: string;
  isSubPage?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ basePath = './', isSubPage = false }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isSubPage) {
      e.preventDefault();
      const elem = document.querySelector(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shrink-0">
                <img
                  src={`${basePath}assets/easyflow-icon.jpg`}
                  alt="EasyFlow Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  EasyFlow
                </span>
                <span className="text-[10px] uppercase tracking-widest text-easyflow-300 font-semibold block -mt-1">
                  Turning Ideas Into Intelligent Solutions
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              EasyFlow is a technology startup dedicated to engineering practical digital products and intuitive software experiences that simplify everyday life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href={`${basePath}#home`}
                  onClick={(e) => handleScrollTo(e, '#home')}
                  className="hover:text-easyflow-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={`${basePath}#about`}
                  onClick={(e) => handleScrollTo(e, '#about')}
                  className="hover:text-easyflow-accent transition-colors"
                >
                  About EasyFlow
                </a>
              </li>
              <li>
                <a
                  href={`${basePath}#products`}
                  onClick={(e) => handleScrollTo(e, '#products')}
                  className="hover:text-easyflow-accent transition-colors"
                >
                  Products & Applications
                </a>
              </li>
              <li>
                <a
                  href={`${basePath}#vision`}
                  onClick={(e) => handleScrollTo(e, '#vision')}
                  className="hover:text-easyflow-accent transition-colors"
                >
                  Our Vision
                </a>
              </li>
              <li>
                <a
                  href={`${basePath}#contact`}
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="hover:text-easyflow-accent transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li className="pt-2 border-t border-slate-800/80">
                <a
                  href={`${basePath}medimate/delete-account/`}
                  className="hover:text-rose-400 text-slate-300 font-medium transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></span>
                  <span>MediMate Account Deletion</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Direct Contact
            </h4>
            <p className="text-xs text-slate-400">
              Official startup support & collaboration:
            </p>
            <a
              href="mailto:support.easyflow@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-easyflow-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>support.easyflow@gmail.com</span>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} EasyFlow. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with purpose & precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
