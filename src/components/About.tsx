import React from 'react';
import { Target, Users2, Compass, Cpu, Sparkles } from 'lucide-react';
export const About: React.FC = () => {

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/70 border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-easyflow-700 text-xs font-semibold tracking-wide uppercase mb-3">
            About Our Startup
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-easyflow-navy tracking-tight break-words">
            The Purpose Behind EasyFlow
          </h2>
          <div className="w-12 h-1 bg-easyflow-600 rounded-full mx-auto mt-4 mb-6"></div>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            EasyFlow is a technology startup focused on transforming ideas into practical digital experiences. Through a growing portfolio of applications, we aim to simplify everyday tasks, improve accessibility, and make technology more useful in people's lives.
          </p>
        </div>

        {/* Parent Brand & Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between reveal-on-scroll">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 mb-6 shadow-xs">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-easyflow-navy mb-3">A Unified Parent Brand</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Operating as the umbrella technology company, EasyFlow steers ideation, engineering standards, and shared design principles across our multi-domain software applications.
              </p>
            </div>
          </div>

          <div className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between reveal-on-scroll">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 mb-6 shadow-xs">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-easyflow-navy mb-3">Real-World Problem Solving</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We design software around genuine daily challenges—ranging from smart personal budgeting and medication adherence to augmented reality dining and fuel navigation.
              </p>
            </div>
          </div>

          <div className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between reveal-on-scroll">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 mb-6 shadow-xs">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-easyflow-navy mb-3">Accessible & Intuitive</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every digital solution is built with high usability standards, clean interfaces, and transparent functionality to ensure technology serves people effortlessly.
              </p>
            </div>
          </div>

        </div>

        {/* Our Own Intelligent Systems */}
        <div className="mt-12 sm:mt-16 reveal-on-scroll">
          <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden border border-slate-200/90 shadow-glass">
            {/* Top brand accent ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-easyflow-600 via-easyflow-400 to-easyflow-accent" />

            <div className="max-w-4xl">
              <div className="w-12 h-12 rounded-2xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 mb-6 shadow-xs">
                <Cpu className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-easyflow-navy tracking-tight mb-4">
                Our Own Intelligent Systems
              </h3>

              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                <p>
                  EasyFlow believes the future of technology lies not in building increasingly complex AI models, but in making software inherently intelligent.
                </p>
                <p>
                  We focus on engineering our own lightweight, cost-efficient AI systems that deliver practical intelligence without unnecessary computational complexity. Our approach is to make software smarter, more efficient, and more accessible rather than competing to build the largest or most sophisticated AI models.
                </p>
              </div>

              <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-easyflow-50/80 border border-easyflow-100/90 flex items-start sm:items-center gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-easyflow-200/80 flex items-center justify-center text-easyflow-600 shrink-0 shadow-2xs">
                  <Sparkles className="w-5 h-5 text-easyflow-600" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-easyflow-900 leading-snug">
                  Our philosophy: Build intelligent software, not unnecessarily intelligent models.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
