import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const emailAddress = 'support.easyflow@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleComposeMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject.trim() || 'Inquiry regarding EasyFlow');
    const mailtoBody = encodeURIComponent(
      `Hello EasyFlow Team,\n\n${message.trim()}\n\nBest regards,\n${name.trim() || 'A Visitor'}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-easyflow-100 text-easyflow-700 text-xs font-semibold tracking-wide uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-easyflow-navy tracking-tight break-words">
            Connect With EasyFlow
          </h2>
          <div className="w-12 h-1 bg-easyflow-600 rounded-full mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have questions about our applications, interested in collaboration, or have feedback? We’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Email & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-easyflow-600 text-white flex items-center justify-center mb-6 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-easyflow-navy mb-2">
                Official Support & Inquiries
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Reach out directly via email for partnership opportunities, product queries, or general correspondence.
              </p>

              {/* Primary Email Box */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Email Address
                </span>
                <span className="text-base sm:text-lg font-bold text-easyflow-navy break-all block">
                  {emailAddress}
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-easyflow-600 hover:bg-easyflow-700 shadow-sm transition-all active:scale-[0.98] text-sm text-center"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Us</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-xs transition-all active:scale-[0.98] text-sm"
                  aria-label="Copy support email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Note about response times */}
            <div className="p-5 rounded-2xl bg-easyflow-50/70 border border-easyflow-100 text-xs text-easyflow-800 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-easyflow-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                As an early-stage startup, we review every email attentively and strive to respond to all inquiries promptly.
              </p>
            </div>
          </div>

          {/* Right Column: Transparent Email Message Composer */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-easyflow-50 border border-easyflow-100 flex items-center justify-center text-easyflow-600">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-easyflow-navy">
                  Compose Your Inquiry
                </h3>
                <p className="text-xs text-slate-500">
                  Quickly draft your message and open it in your email application.
                </p>
              </div>
            </div>

            <form onSubmit={handleComposeMail} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Your Name (Optional)
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:border-easyflow-600 focus:ring-1 focus:ring-easyflow-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Partnership inquiry regarding MediMate"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:border-easyflow-600 focus:ring-1 focus:ring-easyflow-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details on your question, proposal, or feedback..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:border-easyflow-600 focus:ring-1 focus:ring-easyflow-600 transition-colors resize-none"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-easyflow-600 hover:bg-easyflow-700 shadow-sm transition-all active:scale-[0.98] text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Open In Default Email Client</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center leading-normal pt-1">
                This prepares your draft directly in your preferred email client to send securely to <span className="text-slate-600 font-semibold">{emailAddress}</span>.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
