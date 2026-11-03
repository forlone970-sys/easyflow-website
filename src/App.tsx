import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { ProductModal } from './components/ProductModal';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SpendoraDeleteAccount } from './components/SpendoraDeleteAccount';
import { SpendoraPrivacyPolicy } from './components/SpendoraPrivacyPolicy';
import { PromptFlowPage } from './components/PromptFlowPage';
import { PromptFlowPrivacyPolicy } from './components/PromptFlowPrivacyPolicy';
import { PromptFlowSmartScreenModal } from './components/PromptFlowSmartScreenModal';
import { products } from './data/products';
import { Product } from './types';

interface RouteState {
  isPromptFlow: boolean;
  isPromptFlowPrivacy: boolean;
  isSpendoraPrivacy: boolean;
  isSpendoraDelete: boolean;
}

const getRouteState = (): RouteState => {
  if (typeof window === 'undefined') {
    return {
      isPromptFlow: false,
      isPromptFlowPrivacy: false,
      isSpendoraPrivacy: false,
      isSpendoraDelete: false,
    };
  }
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const search = window.location.search.toLowerCase();

  const isPromptFlowMatch =
    path.includes('promptflow') ||
    hash.includes('promptflow') ||
    search.includes('promptflow');
  const isSpendora =
    path.includes('spendora') ||
    hash.includes('spendora') ||
    search.includes('spendora');
  const isDelete =
    path.includes('delete-account') ||
    hash.includes('delete-account') ||
    search.includes('delete-account');
  const isPrivacy =
    path.includes('privacy-policy') ||
    hash.includes('privacy-policy') ||
    search.includes('privacy-policy');

  return {
    isPromptFlow: isPromptFlowMatch && !isPrivacy,
    isPromptFlowPrivacy: isPromptFlowMatch && isPrivacy,
    isSpendoraPrivacy: !isPromptFlowMatch && isSpendora && isPrivacy,
    isSpendoraDelete: !isPromptFlowMatch && isSpendora && isDelete,
  };
};

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [routeState, setRouteState] = useState<RouteState>(getRouteState);
  const [isPromptFlowSmartScreenOpen, setIsPromptFlowSmartScreenOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setRouteState(getRouteState());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Cinematic Scroll Reveal Observer
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [routeState]);

  const handleContactFromModal = () => {
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (routeState.isPromptFlow) {
    return <PromptFlowPage basePath="./" />;
  }

  if (routeState.isPromptFlowPrivacy) {
    return (
      <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
        <Navbar basePath="./" isSubPage={true} />
        <main className="flex-1">
          <PromptFlowPrivacyPolicy basePath="./" />
        </main>
        <Footer basePath="./" isSubPage={true} />
      </div>
    );
  }

  if (routeState.isSpendoraPrivacy) {
    return (
      <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-easyflow-100 selection:text-easyflow-800">
        <Navbar basePath="./" isSubPage={true} />
        <main className="flex-1">
          <SpendoraPrivacyPolicy basePath="./" />
        </main>
        <Footer basePath="./" isSubPage={true} />
      </div>
    );
  }

  if (routeState.isSpendoraDelete) {
    return (
      <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-easyflow-100 selection:text-easyflow-800">
        <Navbar basePath="./" isSubPage={true} />
        <main className="flex-1">
          <SpendoraDeleteAccount basePath="./" />
        </main>
        <Footer basePath="./" isSubPage={true} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-easyflow-100 selection:text-easyflow-800">
      {/* Sticky Top Navigation */}
      <Navbar basePath="./" />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onPromptFlowDownload={() => setIsPromptFlowSmartScreenOpen(true)} />
        <About />
        <Products
          products={products}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onPromptFlowDownload={() => setIsPromptFlowSmartScreenOpen(true)}
        />
        <Vision />
        <Contact />
      </main>

      {/* Footer */}
      <Footer basePath="./" />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onContactClick={handleContactFromModal}
        onPromptFlowDownload={() => setIsPromptFlowSmartScreenOpen(true)}
      />

      {/* PromptFlow Windows SmartScreen Installation Notice Modal */}
      <PromptFlowSmartScreenModal
        isOpen={isPromptFlowSmartScreenOpen}
        onClose={() => setIsPromptFlowSmartScreenOpen(false)}
      />
    </div>
  );
};

export default App;
