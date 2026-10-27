import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, AlertTriangle, Bug, CheckCircle2,
  Building2, Moon, Wifi, Cable, Server, FileCheck, Clock, ArrowRight
} from 'lucide-react';
import heroImg from '../../assets/optimized/corporate-hero.webp';
import ThreatCard from '../../components/ThreatCard';

const threats = [
  { icon: <Bug size={20} />, label: 'Rodent Damage to IT Infrastructure', desc: 'Rodents gnaw through network cables, fibre optics, and power lines in sub-floor cavities and server rooms — causing unplanned downtime and data loss.', category: 'rodent' },
  { icon: <AlertTriangle size={20} />, label: 'HVAC System Pest Contamination', desc: 'Pests nesting in air handling units and ductwork distribute allergens, droppings, and pathogens through the entire building ventilation system.', category: 'crawling-insect' },
  { icon: <Bug size={20} />, label: 'Cockroach Harbourage in Break Rooms', desc: 'Staff kitchenettes, vending areas, and waste compactor rooms become cockroach hotspots — spreading to adjacent office spaces via shared wall voids.', category: 'crawling-insect' },
  { icon: <Building2 size={20} />, label: 'Bird Roosting on Facades', desc: 'Pigeon and starling colonies on building ledges, solar panels, and HVAC units create slip hazards, facade damage, and Histoplasma transmission risk.', category: 'avian-pest' },
  { icon: <Bug size={20} />, label: 'Ant & Termite Activity', desc: 'Carpenter ants and subterranean termites exploit cracked foundations and landscaping to access building fabric and internal voids.', category: 'crawling-insect' },
];

const solutions = [
  { icon: <Moon size={20} />, title: 'After-Hours Servicing', desc: 'All treatments scheduled outside business hours — typically 7PM to 6AM. Your employees arrive to a pest-free workspace with zero disruption to productivity.' },
  { icon: <Wifi size={20} />, title: 'HVAC Vent Proofing', desc: 'Surgical sealing of every vent register, return air grille, and duct penetration with pest-proof mesh — eliminating the #1 internal pest highway in commercial buildings.' },
  { icon: <Cable size={20} />, title: 'Sub-Floor Cable Protection', desc: 'Rodent-deterrent conduit wrapping, gnaw-proof cable sleeves, and targeted snap-trap deployment in raised floor voids — protecting your data infrastructure.' },
  { icon: <Server size={20} />, title: 'Server Room Exclusion', desc: 'Hermetic sealing of server room entry points, cable penetrations, and cooling pipe transitions — with electronic monitoring for real-time intrusion alerts.' },
  { icon: <Clock size={20} />, title: 'Zero Downtime Guarantee', desc: 'Our service contracts include SLA-backed guarantees that pest management activities will never cause IT system interruption or workspace disruption.' },
  { icon: <Building2 size={20} />, title: 'Bird Management Systems', desc: 'Architectural bird deterrent installation: tensioned wire systems, anti-perch spikes, and optical gel deterrents — maintaining building aesthetics.' },
];

const compliance = [
  { code: 'OSHA Standards', desc: 'Occupational Safety and Health — workplace hygiene requirements including pest-free working environments and proper sanitation.' },
  { code: 'Green Building Standards', desc: 'LEED and Green Star certification support — integrated pest management as part of sustainable building operations credits.' },
  { code: 'ISO 14001', desc: 'Environmental Management Systems — pest management integration within your environmental management framework.' },
  { code: 'Corporate HSE', desc: 'Health, Safety & Environment — meeting multinational corporate HSE requirements for office environments and commercial real estate portfolios.' },
];

export default function Corporate() {
  return (
    <div style={{ background: '#001C3D' }}>

      {/* ── HERO IMAGE ─────────────────────────────────────────── */}
      <section className="relative w-full h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img
          src={heroImg}
          loading="lazy"
          decoding="async"
          alt="Corporate office building"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.3) saturate(0.5)' }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #001C3D 0%, rgba(0,28,61,0.6) 50%, rgba(0,28,61,0.2) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 pb-14">
          <div className="section-eyebrow mb-4">
            <Building2 size={11} /> Corporate Real Estate
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-4xl sm:text-6xl font-display font-black text-white leading-[1.05]">
            Zero Downtime<br />
            <span className="text-cyan-400">IT Protection.</span>
          </h2>
          <p className="text-slate-200 text-lg mt-4 max-w-2xl leading-relaxed">
            After-hours servicing, HVAC vent proofing, and sub-floor cable protection —
            ensuring zero downtime for your IT infrastructure and zero disruption to your workforce.
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
            Corporate <span className="text-cyan-400">Vulnerability Assessment</span>
          </h3>
          <p className="text-slate-200 text-base max-w-3xl mb-4 leading-relaxed">
            Modern commercial buildings are complex ecosystems of HVAC systems, raised floors,
            suspended ceilings, and extensive cable networks — all providing concealed pest highways
            that traditional pest control overlooks entirely. Click any threat to learn more.
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
              <p className="text-white font-black text-base mb-1">Need to identify another pest affecting your building?</p>
              <p className="text-slate-300 text-sm">Browse our full technical pest directory — species profiles, risk levels, and Q-Zone office protocols.</p>
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
            Silent Operations, <span className="text-cyan-400">Total Protection</span>
          </h3>
          <p className="text-slate-200 text-base max-w-3xl mb-12 leading-relaxed">
            We operate exclusively outside your business hours, targeting the concealed infrastructure
            layers where pests actually live — sub-floor voids, ceiling plenums, HVAC shafts, and
            cable risers — so your workspace is protected without your team ever being aware.
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
            Corporate <span className="text-cyan-400">Compliance</span>
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
