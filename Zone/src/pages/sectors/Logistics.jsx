import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, AlertTriangle, Bug, CheckCircle2, Truck,
  Lock, Radar, Shield, Box, FileCheck, ArrowRight
} from 'lucide-react';
import heroImg from '../../assets/optimized/logistics-hero.webp';
import ThreatCard from '../../components/ThreatCard';

const threats = [
  { icon: <Bug size={20} />, label: 'Rodent Harbourage in Pallet Stacks', desc: 'Palletized goods create complex harbourage networks — rodents nest between shrink-wrapped loads undetected for weeks.', category: 'rodent' },
  { icon: <AlertTriangle size={20} />, label: 'Bird Ingress at Loading Bays', desc: 'Open dock doors create undefended entry points for feral pigeons — nesting in roof voids and contaminating stored goods.', category: 'avian-pest' },
  { icon: <Bug size={20} />, label: 'Stored Product Insect Cross-Contamination', desc: 'Pest activity in one warehouse section can contaminate food-grade goods destined for retail supply chains — causing audit failures.', category: 'stored-product-insect' },
  { icon: <Truck size={20} />, label: 'Vehicle-Borne Flying Insects', desc: 'Delivery vehicles transport pest populations between facilities — house flies and moths creating multi-site infestations from a single load.', category: 'flying-insect' },
];

const solutions = [
  { icon: <Lock size={20} />, title: 'Perimeter Fortification', desc: 'Multi-layer perimeter defence including rodent-proof fascia strips, brush-strip door seals, and hardened concrete apron treatments around all entry points.' },
  { icon: <Radar size={20} />, title: 'Loading Bay Monitoring', desc: 'Automated electronic rodent monitoring stations at every dock door with real-time alerts — coverage that doesn\'t depend on manual inspection rounds.' },
  { icon: <Shield size={20} />, title: 'Tamper-Proof Rodent Stations', desc: 'Heavy-duty, lockable bait stations with GPS-tagged positions and digital consumption tracking via Insectram® for compliance documentation.' },
  { icon: <Box size={20} />, title: 'Racking Zone Protection', desc: 'Targeted monitoring at the base of every racking aisle — UV tracking dust, snap-trap arrays, and non-toxic monitoring blocks on a documented rotation schedule.' },
  { icon: <Truck size={20} />, title: 'Vehicle Inspection Protocol', desc: 'Standardized pest inspection checklists for inbound and outbound vehicles — physical evidence logging with photographic documentation.' },
  { icon: <Radar size={20} />, title: 'Thermal Mapping', desc: 'Infra-red thermal sweeps of wall voids, roof spaces, and service ducts to identify rodent harbourage before visual evidence appears.' },
];

const compliance = [
  { code: 'AIB International', desc: 'American Institute of Baking — Consolidated Standards for Inspection: pest management programme requirements and documentation.' },
  { code: 'BRC Storage & Distribution', desc: 'British Retail Consortium Issue 4 — Section 4.13: Pest control management for storage and distribution environments.' },
  { code: 'ISO 22000', desc: 'Prerequisite Programme (PRP) — pest control within the food safety management system for warehousing operations.' },
  { code: 'GDP (Good Distribution Practice)', desc: 'European GDP guidelines for pharmaceutical logistics — pest-free storage conditions for medicinal products.' },
];

export default function Logistics() {
  return (
    <div style={{ background: '#001C3D' }}>

      {/* ── HERO IMAGE ─────────────────────────────────────────── */}
      <section className="relative w-full h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img
          src={heroImg}
          loading="lazy"
          decoding="async"
          alt="Modern warehouse logistics"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.3) saturate(0.5)' }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #001C3D 0%, rgba(0,28,61,0.6) 50%, rgba(0,28,61,0.2) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 pb-14">
          <div className="section-eyebrow mb-4">
            <Truck size={11} /> Logistics & Storage
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-4xl sm:text-6xl font-display font-black text-white leading-[1.05]">
            Fortified<br />
            <span className="text-cyan-400">Supply Chains.</span>
          </h2>
          <p className="text-slate-200 text-lg mt-4 max-w-2xl leading-relaxed">
            Perimeter fortification, loading-bay monitoring, and tamper-proof rodent stations —
            protecting palletized goods in massive warehouses against cross-contamination.
          </p>
        </div>
      </section>

      {/* ── INDUSTRY THREAT PROFILE ────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="section-eyebrow mb-6">
            <AlertTriangle size={12} /> Industry Threat Profile
          </div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
            Warehouse-Scale <span className="text-cyan-400">Pest Vectors</span>
          </h3>
          <p className="text-slate-200 text-base max-w-3xl mb-4 leading-relaxed">
            Logistics environments present unique challenges: massive footprints, constant vehicle traffic,
            high racking structures, and goods from multiple supply chains converging in a single space.
            Click any threat to learn more.
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
              <p className="text-white font-black text-base mb-1">Need to identify another pest affecting your warehouse?</p>
              <p className="text-slate-300 text-sm">Browse our full technical pest directory — species profiles, risk levels, and warehouse-scale Q-Zone protocols.</p>
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
            Industrial-Grade <span className="text-cyan-400">Perimeter Defense</span>
          </h3>
          <p className="text-slate-200 text-base max-w-3xl mb-12 leading-relaxed">
            We engineer multi-layered defense systems designed for the scale and complexity
            of modern logistics operations — from 5,000 sqft facilities to 500,000+ sqft
            mega-distribution centres.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="glass-panel rounded-2xl p-7 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:bg-cyan-500/20 transition-colors">
                  {s.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{s.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
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
            Logistics <span className="text-cyan-400">Compliance Matrix</span>
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
