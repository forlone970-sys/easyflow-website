import React from 'react';
import { Target, Users2, Compass } from 'lucide-react';
export const About: React.FC = () => {

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
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

      </div>
    </section>
  );
};
