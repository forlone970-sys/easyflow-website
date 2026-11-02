import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './components/Navbar';
import { PromptFlowPrivacyPolicy } from './components/PromptFlowPrivacyPolicy';
import { Footer } from './components/Footer';
import './index.css';

export const PromptFlowPrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar basePath="../../" isSubPage={true} />
      <main className="flex-1">
        <PromptFlowPrivacyPolicy basePath="../../" />
      </main>
      <Footer basePath="../../" isSubPage={true} />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <PromptFlowPrivacyPolicyPage />
    </React.StrictMode>
  );
}

export default PromptFlowPrivacyPolicyPage;
