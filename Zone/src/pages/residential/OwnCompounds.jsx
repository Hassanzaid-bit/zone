import React from 'react';
import bgCompounds from '../../assets/background/own-compound.jpg';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, Leaf, CheckCircle2, Zap,
  Eye, Home, AlertTriangle, Bug, Star
} from 'lucide-react';
import ThreatCard from '../../components/ThreatCard';

const methodology = [
  {
    step: '01', title: 'Full Boundary Survey',
    body: 'Our certified surveyor maps every structure on the plot — main house, outbuildings, store rooms, and garden features — as a unified ecosystem, identifying every entry point and harbourage zone.',
    icon: Eye,
  },
  {
    step: '02', title: 'Perimeter Fortification',
    body: 'A complete perimeter treatment of the building envelope creates an invisible exclusion barrier. Every linear metre is treated using botanical-based synthetic formulations that intercept pests before they reach interior spaces.',
    icon: ShieldCheck,
  },
  {
    step: '03', title: 'Termite Barrier Installation',
    body: 'Advanced chemical soil barriers and physical proofing around foundations target subterranean termite colonies. We treat every structural void, floor slab edge, and timber ground contact point.',
    icon: Home,
  },
  {
    step: '04', title: 'Exterior Rodent Exclusion',
    body: 'Bait station networks, gnaw-proof pipe collars, and structural proofing of drainage entries eliminate rodent ingress and population pressure around the full perimeter.',
    icon: Leaf,
  },
];

const included = [
  'Advanced termite barrier — chemical soil treatment and physical proofing',
  'Exterior rodent exclusion — full perimeter bait network and structural proofing',
  'Full-boundary ecosystem survey covering all structures on the plot',
  'PCPB-registered, family and pet-safe formulations throughout',
  'Seasonal adjustment of programme based on monitoring data',
  'Digital service report and photographic evidence after every visit',
];

const threats = [
  {
    icon: <AlertTriangle size={20} />,
    label: 'Termite Damage',
    desc: 'Structural and garden-area termite activity affecting timber, soil zones, and perimeter areas.',
    category: 'wood-destroying-insect',
  },
  {
    icon: <Bug size={20} />,
    label: 'Ant Activity',
    desc: 'Trails around kitchens, gardens, patios, bins, and water points.',
    category: 'crawling-insect',
  },
  {
    icon: <Home size={20} />,
    label: 'Rodent Intrusion',
    desc: 'Rats and mice entering through roof spaces, drains, stores, gardens, and perimeter gaps.',
    category: 'rodent',
  },
  {
    icon: <Bug size={20} />,
    label: 'Cockroaches',
    desc: 'Activity around kitchens, bathrooms, drains, and outdoor waste areas.',
    category: 'crawling-insect',
  },
  {
    icon: <Zap size={20} />,
    label: 'Mosquitoes & Flying Insects',
    desc: 'Breeding around stagnant water, gardens, drains, and shaded outdoor areas.',
    category: 'flying-insect',
  },
];

export default function OwnCompounds() {
  return (
    <div className="text-white">

      {/* ── Page Intro ──────────────────────────────────────────── */}
      <section
        className="relative min-h-screen w-full overflow-hidden border-b border-white/10 bg-cover bg-center bg-no-repeat bg-[#001C3D]"
        style={{ backgroundImage: `url(${bgCompounds})` }}
      >
        <div className="absolute inset-0 bg-[#001C3D]/80 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.18em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-5">
              <Home size={11} /> Independent Properties
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-4xl sm:text-6xl font-display font-black text-white leading-tight mb-5">
              Comprehensive Perimeter<br />
              <span className="text-cyan-400">&amp; Interior Defense.</span>
            </h2>
            <p className="text-slate-100 text-xl leading-relaxed font-semibold mb-5">
              Independent homes face multi-layered threats from rodents, termites, and crawling insects originating from gardens and perimeters. We deploy{' '}
              <span className="text-cyan-300">multi-barrier IPM solutions</span> to protect your home's foundation and interior, focusing on environmental modifications to permanently reduce pest habitats.
            </p>
            <div className="inline-flex items-center gap-3 mt-2 px-5 py-3 rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-sm">
              <Star size={15} className="text-amber-400" />
              <span className="text-sm font-black text-white uppercase tracking-widest">Key Feature: Advanced Termite Barriers & Exterior Rodent Exclusion</span>
            </div>
          </div>

          <div className="rounded-3xl p-5 sm:p-8 bg-white/5 border border-white/15 flex flex-col gap-5">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Programme Guarantees</p>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-black text-sm mb-0.5">Advanced Termite Proofing</p>
                <p className="text-slate-300 text-xs leading-relaxed">Deep-soil barriers and foundation proofing backed by an 8-year warranty.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-black text-sm mb-0.5">Full Perimeter Exclusion</p>
                <p className="text-slate-300 text-xs leading-relaxed">Multi-barrier perimeter bait network intercepting pests before they enter.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-black text-sm mb-0.5">Ecosystem-Safe Auditing</p>
                <p className="text-slate-300 text-xs leading-relaxed">Survey of garden, outbuildings, and boundaries treated as a single ecosystem.</p>
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
            Common Pests in <span className="text-cyan-400">Own Compounds</span>
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
              Our 4-Step <span className="text-cyan-400">Compound Protocol</span>
            </h2>
            <p className="text-slate-100 text-lg max-w-xl mx-auto leading-relaxed font-semibold">
              Every structure on your plot treated as a unified ecosystem — from perimeter to interior.
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
              Protect your compound inside and out.
            </h3>
            <p className="text-slate-100 text-base leading-relaxed font-semibold mb-6">
              Book a full compound survey. Our certified technician will assess every structure on your plot and build a multi-barrier programme matched to your property's specific risk profile.
            </p>
            <Link
              to="/precision-quote"
              className="inline-flex items-center gap-2 text-white font-black px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm transition-all hover:opacity-90 shadow-blue-glow group"
              style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
            >
              Book a Compound Survey
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
