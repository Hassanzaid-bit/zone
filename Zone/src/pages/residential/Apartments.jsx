import React from 'react';
import bgApartments from '../../assets/optimized/apartments.webp';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, Users, CheckCircle2, Zap,
  Bug, Eye, Home, AlertTriangle, Star
} from 'lucide-react';
import ThreatCard from '../../components/ThreatCard';

const methodology = [
  {
    step: '01', title: 'Inter-Unit Inspection',
    body: 'We begin with a full survey of shared infrastructure — pipe risers, electrical conduits, laundry voids, and waste chutes — mapping every cross-unit pathway pests exploit.',
    icon: Eye,
  },
  {
    step: '02', title: 'Targeted Gel & Minimal-Dose Treatment',
    body: 'Cockroach and bed bug protocols use precise gel bait and low-volatility formulations applied directly into harbourage zones, eliminating exposure risk to neighbouring tenants.',
    icon: Bug,
  },
  {
    step: '03', title: 'Structural Exclusion',
    body: 'We seal identified entry points — pipework gaps, meter cupboards, and party-wall penetrations — using industry-grade proofing materials to prevent re-entry and cross-infestation.',
    icon: ShieldCheck,
  },
  {
    step: '04', title: 'Same-Technician Monitoring',
    body: 'Your dedicated technician visits on a scheduled programme, building deep familiarity with your unit and building — catching trends early and maintaining consistent documentation.',
    icon: Users,
  },
];

const included = [
  'Same Technician guarantee — continuity and familiarity with your specific unit',
  'PCPB-registered, family-safe formulations on every visit',
  'Minimal disruption protocol — treatments targeted to harbourage, not broadcast',
  'Bed bug heat-mapping and mattress inspection as standard',
  'Digital service report issued after every visit',
  'Re-treatment guarantee within active programme period',
];

const threats = [
  {
    icon: <Bug size={20} />,
    label: 'Ants & Flies',
    desc: 'Persistent activity around shared kitchen waste areas, bins, balconies, and communal corridors.',
    category: 'crawling-insect',
  },
  {
    icon: <Bug size={20} />,
    label: 'Cockroaches',
    desc: 'Common in kitchens, drains, refuse areas, and warm hidden spaces.',
    category: 'crawling-insect',
  },
  {
    icon: <AlertTriangle size={20} />,
    label: 'Rodent Intrusion',
    desc: 'Entry through service ducts, parking areas, refuse rooms, and utility spaces.',
    category: 'rodent',
  },
  {
    icon: <Bug size={20} />,
    label: 'Bedbugs',
    desc: 'Spread through furniture, luggage, shared walls, and high-occupancy living spaces.',
    category: 'ectoparasite',
  },
];

export default function Apartments() {
  return (
    <div className="text-white">

      {/* ── Page Intro ──────────────────────────────────────────── */}
      <section
        className="relative min-h-screen w-full overflow-hidden border-b border-white/10 bg-cover bg-center bg-no-repeat bg-[#001C3D]"
        style={{ backgroundImage: `url(${bgApartments})` }}
      >
        <div className="absolute inset-0 bg-[#001C3D]/80 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.18em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-5">
              <Users size={11} /> High-Density Living
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-4xl sm:text-6xl font-display font-black text-white leading-tight mb-5">
              Precision Pest Control for<br />
              <span className="text-cyan-400">High-Density Living.</span>
            </h2>
            <p className="text-slate-100 text-xl leading-relaxed font-semibold mb-5">
              In shared living spaces, pests like cockroaches and bed bugs spread rapidly through walls and plumbing. Our targeted,{' '}
              <span className="text-cyan-300">minimum-impact treatments</span> focus on structural exclusion and rapid eradication, ensuring your apartment remains safe without disrupting your neighbours.
            </p>
            <div className="inline-flex items-center gap-3 mt-2 px-5 py-3 rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-sm">
              <Star size={15} className="text-amber-400" />
              <span className="text-sm font-black text-white uppercase tracking-widest">Key Feature: Same Technician Guarantee</span>
            </div>
          </div>

          <div className="rounded-3xl p-5 sm:p-8 bg-white/5 border border-white/15 flex flex-col gap-5">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Programme Guarantees</p>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-black text-sm mb-0.5">Same Technician Guarantee</p>
                <p className="text-slate-300 text-xs leading-relaxed">Dedicated professional assigned to your property for consistent service and auditing.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-black text-sm mb-0.5">Family & Pet Safe Formulations</p>
                <p className="text-slate-300 text-xs leading-relaxed">Targeted gel baits and low-toxicity micro-dose applications with no exposure risk.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-black text-sm mb-0.5">Digital Service Records</p>
                <p className="text-slate-300 text-xs leading-relaxed">Comprehensive digital report issued immediately after every treatment visit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Common Pests Section ────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8 border-b border-white/10" style={{ background: '#00243A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.18em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-6">
            <Bug size={12} className="text-cyan-400" /> Common Pests
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
            Common Pests in <span className="text-cyan-400">Apartments</span>
          </h3>
          <p className="text-slate-200 text-base max-w-3xl mb-4 leading-relaxed">
            Select a common pest issue to view identification signs, risks, and prevention guidance in the QZone Pest Library.
          </p>
          <p className="text-xs font-black uppercase tracking-widest text-cyan-400/70 mb-10">
            ↓ Click any card to view in Pest Library
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {threats.map((t, i) => (
              <ThreatCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Methodology ─────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8" style={{ background: '#001C3D' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl sm:text-5xl font-display font-black text-white mb-4">
              Our 4-Step <span className="text-cyan-400">Apartment Protocol</span>
            </h2>
            <p className="text-slate-100 text-lg max-w-xl mx-auto leading-relaxed font-semibold">
              A structured approach designed specifically for multi-unit buildings — precise, discreet, and neighbour-safe.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {methodology.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.step} className="rounded-2xl p-5 sm:p-8 bg-white/5 border border-white/15 hover:border-cyan-500/40 hover:bg-white/8 transition-all duration-300 group">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/30 group-hover:bg-cyan-500/25 transition-colors">
                      <Icon size={22} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl sm:text-5xl font-display font-black text-white/10 leading-none">{m.step}</span>
                        <h3 className="text-xl font-display font-black text-white">{m.title}</h3>
                      </div>
                      <p className="text-slate-100 text-base leading-relaxed font-semibold">{m.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Inclusions + CTA ────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8 border-t border-white/10" style={{ background: '#00243A' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-6 leading-tight">
              What Every<br /><span className="text-cyan-400">Programme Includes</span>
            </h2>
            <div className="flex flex-col gap-4">
              {included.map(f => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base font-semibold leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-white/5 border border-white/15">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.18em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-5">
              <Zap size={11} /> Book a Survey
            </div>
            <h3 className="text-2xl font-display font-black text-white leading-snug mb-4">
              Ready to protect your apartment?
            </h3>
            <p className="text-slate-100 text-base leading-relaxed font-semibold mb-6">
              Book a residential survey and our certified technician will conduct a full unit and building inspection — identifying active threats and designing a programme around your specific risk profile.
            </p>
            <Link
              to="/precision-quote"
              className="inline-flex items-center gap-2 text-white font-black px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm transition-all hover:opacity-90 shadow-blue-glow group"
              style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
            >
              Book a Residential Audit
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
