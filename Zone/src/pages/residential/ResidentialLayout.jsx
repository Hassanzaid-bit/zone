import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { Home, ArrowRight, ShieldCheck } from 'lucide-react';
import heroBanner from '../../assets/optimized/DSC08000-hero.webp';

const tabs = [
  { label: 'Apartments',     to: '/residential/apartments'    },
  { label: 'Own Compounds',  to: '/residential/own-compounds' },
  { label: 'Gated Estates',  to: '/residential/gated-estates' },
  { label: 'Rentals',        to: '/residential/rentals'       },
];

export default function ResidentialLayout() {
  return (
    <div className="min-h-screen bg-background text-white">

      {/* ══ SHARED HERO ════════════════════════════════════════════ */}
      <section className="relative w-full h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        {/* AI-generated hero image */}
        <img
          src={heroBanner}
          alt="Residential neighbourhood at dusk"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle bottom fade for text legibility */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,28,61,0.70) 0%, rgba(0,28,61,0.25) 45%, transparent 100%)' }} />

        {/* Blueprint grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-slate-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Home size={12} />
            <span className="text-slate-400">/</span>
            <span className="text-cyan-400">Residential Services</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-4">
                <ShieldCheck size={11} /> Residential Pest Management
              </div>
              <h1 className="text-4xl sm:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.0]">
                Protecting<br />
                <span className="text-cyan-400">Your Home.</span>
              </h1>
              <p className="text-slate-100 text-lg md:text-xl font-semibold mt-4 max-w-xl leading-relaxed">
                Minimum-impact, science-backed pest management tailored to families, pets, and the structural integrity of your property.
              </p>
            </div>
            <Link
              to="/precision-quote"
              className="flex-shrink-0 flex items-center gap-2 text-white font-black px-7 py-3.5 rounded-full text-sm transition-all hover:opacity-90 shadow-blue-glow group"
              style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
            >
              Book a Residential Audit
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ SECONDARY TAB NAVIGATION ═══════════════════════════════ */}
      <div
        className="sticky top-[72px] z-40 w-full border-b-2 border-white/10"
        style={{ background: 'rgba(0,20,50,0.97)', backdropFilter: 'blur(16px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex overflow-x-auto">
          {tabs.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex-shrink-0 px-6 py-4 text-xs font-black uppercase tracking-widest border-b-2 transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'border-cyan-400 text-white'
                    : 'border-transparent text-slate-400 hover:text-slate-100 hover:border-white/25'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* ══ SUB-PAGE CONTENT ═══════════════════════════════════════ */}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
