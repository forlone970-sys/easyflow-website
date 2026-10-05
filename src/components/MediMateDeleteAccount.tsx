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
  Clock,
  UserCheck,
  FileText,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface MediMateDeleteAccountProps {
  basePath?: string;
}

export const MediMateDeleteAccount: React.FC<MediMateDeleteAccountProps> = ({ basePath = './' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const officialEmail = 'support.easyflow@gmail.com';
  const mailtoSubject = 'MediMate Account & Data Deletion Request';
  const mailtoBody = `Hello MediMate Support Team,

I am requesting the deletion of my MediMate account and all associated personal data.

Account Information:
- Registered Email Address: [Enter your account email here]
- User / Account Name: [Enter your name or username if applicable]
- Reason for Deletion (Optional): [Optional feedback]

I understand that this action will delete my account and eligible data in accordance with MediMate's data policies.

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
        'No. Submitting an account and data deletion request is completely free of charge for all MediMate users.'
    },
    {
      question: 'Can I cancel my deletion request after sending it?',
      answer:
        'If you submitted a request by mistake, reply promptly to the support thread from your registered email address before the verification and purge process is finalized.'
    },
    {
      question: 'Can I create a new MediMate account in the future?',
      answer:
        'Yes. You are welcome to register a new account at any time in the future. However, previously deleted routine history and data cannot be restored.'
    },
    {
      question: 'Why do I need to send the request from my registered email?',
      answer:
        'Sending your request from the email address registered with MediMate allows our support team to verify that you are the legitimate account owner and prevents unauthorized deletion requests.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-easyflow-100 selection:text-easyflow-800">
      {/* Top Breadcrumb & Return Bar */}
      <section className="pt-24 sm:pt-28 pb-6 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
              <a
                href={`${basePath}#home`}
                className="hover:text-easyflow-600 transition-colors font-medium flex items-center gap-1"
              >
                <span>EasyFlow</span>
              </a>
              <span>/</span>
              <a
                href={`${basePath}#products`}
                className="hover:text-easyflow-600 transition-colors font-medium"
              >
                Products
              </a>
              <span>/</span>
              <span className="text-slate-800 font-semibold">MediMate</span>
              <span>/</span>
              <span className="text-easyflow-700 font-semibold">Account & Data Deletion</span>
            </nav>

            <a
              href={`${basePath}#products`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-easyflow-600 hover:text-easyflow-700 bg-white hover:bg-easyflow-50 px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to EasyFlow Website</span>
            </a>
          </div>
        </div>
      </section>

      {/* Hero Header */}
      <header className="py-12 sm:py-16 bg-gradient-to-b from-slate-50/70 via-white to-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-easyflow-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            {/* MediMate Official Logo Container */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white border border-slate-200 shadow-card p-3 flex items-center justify-center shrink-0">
              <img
                src={`${basePath}assets/medimate-logo.png`}
                alt="MediMate Official Logo"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold tracking-wide uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
                  MediMate Account Management
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-easyflow-50 text-easyflow-700 border border-easyflow-200 text-xs font-semibold">
                  Part of EasyFlow Portfolio
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-easyflow-navy tracking-tight">
                MediMate — Account & Data Deletion Request
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                Official public portal for MediMate account closure and associated personal data deletion requests under Google Play Data Safety policies.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section 1: Introduction Card */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                <Trash2 className="w-5 h-5 text-easyflow-600" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                Request Account & Data Deletion
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              At MediMate, we respect your privacy and provide users with a straightforward way to request deletion of their account and associated data.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              If you have registered or used the MediMate application and wish to permanently close your account and delete your associated records, you can submit a deletion request directly to the official EasyFlow support email system. All requests are processed with diligence, confidentiality, and in compliance with Google Play Data Safety requirements.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                <span>Official Support Email:</span>
                <a
                  href={`mailto:${officialEmail}`}
                  className="text-easyflow-600 hover:text-easyflow-700 font-bold underline"
                >
                  {officialEmail}
                </a>
              </div>
            </div>
          </section>

          {/* Section 2: Important Privacy & Security Notice Banner */}
          <section className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wide">
                Important Security & Privacy Notice
              </h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Please do not send your MediMate password, verification codes, payment information, or other unnecessary sensitive information by email.</strong> The EasyFlow team will never request your account password or payment credentials.
              </p>
            </div>
          </section>

          {/* Section 3: Step-by-Step Instructions */}
          <section className="space-y-6">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-easyflow-100 text-easyflow-700 text-xs font-semibold uppercase tracking-wide mb-2">
                Procedure Guide
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-easyflow-navy">
                How to Request Deletion
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Follow these simple steps to submit an official account deletion request:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between relative overflow-hidden group hover:border-easyflow-300 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-easyflow-600 text-white font-bold text-sm flex items-center justify-center">
                      1
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Step 1
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-easyflow-navy">
                    Open your email application
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Launch your preferred email client (such as Gmail, Apple Mail, Outlook, or your webmail provider) on your mobile device or desktop computer.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between relative overflow-hidden group hover:border-easyflow-300 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-easyflow-600 text-white font-bold text-sm flex items-center justify-center">
                      2
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Step 2
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-easyflow-navy">
                    Send an email to our support address
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Address your message directly to our dedicated support inbox:{' '}
                    <a
                      href={`mailto:${officialEmail}`}
                      className="text-easyflow-600 hover:text-easyflow-700 font-bold underline break-all"
                    >
                      {officialEmail}
                    </a>.
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between relative overflow-hidden group hover:border-easyflow-300 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-easyflow-600 text-white font-bold text-sm flex items-center justify-center">
                      3
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Step 3
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-easyflow-navy">
                    Use a clear subject line
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Set the email subject line to:{' '}
                    <span className="font-semibold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-xs sm:text-sm">
                      MediMate Account & Data Deletion Request
                    </span>{' '}
                    to ensure priority routing.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between relative overflow-hidden group hover:border-easyflow-300 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-easyflow-600 text-white font-bold text-sm flex items-center justify-center">
                      4
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Step 4
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-easyflow-navy">
                    Include account identification info
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Include enough information in the email for our support team to identify the relevant MediMate account (such as your registered email address or account name).
                  </p>
                  <p className="text-xs text-rose-600 font-semibold leading-normal">
                    Do NOT include passwords, verification codes, or payment details.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: What Can Be Deleted */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                <FileText className="w-5 h-5 text-easyflow-600" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                  What can be deleted?
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Scope of data eligible for account deletion
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="p-4 rounded-2xl bg-easyflow-50/70 border border-easyflow-100 text-easyflow-900 font-medium">
                &ldquo;Upon receiving your request, the MediMate support team will review the request and process deletion of the account and associated data that is eligible for deletion in accordance with applicable requirements and MediMate&rsquo;s data practices.&rdquo;
              </p>

              <p>
                When your request is approved and executed, the following account-associated data categories that are eligible for deletion are removed:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-easyflow-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-slate-900 block">User Account Profile:</strong>
                    Registered account identifier, username, and authentication reference records.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-easyflow-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-slate-900 block">Medication Schedules & Reminders:</strong>
                    Saved dose reminders, notification preferences, and routine configurations.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-easyflow-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-slate-900 block">Medication Passport Records:</strong>
                    Historical course logs, completion milestones, and adherence patterns.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-easyflow-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-slate-900 block">Caregiver Linkages:</strong>
                    Configured caregiver linkages and communication synchronization preferences.
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 pt-2 leading-relaxed">
                Please note that certain non-personal operational, security, or diagnostic records may need to be retained for legitimate legal, security, fraud-prevention, or regulatory compliance purposes as permitted by applicable law.
              </p>
            </div>
          </section>

          {/* Section 5: Verification & Account Ownership */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                <UserCheck className="w-5 h-5 text-easyflow-600" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                Verification & Account Ownership
              </h2>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-easyflow-navy mb-2">
                &ldquo;For your protection, we may need to verify account ownership before processing a deletion request. Please do not include your password or authentication codes in your request.&rdquo;
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Because this page is publicly accessible on the web, our support team takes deliberate care to confirm that any deletion request originated from the true account owner. We typically verify ownership by checking that your email matches the registered account on record, or by replying directly to your registered address for confirmation.
              </p>
            </div>
          </section>

          {/* Section 6: Processing Information */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                <Clock className="w-5 h-5 text-easyflow-600" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                  What happens after I submit a request?
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Our internal review and processing workflow
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-easyflow-600 uppercase tracking-wider block mb-1">
                    Stage 1
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                    Receipt of Request
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your request is received and logged by the EasyFlow support team.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-easyflow-600 uppercase tracking-wider block mb-1">
                    Stage 2
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                    Ownership Review
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The request may be reviewed to verify account ownership and locate the associated profile.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-easyflow-600 uppercase tracking-wider block mb-1">
                    Stage 3
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                    Data Processing
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Eligible account and associated data will be processed for permanent deletion.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-easyflow-600 uppercase tracking-wider block mb-1">
                    Stage 4
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                    Support Contact
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The support team may contact you if additional information is required to finalize deletion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Prominent Support Email CTA Card */}
          <section className="bg-gradient-to-br from-easyflow-900 via-easyflow-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-elevated relative overflow-hidden">
            {/* Subtle glow circle */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-easyflow-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-easyflow-200 text-xs font-bold uppercase tracking-wider border border-white/15">
                <Mail className="w-3.5 h-3.5 text-easyflow-accent" />
                <span>Submit Deletion Request</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Ready to request deletion?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
                Send your request to our official support team. We will review your submission and initiate the deletion of your eligible MediMate account and data.
              </p>

              {/* Main Mailto CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={mailtoUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-slate-900 bg-white hover:bg-easyflow-50 shadow-lg hover:shadow-xl transition-all active:scale-[0.98] group"
                >
                  <Mail className="w-5 h-5 text-easyflow-600 group-hover:scale-110 transition-transform" />
                  <span>Request Account Deletion</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-easyflow-600 transition-colors" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all active:scale-[0.98]"
                  aria-label="Copy official support email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Email Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-300" />
                      <span>Copy Support Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Selectable Email Display */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                  Official Support Contact Address:
                </span>
                <span className="text-base sm:text-lg font-mono font-bold text-easyflow-accent select-all">
                  {officialEmail}
                </span>
              </div>
            </div>
          </section>

          {/* Section 8: Quick Email Draft Template Card */}
          <section className="bg-slate-50/90 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-easyflow-navy flex items-center gap-2">
                  <FileText className="w-4 h-4 text-easyflow-600" />
                  <span>Suggested Email Template</span>
                </h3>
                <p className="text-xs text-slate-500">
                  You can copy and paste this standard text into your email client
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyTemplate}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs transition-colors self-start sm:self-auto"
              >
                {copiedTemplate ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Template Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy Template</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 font-mono text-xs sm:text-sm text-slate-700 whitespace-pre-wrap leading-relaxed select-all">
              {mailtoBody}
            </div>
          </section>

          {/* Section 9: Frequently Asked Questions */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                <HelpCircle className="w-5 h-5 text-easyflow-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-easyflow-navy">
                  Frequently Asked Questions
                </h3>
                <p className="text-xs text-slate-500">
                  Common questions about MediMate account and data deletion
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-100/60 transition-colors"
                    aria-expanded={openFaq === index}
                  >
                    <span className="text-sm font-bold text-slate-800">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        openFaq === index ? 'rotate-180 text-easyflow-600' : ''
                      }`}
                    />
                  </button>

                  {openFaq === index && (
                    <div className="p-4 sm:p-5 pt-0 bg-slate-50/50 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Trust and Governance Note */}
          <div className="text-center pt-4 text-xs text-slate-500 space-y-1">
            <p>
              MediMate is developed and operated under EasyFlow Technologies.
            </p>
            <p>
              Official Inquiries & Data Privacy Support:{' '}
              <a
                href={`mailto:${officialEmail}`}
                className="text-easyflow-600 hover:text-easyflow-700 font-semibold underline"
              >
                {officialEmail}
              </a>
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default MediMateDeleteAccount;
