import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Building2, ArrowRight, ShieldCheck } from 'lucide-react';
import heroCommercial from '../../assets/optimized/DSC08126-commercial.webp';



export default function SectorLayout() {
  return (
    <div className="min-h-screen bg-background text-white">

      {/* ══ SHARED HERO ════════════════════════════════════════════ */}
      <section className="relative w-full h-[45vh] min-h-[340px] flex flex-col justify-end pt-24 md:pt-32 overflow-hidden">
        {/* Hero image — full bleed */}
        <img
          src={heroCommercial}
          alt="Q-Zone commercial pest management operations"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle bottom fade for text legibility */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,28,61,0.75) 0%, rgba(0,28,61,0.25) 45%, transparent 100%)' }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-slate-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Building2 size={12} />
            <span className="text-slate-400">/</span>
            <span className="text-cyan-400">Commercial Sectors</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="section-eyebrow mb-4 mt-8">
                <ShieldCheck size={11} /> Sector-Specific Compliance
              </div>
              <h1 className="text-4xl sm:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.0]">
                Industry<br />
                <span className="text-cyan-400">Compliance.</span>
              </h1>
              <p className="text-slate-200 text-lg md:text-xl font-semibold mt-4 max-w-xl leading-relaxed">
                Sector-specific pest management engineered for your regulatory environment.
                Audit-proof. Always.
              </p>
            </div>
            <Link
              to="/precision-quote?type=commercial"
              className="flex-shrink-0 flex items-center gap-2 text-white font-black px-7 py-3.5 rounded-full text-sm transition-all hover:opacity-90 shadow-blue-glow group"
              style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
            >
              Request Commercial Audit
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ SUB-PAGE CONTENT ═══════════════════════════════════════ */}
      <div className="w-full">
        <Outlet />
      </div>

      {/* ══ UNIVERSAL CTA ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 md:px-8">
        {/* Background gradient */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #001C3D 0%, #002D4A 50%, #001C3D 100%)'
        }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0097C4 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="section-eyebrow mx-auto mb-6 justify-center">
            <ShieldCheck size={12} /> Zero-Tolerance Compliance
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-4xl sm:text-6xl font-display font-black text-white mb-6 leading-tight">
            Ready for an<br />
            <span className="text-cyan-400">Audit-Proof Facility?</span>
          </h2>
          <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Our commercial team will conduct a comprehensive facility risk assessment,
            map every critical control point, and deliver a bespoke compliance matrix
            tailored to your sector's regulatory framework.
          </p>
          <Link
            to="/precision-quote?type=commercial"
            className="inline-flex items-center gap-3 text-white font-black text-lg px-10 py-5 rounded-full transition-all hover:opacity-90 shadow-blue-glow group"
            style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
          >
            Request a Commercial Audit
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
