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
import { products } from './data/products';
import { Product } from './types';

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDeletePage, setIsDeletePage] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      return (
        path.includes('delete-account') ||
        hash.includes('delete-account') ||
        search.includes('delete-account')
      );
    }
    return false;
  });

  const [isPrivacyPage, setIsPrivacyPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      return (
        path.includes('privacy-policy') ||
        hash.includes('privacy-policy') ||
        search.includes('privacy-policy')
      );
    }
    return false;
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      setIsDeletePage(
        path.includes('delete-account') ||
        hash.includes('delete-account') ||
        search.includes('delete-account')
      );
      setIsPrivacyPage(
        path.includes('privacy-policy') ||
        hash.includes('privacy-policy') ||
        search.includes('privacy-policy')
      );
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleContactFromModal = () => {
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isPrivacyPage) {
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

  if (isDeletePage) {
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
