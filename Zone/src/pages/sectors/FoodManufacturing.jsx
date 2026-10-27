import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, AlertTriangle, Bug, CheckCircle2, ArrowRight,
  ClipboardCheck, Microscope, BarChart3, FileCheck, Scan, Timer
} from 'lucide-react';
import heroImg from '../../assets/optimized/food-manufacturing-hero.webp';
import ThreatCard from '../../components/ThreatCard';

/* ── Sector-specific threat cards with pestFilter ─────────────────── */
const threats = [
  {
    icon: <Bug size={20} />,
    label: 'Cockroaches & Stored Product Insects',
    desc: 'Cross-contamination vectors in raw material storage and production lines — carrying E. coli, Salmonella, and enteric pathogens to food-contact surfaces.',
    category: 'crawling-insect',
  },
  {
    icon: <AlertTriangle size={20} />,
    label: 'Rodent Intrusion',
    desc: 'Gnawing damage to packaging and wiring, faecal contamination on food-contact surfaces, and catastrophic audit-failure risk.',
    category: 'rodent',
  },
  {
    icon: <Bug size={20} />,
    label: 'Flying Insects & Stored Grain Moths',
    desc: 'House flies and Indian Meal Moths carry pathogenic micro-organisms into sterile processing zones and infest bulk-stored ingredients.',
    category: 'flying-insect',
  },
  {
    icon: <AlertTriangle size={20} />,
    label: 'Bird Ingress',
    desc: 'Feral pigeons nesting in warehouse roof voids cause physical contamination, Salmonella risk, and BRCGS non-conformity findings.',
    category: 'avian-pest',
  },
];

/* ── Solution cards ───────────────────────────────────────────────── */
const solutions = [
  { icon: <Scan size={20} />, title: 'Insectram® Digital Platform', desc: 'Real-time pest sighting reporting, trend analysis dashboards, and instant push alerts to facility managers — all accessible from any device.' },
  { icon: <ClipboardCheck size={20} />, title: 'Non-Conformity Tracking', desc: 'Every deviation is logged, timestamped, and escalated with corrective action protocols. Your auditor sees a clean, chronological compliance trail.' },
  { icon: <Microscope size={20} />, title: 'Non-Toxic Exclusion First', desc: 'Physical barriers, air-curtain integration, and proofing — chemical intervention is always the last resort, never the default.' },
  { icon: <BarChart3 size={20} />, title: 'Continuous Audit Readiness', desc: 'Monthly KPI reports, trend heatmaps, and pre-audit compliance summaries generated automatically through Insectram®.' },
  { icon: <Timer size={20} />, title: 'Rapid Response SLA', desc: 'Critical pest sightings in production zones trigger a <4-hour emergency response — guaranteed in your service contract.' },
  { icon: <FileCheck size={20} />, title: 'Documentation Architecture', desc: 'Every bait station, trap, and treatment is mapped, numbered, and integrated into your HACCP plan with full traceability.' },
];

/* ── Compliance ───────────────────────────────────────────────────── */
const compliance = [
  { code: 'ISO 22000', desc: 'Food Safety Management Systems — Hazard analysis, PRP documentation, and operational prerequisite programmes.' },
  { code: 'FSSC 22000', desc: 'Foundation for Food Safety Certification — Clause 8 pest control requirements with emphasis on environmental monitoring.' },
  { code: 'BRCGS', desc: 'British Retail Consortium Global Standards — Section 4.14 Pest Control: documented procedures, trend analysis, and root-cause investigation.' },
  { code: 'HACCP', desc: 'Hazard Analysis Critical Control Points — Biological hazard identification and Critical Control Point integration for pest vectors.' },
];

export default function FoodManufacturing() {
  return (
    <div style={{ background: '#001C3D' }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative w-full h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img
          src={heroImg}
          loading="lazy"
          decoding="async"
          alt="Food manufacturing facility"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.3) saturate(0.5)' }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #001C3D 0%, rgba(0,28,61,0.6) 50%, rgba(0,28,61,0.2) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 pb-14">
          <div className="section-eyebrow mb-4">
            <Scan size={11} /> Food Production
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-4xl sm:text-6xl font-display font-black text-white leading-[1.05]">
            Audit-Ready<br />
            <span className="text-cyan-400">Food Safety.</span>
          </h2>
          <p className="text-slate-200 text-lg mt-4 max-w-2xl leading-relaxed">
            Digital monitoring, HACCP-integrated documentation, and non-toxic exclusion —
            engineered for ISO 22000, BRCGS, and FSSC 22000 compliance.
          </p>
        </div>
      </section>

      {/* ── INDUSTRY THREAT PROFILE ──────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="section-eyebrow mb-6">
            <AlertTriangle size={12} /> Industry Threat Profile
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
            Critical Vectors for <span className="text-cyan-400">Food Safety</span>
          </h3>
          <p className="text-slate-200 text-base max-w-3xl mb-4 leading-relaxed">
            In food production, a single pest sighting in the wrong zone can trigger a BRCGS major
            non-conformity, halt production, or revoke certification. Click any threat below to view
            the full pest profile in our library.
          </p>
          <p className="text-xs font-black uppercase tracking-widest text-cyan-400/70 mb-10">
            ↓ Click any card to view in Pest Library
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {threats.map((t, i) => (
              <ThreatCard key={i} {...t} />
            ))}
          </div>

          {/* Pest Library CTA */}
          <div className="rounded-2xl p-6 border border-cyan-500/20 bg-cyan-500/5 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-white font-black text-base mb-1">Need to identify another pest affecting your facility?</p>
              <p className="text-slate-300 text-sm">Browse our full technical directory — 30+ species, risk levels, and Q-Zone food-safe protocols.</p>
            </div>
            <Link to="/library" className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 text-center text-white font-black px-6 py-3 rounded-full text-sm hover:opacity-90 transition-all shadow-blue-glow group" style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}>
              Full Pest Library <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE Q-ZONE SOLUTION ──────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8 relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-eyebrow mb-6">
            <CheckCircle2 size={12} /> The Q-Zone Solution
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
            Compliance-First <span className="text-cyan-400">Pest Management</span>
          </h3>
          <p className="text-slate-200 text-base max-w-3xl mb-12 leading-relaxed">
            Every element of our food-sector programme is designed to generate the audit-ready documentation
            your certification body requires — not just control pests.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="glass-panel rounded-2xl p-7 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:bg-cyan-500/20 transition-colors">{s.icon}</div>
                <h4 className="text-white font-bold text-lg mb-2">{s.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE STANDARDS ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="section-eyebrow mb-6">
            <FileCheck size={12} /> Compliance Standards Supported
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-12">
            Food Safety <span className="text-cyan-400">Standards</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {compliance.map((c, i) => (
              <div key={i} className="glass-panel rounded-2xl p-7 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex items-start gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/40 border border-primary/50 flex items-center justify-center group-hover:bg-primary/60 transition-colors">
                  <ShieldCheck size={22} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl mb-1">{c.code}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
