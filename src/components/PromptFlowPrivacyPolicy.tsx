import React from 'react';
import {
  ShieldCheck,
  HardDrive,
  EyeOff,
  Cpu,
  Lock,
  ArrowLeft,
  Mail,
  FileCode
} from 'lucide-react';

interface PromptFlowPrivacyPolicyProps {
  basePath?: string;
}

export const PromptFlowPrivacyPolicy: React.FC<PromptFlowPrivacyPolicyProps> = ({ basePath = '../../' }) => {
  const officialEmail = 'support.easyflow@gmail.com';
  const lastUpdated = 'November 2, 2026';

  const sections = [
    { id: 'information-we-collect', title: '1. Information We Collect' },
    { id: 'local-data-storage', title: '2. Local Data Storage & Architecture' },
    { id: 'ai-external-services', title: '3. Artificial Intelligence & External Services' },
    { id: 'internet-connectivity', title: '4. Internet Connectivity' },
    { id: 'data-sharing', title: '5. Data Sharing and Third Parties' },
    { id: 'data-security', title: '6. Data Security' },
    { id: 'children-privacy', title: '7. Children’s Privacy' },
    { id: 'privacy-rights', title: '8. Your Privacy Rights' },
    { id: 'changes-to-policy', title: '9. Changes to This Privacy Policy' },
    { id: 'contact-information', title: '10. Contact Information' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-teal-100 selection:text-teal-900">
      
      {/* Top Breadcrumb Header */}
      <section className="pt-24 sm:pt-28 pb-8 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 flex-wrap">
              <a href={`${basePath}#home`} className="hover:text-[#008B8B] transition-colors">
                EasyFlow Home
              </a>
              <span>/</span>
              <a href={`${basePath}promptflow/`} className="hover:text-[#008B8B] transition-colors">
                PromptFlow Desktop
              </a>
              <span>/</span>
              <span className="text-slate-800 font-semibold">Privacy Policy</span>
            </nav>

            <a
              href={`${basePath}promptflow/`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-2xs transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to PromptFlow</span>
            </a>
          </div>

          <div className="mt-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#007373] border border-teal-200/80">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>OFFICIAL PRODUCT PRIVACY POLICY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              PromptFlow Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Effective Date: {lastUpdated} | Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Main Document Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Quick Jump Sidebar */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Table of Contents
              </h3>
              <nav className="space-y-1.5 text-xs text-slate-600">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className="block py-1 hover:text-[#008B8B] transition-colors truncate"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 space-y-1">
                <div><strong>Product:</strong> PromptFlow Desktop</div>
                <div><strong>Architecture:</strong> Local-First IDE</div>
                <div><strong>Telemetry:</strong> 0% (Disabled)</div>
              </div>
            </div>
          </aside>

          {/* Legal Clauses */}
          <div className="lg:col-span-8 space-y-10 text-sm sm:text-base text-slate-700 leading-relaxed">
            
            {/* Intro Lead */}
            <div className="p-6 rounded-2xl bg-teal-50/60 border border-teal-200/80 space-y-2">
              <p className="font-semibold text-slate-900">
                Your privacy matters to us. PromptFlow is designed with a privacy-first philosophy, giving you control over your prompts, projects, and personal data.
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                This Privacy Policy explains what information PromptFlow handles, how it is stored, and how we protect your privacy when you use our software.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <section id="information-we-collect" className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileCode className="w-5 h-5 text-[#008B8B]" />
                <span>1. Information We Collect</span>
              </h2>
              <p>
                PromptFlow is designed to operate locally on your device. We do not intentionally collect, upload, or store your:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
                <li>Prompts and written content.</li>
                <li>Personal projects and workspace files.</li>
                <li>Editing history and locally stored prompt data.</li>
                <li>Private notes and user-created content.</li>
                <li>Personal information through a mandatory account system.</li>
              </ul>
              <p className="text-slate-600">
                PromptFlow does not require users to create an account to access its core functionality.
              </p>
            </section>

            {/* 2. Local Data Storage & Architecture */}
            <section id="local-data-storage" className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-[#008B8B]" />
                <span>2. Local Data Storage</span>
              </h2>
              <p>
                PromptFlow operates on a transparent, local-first storage architecture:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="font-bold text-slate-900 text-xs block uppercase">Prompt & Diagram Files</span>
                  <p className="text-xs text-slate-600">
                    Saved directly to your physical filesystem in folders you designate (<code className="font-mono text-teal-700">.prompt</code>, <code className="font-mono text-teal-700">.md</code>, <code className="font-mono text-teal-700">.diagram</code>). PromptFlow does not upload your files to cloud servers.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="font-bold text-slate-900 text-xs block uppercase">SQLite Application Metadata</span>
                  <p className="text-xs text-slate-600">
                    PromptFlow uses local embedded SQLite technology on your device (<code className="font-mono text-teal-700">promptflow_metadata.db</code>) strictly to manage application preferences, UI settings, and recent project paths.
                  </p>
                </div>
              </div>
              <p className="text-slate-600">
                This means:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-xs sm:text-sm">
                <li>Your prompt data remains under your control.</li>
                <li>Your workspace does not depend on cloud synchronization.</li>
                <li>Your locally stored content is not automatically shared with EasyFlow.</li>
                <li>Removing the application or its local data may result in permanent loss of stored information.</li>
                <li>We recommend maintaining your own backups of important projects (e.g., via Git).</li>
              </ul>
            </section>

            {/* 3. Artificial Intelligence and External Services */}
            <section id="ai-external-services" className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#008B8B]" />
                <span>3. Artificial Intelligence and External Services</span>
              </h2>
              <p>
                PromptFlow includes locally implemented intelligence features, including:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-xs sm:text-sm">
                <li>Handcrafted autocomplete intelligence.</li>
                <li>Intelligent spelling correction with embedded vocabulary heuristics.</li>
                <li>Context-aware prompt parameter detection (<code className="font-mono text-teal-700">{"{{variable}}"}</code>).</li>
                <li>Deterministic 100-point rubric scoring in the Test Lab.</li>
              </ul>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <strong>No Cloud LLM Transmission:</strong> These features are designed to operate entirely within the application on your physical computer without requiring external AI API providers. PromptFlow does not automatically transmit your prompts to external AI providers for autocomplete, scoring, or spelling correction.
              </div>
            </section>

            {/* 4. Internet Connectivity */}
            <section id="internet-connectivity" className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-[#008B8B]" />
                <span>4. Internet Connectivity</span>
              </h2>
              <p>
                PromptFlow is designed primarily as an offline-capable desktop application.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm">
                Certain operations, if introduced or enabled in future versions, may require an internet connection, such as downloading software updates. Any future feature that introduces external data processing will be addressed through appropriate privacy disclosures.
              </p>
            </section>

            {/* 5. Data Sharing and Third Parties */}
            <section id="data-sharing" className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#008B8B]" />
                <span>5. Data Sharing and Third Parties</span>
              </h2>
              <p>
                EasyFlow does not sell, rent, or trade users&apos; private prompt content or personal project data.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm">
                We do not intentionally share locally stored prompt content with advertisers, analytics companies, or other third parties. Your locally stored information remains on your device unless you independently choose to share or export it.
              </p>
            </section>

            {/* 6. Data Security */}
            <section id="data-security" className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#008B8B]" />
                <span>6. Data Security</span>
              </h2>
              <p>
                We prioritize privacy-conscious software architecture and local data management.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm">
                However, no software or storage system can guarantee absolute security. Users are responsible for maintaining appropriate device security, protecting access to their computers, and backing up important files.
              </p>
            </section>

            {/* 7. Children's Privacy */}
            <section id="children-privacy" className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">7. Children&apos;s Privacy</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                PromptFlow is not specifically designed to collect personal information from children. We do not knowingly collect personal information from children through the application core functionality.
              </p>
            </section>

            {/* 8. Your Privacy Rights */}
            <section id="privacy-rights" className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">8. Your Privacy Rights</h2>
              <p>
                You maintain complete control over your locally stored information. You can:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-xs sm:text-sm">
                <li>Access your locally stored projects and prompts.</li>
                <li>Modify or delete your content directly on your filesystem.</li>
                <li>Remove locally stored application data and SQLite metadata.</li>
                <li>Stop using PromptFlow at any time.</li>
              </ul>
              <p className="text-slate-600 text-xs sm:text-sm">
                Because PromptFlow does not maintain a centralized cloud database of your prompts, EasyFlow generally does not have access to retrieve or delete your local content.
              </p>
            </section>

            {/* 9. Changes to This Privacy Policy */}
            <section id="changes-to-policy" className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">9. Changes to This Privacy Policy</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                We may update this Privacy Policy when PromptFlow introduces new features, functionality, or changes to its data-handling practices. Any revised policy will include an updated effective date. We encourage users to review this page periodically.
              </p>
            </section>

            {/* 10. Contact Information */}
            <section id="contact-information" className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#008B8B]" />
                <span>10. Contact Information</span>
              </h2>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs sm:text-sm text-slate-700">
                <div><strong>Developer:</strong> EasyFlow Technologies</div>
                <div><strong>Product:</strong> PromptFlow Desktop</div>
                <div>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${officialEmail}`} className="text-[#008B8B] font-semibold hover:underline">
                    {officialEmail}
                  </a>
                </div>
                <div className="pt-2 text-slate-400 text-xs border-t border-slate-200/60">
                  &copy; {new Date().getFullYear()} EasyFlow. All Rights Reserved.
                </div>
              </div>
            </section>

          </div>

        </div>
      </div>

    </div>
  );
};
export default PromptFlowPrivacyPolicy;
