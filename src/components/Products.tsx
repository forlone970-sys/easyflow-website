import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Download } from 'lucide-react';
import { Product } from '../types';
import { promptflowDownloadConfig } from '../data/promptflowDownload';

interface ProductsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onPromptFlowDownload?: () => void;
}

export const Products: React.FC<ProductsProps> = ({
  products,
  onSelectProduct,
  onPromptFlowDownload,
}) => {
  const visibleList = products.filter((p) => p.isVisible !== false);

  return (
    <section id="products" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill text-easyflow-700 text-xs font-semibold tracking-wide uppercase mb-3">
            Portfolio Showcase
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-easyflow-navy tracking-tight break-words">
            Products & Applications
          </h2>
          <div className="w-12 h-1 bg-easyflow-600 rounded-full mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Explore our ecosystem of purpose-built software, featuring PromptFlow for desktop prompt engineering and Spendora for intentional personal budgeting.
          </p>
        </div>

        {/* Application Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {visibleList.map((product, idx) => (
            <div
              key={product.id}
              className={`glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden reveal-on-scroll stagger-${(idx % 4) + 1}`}
            >
              {/* Subtle top indicator matching brand primary */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200/60 group-hover:bg-easyflow-600 transition-colors" />

              <div>
                {product.id === 'promptflow' && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-easyflow-600 shadow-2xs mb-4">
                    <Sparkles className="w-3 h-3 text-easyflow-accent" />
                    <span>AVAILABLE NOW • DESKTOP APP</span>
                  </div>
                )}

                {product.id === 'spendora' && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 border border-amber-200 shadow-2xs mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span>IN DEVELOPMENT</span>
                  </div>
                )}

                {/* Header: Logo, Name, Category */}
                <div className="flex items-center gap-3.5 sm:gap-4 mb-6">
                  {/* Official Product Logo Frame */}
                  <div
                    className={`w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center p-2 sm:p-2.5 shadow-xs border transition-transform group-hover:scale-105 duration-300 shrink-0 ${
                      product.logoTheme === 'dark'
                        ? 'bg-slate-900 border-slate-700'
                        : 'bg-white border-slate-200/90'
                    }`}
                  >
                    <img
                      src={product.logo}
                      alt={`${product.name} Official Logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-easyflow-navy group-hover:text-easyflow-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="text-xs font-semibold text-easyflow-700 mt-0.5">
                      {product.category}
                    </div>
                  </div>
                </div>

                {/* Polished Short Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {product.shortDescription}
                </p>

                {/* 4 Feature Highlights */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Features:
                  </div>
                  {product.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-easyflow-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">
                        <strong className="font-semibold text-slate-900">{feature.title}:</strong>{' '}
                        {feature.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Action Interaction */}
              <div className="pt-5 border-t border-slate-100/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs font-medium text-slate-400">
                  {product.tagline}
                </span>

                <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto justify-end">
                  {product.id === 'promptflow' && (
                    <>
                      {promptflowDownloadConfig.isReleasePublished && onPromptFlowDownload && (
                        <button
                          type="button"
                          onClick={onPromptFlowDownload}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-[#008B8B] transition-all shadow-2xs group/btn"
                          title={`Download PromptFlow for Windows (${promptflowDownloadConfig.fileSize})`}
                        >
                          <Download className="w-3.5 h-3.5 text-[#26B8B8] group-hover/btn:text-white transition-colors" />
                          <span>Download</span>
                        </button>
                      )}
                      <a
                        href="./promptflow/"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-easyflow-600 hover:bg-easyflow-700 transition-all shadow-2xs group/btn"
                        title="Explore Dedicated PromptFlow Product Page"
                      >
                        <span>Explore PromptFlow</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                      <a
                        href="./promptflow/privacy-policy/"
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-easyflow-700 hover:text-white bg-easyflow-50 hover:bg-easyflow-600 border border-easyflow-200 hover:border-easyflow-600 transition-all shadow-2xs"
                        title="PromptFlow Privacy Policy"
                      >
                        <span>Privacy Policy</span>
                      </a>
                    </>
                  )}

                  {product.id === 'spendora' && (
                    <>
                      <a
                        href="./spendora/privacy-policy/"
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-easyflow-700 hover:text-white bg-easyflow-50 hover:bg-easyflow-600 border border-easyflow-200 hover:border-easyflow-600 transition-all shadow-2xs"
                        title="Spendora Privacy Policy"
                      >
                        <span>Privacy Policy</span>
                      </a>
                      <a
                        href="./spendora/delete-account/"
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-rose-700 hover:text-white bg-rose-50 hover:bg-rose-600 border border-rose-200 hover:border-rose-600 transition-all shadow-2xs"
                        title="Spendora Account & Data Deletion Portal"
                      >
                        <span>Data Deletion</span>
                      </a>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-easyflow-600 hover:text-white bg-easyflow-50 hover:bg-easyflow-600 border border-easyflow-200 hover:border-easyflow-600 transition-all active:scale-[0.98] group/btn flex-1 sm:flex-initial shadow-2xs"
                    aria-label={`Learn more about ${product.name}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
