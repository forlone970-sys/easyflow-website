import React, { useState, useRef } from 'react';
import {
  Download,
  Terminal,
  FlaskConical,
  LayoutTemplate,
  Network,
  ShieldCheck,
  CheckCircle2,
  HardDrive,
  EyeOff,
  Cpu,
  Keyboard,
  ArrowRight,
  BookOpen,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ExternalLink,
  Sparkles,
  FileCode,
  Monitor,
  AlertCircle
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { promptflowDownloadConfig } from '../data/promptflowDownload';
import {
  promptflowWorkspaces,
  promptflowFileGuides,
  promptflowShortcuts
} from '../data/promptflowManual';

interface PromptFlowPageProps {
  basePath?: string;
}

export const PromptFlowPage: React.FC<PromptFlowPageProps> = ({ basePath = '../' }) => {
  const [activeManualTab, setActiveManualTab] = useState<'workspaces' | 'rubric' | 'workflows' | 'shortcuts'>('workspaces');
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsVideoMuted(videoRef.current.muted);
    }
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Top Navigation */}
      <Navbar basePath={basePath} isSubPage={true} />

      <main className="flex-1 pt-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION                                                          */}
        {/* ========================================================================= */}
        <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Subtle Ambient Background Grids & Glows */}
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#008B8B]/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(#008B8B 1px, transparent 1px)`,
                backgroundSize: '24px 24px'
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              
              {/* Product Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-teal-950/80 text-teal-300 border border-teal-500/30 shadow-pf-glow">
                <span className="w-2 h-2 rounded-full bg-[#008B8B] animate-pulse" />
                <span>EASYFLOW FLAGSHIP DESKTOP RELEASE</span>
              </div>

              {/* Title & Brand */}
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-slate-900 border border-slate-700 p-2 shadow-xs flex items-center justify-center">
                    <img
                      src={`${basePath}assets/promptflow-logo.png`}
                      alt="PromptFlow Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
                    PromptFlow
                  </h1>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-teal-400 tracking-tight">
                  Think Beyond Words. Engineer Beyond Limits.
                </p>
              </div>

              {/* Authoritative Narrative Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
                Not just another prompt editor. PromptFlow is where ideas evolve into precision. Create, refine, test, and master your prompts with an intelligent workspace built for the next generation of AI creators. Featuring handcrafted autocomplete intelligence, intelligent spelling correction, and a powerful developer-inspired environment, PromptFlow transforms the way you interact with AI.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                {promptflowDownloadConfig.isReleasePublished ? (
                  <a
                    href={promptflowDownloadConfig.githubAssetDownloadUrl}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-white bg-[#008B8B] hover:bg-[#007373] shadow-lg hover:shadow-pf-glow transition-all active:scale-[0.98] text-base"
                  >
                    <Download className="w-5 h-5 text-teal-200" />
                    <span>Download for Windows</span>
                    <span className="text-xs font-normal text-teal-200/90 pl-1 border-l border-teal-600/60">
                      v{promptflowDownloadConfig.version} (64-bit)
                    </span>
                  </a>
                ) : (
                  <a
                    href="#download"
                    onClick={(e) => handleScrollTo(e, '#download')}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-white bg-[#008B8B] hover:bg-[#007373] shadow-lg hover:shadow-pf-glow transition-all active:scale-[0.98] text-base"
                  >
                    <Download className="w-5 h-5 text-teal-200" />
                    <span>Download for Windows</span>
                    <span className="text-[11px] font-semibold text-amber-200 bg-amber-950/60 border border-amber-500/40 px-2 py-0.5 rounded ml-1">
                      Release Pending
                    </span>
                  </a>
                )}

                <a
                  href="#video"
                  onClick={(e) => handleScrollTo(e, '#video')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-all active:scale-[0.98] text-base"
                >
                  <Play className="w-4 h-4 text-teal-400" />
                  <span>Watch Video Showcase</span>
                </a>

                <a
                  href="#manual"
                  onClick={(e) => handleScrollTo(e, '#manual')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-slate-300 hover:text-white transition-all text-base"
                >
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  <span>User Manual</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>100% Offline & Local Sovereignty</span>
                </span>
                <span className="flex items-center gap-2">
                  <EyeOff className="w-4 h-4 text-teal-400" />
                  <span>Zero Telemetry or Analytics SDKs</span>
                </span>
                <span className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-teal-400" />
                  <span>Deterministic Heuristic Scoring</span>
                </span>
                <span className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-teal-400" />
                  <span>Local Filesystem & SQLite Metadata</span>
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. PROMOTIONAL VIDEO SHOWCASE SECTION                                    */}
        {/* ========================================================================= */}
        <section id="video" className="py-16 md:py-24 bg-slate-900 text-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-teal-950 text-teal-300 border border-teal-800/50 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#008B8B]" />
                <span>Application in Action</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Experience PromptFlow
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Watch how PromptFlow accelerates prompt ideation, refinement, and architecture testing in a native desktop environment.
              </p>
            </div>

            {/* Video Player Container */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl">
              <div className="bg-slate-950 px-4 py-2.5 flex items-center justify-between border-b border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-slate-300 font-sans font-medium">PromptFlow Showcase — Official Demo</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleVideoMute}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title={isVideoMuted ? "Unmute Video" : "Mute Video"}
                    aria-label={isVideoMuted ? "Unmute Video" : "Mute Video"}
                  >
                    {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleVideoPlayback}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title={isVideoPlaying ? "Pause Video" : "Play Video"}
                    aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
                  >
                    {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={`${basePath}assets/promptflow-video-poster.jpg`}
                  aria-label="PromptFlow Desktop Application Showcase Video"
                >
                  <source src={`${basePath}assets/promptflow-promo.mp4`} type="video/mp4" />
                  <p className="text-slate-400 p-8 text-center text-sm">
                    Your browser does not support HTML5 video. Please download the video directly from assets.
                  </p>
                </video>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. CORE CAPABILITIES & SCREENSHOT SHOWCASE                               */}
        {/* ========================================================================= */}
        <section id="features" className="py-20 md:py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-teal-50 text-[#007373] border border-teal-200 mb-3">
                Built For Precision
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Architected For AI Creators & Engineers
              </h2>
              <div className="w-12 h-1 bg-[#008B8B] rounded-full mx-auto mt-4 mb-6"></div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                PromptFlow is engineered to bridge the gap between creative prompt design and systematic software engineering.
              </p>
            </div>

            {/* Feature 1: Prompt Editor with Autocomplete */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#008B8B]">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Monaco-Powered Prompt Editor
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Craft prompts in a high-performance editor powered by the same engine as Visual Studio Code. Equipped with real-time character and token heuristics (~4 chars/token), Mustache parameter detection (<code className="text-[#008B8B] font-mono text-xs">{"{{variable}}"}</code>), and instant syntax structuring.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#008B8B] shrink-0 mt-0.5" />
                    <span><strong>Handcrafted Autocomplete:</strong> Inline ghost-text completions for parameters, JSON output envelopes, and reasoning tags.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#008B8B] shrink-0 mt-0.5" />
                    <span><strong>Intelligent Spellcheck:</strong> Flags genuine spelling errors while strictly preserving code blocks, variable tags, and camelCase syntax. Alt+Enter opens Quick Fixes.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950">
                  <div className="bg-slate-900 px-3.5 py-2 flex items-center gap-2 border-b border-slate-800 text-xs font-mono text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-slate-300 font-sans text-xs">Prompt Editor Workspace (Ctrl+1)</span>
                  </div>
                  <img
                    src={`${basePath}assets/promptflow-editor-preview.png`}
                    alt="PromptFlow Monaco Editor Workspace"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Feature 2: Deterministic Test Lab Rubric */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950">
                  <div className="bg-slate-900 px-3.5 py-2 flex items-center gap-2 border-b border-slate-800 text-xs font-mono text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-slate-300 font-sans text-xs">Test Lab Scoring Workspace (Ctrl+2)</span>
                  </div>
                  <img
                    src={`${basePath}assets/promptflow-testlab-preview.png`}
                    alt="PromptFlow Test Lab 100-Point Scoring Rubric"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#008B8B]">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Deterministic 100-Point Test Lab
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Evaluate your prompts objectively before deploying to expensive production APIs. The Test Lab scores drafts against a 7-criterion rubric, identifying vague qualifiers, missing role framing, and missing guardrails.
                </p>
                <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#008B8B] shrink-0 mt-0.5" />
                    <span><strong>Zero API Costs:</strong> 100% deterministic heuristic engine operating locally on your CPU.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#008B8B] shrink-0 mt-0.5" />
                    <span><strong>Actionable Diagnosis:</strong> Highlights exact weaknesses and guardrail enhancements needed to earn an &ldquo;A&rdquo; grade.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#008B8B] shrink-0 mt-0.5" />
                    <span><strong>Draft Persistence:</strong> Drafts remain saved in-memory when switching between workspaces.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Bundled Templates & Workflow Diagrams */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#008B8B]">
                  <LayoutTemplate className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Bundled Offline Templates & Diagrams
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Access a curated library of production-ready templates spanning System Personas, Few-Shot Tasks, Structured Output Schemas, Chain-of-Thought reasoning, and Safety Guardrails.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2">
                  <li className="flex items-start gap-2">
                    <Network className="w-4 h-4 text-[#008B8B] shrink-0 mt-0.5" />
                    <span><strong>Visual Diagram Designer (Ctrl+4):</strong> Interactive React Flow canvas for architecting multi-step agent topologies with Prompt, Model, Tool, and Router nodes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HardDrive className="w-4 h-4 text-[#008B8B] shrink-0 mt-0.5" />
                    <span><strong>Open Format Storage:</strong> Diagrams save as plain-text canonical <code className="text-[#008B8B] font-mono text-xs">.diagram</code> JSON files in your project directories.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950">
                  <div className="bg-slate-900 px-3.5 py-2 flex items-center gap-2 border-b border-slate-800 text-xs font-mono text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-slate-300 font-sans text-xs">Bundled Offline Templates (Ctrl+3)</span>
                  </div>
                  <img
                    src={`${basePath}assets/promptflow-templates-preview.png`}
                    alt="PromptFlow Bundled Offline Templates"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WINDOWS INSTALLER & DOWNLOAD SECTION                                   */}
        {/* ========================================================================= */}
        <section id="download" className="py-20 bg-slate-900 text-white relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-teal-500/40 bg-gradient-to-b from-slate-900 to-slate-950 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#008B8B]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-teal-950 text-teal-300 border border-teal-700/60">
                  <Monitor className="w-3.5 h-3.5" />
                  <span>OFFICIAL WINDOWS RELEASE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Download PromptFlow for Windows
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Get the verified standalone installer for Windows 10 and Windows 11 (64-bit). Built with high performance, local filesystem storage, and zero telemetry.
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 border-y border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-500 block uppercase font-mono text-[10px]">Version</span>
                    <span className="font-semibold text-slate-200">v{promptflowDownloadConfig.version}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase font-mono text-[10px]">Architecture</span>
                    <span className="font-semibold text-slate-200">{promptflowDownloadConfig.architecture}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase font-mono text-[10px]">File Size</span>
                    <span className="font-semibold text-slate-200">{promptflowDownloadConfig.fileSize}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block uppercase font-mono text-[10px]">Release State</span>
                    <span className={`font-semibold ${promptflowDownloadConfig.isReleasePublished ? 'text-teal-400' : 'text-amber-400'}`}>
                      {promptflowDownloadConfig.isReleasePublished ? 'Production Ready' : 'Pending Publication'}
                    </span>
                  </div>
                </div>

                {/* SHA-256 Checksum */}
                {promptflowDownloadConfig.sha256Checksum && (
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 overflow-hidden">
                    <span className="text-slate-500 uppercase text-[10px] font-sans font-semibold shrink-0">SHA-256 Integrity:</span>
                    <span className="select-all text-slate-300 font-mono text-[10px] sm:text-[11px] truncate">{promptflowDownloadConfig.sha256Checksum}</span>
                  </div>
                )}

                {/* Pending Publication Notice */}
                {!promptflowDownloadConfig.isReleasePublished && (
                  <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-200/90 text-xs sm:text-sm space-y-1.5">
                    <div className="flex items-center gap-2 font-semibold text-amber-300">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{promptflowDownloadConfig.statusLabel}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-300">
                      {promptflowDownloadConfig.statusDescription}
                    </p>
                  </div>
                )}

                {/* Download CTA Button */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {promptflowDownloadConfig.isReleasePublished ? (
                    <a
                      href={promptflowDownloadConfig.githubAssetDownloadUrl}
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-white bg-[#008B8B] hover:bg-[#007373] shadow-lg hover:shadow-pf-glow transition-all active:scale-[0.98] text-base"
                    >
                      <Download className="w-5 h-5 text-teal-200" />
                      <span>Download Installer (.exe)</span>
                      <span className="text-xs text-teal-200/90 font-normal pl-1 border-l border-teal-600/60">
                        {promptflowDownloadConfig.fileSize}
                      </span>
                    </a>
                  ) : (
                    <a
                      href={promptflowDownloadConfig.githubReleaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-amber-100 bg-slate-800 hover:bg-slate-750 border border-amber-500/30 shadow-md transition-all active:scale-[0.98] text-sm sm:text-base"
                    >
                      <ExternalLink className="w-4 h-4 text-amber-400" />
                      <span>Awaiting GitHub Release v{promptflowDownloadConfig.version}</span>
                    </a>
                  )}

                  <a
                    href={promptflowDownloadConfig.githubReleaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-semibold text-slate-300 bg-slate-800 hover:bg-slate-750 border border-slate-750 transition-all text-sm"
                  >
                    <span>View GitHub Releases</span>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </a>
                </div>

                {/* Download Analytics Note */}
                <p className="text-[11px] text-slate-400 leading-relaxed pt-2">
                  <strong>Download Tracking Transparency:</strong> EasyFlow tracks installer download totals directly via GitHub Releases assets (<code className="text-teal-300 font-mono">download_count</code>). We do not collect telemetry, install cookies, or create mandatory user accounts. Each download count represents a total download event from GitHub&apos;s CDN, not unique individuals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. INTERACTIVE USER MANUAL SECTION                                        */}
        {/* ========================================================================= */}
        <section id="manual" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-teal-50 text-[#007373] border border-teal-200 mb-3">
                In-App Documentation
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                PromptFlow User Manual
              </h2>
              <div className="w-12 h-1 bg-[#008B8B] rounded-full mx-auto mt-4 mb-6"></div>
              <p className="text-base text-slate-600 leading-relaxed">
                Reproduced accurately from the desktop application’s built-in manual. Explore workflows, scoring rubrics, and keyboard shortcuts.
              </p>
            </div>

            {/* Manual Tab Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs max-w-2xl mx-auto">
              <button
                type="button"
                onClick={() => setActiveManualTab('workspaces')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeManualTab === 'workspaces'
                    ? 'bg-[#008B8B] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Workspaces
              </button>
              <button
                type="button"
                onClick={() => setActiveManualTab('rubric')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeManualTab === 'rubric'
                    ? 'bg-[#008B8B] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Test Lab Rubric
              </button>
              <button
                type="button"
                onClick={() => setActiveManualTab('workflows')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeManualTab === 'workflows'
                    ? 'bg-[#008B8B] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                File Guides
              </button>
              <button
                type="button"
                onClick={() => setActiveManualTab('shortcuts')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeManualTab === 'shortcuts'
                    ? 'bg-[#008B8B] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Shortcuts
              </button>
            </div>

            {/* Tab 1: Workspaces */}
            {activeManualTab === 'workspaces' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {promptflowWorkspaces.map((ws) => (
                  <div key={ws.id} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{ws.title}</h3>
                      <p className="text-xs font-semibold text-[#007373] mt-0.5">{ws.tagline}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {ws.description}
                    </p>
                    {ws.subsections && (
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        {ws.subsections.map((sub, sIdx) => (
                          <div key={sIdx} className="text-xs">
                            <span className="font-semibold text-slate-800 block">{sub.subtitle}</span>
                            <span className="text-slate-500 leading-relaxed">{sub.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Test Lab Rubric */}
            {activeManualTab === 'rubric' && (
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">100-Point Scoring Rubric Dimensions</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    PromptFlow evaluates prompt quality against 6 deterministic heuristic dimensions without making external API calls.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {promptflowWorkspaces.find((w) => w.id === 'testlab')?.highlights?.map((hl, hIdx) => {
                    const [heading, ...descParts] = hl.split(':');
                    return (
                      <div key={hIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#008B8B] shrink-0" />
                          <span>{heading}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed pl-5.5">
                          {descParts.join(':').trim()}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 3: File Guides */}
            {activeManualTab === 'workflows' && (
              <div className="space-y-6">
                {promptflowFileGuides.map((guide, gIdx) => (
                  <div key={gIdx} className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <FileCode className="w-5 h-5 text-[#008B8B]" />
                      <span>{guide.title}</span>
                    </h3>
                    <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {guide.steps.map((st, sIdx) => (
                        <li key={sIdx}>{st}</li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 4: Shortcuts */}
            {activeManualTab === 'shortcuts' && (
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Keyboard className="w-5 h-5 text-[#008B8B]" />
                    <span>PromptFlow Keyboard Shortcuts Reference</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Standard keybindings designed for rapid workspace transitions and prompt editing.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 font-mono text-xs">
                        <th className="py-2.5 font-semibold">Shortcut</th>
                        <th className="py-2.5 font-semibold">Action</th>
                        <th className="py-2.5 font-semibold">Scope</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {promptflowShortcuts.map((sc, scIdx) => (
                        <tr key={scIdx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-2.5 font-mono font-bold text-[#007373]">
                            <kbd className="px-2 py-1 rounded bg-slate-100 border border-slate-300 shadow-2xs">
                              {sc.key}
                            </kbd>
                          </td>
                          <td className="py-2.5 text-slate-800 font-medium">{sc.action}</td>
                          <td className="py-2.5 text-slate-500 text-xs">{sc.scope}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. PRIVACY POLICY CALLOUT                                                */}
        {/* ========================================================================= */}
        <section className="py-16 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-teal-50/70 border border-teal-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xs">
              <div className="flex items-start gap-3.5">
                <ShieldCheck className="w-6 h-6 text-[#008B8B] shrink-0 mt-1" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    PromptFlow Privacy Policy
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Designed with a privacy-first philosophy. Your prompt and diagram files live exclusively on your physical drive, while SQLite manages application preferences locally.
                  </p>
                </div>
              </div>

              <a
                href={`${basePath}promptflow/privacy-policy/`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#008B8B] hover:bg-[#007373] shadow-2xs transition-colors shrink-0 self-start sm:self-auto"
              >
                <span>Read Full Privacy Policy</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Dedicated Subpage Footer */}
      <Footer basePath={basePath} isSubPage={true} />
    </div>
  );
};
export default PromptFlowPage;
