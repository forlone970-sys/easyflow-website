import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { ProductModal } from './components/ProductModal';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { products } from './data/products';
import { Product } from './types';

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleContactFromModal = () => {
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-easyflow-100 selection:text-easyflow-800">
      {/* Sticky Top Navigation */}
      <Navbar />

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
      <Footer />

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
