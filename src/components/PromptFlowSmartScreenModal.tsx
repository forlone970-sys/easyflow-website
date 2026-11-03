import React, { useEffect, useRef, useState } from 'react';
import {
  AlertTriangle,
  Download,
  X,
  Copy,
  Check,
  FileCheck2,
} from 'lucide-react';
import {
  promptflowDownloadConfig,
  triggerPromptFlowDownload,
} from '../data/promptflowDownload';

export interface PromptFlowSmartScreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadStarted?: () => void;
}

export const PromptFlowSmartScreenModal: React.FC<PromptFlowSmartScreenModalProps> = ({
  isOpen,
  onClose,
  onDownloadStarted,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  const [isInitiating, setIsInitiating] = useState(false);
  const isInitiatingRef = useRef(false);
  const [copiedChecksum, setCopiedChecksum] = useState(false);

  // Focus trap and lifecycle management
  useEffect(() => {
    if (!isOpen) return;

    // Capture element that had focus before opening
    previousActiveElementRef.current = document.activeElement as HTMLElement | null;
    isInitiatingRef.current = false;
    setIsInitiating(false);
    setCopiedChecksum(false);

    // Prevent body scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus primary action button after mount
    const timer = window.setTimeout(() => {
      continueButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!dialogRef.current) return;
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;

      // Restore focus to original triggering element
      if (
        previousActiveElementRef.current &&
        typeof previousActiveElementRef.current.focus === 'function'
      ) {
        previousActiveElementRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContinue = () => {
    // Prevent duplicate downloads from repeated or rapid clicks
    if (isInitiatingRef.current) return;
    isInitiatingRef.current = true;
    setIsInitiating(true);

    // Initiate official GitHub Release download
    triggerPromptFlowDownload();
    if (onDownloadStarted) {
      onDownloadStarted();
    }

    // Close the notice modal
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleCopyChecksum = async () => {
    if (!promptflowDownloadConfig.sha256Checksum) return;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(promptflowDownloadConfig.sha256Checksum);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = promptflowDownloadConfig.sha256Checksum;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedChecksum(true);
      window.setTimeout(() => setCopiedChecksum(false), 2000);
    } catch {
      // Non-critical clipboard failure fallback
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="smartscreen-notice-title"
      aria-describedby="smartscreen-notice-desc"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        className="glass-modal rounded-3xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-slide-up border border-slate-200/90 text-slate-800"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/70">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0 shadow-2xs">
              <AlertTriangle className="w-5 h-5 text-amber-600" aria-hidden="true" />
            </div>
            <div>
              <h2
                id="smartscreen-notice-title"
                className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight"
              >
                Windows Installation Notice
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                EasyFlow PromptFlow v{promptflowDownloadConfig.version} (64-bit)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCancel}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 focus:outline-none focus:ring-2 focus:ring-[#008B8B] transition-colors"
            aria-label="Close installation notice"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-slate-700">
          {/* Subheading */}
          <div>
            <h3
              id="smartscreen-notice-desc"
              className="text-base sm:text-lg font-bold text-slate-900 leading-snug"
            >
              A quick note before installing PromptFlow
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
              Windows may display a Microsoft Defender SmartScreen warning when opening the PromptFlow installer.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
              This can happen because PromptFlow is a newly released application and its installer is not yet digitally signed with a trusted code-signing certificate.
            </p>
          </div>

          {/* Verification Steps Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80 space-y-3">
            <div className="text-xs sm:text-sm font-semibold text-slate-800">
              If you downloaded PromptFlow from the official EasyFlow website:
            </div>

            <ol className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-200/90 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <span className="leading-snug">
                  Click <strong className="font-semibold text-slate-900">More info</strong> on the Windows SmartScreen screen.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-200/90 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <span className="leading-snug">
                  Review the displayed application and publisher information.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-200/90 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <span className="leading-snug">
                  If you trust the source and wish to proceed, select <strong className="font-semibold text-slate-900">Run anyway</strong>.
                </span>
              </li>
            </ol>
          </div>

          {/* Checksum Verification Section */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-teal-50/50 border border-teal-200/70 space-y-2">
            <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <FileCheck2 className="w-4 h-4 text-[#008B8B] shrink-0 mt-0.5" />
              <span>
                You can also independently verify your downloaded installer using the SHA-256 checksum published on this page.
              </span>
            </div>

            {promptflowDownloadConfig.sha256Checksum && (
              <div className="mt-2 p-2.5 rounded-xl bg-white/90 border border-teal-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                    SHA-256 Checksum (File Integrity)
                  </div>
                  <div className="font-mono text-[11px] text-slate-800 break-all select-all mt-0.5">
                    {promptflowDownloadConfig.sha256Checksum}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyChecksum}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-[#008B8B]"
                  aria-label="Copy SHA-256 Checksum to clipboard"
                >
                  {copiedChecksum ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-teal-600" />
                      <span className="text-teal-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50/80 flex flex-col-reverse sm:flex-row sm:items-center justify-end gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 border border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-center"
          >
            Cancel
          </button>
          <button
            ref={continueButtonRef}
            type="button"
            onClick={handleContinue}
            disabled={isInitiating}
            aria-busy={isInitiating}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl text-sm font-bold text-white bg-[#008B8B] hover:bg-[#007373] active:scale-[0.98] transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#008B8B] focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed text-center"
          >
            <Download className="w-4 h-4 text-teal-100" />
            <span>Continue to Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};
