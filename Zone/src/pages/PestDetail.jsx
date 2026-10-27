import React from 'react';
import pestFallback from '../assets/optimized/pest-library.webp';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, AlertTriangle, CheckCircle2,
  ShieldCheck, Bug, ChevronRight, Microscope, Eye
} from 'lucide-react';
import pestData from '../data/pestData';

/* ── Risk badge colour map ──────────────────────────────────── */
function riskColor(level) {
  switch (level) {
    case 'Critical': return 'text-rose-400 border-rose-500/40 bg-rose-500/10';
    case 'High':     return 'text-amber-400 border-amber-500/40 bg-amber-500/10';
    case 'Medium':   return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10';
    case 'Low':      return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    default:         return 'text-slate-400 border-white/10 bg-white/5';
  }
}

export default function PestDetail() {
  const { id } = useParams();
  const pest = pestData.find(p => p.id === id);

  // If pest not found, redirect to library index
  if (!pest) return <Navigate to="/library" replace />;

  // Get prev/next for navigation
  const currentIndex = pestData.findIndex(p => p.id === id);
  const prev = currentIndex > 0 ? pestData[currentIndex - 1] : null;
  const next = currentIndex < pestData.length - 1 ? pestData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen text-white" style={{ background: '#001C3D' }}>

      {/* ══ HERO — Split layout ══════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #001020 0%, #001C3D 55%, #002540 100%)' }}
      >
        {/* Blueprint grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest mb-8">
            <Link to="/library" className="hover:text-white transition-colors flex items-center gap-1.5">
              <ArrowLeft size={12} /> Pest Library
            </Link>
            <span>/</span>
            <span className="text-cyan-400">{pest.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg border text-slate-300 border-white/10 bg-white/5">
                  {pest.category}
                </span>
                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg border ${riskColor(pest.riskLevel)}`}>
                  {pest.riskLevel} Risk
                </span>
              </div>

              <h1 className="text-4xl sm:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-tight mb-3">
                {pest.name}
              </h1>
              <p className="text-cyan-400 text-lg md:text-xl font-semibold italic mb-6">
                {pest.scientificName}
              </p>
              <p className="text-slate-200 text-lg leading-relaxed font-semibold max-w-xl">
                {pest.characteristics}
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
                <img
                  src={pest.image}
                  alt={pest.name}
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = pestFallback;
                  }}
                  className="w-full h-[360px] md:h-[420px] object-cover"
                  style={{ filter: 'brightness(0.65) saturate(0.55)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001C3D]/60 via-transparent to-transparent rounded-2xl" />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
                <Bug size={16} className="text-cyan-400" />
                <div>
                  <p className="text-white text-xs font-black">{pest.category}</p>
                  <p className="text-slate-300 text-[10px] font-semibold">{pest.riskLevel} pest risk</p>
                </div>
              </div>
              {pest.imageSource && (
                <a
                  href={pest.imageSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-5 right-5 max-w-[48%] rounded-lg border border-white/15 bg-black/45 px-3 py-2 text-right text-[9px] font-bold leading-tight text-slate-300 backdrop-blur-sm hover:text-cyan-300 transition-colors"
                >
                  Photo: {pest.imageLicense}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTENT GRID — 2 columns ═══════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 md:px-8" style={{ background: '#001C3D' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

          {/* ── Column 1: Signs of Infestation ──────────────── */}
          <div className="flex flex-col gap-8">

            {/* Signs card */}
            <div className="rounded-2xl p-5 sm:p-8 bg-white/5 border border-white/15">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-amber-500/15 border border-amber-500/30">
                  <AlertTriangle size={18} className="text-amber-400" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-black text-white">Signs of Infestation</h2>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">How to spot an active population</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {pest.symptoms.map((symptom, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mt-0.5">
                      <span className="text-[10px] font-black text-amber-400">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-slate-200 text-sm leading-relaxed font-semibold">{symptom}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Biology card */}
            <div className="rounded-2xl p-5 sm:p-8 bg-white/5 border border-white/15">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/30">
                  <Microscope size={18} className="text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-black text-white">Biological Profile</h2>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Species characteristics</p>
                </div>
              </div>
              <p className="text-slate-200 text-base leading-relaxed font-semibold">
                {pest.characteristics}
              </p>

              {/* Quick facts row */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/10">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Category</p>
                  <p className="text-white font-black text-sm">{pest.category}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Risk Level</p>
                  <p className={`font-black text-sm ${pest.riskLevel === 'Critical' ? 'text-rose-400' : pest.riskLevel === 'High' ? 'text-amber-400' : 'text-cyan-400'}`}>
                    {pest.riskLevel}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Scientific</p>
                  <p className="text-cyan-400 font-semibold text-xs italic">{pest.scientificName.split('/')[0].trim()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Column 2: The Q-Zone Protocol ──────────────── */}
          <div className="flex flex-col gap-8">
            <div
              className="rounded-2xl p-5 sm:p-8 border border-cyan-500/25 sticky top-24"
              style={{ background: 'linear-gradient(160deg, rgba(0,69,110,0.25), rgba(0,28,61,0.6))' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-cyan-500/20 border border-cyan-500/40">
                  <ShieldCheck size={18} className="text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-black text-white">The Q-Zone Protocol</h2>
                  <p className="text-cyan-400 text-xs font-black uppercase tracking-widest">Our IPM treatment approach</p>
                </div>
              </div>

              <p className="text-slate-100 text-base leading-relaxed font-semibold mb-8">
                {pest.qzoneSolution}
              </p>

              {/* Trust indicators */}
              <div className="flex flex-col gap-3 mb-8 pt-6 border-t border-white/10">
                {[
                  'PCPB-registered formulations only',
                  'IPM 5-stage framework compliant',
                  'Digital documentation via Insectram',
                  'Structured follow-up & monitoring',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-200 text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to="/precision-quote"
                className="w-full flex items-center justify-center gap-2 text-white font-black px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm hover:opacity-90 transition-all shadow-blue-glow group"
                style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
              >
                <ShieldCheck size={15} />
                Request a {pest.name} Audit
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SPOTTED CTA BANNER ═══════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 md:px-8 border-t border-white/10" style={{ background: '#00243A' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.18em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-6">
            <Eye size={11} /> Immediate Response
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 leading-tight">
            Have you spotted <span className="text-cyan-400">{pest.name}</span>?
          </h2>
          <p className="text-slate-200 text-base font-semibold max-w-xl mx-auto leading-relaxed mb-8">
            Request an immediate diagnostic audit. Our certified technicians will be on-site within 24–48 hours to confirm the species, assess the infestation extent, and design a targeted intervention programme.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/precision-quote"
              className="inline-flex items-center gap-2 text-white font-black px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm hover:opacity-90 transition-all shadow-blue-glow group"
              style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
            >
              Request Diagnostic Audit
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/library"
              className="inline-flex items-center gap-2 text-white font-black px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm border border-white/30 hover:bg-white/8 transition-all"
            >
              Back to Pest Library
            </Link>
          </div>
        </div>
      </section>

      {/* ══ PREV / NEXT NAVIGATION ══════════════════════════ */}
      <section className="py-6 px-4 sm:px-6 md:px-8 border-t border-white/10" style={{ background: '#001020' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {prev ? (
            <Link
              to={`/library/${prev.id}`}
              className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest mb-0.5">Previous</p>
                <p className="text-sm font-black text-white">{prev.name}</p>
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              to={`/library/${next.id}`}
              className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group text-right"
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest mb-0.5">Next</p>
                <p className="text-sm font-black text-white">{next.name}</p>
              </div>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </section>

    </div>
  );
}
