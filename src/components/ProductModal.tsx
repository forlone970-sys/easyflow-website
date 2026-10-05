import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onContactClick?: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onContactClick }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Platform Esc key listener & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  // Handle clicking on backdrop
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-slide-up"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/50">
          <div className="flex items-center gap-4">
            {/* Logo Badge Container */}
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center p-2 shadow-xs border shrink-0 ${
                product.logoTheme === 'dark'
                  ? 'bg-slate-900 border-slate-700'
                  : 'bg-white border-slate-200'
              }`}
            >
              <img
                src={product.logo}
                alt={`${product.name} Official Logo`}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 id="modal-title" className="text-2xl font-extrabold text-easyflow-navy">
                  {product.name}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-easyflow-100 text-easyflow-700 border border-easyflow-200">
                  {product.status}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                {product.category}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-easyflow-600 transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Tagline & Full Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-easyflow-600 mb-2">
              Application Overview
            </h4>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              {product.fullDescription}
            </p>
          </div>

          {/* Key Feature Architecture */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Core Capabilities & Design Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {product.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50/90 border border-slate-100 flex flex-col justify-between"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-easyflow-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-slate-800">{feature.title}</div>
                      <div className="text-xs text-slate-500 mt-1 leading-normal">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Planned Technical Highlights */}
          <div className="p-4 rounded-2xl bg-easyflow-50/60 border border-easyflow-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-easyflow-800 mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-easyflow-600" />
              Product Specification Highlights
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              {product.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-easyflow-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Truthful & Clear Legal / Functional Disclaimer */}
          {product.disclaimer && (
            <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200/80 text-xs text-slate-500 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {product.disclaimer}
              </p>
            </div>
          )}

          {/* MediMate Account & Data Deletion Portal Resource */}
          {product.id === 'medimate' && (
            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-rose-950 uppercase tracking-wide">
                    Account & Data Safety
                  </div>
                  <div className="text-xs text-rose-800 mt-0.5">
                    Need to request deletion of your MediMate account and associated data?
                  </div>
                </div>
              </div>

              <a
                href="./medimate/delete-account/"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-2xs transition-colors shrink-0 self-start sm:self-auto"
              >
                <span>Request Deletion</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-medium">
            Part of the <span className="font-semibold text-easyflow-navy">EasyFlow</span> portfolio
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-xl transition-colors"
            >
              Close
            </button>
            {onContactClick && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-easyflow-600 hover:bg-easyflow-700 shadow-xs transition-colors"
              >
                <span>Inquire About Product</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
