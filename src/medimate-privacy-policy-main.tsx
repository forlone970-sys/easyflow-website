import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './components/Navbar';
import { MediMatePrivacyPolicy } from './components/MediMatePrivacyPolicy';
import { Footer } from './components/Footer';
import './index.css';

export const MediMatePrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-easyflow-100 selection:text-easyflow-800">
      <Navbar basePath="../../" isSubPage={true} />
      <main className="flex-1">
        <MediMatePrivacyPolicy basePath="../../" />
      </main>
      <Footer basePath="../../" isSubPage={true} />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <MediMatePrivacyPolicyPage />
    </React.StrictMode>
  );
}

export default MediMatePrivacyPolicyPage;
