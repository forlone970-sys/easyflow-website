import React from 'react';
import {
  ShieldCheck,
  Lock,
  Database,
  Camera,
  Share2,
  Trash2,
  Mail,
  CheckCircle2,
  ArrowLeft,
  Info,
  Clock,
  Sparkles,
  Smartphone,
  Server,
  Receipt
} from 'lucide-react';

interface SpendoraPrivacyPolicyProps {
  basePath?: string;
}

export const SpendoraPrivacyPolicy: React.FC<SpendoraPrivacyPolicyProps> = ({ basePath = './' }) => {
  const officialEmail = 'support.easyflow@gmail.com';
  const lastUpdated = 'October 17, 2026';

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information-collected', title: '2. Information We Collect' },
    { id: 'how-we-use', title: '3. How We Use Information' },
    { id: 'data-storage', title: '4. Data Storage & Local-First Architecture' },
    { id: 'device-permissions', title: '5. Device Permissions & Camera Usage' },
    { id: 'financial-data', title: '6. Financial & Payment Data Disclaimer' },
    { id: 'data-sharing', title: '7. Data Sharing & Third-Party Processors' },
    { id: 'third-party-services', title: '8. Third-Party Services & SDKs' },
    { id: 'data-retention', title: '9. Data Retention Policy' },
    { id: 'account-deletion', title: '10. Account and Data Deletion' },
    { id: 'data-security', title: '11. Data Security Practices' },
    { id: 'children-privacy', title: '12. Children’s Privacy' },
    { id: 'changes-to-policy', title: '13. Changes to This Policy' },
    { id: 'contact-us', title: '14. Contact Information' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-easyflow-100 selection:text-easyflow-800">
      
      {/* Top Breadcrumb & Navigation Bar */}
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
              <span className="text-easyflow-700 font-semibold">Privacy Policy</span>
            </nav>

            <div className="flex items-center gap-2.5">
              <a
                href={`${basePath}spendora/delete-account/`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:text-white bg-rose-50 hover:bg-rose-600 px-3 py-1.5 rounded-xl border border-rose-200 hover:border-rose-600 transition-colors shadow-2xs"
                title="View Spendora Account & Data Deletion Portal"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Account Deletion</span>
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

      {/* Main Legal Document Hero Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50/80 via-white to-white border-b border-slate-100">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-easyflow-700 text-xs font-semibold tracking-wide uppercase mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-easyflow-600" />
                <span>Google Play Data Safety &amp; Legal Compliance</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-easyflow-navy tracking-tight">
                Spendora Privacy Policy
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
                Official privacy disclosures, local database handling, cloud synchronization, and user data rights for the Spendora application.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500 mt-4 flex-wrap">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Last Updated: {lastUpdated}</span>
                </span>
                <span>&bull;</span>
                <span>Operated by <strong>EasyFlow Technologies</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Layout with Floating TOC */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Quick Sticky Table of Contents */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-4 order-2 lg:order-1">
            <div className="glass-card rounded-2xl p-5 border border-slate-200/90 shadow-card">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-easyflow-600" />
                <span>Document Outline</span>
              </h3>
              <nav className="space-y-1 text-xs">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={(e) => scrollToSection(e, s.id)}
                    className="block py-1.5 px-2.5 rounded-lg text-slate-600 hover:text-easyflow-600 hover:bg-easyflow-50 transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                <a
                  href={`${basePath}spendora/delete-account/`}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-600 hover:text-white border border-rose-200 hover:border-rose-600 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Account &amp; Data Deletion Portal</span>
                </a>
                <a
                  href={`mailto:${officialEmail}?subject=Spendora%20Privacy%20Inquiry`}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>Contact Privacy Team</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Exhaustive Legal Clauses */}
          <main className="lg:col-span-8 space-y-10 order-1 lg:order-2">
            
            {/* 1. Introduction */}
            <section id="introduction" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-bold text-easyflow-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <Sparkles className="w-5 h-5 text-easyflow-600" />
                <span>1. Introduction</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                This Privacy Policy explains how <strong>EasyFlow Technologies</strong> (&quot;EasyFlow&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, stores, and protects your information when you use the <strong>Spendora</strong> mobile application (&quot;Spendora&quot; or the &quot;App&quot;) on Android.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Spendora is an intuitive smart budgeting, shopping spree management, and expense tracking application designed to help individuals take control of their everyday purchasing decisions, expose unnecessary spending, and manage digital receipts. We believe in privacy by design: your spending data is stored locally on your device by default, and cloud synchronization is strictly used to back up and sync your data across devices securely.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section id="information-collected" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-bold text-easyflow-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <Database className="w-5 h-5 text-easyflow-600" />
                <span>2. Information We Collect</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Spendora collects only the information necessary to provide budgeting, shopping spree organization, and receipt generation features:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">A. Account Credentials &amp; Profile Data</h4>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1 leading-relaxed">
                    <li><strong>Google Account Information:</strong> If you sign in using Google, we receive your email address, display name, and unique user identifier (UID) provided by Google Firebase Authentication.</li>
                    <li><strong>Email &amp; Password:</strong> If you register with email and password, your email address is used for authentication and account verification. <em>We never store or have access to plaintext passwords.</em></li>
                    <li><strong>User Profile:</strong> A user-chosen nickname, preferred currency code (e.g., USD, EUR, GBP, PKR, CAD, AUD), and profile completion timestamps.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">B. Shopping Sprees, Budgets &amp; Expenses</h4>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1 leading-relaxed">
                    <li><strong>Shopping Spree Details:</strong> Spree title/name, planned date, target budget amount, currency code, and active/completed status.</li>
                    <li><strong>Shopping Items:</strong> Item name, scanned barcode (if applicable), item quantity, unit price, line total, and purchased/deleted state.</li>
                    <li><strong>Digital Receipts:</strong> Immutable historical snapshots generated upon completing a shopping spree, including receipt number, total spent, budget difference, item snapshots, and completion timestamp.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">C. Technical &amp; Operational Data</h4>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1 leading-relaxed">
                    <li><strong>Sync Outbox Queue:</strong> A local SQLite queue tracking pending mutations to ensure reliable offline-to-online data delivery.</li>
                    <li><strong>Local Barcode Catalog:</strong> A local cached index of scanned barcodes and user-entered reference prices to accelerate future offline shopping trips.</li>
                    <li><strong>Network Connectivity:</strong> Network availability state via <code>connectivity_plus</code> to pause and resume cloud synchronization automatically.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. How We Use Information */}
            <section id="how-we-use" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-bold text-easyflow-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <CheckCircle2 className="w-5 h-5 text-easyflow-600" />
                <span>3. How We Use Information</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                We use collected information solely to operate and improve Spendora&apos;s core functionality:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-easyflow-600 shrink-0 mt-2" />
                  <span>Authenticating user access securely across devices via Firebase Authentication.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-easyflow-600 shrink-0 mt-2" />
                  <span>Calculating real-time shopping spree balances, budget limits, and price totals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-easyflow-600 shrink-0 mt-2" />
                  <span>Generating permanent digital receipts and historical shopping summaries for your personal records.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-easyflow-600 shrink-0 mt-2" />
                  <span>Synchronizing pending data between the offline SQLite database and Cloud Firestore when internet connectivity is active.</span>
                </li>
              </ul>
            </section>

            {/* 4. Data Storage & Local-First Architecture */}
            <section id="data-storage" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-bold text-easyflow-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <Server className="w-5 h-5 text-easyflow-600" />
                <span>4. Data Storage &amp; Local-First Architecture</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                Spendora utilizes a <strong>local-first architectural model</strong>:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                    <Smartphone className="w-4 h-4 text-easyflow-600" />
                    <span>Local Device Storage (SQLite)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    All shopping sprees, items, receipts, and user profiles are stored locally in an embedded SQLite database using <code>sqflite</code>. The app remains fully functional without an active internet connection.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                    <Server className="w-4 h-4 text-easyflow-600" />
                    <span>Cloud Backup (Firestore)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    When signed in and connected to the internet, pending changes are transmitted to Google Cloud Firestore under your isolated account path (<code>users/{'{uid}'}/...</code>) with strict security rules.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Device Permissions & Camera Usage */}
            <section id="device-permissions" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-bold text-easyflow-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <Camera className="w-5 h-5 text-easyflow-600" />
                <span>5. Device Permissions &amp; Camera Usage</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                Spendora requests the following runtime Android permissions only when explicitly needed:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <Camera className="w-5 h-5 text-easyflow-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Camera Access (Barcode Scanning)</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Used solely to scan 1D/2D barcodes on products or receipts in real time using <code>mobile_scanner</code>. <strong>Spendora does not capture, store, or transmit video recordings or photographs to any external server.</strong> Image frames are processed in-memory solely for barcode recognition and discarded immediately.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-easyflow-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Battery Optimization Exemption</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Spendora may optionally request exemption from Android battery optimizations (<code>REQUEST_IGNORE_BATTERY_OPTIMIZATIONS</code>) to allow background sync of queued receipts and shopping sprees without being prematurely halted by device power managers.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Financial & Payment Data Disclaimer */}
            <section id="financial-data" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-bold text-easyflow-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <Receipt className="w-5 h-5 text-easyflow-600" />
                <span>6. Financial &amp; Payment Data Disclaimer</span>
              </h2>
              <div className="p-4 rounded-xl bg-easyflow-50/70 border border-easyflow-200 text-xs sm:text-sm text-easyflow-900 leading-relaxed">
                <strong>Important Notice:</strong> Spendora is an organizational expense and shopping tracker. Spendora does <strong>NOT</strong> collect bank account credentials, credit card numbers, CVVs, or financial authentication secrets. Spendora does <strong>NOT</strong> link to external banking APIs or execute monetary transactions. All expense records reflect manual user entries and barcode scans.
              </div>
            </section>

            {/* 7. Data Sharing */}
            <section id="data-sharing" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-bold text-easyflow-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <Share2 className="w-5 h-5 text-easyflow-600" />
                <span>7. Data Sharing Practices</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>EasyFlow Technologies does not sell, lease, or monetize your personal or financial data.</strong> We do not share your information with data brokers or advertising networks. Information is processed strictly through verified infrastructure providers required to operate the app:
              </p>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1 leading-relaxed">
                <li><strong>Google Cloud Platform &amp; Firebase:</strong> Backend database and authentication processor.</li>
                <li><strong>Legal Obligations:</strong> We may disclose information if strictly required by applicable legal processes or governmental subpoenas.</li>
              </ul>
            </section>

            {/* 8. Third-Party Services */}
            <section id="third-party-services" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-bold text-easyflow-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <Lock className="w-5 h-5 text-easyflow-600" />
                <span>8. Third-Party Services &amp; SDKs</span>
              </h2>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900 block">Google Firebase Authentication</span>
                  <span className="text-xs text-slate-500">Manages user login tokens, Google OAuth, and encrypted session security.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900 block">Google Cloud Firestore</span>
                  <span className="text-xs text-slate-500">Provides encrypted cloud storage and multi-device data synchronization.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900 block">Google Play Services</span>
                  <span className="text-xs text-slate-500">Facilitates Android system integration, app distribution, and updates.</span>
                </div>
              </div>
            </section>

            {/* 9. Data Retention Policy */}
            <section id="data-retention" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-bold text-easyflow-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <Clock className="w-5 h-5 text-easyflow-600" />
                <span>9. Data Retention Policy</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Your spending records, receipts, and profile information are retained in Cloud Firestore for as long as your account remains active, ensuring historical financial records remain accessible to you across device upgrades. If you delete your account, all cloud records are immediately and permanently destroyed.
              </p>
            </section>

            {/* 10. Account and Data Deletion */}
            <section id="account-deletion" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-bold text-easyflow-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <Trash2 className="w-5 h-5 text-rose-600" />
                <span>10. Account and Data Deletion</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                In compliance with Google Play Data Safety guidelines, Spendora gives users complete control over their accounts and data:
              </p>

              <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3">
                <h4 className="text-sm font-bold text-rose-950">How to Permanently Delete Your Account &amp; Data:</h4>
                <ol className="list-decimal pl-5 text-xs sm:text-sm text-rose-900 space-y-2 leading-relaxed">
                  <li>
                    <strong>In-App Deletion (Immediate):</strong> Open Spendora &rarr; Profile Screen &rarr; scroll to bottom &rarr; tap <strong>&quot;Delete Account &amp; Cloud Data&quot;</strong>. For your security, the app will ask you to re-authenticate with Google or verify your password. Upon verification, all cloud sprees, items, receipts, and authentication records are permanently wiped, followed by a local SQLite wipe.
                  </li>
                  <li>
                    <strong>Web Request Portal:</strong> If you have uninstalled the app or lost your mobile device, visit our official deletion portal at <a href={`${basePath}spendora/delete-account/`} className="underline font-semibold text-rose-900 hover:text-rose-700">Spendora Account Deletion Portal</a> or email us directly at <a href={`mailto:${officialEmail}?subject=Spendora%20Account%20Deletion%20Request`} className="underline font-semibold text-rose-900 hover:text-rose-700">{officialEmail}</a>.
                  </li>
                </ol>
              </div>
            </section>

            {/* 11. Data Security Practices */}
            <section id="data-security" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-bold text-easyflow-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <Lock className="w-5 h-5 text-easyflow-600" />
                <span>11. Data Security Practices</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                We implement robust security standards to safeguard your data:
              </p>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1.5 leading-relaxed">
                <li>All network communications between the mobile client and Google Cloud Firestore use industry-standard HTTPS with TLS encryption.</li>
                <li>Cloud Firestore security rules enforce strict user-isolation policies, preventing any user from accessing another user&apos;s sprees, items, or receipts.</li>
                <li>User passwords are protected by Firebase Authentication and are never accessible to EasyFlow personnel.</li>
              </ul>
            </section>

            {/* 12. Children's Privacy */}
            <section id="children-privacy" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-bold text-easyflow-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <ShieldCheck className="w-5 h-5 text-easyflow-600" />
                <span>12. Children’s Privacy</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                Spendora is not directed toward children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a minor has registered an account without parental consent, please contact us to request prompt deletion.
              </p>
            </section>

            {/* 13. Changes to This Policy */}
            <section id="changes-to-policy" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-bold text-easyflow-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <Info className="w-5 h-5 text-easyflow-600" />
                <span>13. Changes to This Policy</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                We may update this Privacy Policy from time to time as Spendora evolves. Any updates will be reflected on this page with an updated &quot;Last Updated&quot; date.
              </p>
            </section>

            {/* 14. Contact Information */}
            <section id="contact-us" className="space-y-4 scroll-mt-28">
              <h2 className="text-2xl font-bold text-easyflow-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                <Mail className="w-5 h-5 text-easyflow-600" />
                <span>14. Contact Information</span>
              </h2>
              <div className="p-5 rounded-2xl glass-card border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
                <p><strong>EasyFlow Technologies</strong></p>
                <p>Official Developer &amp; Startup Entity for Spendora</p>
                <p>Support &amp; Legal Email: <a href={`mailto:${officialEmail}`} className="font-semibold text-easyflow-600 hover:underline">{officialEmail}</a></p>
              </div>
            </section>

          </main>

        </div>
      </div>

    </div>
  );
};

export default SpendoraPrivacyPolicy;
