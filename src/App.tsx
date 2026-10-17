import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { ProductModal } from './components/ProductModal';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MediMateDeleteAccount } from './components/MediMateDeleteAccount';
import { MediMatePrivacyPolicy } from './components/MediMatePrivacyPolicy';
import { SpendoraDeleteAccount } from './components/SpendoraDeleteAccount';
import { SpendoraPrivacyPolicy } from './components/SpendoraPrivacyPolicy';
import { products } from './data/products';
import { Product } from './types';

interface RouteState {
  isSpendoraPrivacy: boolean;
  isSpendoraDelete: boolean;
  isMediMatePrivacy: boolean;
  isMediMateDelete: boolean;
}

const getRouteState = (): RouteState => {
  if (typeof window === 'undefined') {
    return {
      isSpendoraPrivacy: false,
      isSpendoraDelete: false,
      isMediMatePrivacy: false,
      isMediMateDelete: false,
    };
  }
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const search = window.location.search.toLowerCase();

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
    isSpendoraPrivacy: isSpendora && isPrivacy,
    isSpendoraDelete: isSpendora && isDelete,
    isMediMatePrivacy: !isSpendora && isPrivacy,
    isMediMateDelete: !isSpendora && isDelete,
  };
};

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [routeState, setRouteState] = useState<RouteState>(getRouteState);

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

  if (routeState.isMediMatePrivacy) {
    return (
      <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-easyflow-100 selection:text-easyflow-800">
        <Navbar basePath="./" isSubPage={true} />
        <main className="flex-1">
          <MediMatePrivacyPolicy basePath="./" />
        </main>
        <Footer basePath="./" isSubPage={true} />
      </div>
    );
  }

  if (routeState.isMediMateDelete) {
    return (
      <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-easyflow-100 selection:text-easyflow-800">
        <Navbar basePath="./" isSubPage={true} />
        <main className="flex-1">
          <MediMateDeleteAccount basePath="./" />
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
        <Hero />
        <About />
        <Products
          products={products}
          onSelectProduct={(product) => setSelectedProduct(product)}
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
      />
    </div>
  );
};

export default App;
