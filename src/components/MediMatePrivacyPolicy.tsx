import React from 'react';
import {
  ShieldCheck,
  Lock,
  Database,
  Bell,
  Users,
  Share2,
  Trash2,
  Mail,
  ExternalLink,
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Info,
  Clock,
  Sparkles,
  Smartphone,
  FileCheck,
  HeartHandshake,
  Server
} from 'lucide-react';

interface MediMatePrivacyPolicyProps {
  basePath?: string;
}

export const MediMatePrivacyPolicy: React.FC<MediMatePrivacyPolicyProps> = ({ basePath = './' }) => {
  const officialEmail = 'support.easyflow@gmail.com';
  const lastUpdated = 'October 8, 2026';

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information-collected', title: '2. Information We Collect' },
    { id: 'how-we-use', title: '3. How We Use Information' },
    { id: 'data-storage', title: '4. Data Storage & Architecture' },
    { id: 'notifications', title: '5. Notifications & Reminders' },
    { id: 'caregiver-patient', title: '6. Patient and Caregiver Data' },
    { id: 'data-sharing', title: '7. Data Sharing Practices' },
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
              <span className="text-slate-800 font-semibold">MediMate</span>
              <span>/</span>
              <span className="text-easyflow-700 font-semibold">Privacy Policy</span>
            </nav>

            <div className="flex items-center gap-2.5">
              <a
                href={`${basePath}medimate/delete-account/`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:text-white bg-rose-50 hover:bg-rose-600 px-3 py-1.5 rounded-xl border border-rose-200 hover:border-rose-600 transition-colors"
                title="View MediMate Account & Data Deletion Portal"
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

      {/* Header Banner */}
      <header className="py-12 sm:py-16 bg-gradient-to-b from-slate-50/70 via-white to-white relative overflow-hidden">
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-easyflow-50 text-easyflow-700 border border-easyflow-200 text-xs font-bold tracking-wide uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-easyflow-600" />
                  Official Legal Document
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold">
                  Google Play Policy Compliance
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold">
                  EasyFlow Technologies
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-easyflow-navy tracking-tight">
                MediMate Privacy Policy
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                Official privacy disclosure for the <strong>MediMate</strong> mobile application developed and operated by <strong>EasyFlow</strong>.
              </p>

              <div className="flex items-center gap-4 pt-1 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-easyflow-600" />
                  Last Updated: <strong>{lastUpdated}</strong>
                </span>
                <span>•</span>
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Fully Active & Public
                </span>
              </div>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="bg-easyflow-50/80 border border-easyflow-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
            <Info className="w-5 h-5 text-easyflow-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>Transparency Statement:</strong> This Privacy Policy accurately reflects the actual architecture, services, and data flows of the MediMate application. We believe in clear, truthful, and accessible privacy terms without unnecessary legal jargon or unsupported claims.
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Sticky Table of Contents on Desktop */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-24 space-y-4">
                <div className="bg-slate-50/90 rounded-2xl p-5 border border-slate-200 shadow-2xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-easyflow-600" />
                    <span>Table of Contents</span>
                  </h3>
                  <nav className="space-y-1 text-xs">
                    {sections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={(e) => scrollToSection(e, sec.id)}
                        className="block px-2.5 py-1.5 rounded-lg text-slate-600 hover:text-easyflow-600 hover:bg-white transition-colors truncate"
                      >
                        {sec.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Account Deletion Quick Box */}
                <div className="bg-rose-50/70 border border-rose-200/90 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-rose-900 font-bold text-xs uppercase tracking-wide">
                    <Trash2 className="w-4 h-4 text-rose-600" />
                    <span>Account Deletion</span>
                  </div>
                  <p className="text-xs text-rose-900/80 leading-relaxed">
                    Need to remove your account and records? You can use our self-service in-app process or request deletion through our public web portal.
                  </p>
                  <a
                    href={`${basePath}medimate/delete-account/`}
                    className="inline-flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-2xs"
                  >
                    <span>Visit Deletion Portal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Direct Support Inquiries */}
                <div className="bg-slate-50/90 border border-slate-200 rounded-2xl p-5 text-xs space-y-2">
                  <span className="font-bold text-slate-800 block">Official Support Contact</span>
                  <p className="text-slate-600">
                    For any privacy questions or data requests:
                  </p>
                  <a
                    href={`mailto:${officialEmail}`}
                    className="text-easyflow-600 hover:text-easyflow-700 font-bold underline break-all block"
                  >
                    {officialEmail}
                  </a>
                </div>
              </div>
            </aside>

            {/* Document Body */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-10">

              {/* 1. Introduction */}
              <section id="introduction" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                    <Info className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                      1. Introduction
                    </h2>
                    <span className="text-xs text-slate-500">Welcome and Purpose</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    This Privacy Policy explains how <strong>EasyFlow</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles personal information and health-routine data when you download, install, access, or use the <strong>MediMate</strong> mobile application (the &ldquo;App&rdquo;) on Android devices.
                  </p>
                  <p>
                    <strong>MediMate</strong> is a medication reminder and adherence coordination application designed to assist individuals in organizing their personal medication schedules, tracking routine dose completion, maintaining treatment history, and optionally sharing schedule coordination with authorized caregivers.
                  </p>
                  <p>
                    We respect your personal privacy. We do not sell your personal data, we do not employ third-party advertising trackers, and we only collect information necessary to deliver the features and functionality of the MediMate application. By creating an account or using MediMate, you understand and acknowledge the data practices described in this Privacy Policy.
                  </p>
                </div>
              </section>

              {/* 2. Information We Collect */}
              <section id="information-collected" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                      2. Information We Collect
                    </h2>
                    <span className="text-xs text-slate-500">Verified data categories handled by the application</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  MediMate collects only the categories of information that you voluntarily provide when registering an account, configuring your medication schedules, logging your dose routines, or linking with a caregiver:
                </p>

                <div className="space-y-4">
                  {/* Category A: Account & Identity */}
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-2">
                    <h3 className="text-sm font-bold text-easyflow-navy flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-easyflow-600"></span>
                      A. Account & Authentication Information
                    </h3>
                    <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1">
                      <li><strong>Email Address:</strong> Used as your unique account username and for secure authentication.</li>
                      <li><strong>Display Name:</strong> The name you provide during sign-up to personalize your profile and greetings.</li>
                      <li><strong>Account Role:</strong> Whether your account is designated as a <em>Patient</em> or a <em>Caregiver</em>.</li>
                      <li><strong>Passwords:</strong> Handled and secured directly through Google Firebase Authentication. MediMate never receives, logs, or stores your plaintext password.</li>
                      <li><strong>User Identifier (UID):</strong> A unique cryptographic ID generated upon registration to associate your records securely.</li>
                    </ul>
                  </div>

                  {/* Category B: Medication & Schedule Information */}
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-2">
                    <h3 className="text-sm font-bold text-easyflow-navy flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-easyflow-600"></span>
                      B. Medication & Routine Information
                    </h3>
                    <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1">
                      <li><strong>Medication Details:</strong> Medication name, dosage strength, unit of measure (e.g., mg, ml, drops, tablets), and optional user notes or reasons for taking.</li>
                      <li><strong>Schedules & Reminders:</strong> Frequency type (such as fixed daily schedule or as-needed), reminder times (e.g., 08:00, 20:00), start dates, end dates, and course durations.</li>
                      <li><strong>Adherence Logs & History:</strong> Dose events recorded by you, including status markers (<em>taken</em>, <em>missed</em>, <em>late</em>, <em>remind later</em>, or <em>skipped</em>), scheduled timestamps, and actual time logged.</li>
                      <li><strong>Optional Adherence Context:</strong> Optional subjective mood indicators (e.g., good, neutral, low) or brief personal notes that you may choose to attach to a dose log.</li>
                      <li><strong>Routine Streaks & Milestones:</strong> Aggregate numerical counts of consecutive days doses were taken on time, used for your personal adherence progress.</li>
                    </ul>
                  </div>

                  {/* Category C: Caregiver Relationship Information */}
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-2">
                    <h3 className="text-sm font-bold text-easyflow-navy flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-easyflow-600"></span>
                      C. Patient-Caregiver Linking Information
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      When a patient initiates a linkage request, MediMate records the patient’s ID, patient’s name, patient’s email address, and the targeted caregiver’s email address, along with request status (<em>pending</em>, <em>accepted</em>, or <em>rejected</em>).
                    </p>
                  </div>

                  {/* Category D: Device, Camera & Technical Data */}
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-2">
                    <h3 className="text-sm font-bold text-easyflow-navy flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-easyflow-600"></span>
                      D. Device Permissions & Technical Information
                    </h3>
                    <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1">
                      <li><strong>Exact Alarm & Notification Permissions:</strong> Standard Android exact alarm permissions (<code>SCHEDULE_EXACT_ALARM</code>, <code>USE_EXACT_ALARM</code>) used exclusively to trigger local on-device alarms for your scheduled dose times.</li>
                      <li><strong>Camera and Storage Access:</strong> Requested only if you voluntarily choose to take or upload a photo of your medication or prescription label, or when saving an exported Medication Passport PDF report to your device storage.</li>
                      <li><strong>FCM Token:</strong> A device push token generated by Firebase Cloud Messaging to deliver system-wide announcements or service updates.</li>
                      <li><strong>Crash & Diagnostic Telemetry:</strong> Anonymized application crash logs and non-fatal runtime error reports collected passively through Firebase Crashlytics to detect and fix stability bugs.</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-100/70 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <p>
                    <strong>Data We Do NOT Collect:</strong> MediMate does not request, track, or access precise GPS location data, device contacts, call logs, SMS messages, financial account numbers, or government-issued personal identification numbers.
                  </p>
                </div>
              </section>

              {/* 3. How We Use Information */}
              <section id="how-we-use" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                      3. How We Use Information
                    </h2>
                    <span className="text-xs text-slate-500">Legitimate operational purposes</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>We process the information collected exclusively for legitimate and direct application purposes:</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-easyflow-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm">
                        <strong className="text-slate-900 block">Account Management:</strong>
                        Authenticating users, maintaining account sessions, and securing your profile.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-easyflow-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm">
                        <strong className="text-slate-900 block">Medication Reminders:</strong>
                        Triggering exact, punctual alerts on your mobile device when doses are scheduled.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-easyflow-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm">
                        <strong className="text-slate-900 block">History & Passport:</strong>
                        Maintaining your chronological dose records and formatting Medication Passport reports.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-easyflow-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm">
                        <strong className="text-slate-900 block">Caregiver Connectivity:</strong>
                        Synchronizing medication status with linked caregivers upon explicit request and consent.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-easyflow-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm">
                        <strong className="text-slate-900 block">System Updates:</strong>
                        Delivering operational announcements and release notices via push notifications.
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-easyflow-600 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm">
                        <strong className="text-slate-900 block">Stability & Support:</strong>
                        Diagnosing application crashes, resolving technical errors, and addressing support requests.
                      </div>
                    </div>
                  </div>

                  <p className="pt-2 text-xs sm:text-sm text-slate-500">
                    We do not use your health or medication records for targeted advertising, marketing campaigns, behavioral profiling, or automated credit or insurance underwriting.
                  </p>
                </div>
              </section>

              {/* 4. Data Storage & Architecture */}
              <section id="data-storage" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                      4. Data Storage & Architecture
                    </h2>
                    <span className="text-xs text-slate-500">Where and how data resides</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    MediMate utilizes a dual local-and-cloud architecture to ensure you can receive medication reminders even without an active internet connection:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-easyflow-navy text-sm">
                        <Smartphone className="w-4 h-4 text-easyflow-600" />
                        <span>On-Device Local Storage</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        MediMate stores an offline copy of your active user profile, medication schedules, and dose records directly in an embedded local database (Isar) and local device preferences (SharedPreferences). This enables prompt alarm triggering without network latency.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-easyflow-navy text-sm">
                        <Server className="w-4 h-4 text-easyflow-600" />
                        <span>Cloud Backend Infrastructure</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        When your device is connected to the internet, data is synchronized with secure cloud infrastructure provided by Google Firebase (Cloud Firestore and Firebase Authentication). This allows your routine records to be preserved and synced if you switch devices or connect with a caregiver.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. Notifications and Medication Reminders */}
              <section id="notifications" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                      5. Notifications & Medication Reminders
                    </h2>
                    <span className="text-xs text-slate-500">Alert mechanics and essential medical disclaimer</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    MediMate relies on the <strong>flutter_local_notifications</strong> engine and Android alarm scheduling to trigger dose alerts directly on your hardware at the specific hours and intervals configured in your schedule.
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                      <AlertCircle className="w-4 h-4 text-amber-700" />
                      <span>Important Medical Disclaimer</span>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                      <strong>MediMate is purely an informational schedule management and organizational tool.</strong> It is not a medical device, diagnostic system, clinical decision support software, or replacement for qualified doctors, pharmacists, or healthcare professionals. MediMate does not verify drug interactions, prescribe treatments, or provide medical advice. You should always follow the explicit instructions of your prescribing medical practitioner.
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Push Notifications for Announcements:</strong> MediMate also configures a dedicated push channel (<code>Company Announcements</code>) through Firebase Cloud Messaging (FCM) to deliver non-urgent product updates, release announcements, or operational service notices. FCM announcements are completely separate from your local dose reminder engine.
                  </p>
                </div>
              </section>

              {/* 6. Patient and Caregiver Data */}
              <section id="caregiver-patient" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                      6. Patient and Caregiver Data
                    </h2>
                    <span className="text-xs text-slate-500">Mutual consent coordination</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    MediMate includes an optional <strong>Patient-Caregiver Linkage</strong> feature designed to support family members, guardians, or caregivers in monitoring a patient&rsquo;s medication routine:
                  </p>

                  <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-2">
                    <li>
                      <strong>Explicit Mutual Authorization:</strong> A caregiver linkage is established only when a patient enters the caregiver’s email address and sends a link request, and the recipient caregiver accepts the request.
                    </li>
                    <li>
                      <strong>Scope of Shared Information:</strong> Once linked, the authorized caregiver can view the patient’s medication course names, dosage schedules, and dose adherence history (such as whether a dose was logged as taken, skipped, or missed).
                    </li>
                    <li>
                      <strong>Revocation & Unlinking:</strong> Either party can terminate or unlink the relationship at any time through the application settings. Once unlinked, caregiver access to subsequent adherence updates is discontinued.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 7. Data Sharing Practices */}
              <section id="data-sharing" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                      7. Data Sharing Practices
                    </h2>
                    <span className="text-xs text-slate-500">How and when information is disclosed</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    EasyFlow does not sell, trade, rent, or lease your personal information or medication data to third parties. We disclose data only in the following specific circumstances:
                  </p>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <strong className="text-xs sm:text-sm text-slate-900 block mb-1">
                        1. Trusted Cloud Service Providers:
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        We use Google Firebase to provide cloud hosting, authentication, database storage, push messaging, and crash reporting. These services act as data processors on our behalf and process information in accordance with their privacy and security commitments.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <strong className="text-xs sm:text-sm text-slate-900 block mb-1">
                        2. Authorized Caregivers:
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Information is shared with an external individual only when you intentionally link your account with that specific caregiver.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <strong className="text-xs sm:text-sm text-slate-900 block mb-1">
                        3. Legal & Regulatory Compliance:
                      </strong>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        We may disclose information if required to do so by applicable law, valid judicial subpoena, or lawful government request, or to protect the vital rights, safety, and property of our users or EasyFlow.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 8. Third-Party Services & SDKs */}
              <section id="third-party-services" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                      8. Third-Party Services & SDKs
                    </h2>
                    <span className="text-xs text-slate-500">Verified third-party dependencies implemented in MediMate</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    To maintain strict transparency, here is the complete list of third-party SDKs and cloud services integrated into the MediMate codebase:
                  </p>

                  <div className="space-y-3">
                    {/* Google Firebase Auth */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">
                          Google Firebase Authentication
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                          Auth Service
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Provides secure user account creation, session tokens, and password authentication. Passwords are encrypted directly by Firebase.
                      </p>
                      <a
                        href="https://firebase.google.com/support/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-easyflow-600 hover:text-easyflow-700 font-semibold underline"
                      >
                        <span>Firebase Privacy & Security Documentation</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* Google Cloud Firestore */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">
                          Google Cloud Firestore
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                          Cloud Database
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Houses remote user profiles, medication lists, schedule details, adherence history, and caregiver request documents under secure access rules.
                      </p>
                      <a
                        href="https://cloud.google.com/firestore/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-easyflow-600 hover:text-easyflow-700 font-semibold underline"
                      >
                        <span>Google Cloud Firestore Documentation</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* Google Firebase Cloud Messaging */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">
                          Firebase Cloud Messaging (FCM)
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                          Push Messaging
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Delivers system announcements, release notices, and critical product alerts to users subscribed to the general company announcements channel.
                      </p>
                      <a
                        href="https://firebase.google.com/products/cloud-messaging"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-easyflow-600 hover:text-easyflow-700 font-semibold underline"
                      >
                        <span>Firebase Cloud Messaging Overview</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* Google Firebase Crashlytics */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">
                          Firebase Crashlytics
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                          Crash Telemetry
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Captures fatal and unhandled asynchronous application crashes to enable rapid stability debugging. Does not log personal medication names or doses.
                      </p>
                      <a
                        href="https://firebase.google.com/products/crashlytics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-easyflow-600 hover:text-easyflow-700 font-semibold underline"
                      >
                        <span>Firebase Crashlytics Privacy Details</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 italic">
                    Note: MediMate does not include Google AdMob, Meta Audience Network, Unity Ads, Adjust, AppsFlyer, or any advertising or marketing SDKs.
                  </p>
                </div>
              </section>

              {/* 9. Data Retention Policy */}
              <section id="data-retention" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                      9. Data Retention Policy
                    </h2>
                    <span className="text-xs text-slate-500">Lifecycle of your stored information</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    We retain your account profile, medication records, dose adherence logs, and caregiver links for as long as your MediMate account remains active, so you can track ongoing medication adherence and access your historical treatment passport.
                  </p>
                  <p>
                    If you choose to delete your account or submit an official deletion request:
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1">
                    <li>Your cloud user profile and authentication credentials are permanently deleted from Firebase.</li>
                    <li>All medication subcollections, scheduled dose configurations, and adherence history are deleted in their entirety.</li>
                    <li>Any pending or active caregiver requests and relationships associated with your account are terminated and deleted.</li>
                    <li>Local cached records on your device are cleared upon signing out or uninstalling the application.</li>
                  </ul>
                  <p className="text-xs text-slate-500">
                    Non-personal operational error logs or diagnostic crash traces may be retained in anonymized aggregate form for a limited operational window as needed to maintain infrastructure reliability.
                  </p>
                </div>
              </section>

              {/* 10. Account and Data Deletion */}
              <section id="account-deletion" className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-rose-200/90 shadow-card space-y-6 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                    <Trash2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                      10. Account and Data Deletion
                    </h2>
                    <span className="text-xs text-rose-700 font-semibold">Your rights and deletion mechanisms under Google Play policy</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    In full compliance with Google Play Data Safety policies, MediMate provides users with transparent, straightforward ways to permanently delete their account and associated personal data:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Method 1: In-App Deletion */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                        <Smartphone className="w-4 h-4 text-easyflow-600" />
                        <span>Method 1: In-App Self-Service Deletion</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        You can trigger immediate, complete deletion directly inside the MediMate application by navigating to:
                      </p>
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-mono font-semibold text-easyflow-navy">
                        Profile &gt; Support &amp; Legal &gt; Delete Account
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        After re-authenticating with your account password, the application executes verified deletion of your profile, medications, history, caregiver requests, and Firebase Auth record.
                      </p>
                    </div>

                    {/* Method 2: Public Web Portal */}
                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/90 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-rose-900 text-sm">
                        <Trash2 className="w-4 h-4 text-rose-600" />
                        <span>Method 2: Official Web Deletion Portal</span>
                      </div>
                      <p className="text-xs text-rose-900/80 leading-relaxed">
                        If you have uninstalled the app or prefer web-based assistance, visit our dedicated public portal:
                      </p>
                      <a
                        href={`${basePath}medimate/delete-account/`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 transition-colors shadow-2xs"
                      >
                        <span>Open Account &amp; Data Deletion Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <p className="text-xs text-rose-900/80 leading-relaxed pt-1">
                        Alternatively, send an email request directly to{' '}
                        <a
                          href={`mailto:${officialEmail}?subject=MediMate%20Account%20%26%20Data%20Deletion%20Request`}
                          className="font-bold underline text-rose-700"
                        >
                          {officialEmail}
                        </a>{' '}
                        from your registered account email.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 11. Data Security Practices */}
              <section id="data-security" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                      11. Data Security Practices
                    </h2>
                    <span className="text-xs text-slate-500">How we safeguard your information</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    We implement reasonable, industry-accepted security practices to protect user data from unauthorized access, alteration, disclosure, or destruction:
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1.5">
                    <li><strong>Encrypted Transport:</strong> All communications between the MediMate mobile client and Google Firebase servers utilize HTTPS and TLS encryption.</li>
                    <li><strong>Secure Authentication:</strong> User credentials are managed using Firebase Authentication tokens; raw passwords are never handled or logged in plaintext.</li>
                    <li><strong>Access Restrictions:</strong> Cloud Firestore security rules are configured to restrict read and write access to authenticated users for their own records and explicitly authorized caregiver relationships.</li>
                    <li><strong>Local Sandboxing:</strong> Local database files on your device are contained within the Android operating system’s secure application sandbox.</li>
                  </ul>
                  <p className="text-xs text-slate-500">
                    Please note that no digital application or transmission method over the internet is completely infallible. While we take commercially reasonable measures to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>
              </section>

              {/* 12. Children’s Privacy */}
              <section id="children-privacy" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                      12. Children’s Privacy
                    </h2>
                    <span className="text-xs text-slate-500">Target audience and age guidance</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    MediMate is designed as a medication schedule management app for individuals of general age capable of managing their own routines, or for caregivers managing the routines of dependents.
                  </p>
                  <p>
                    MediMate is not directed specifically to children under the age of 13. We do not knowingly collect personal information directly from children under 13 without appropriate parental or legal guardian consent and supervision. If you believe a child under 13 has provided personal information to MediMate without parental consent, please contact us at{' '}
                    <a
                      href={`mailto:${officialEmail}`}
                      className="text-easyflow-600 hover:text-easyflow-700 font-semibold underline"
                    >
                      {officialEmail}
                    </a>
                    , and we will promptly take steps to delete that account and its associated records.
                  </p>
                </div>
              </section>

              {/* 13. Changes to This Privacy Policy */}
              <section id="changes-to-policy" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                      13. Changes to This Privacy Policy
                    </h2>
                    <span className="text-xs text-slate-500">Policy maintenance and updates</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    We may update or revise this Privacy Policy periodically to reflect enhancements in the MediMate application, changes in third-party services, or evolving regulatory and Google Play developer requirements.
                  </p>
                  <p>
                    When updates occur, we will revise the &ldquo;Last Updated&rdquo; date at the top of this document. Continued use of MediMate after an updated policy is posted signifies your awareness and acceptance of the revised terms.
                  </p>
                </div>
              </section>

              {/* 14. Contact Us */}
              <section id="contact-us" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4 scroll-mt-24">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-easyflow-navy">
                      14. Contact Us
                    </h2>
                    <span className="text-xs text-slate-500">Official developer contact</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    If you have any questions, feedback, concerns, or requests regarding this Privacy Policy, your personal data, or MediMate’s data practices, please contact our team:
                  </p>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Developer &amp; Organization
                      </span>
                      <strong className="text-base text-easyflow-navy font-bold block">
                        EasyFlow Technologies
                      </strong>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        Official Support &amp; Privacy Inbox
                      </span>
                      <a
                        href={`mailto:${officialEmail}?subject=MediMate%20Privacy%20Inquiry`}
                        className="inline-flex items-center gap-2 text-easyflow-600 hover:text-easyflow-700 font-bold underline text-sm sm:text-base break-all"
                      >
                        <Mail className="w-4 h-4 shrink-0" />
                        <span>{officialEmail}</span>
                      </a>
                    </div>

                    <div className="pt-2 border-t border-slate-200/70 text-xs text-slate-500">
                      We aim to respond to all legitimate user and privacy inquiries within a prompt timeframe.
                    </div>
                  </div>
                </div>
              </section>

              {/* Bottom Navigation & Deletion Cross-link */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
                <a
                  href={`${basePath}#products`}
                  className="inline-flex items-center gap-1.5 text-easyflow-600 hover:text-easyflow-700 font-semibold"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to EasyFlow Products</span>
                </a>

                <a
                  href={`${basePath}medimate/delete-account/`}
                  className="inline-flex items-center gap-1.5 text-rose-600 hover:text-rose-700 font-semibold"
                >
                  <span>MediMate Account &amp; Data Deletion Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default MediMatePrivacyPolicy;
