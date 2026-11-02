import React from 'react';
import {
  ArrowRight,
  Mail,
  Sparkles,
  Layers,
  ShieldCheck,
  Cpu,
  Download,
  CheckCircle2,
  Monitor
} from 'lucide-react';
import { visibleProducts } from '../data/products';
import { promptflowDownloadConfig } from '../data/promptflowDownload';

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
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-easyflow-50/80 via-white to-white"
    >
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-easyflow-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] bg-easyflow-100/60 rounded-full blur-3xl" />
        {/* Subtle geometric dot grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#1D4ED8 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
        
        {/* ========================================================================= */}
        {/* 1. MAJOR PROMPTFLOW PRODUCT LAUNCH PRESENTATION                          */}
        {/* ========================================================================= */}
        <div className="reveal-on-scroll">
          <div className="relative rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 bg-white/90 shadow-glass overflow-hidden group">
            {/* Top brand accent ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-easyflow-600 via-[#008B8B] to-easyflow-accent" />

            {/* Background subtle cyan atmospheric glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Product Launch Announcement & CTAs */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Launch status pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-teal-50 text-[#007373] border border-teal-200/80 mb-4 shadow-2xs">
                  <span className="flex h-2 w-2 rounded-full bg-[#008B8B] animate-pulse" />
                  <span>NEW LAUNCH • INTRODUCING PROMPTFLOW</span>
                </div>

                {/* Product Name & Brand Tagline */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center p-1.5 shadow-2xs shrink-0">
                    <img
                      src="./assets/promptflow-logo.png"
                      alt="PromptFlow Official Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-easyflow-navy tracking-tight">
                      PromptFlow
                    </h2>
                    <span className="text-xs sm:text-sm font-semibold text-[#007373]">
                      Think Beyond Words. Engineer Beyond Limits.
                    </span>
                  </div>
                </div>

                {/* Authoritative Narrative Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2 mb-6 font-normal">
                  Not just another prompt editor. PromptFlow is where ideas evolve into precision. Create, refine, test, and master your prompts with an intelligent workspace built for the next generation of AI creators. Featuring handcrafted autocomplete intelligence, intelligent spelling correction, and a powerful developer-inspired environment, PromptFlow transforms the way you interact with AI.
                </p>

                {/* Micro Feature Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full mb-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#008B8B] shrink-0" />
                    <span>Handcrafted Autocomplete Intelligence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#008B8B] shrink-0" />
                    <span>Intelligent Spelling Correction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#008B8B] shrink-0" />
                    <span>Deterministic 100-Point Test Lab</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#008B8B] shrink-0" />
                    <span>Visual Workflow Diagram Designer</span>
                  </div>
                </div>

                {/* Primary Launch Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 w-full">
                  {promptflowDownloadConfig.isReleasePublished ? (
                    <a
                      href={promptflowDownloadConfig.githubAssetDownloadUrl}
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-[#008B8B] border border-slate-800 hover:border-[#008B8B] shadow-sm hover:shadow-md transition-all active:scale-[0.98] group w-full sm:w-auto text-center"
                      title={`Download PromptFlow for Windows (${promptflowDownloadConfig.fileSize})`}
                    >
                      <Download className="w-4 h-4 text-[#26B8B8] group-hover:text-white transition-colors" />
                      <span>Download Now</span>
                      <span className="text-[11px] font-normal text-slate-300 group-hover:text-white/90 pl-1 border-l border-slate-700">
                        Windows x64
                      </span>
                    </a>
                  ) : (
                    <a
                      href="./promptflow/#download"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-[#008B8B] border border-slate-800 hover:border-[#008B8B] shadow-sm hover:shadow-md transition-all active:scale-[0.98] group w-full sm:w-auto text-center"
                      title="Windows Installer (Pending GitHub Release Publication)"
                    >
                      <Download className="w-4 h-4 text-[#26B8B8] group-hover:text-white transition-colors" />
                      <span>Download</span>
                      <span className="text-[10px] font-medium text-amber-300 bg-amber-950/70 border border-amber-800/60 px-1.5 py-0.5 rounded">
                        Pending Release
                      </span>
                    </a>
                  )}

                  <a
                    href="./promptflow/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-easyflow-700 bg-easyflow-50 hover:bg-easyflow-100 border border-easyflow-200 transition-all active:scale-[0.98] w-full sm:w-auto text-center group"
                  >
                    <span>Explore PromptFlow</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <span className="text-[11px] text-slate-500 flex items-center gap-1.5 w-full sm:w-auto pt-1 sm:pt-0">
                    <Monitor className="w-3.5 h-3.5 text-slate-400" />
                    <span>Windows 10 / 11 (64-bit) • v{promptflowDownloadConfig.version} • {promptflowDownloadConfig.fileSize}</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Actual Application Screenshot Preview */}
              <div className="lg:col-span-5 relative">
                <a
                  href="./promptflow/"
                  className="block relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl group/preview transition-transform hover:scale-[1.01] duration-300"
                  title="View Dedicated PromptFlow Product Showcase"
                >
                  {/* Mockup Window Titlebar */}
                  <div className="bg-slate-900 px-3.5 py-2 flex items-center justify-between border-b border-slate-800 text-[11px] text-slate-400 font-mono select-none">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 font-sans font-medium text-slate-300 text-[10px]">PromptFlow Workspace</span>
                    </div>
                    <span className="text-[10px] text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/40">
                      100% Offline
                    </span>
                  </div>

                  {/* Real screenshot from the desktop app */}
                  <div className="relative bg-slate-950 aspect-[16/10] overflow-hidden">
                    <img
                      src="./assets/promptflow-editor-preview.png"
                      alt="PromptFlow Desktop IDE Screenshot Preview"
                      className="w-full h-full object-cover object-top group-hover/preview:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-xs border border-slate-700">
                        <span>Click to View Product Showcase</span>
                        <ArrowRight className="w-3 h-3 text-[#26B8B8]" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. EASYFLOW PARENT STARTUP PRESENTATION & ECOSYSTEM NETWORK             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4">
          
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left reveal-on-scroll">
            {/* Startup Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-easyflow-700 text-xs font-semibold tracking-wide mb-6">
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
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-easyflow-600 hover:bg-easyflow-700 shadow-sm hover:shadow-card-hover transition-all active:scale-[0.98] group w-full sm:w-auto text-center"
              >
                <span>Explore Full Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-easyflow-700 bg-white/80 hover:bg-white border border-slate-200/90 hover:border-easyflow-300 shadow-xs transition-all active:scale-[0.98] w-full sm:w-auto text-center backdrop-blur-xs"
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
          <div className="lg:col-span-5 relative flex items-center justify-center reveal-on-scroll">
            
            {/* Main Interactive Ecosystem Showcase Card */}
            <div className="relative w-full max-w-md glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
              
              {/* Subtle top brand accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-easyflow-600 via-easyflow-400 to-easyflow-accent" />

              {/* Central Logo Feature */}
              <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100/90">
                <div className="w-24 h-24 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center p-3 mb-4 transition-transform group-hover:scale-105 duration-300">
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
                  <span className="text-xs font-medium text-easyflow-600 bg-easyflow-50 px-2.5 py-0.5 rounded-full border border-easyflow-100">
                    {visibleProducts.length} Active Initiatives
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {visibleProducts.map((p) => (
                    <a
                      key={p.id}
                      href={p.id === 'promptflow' ? './promptflow/' : '#products'}
                      onClick={(e) => {
                        if (p.id !== 'promptflow') {
                          handleScrollTo(e, '#products');
                        }
                      }}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition-all text-left group/node ${
                        p.id === 'promptflow'
                          ? 'bg-teal-50/60 hover:bg-teal-50 border-teal-200'
                          : 'bg-white/70 hover:bg-easyflow-50/80 border-slate-200/70 hover:border-easyflow-300'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg p-0.5 shrink-0 overflow-hidden flex items-center justify-center border ${
                          p.logoTheme === 'dark'
                            ? 'bg-slate-900 border-slate-700'
                            : 'bg-white border-slate-200/90'
                        }`}
                      >
                        <img
                          src={p.logo}
                          alt={`${p.name} Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-800 truncate group-hover/node:text-easyflow-600 transition-colors flex items-center gap-1">
                          <span>{p.name}</span>
                          {p.id === 'promptflow' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#008B8B]" />
                          )}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
                          {p.category.split('/')[0].trim()}
                        </div>
                      </div>
                    </a>
                  ))}
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
