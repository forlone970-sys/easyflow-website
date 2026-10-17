import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  ShieldCheck,
  AlertTriangle,
  ArrowLeft,
  Trash2,
  CheckCircle2,
  HelpCircle,
  FileText,
  ChevronDown,
  Sparkles
} from 'lucide-react';

interface SpendoraDeleteAccountProps {
  basePath?: string;
}

export const SpendoraDeleteAccount: React.FC<SpendoraDeleteAccountProps> = ({ basePath = './' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const officialEmail = 'support.easyflow@gmail.com';
  const mailtoSubject = 'Spendora Account & Data Deletion Request';
  const mailtoBody = `Hello Spendora Support Team,

I am requesting the permanent deletion of my Spendora account and all associated cloud data in compliance with Google Play Data Safety policies.

Account Details:
- Registered Google or Email Address: [Enter your registered email address here]
- Profile Nickname (if applicable): [e.g. Alex]
- User Account UID (if known): [Optional]
- Reason for Deletion (Optional): [Optional feedback]

I understand that this action permanently wipes all shopping sprees, items, digital receipts, and cloud backups, and cannot be undone.

Thank you.`;

  const mailtoUrl = `mailto:${officialEmail}?subject=${encodeURIComponent(
    mailtoSubject
  )}&body=${encodeURIComponent(mailtoBody)}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(officialEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleCopyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(mailtoBody);
      setCopiedTemplate(true);
      setTimeout(() => setCopiedTemplate(false), 2500);
    } catch {
      setCopiedTemplate(true);
      setTimeout(() => setCopiedTemplate(false), 2500);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'Is there any fee or charge to request account deletion?',
      answer:
        'No. Submitting an account and data deletion request is completely free of charge for all Spendora users.'
    },
    {
      question: 'How does in-app deletion differ from this web deletion request?',
      answer:
        'In-app deletion is instant: you can perform it directly inside Spendora via Profile > Delete Account & Cloud Data after verifying your identity with Google or your password. This web portal is provided for users who have uninstalled the app or lost access to their device.'
    },
    {
      question: 'Can I restore my digital receipts or shopping history after deletion?',
      answer:
        'No. Deletion is permanent. Once your Firestore cloud records and Firebase Authentication user are purged, previous shopping sprees and receipts cannot be recovered.'
    },
    {
      question: 'Why must I send the request from my registered email address?',
      answer:
        'Sending your request from the exact email linked to your Spendora account allows our support team to verify account ownership and prevent unauthorized or malicious deletion requests.'
    },
    {
      question: 'How do I clear local data stored on my Android phone?',
      answer:
        'Because Spendora is built local-first, you can wipe all offline SQLite records by simply clearing App Storage in Android Settings > Apps > Spendora > Storage > Clear Data, or by uninstalling the application.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-easyflow-100 selection:text-easyflow-800">
      
      {/* Top Breadcrumb & Return Bar */}
      <section className="pt-24 sm:pt-28 pb-6 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 flex-wrap">
              <a
                href={`${basePath}#home`}
                className="hover:text-easyflow-600 transition-colors font-medium"
              >
                EasyFlow
              </a>
              <span>/</span>
              <a
                href={`${basePath}#products`}
                className="hover:text-easyflow-600 transition-colors font-medium"
              >
                Products
              </a>
              <span>/</span>
              <span className="text-slate-800 font-semibold">Spendora</span>
              <span>/</span>
              <span className="text-rose-700 font-semibold">Account Deletion</span>
            </nav>

            <div className="flex items-center gap-2.5">
              <a
                href={`${basePath}spendora/privacy-policy/`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-easyflow-700 hover:text-white bg-easyflow-50 hover:bg-easyflow-600 px-3 py-1.5 rounded-xl border border-easyflow-200 hover:border-easyflow-600 transition-colors shadow-2xs"
                title="View Spendora Privacy Policy"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Privacy Policy</span>
              </a>
              <a
                href={`${basePath}#products`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-easyflow-600 hover:text-easyflow-700 bg-white hover:bg-easyflow-50 px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-rose-50/50 via-white to-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-slate-900 border border-slate-700 shadow-card flex items-center justify-center p-3 shrink-0">
              <img
                src={`${basePath}assets/spendora-logo.png`}
                alt="Spendora Official Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold tracking-wide uppercase mb-3">
                <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                <span>Account &amp; Data Deletion Portal</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-easyflow-navy tracking-tight">
                Spendora Account &amp; Cloud Data Deletion
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium max-w-2xl">
                Official web deletion request page in compliance with Google Play Data Safety requirements. Manage your data rights or request permanent account erasure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">

        {/* 2 Deletion Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Method 1: Instant In-App */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 border-easyflow-200 shadow-card">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-easyflow-100 text-easyflow-800 text-xs font-bold uppercase tracking-wide mb-4">
                <Sparkles className="w-3.5 h-3.5 text-easyflow-600" />
                <span>Recommended &bull; Instant</span>
              </div>
              <h3 className="text-xl font-bold text-easyflow-navy mb-2">
                1. In-App Direct Deletion
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                If you still have Spendora installed on your device, you can delete your account and all cloud data immediately without waiting for support:
              </p>
              <ol className="list-decimal pl-5 text-xs sm:text-sm text-slate-700 space-y-2">
                <li>Open <strong>Spendora</strong> on your Android device.</li>
                <li>Tap the <strong>Profile</strong> tab in the bottom navigation.</li>
                <li>Scroll down to the <strong>Legal &amp; Application</strong> section.</li>
                <li>Tap <strong>&quot;Delete Account &amp; Cloud Data&quot;</strong>.</li>
                <li>Verify your identity via Google Re-authentication or Password.</li>
                <li>All cloud records and local data are permanently erased instantly.</li>
              </ol>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Immediate automated execution &bull; No email required
            </div>
          </div>

          {/* Method 2: Web Email Portal */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 border-rose-200 shadow-card">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wide mb-4">
                <Mail className="w-3.5 h-3.5 text-rose-600" />
                <span>Web / Uninstalled App Portal</span>
              </div>
              <h3 className="text-xl font-bold text-easyflow-navy mb-2">
                2. Support Team Request
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                If you have uninstalled Spendora or cannot access your device, submit a verified deletion request to our support team:
              </p>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Send an email from your registered account address.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Use the pre-filled template provided below.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Processed and confirmed within standard compliance timeframes.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={mailtoUrl}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-sm transition-all text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Launch Deletion Email</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyable Email Template Box */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-easyflow-navy flex items-center gap-2">
                <FileText className="w-5 h-5 text-easyflow-600" />
                <span>Official Deletion Request Template</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Copy this pre-formatted message or use our direct email button.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-2xs"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Support Email'}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyTemplate}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-easyflow-700 bg-easyflow-50 hover:bg-easyflow-100 border border-easyflow-200 transition-colors shadow-2xs"
              >
                {copiedTemplate ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedTemplate ? 'Template Copied!' : 'Copy Template'}</span>
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap border border-slate-800">
            {mailtoBody}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Mail className="w-4 h-4 text-easyflow-600 shrink-0" />
            <span>Send to: <strong className="text-slate-800">{officialEmail}</strong></span>
          </div>
        </div>

        {/* Detailed Data Treatment Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-rose-50/60 border border-rose-200/80 space-y-3">
            <h4 className="text-base font-bold text-rose-950 flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-rose-600" />
              <span>What Is Permanently Deleted</span>
            </h4>
            <ul className="text-xs sm:text-sm text-rose-900 space-y-1.5 leading-relaxed">
              <li>&bull; All Cloud Firestore shopping sprees and item records</li>
              <li>&bull; All historical digital receipts and budget snapshots</li>
              <li>&bull; Your user profile, nickname, and currency preference</li>
              <li>&bull; Firebase Authentication account and Google OAuth linkage</li>
              <li>&bull; All cloud sync outbox records and queue logs</li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 space-y-3">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-easyflow-600" />
              <span>What Is Preserved &amp; Security Standards</span>
            </h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 leading-relaxed">
              <li>&bull; Zero financial or transaction records remain in our cloud</li>
              <li>&bull; Offline device data is kept local until cleared by user</li>
              <li>&bull; We never ask for your password or sensitive credentials</li>
              <li>&bull; Deletion logs may retain anonymized timestamps for compliance</li>
            </ul>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card space-y-4">
          <h3 className="text-xl font-bold text-easyflow-navy flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-easyflow-600" />
            <span>Frequently Asked Questions</span>
          </h3>

          <div className="space-y-3 pt-2">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-800">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-easyflow-600' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Safety Reminder */}
        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Security Warning:</strong> EasyFlow support personnel will <em>never</em> ask you for your account password, payment card numbers, or one-time verification codes. Send requests exclusively from your registered account email to <span className="font-bold">{officialEmail}</span>.
          </p>
        </div>

      </div>

    </div>
  );
};

export default SpendoraDeleteAccount;
