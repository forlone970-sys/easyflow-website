import React from 'react';
import { ArrowRight, Mail, Sparkles, Layers, ShieldCheck, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-easyflow-50/70 via-white to-white"
    >
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-easyflow-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] bg-easyflow-50/80 rounded-full blur-3xl" />
        {/* Subtle geometric dot grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#046E86 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Startup Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-easyflow-100/70 border border-easyflow-200/60 text-easyflow-700 text-xs font-semibold tracking-wide mb-6">
              <span className="flex h-2 w-2 rounded-full bg-easyflow-600 animate-pulse" />
              <span>Technology Startup Portfolio</span>
            </div>

            {/* Main Motto & Brand Presentation */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-easyflow-navy tracking-tight leading-[1.12] mb-6">
              <span className="block text-easyflow-600">Turning Ideas Into</span>
              <span className="block">Intelligent Solutions.</span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl font-semibold text-easyflow-800/90 mb-4 tracking-tight">
              Innovative Technology. Simplified Experiences.
            </p>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              EasyFlow is a technology startup developing practical digital products that simplify everyday challenges through thoughtful software, intelligent features, and user-focused design.
            </p>

            {/* Functional Call-To-Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#products"
                onClick={(e) => handleScrollTo(e, '#products')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-easyflow-600 hover:bg-easyflow-700 shadow-sm hover:shadow-card transition-all active:scale-[0.98] group w-full sm:w-auto text-center"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-easyflow-700 bg-white hover:bg-easyflow-50 border border-slate-200 hover:border-easyflow-300 shadow-xs transition-all active:scale-[0.98] w-full sm:w-auto text-center"
              >
                <Mail className="w-4 h-4 text-easyflow-600" />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Credibility Micro-Points */}
            <div className="mt-10 pt-6 border-t border-slate-200/70 flex flex-wrap sm:grid sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg text-slate-600 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-easyflow-600 shrink-0" />
                <span className="font-medium text-slate-700">User Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-easyflow-600 shrink-0" />
                <span className="font-medium text-slate-700">Modern Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-easyflow-600 shrink-0" />
                <span className="font-medium text-slate-700">Growing Portfolio</span>
              </div>
            </div>
          </div>

          {/* Right Column: Distinctive Interactive Innovation Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Main Interactive Ecosystem Showcase Card */}
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-200/90 relative overflow-hidden group">
              
              {/* Subtle top brand accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-easyflow-600 via-easyflow-400 to-easyflow-accent" />

              {/* Central Logo Feature */}
              <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100">
                <div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center p-3 mb-4 transition-transform group-hover:scale-105 duration-300">
                  <img
                    src="./assets/easyflow-mark.png"
                    alt="EasyFlow Official Startup Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-easyflow-navy">EasyFlow</h3>
                <p className="text-xs font-medium text-slate-500 mt-1">
                  Turning Ideas Into Intelligent Solutions
                </p>
              </div>

              {/* Connected Applications Visual Network */}
              <div className="py-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Application Ecosystem
                  </span>
                  <span className="text-xs font-medium text-easyflow-600 bg-easyflow-50 px-2 py-0.5 rounded-full border border-easyflow-100">
                    4 Active Initiatives
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* MediMate Mini Node */}
                  <a
                    href="#products"
                    onClick={(e) => handleScrollTo(e, '#products')}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50/80 hover:bg-easyflow-50/70 border border-slate-100 hover:border-easyflow-200 transition-all text-left"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 p-0.5 shrink-0 overflow-hidden flex items-center justify-center">
                      <img src="./assets/medimate-logo.png" alt="MediMate Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">MediMate</div>
                      <div className="text-[10px] text-slate-500">Healthcare</div>
                    </div>
                  </a>

                  {/* RoomVault Mini Node */}
                  <a
                    href="#products"
                    onClick={(e) => handleScrollTo(e, '#products')}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50/80 hover:bg-easyflow-50/70 border border-slate-100 hover:border-easyflow-200 transition-all text-left"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 p-0.5 shrink-0 overflow-hidden flex items-center justify-center">
                      <img src="./assets/roomvault-logo.jpg" alt="RoomVault Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">RoomVault</div>
                      <div className="text-[10px] text-slate-500">File Spaces</div>
                    </div>
                  </a>

                  {/* Zaiqa AR Mini Node */}
                  <a
                    href="#products"
                    onClick={(e) => handleScrollTo(e, '#products')}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50/80 hover:bg-easyflow-50/70 border border-slate-100 hover:border-easyflow-200 transition-all text-left"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 p-0.5 shrink-0 overflow-hidden flex items-center justify-center">
                      <img src="./assets/zaiqa-ar-logo.png" alt="Zaiqa AR Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">Zaiqa AR</div>
                      <div className="text-[10px] text-slate-500">AR Dining</div>
                    </div>
                  </a>

                  {/* PetroPlan Mini Node */}
                  <a
                    href="#products"
                    onClick={(e) => handleScrollTo(e, '#products')}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50/80 hover:bg-easyflow-50/70 border border-slate-100 hover:border-easyflow-200 transition-all text-left"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 p-0.5 shrink-0 overflow-hidden flex items-center justify-center">
                      <img src="./assets/petroplan-logo.png" alt="PetroPlan Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">PetroPlan</div>
                      <div className="text-[10px] text-slate-500">Navigation</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-easyflow-600" />
                  Purpose-Built Software
                </span>
                <span className="text-easyflow-600 font-semibold flex items-center gap-1">
                  Explore Ecosystem &rarr;
                </span>
              </div>
            </div>

            {/* Decorative Subtle Corner Accent */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-28 h-28 bg-easyflow-100/40 rounded-2xl -z-10 transform -rotate-3" />
            <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 bg-easyflow-200/30 rounded-2xl -z-10 transform rotate-6" />
          </div>

        </div>
      </div>
    </section>
  );
};
