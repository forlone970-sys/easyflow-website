import React from 'react';
import { Lightbulb, SlidersHorizontal, Accessibility } from 'lucide-react';

export const Vision: React.FC = () => {
  const pillars = [
    {
      title: 'Innovation',
      tagline: 'Turning practical ideas into useful digital products.',
      description:
        'We look at everyday challenges with fresh curiosity, engineering software solutions that bring tangible, practical benefits to users rather than building complexity for its own sake.',
      icon: Lightbulb,
    },
    {
      title: 'Simplicity',
      tagline: 'Designing technology around real user needs.',
      description:
        'Great digital products feel natural and uncluttered. We prioritize clear user flows, clean visual hierarchy, and intuitive interactions that respect people’s time and focus.',
      icon: SlidersHorizontal,
    },
    {
      title: 'Accessibility',
      tagline: 'Making digital experiences easier to understand and use.',
      description:
        'Software should empower everyone. We build with clarity, high readability, and responsive convenience across devices so anyone can navigate our products effortlessly.',
      icon: Accessibility,
    },
  ];

  return (
    <section id="vision" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-easyflow-100 text-easyflow-700 text-xs font-semibold tracking-wide uppercase mb-3">
            Core Principles
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-easyflow-navy tracking-tight break-words">
            Our Vision & Why EasyFlow
          </h2>
          <div className="w-12 h-1 bg-easyflow-600 rounded-full mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            The foundational values guiding our product development, engineering decisions, and digital solutions.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 group-hover:bg-easyflow-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-easyflow-200 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-easyflow-navy mb-2 group-hover:text-easyflow-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-semibold text-easyflow-700 mb-4">
                    {pillar.tagline}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-easyflow-600">
                  <span>Guiding Pillar</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
