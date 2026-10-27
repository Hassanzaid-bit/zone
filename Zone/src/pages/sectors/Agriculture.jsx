import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, AlertTriangle, Bug, CheckCircle2,
  Wheat, Wind, Thermometer, FlaskConical, FileCheck, ArrowRight, Skull
} from 'lucide-react';
import heroImg from '../../assets/optimized/agriculture-hero.webp';
import ThreatCard from '../../components/ThreatCard';

const threats = [
  { icon: <Bug size={20} />, label: 'Stored Product Insects (SPIs)', desc: 'Lesser Grain Borers, Khapra Beetles, Rice Weevils, and Indian Meal Moths — the primary destroyers of bulk-stored grain and milled products.', category: 'stored-product-insect' },
  { icon: <AlertTriangle size={20} />, label: 'Rodent Populations', desc: 'Grain stores and milling floors provide unlimited food sources — unchecked rodent colonies can consume and contaminate tonnes of product monthly.', category: 'rodent' },
  { icon: <Bug size={20} />, label: 'Flour Mite Infestations', desc: 'Microscopic mites proliferate in warm, humid milling environments — contaminating flour with allergens and rendering product unmarketable.', category: 'stored-product-insect' },
  { icon: <Wheat size={20} />, label: 'Grain Moths & Beetles', desc: 'Insect activity creates moisture pockets in bulk grain that catalyse fungal growth and mycotoxin production — a food safety catastrophe.', category: 'stored-product-insect' },
];

const solutions = [
  { icon: <Skull size={20} />, title: 'Phosphine Fumigation', desc: 'Our flagship treatment for SPIs. Aluminium Phosphide tablets generate lethal Phosphine gas (PH₃) that penetrates the entire grain mass — eliminating all life stages from egg to adult.', highlight: true },
  { icon: <Wind size={20} />, title: 'Controlled Atmosphere Treatment', desc: 'For organic-certified facilities: modified atmosphere techniques using nitrogen displacement to achieve SPI mortality without chemical residues.' },
  { icon: <Thermometer size={20} />, title: 'Temperature Monitoring', desc: 'Wireless grain temperature probes detect insect-generated heat pockets deep within silos — early warning of SPI activity before visible infestation.' },
  { icon: <FlaskConical size={20} />, title: 'Residual Structural Treatments', desc: 'Licensed application of approved residual insecticides to silo walls, conveyor housings, and elevator boot pits between fumigation cycles.' },
  { icon: <Wheat size={20} />, title: 'Grain Hygiene Auditing', desc: 'Pre-storage condition assessment, cleaning protocol development, and ongoing hygiene auditing to prevent re-infestation post-fumigation.' },
  { icon: <Bug size={20} />, title: 'Pheromone Trap Networks', desc: 'Strategic deployment of species-specific pheromone traps throughout storage facilities — continuous population monitoring with trend analysis via Insectram®.' },
];

const compliance = [
  { code: 'KEPHIS', desc: 'Kenya Plant Health Inspectorate Service — Phytosanitary certification requirements for grain storage and export compliance.' },
  { code: 'PCPB', desc: 'Pest Control Products Board — restricted-class aluminium phosphide products must be used by licensed professionals and only for registered uses.' },
  { code: 'Codex Alimentarius', desc: 'Maximum Residue Limits (MRLs) for Phosphine in stored grain — ensuring treated product meets international trade requirements.' },
  { code: 'EAS Standards', desc: 'East African Standards for grain storage — pest management requirements for cross-border trade within the EAC.' },
];

export default function Agriculture() {
  return (
    <div style={{ background: '#001C3D' }}>

      {/* ── HERO IMAGE ─────────────────────────────────────────── */}
      <section className="relative w-full h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img
          src={heroImg}
          loading="lazy"
          decoding="async"
          alt="Grain milling facility"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.3) saturate(0.5)' }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #001C3D 0%, rgba(0,28,61,0.6) 50%, rgba(0,28,61,0.2) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 pb-14">
          <div className="section-eyebrow mb-4">
            <Wheat size={11} /> Agriculture & Milling
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-4xl sm:text-6xl font-display font-black text-white leading-[1.05]">
            Grain Protection<br />
            <span className="text-cyan-400">at Scale.</span>
          </h2>
          <p className="text-slate-200 text-lg mt-4 max-w-2xl leading-relaxed">
            Phosphine Fumigation, SPI eradication, and grain hygiene auditing —
            protecting stored product integrity from silo to export.
          </p>
        </div>
      </section>

      {/* ── PHOSPHINE CTA BANNER ───────────────────────────────── */}
      <section className="px-4 sm:px-6 md:px-8 -mt-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/contact"
            className="block glass-panel rounded-2xl p-6 md:p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group"
            style={{ background: 'linear-gradient(135deg, rgba(0,69,110,0.5), rgba(0,151,196,0.15))' }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <Skull size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl mb-1">Stored-Product Fumigation Consultation</h4>
                  <p className="text-slate-300 text-sm">Discuss suitability, site preparation, registered-product requirements, and professional safety controls with our technical team.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-cyan-400 font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all flex-shrink-0">
                Request Consultation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── INDUSTRY THREAT PROFILE ────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="section-eyebrow mb-6">
            <AlertTriangle size={12} /> Industry Threat Profile
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
            Stored Product <span className="text-cyan-400">Threat Matrix</span>
          </h3>
          <p className="text-slate-200 text-base max-w-3xl mb-4 leading-relaxed">
            Grain storage and milling operations face a constant battle against Stored Product Insects.
            A single undetected infestation can destroy entire consignments, breach phytosanitary export
            requirements, and trigger costly product recalls. Click any threat to learn more.
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
              <p className="text-white font-black text-base mb-1">Need to identify another pest affecting your grain store?</p>
              <p className="text-slate-300 text-sm">Browse our full technical pest directory — species profiles, risk levels, and Q-Zone grain-safe protocols.</p>
            </div>
            <Link to="/library" className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 text-center text-white font-black px-6 py-3 rounded-full text-sm hover:opacity-90 transition-all shadow-blue-glow group" style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}>
              Full Pest Library <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE Q-ZONE SOLUTION ────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8 relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-eyebrow mb-6">
            <CheckCircle2 size={12} /> The Q-Zone Solution
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
            From Silo <span className="text-cyan-400">to Shipment</span>
          </h3>
          <p className="text-slate-200 text-base max-w-3xl mb-12 leading-relaxed">
            Our agriculture division combines licensed Phosphine Fumigation with advanced
            monitoring technologies and strict hygiene protocols — a complete stored product
            protection system.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <div
                key={i}
                className={`glass-panel rounded-2xl p-7 border transition-all duration-300 group hover:-translate-y-1 ${
                  s.highlight
                    ? 'border-cyan-500/40 ring-1 ring-cyan-500/20'
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-colors ${
                  s.highlight
                    ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                    : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20'
                }`}>
                  {s.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{s.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
                {s.highlight && (
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 mt-4 text-cyan-400 font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Discuss Service <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE STANDARDS ───────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="section-eyebrow mb-6">
            <FileCheck size={12} /> Compliance Standards Supported
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-12">
            Agricultural <span className="text-cyan-400">Standards</span>
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
