import React from 'react';
import { Target, Users2, Compass } from 'lucide-react';
import { LeadershipMember } from '../types';

export const About: React.FC = () => {
  const leadership: LeadershipMember[] = [
    {
      name: 'Basil Imran',
      title: 'Founder & CEO',
      roleDescription: 'Leading EasyFlow’s strategic vision, product architecture, and application innovation.',
      initials: 'BI',
    },
    {
      name: 'Shehzad Ali',
      title: 'Co-Founder & CFO',
      roleDescription: 'Overseeing financial strategy, organizational growth, and sustainable venture operations.',
      initials: 'SA',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-easyflow-100 text-easyflow-700 text-xs font-semibold tracking-wide uppercase mb-3">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-card transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-easyflow-navy mb-3">A Unified Parent Brand</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Operating as the umbrella technology company, EasyFlow steers ideation, engineering standards, and shared design principles across our multi-domain software applications.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-card transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-easyflow-navy mb-3">Real-World Problem Solving</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We design software around genuine daily challenges—ranging from health regimen management to frictionless digital file spaces, modern restaurant discovery, and fuel navigation.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-card transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 mb-6">
              <Users2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-easyflow-navy mb-3">Accessible & Intuitive</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every digital solution is built with high usability standards, clean interfaces, and transparent functionality to ensure technology serves people effortlessly.
            </p>
          </div>

        </div>

        {/* Leadership Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-easyflow-navy tracking-tight">Startup Leadership</h3>
            <p className="text-sm text-slate-500 mt-1">
              Guiding vision and strategic execution for EasyFlow and its products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200/90 shadow-card flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 relative overflow-hidden"
              >
                {/* Subtle top border accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-easyflow-600"></div>

                {/* Elegant Text-Based Monogram Avatar */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-easyflow-600 to-easyflow-800 text-white flex items-center justify-center font-bold text-xl sm:text-2xl tracking-wider shadow-sm shrink-0 select-none">
                  {member.initials}
                </div>

                {/* Profile Details */}
                <div className="flex-1">
                  <h4 className="text-xl font-extrabold text-easyflow-navy tracking-tight">
                    {member.name}
                  </h4>
                  <div className="inline-block text-xs font-semibold uppercase tracking-wider text-easyflow-600 bg-easyflow-50 px-2.5 py-1 rounded-md mt-1 border border-easyflow-100">
                    {member.title}
                  </div>
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                    {member.roleDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
