import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, AlertTriangle, Bug, CheckCircle2,
  Heart, Leaf, Shield, Baby, FileCheck, HandHeart, ArrowRight
} from 'lucide-react';
import heroImg from '../../assets/optimized/healthcare-education-hero.webp';
import ThreatCard from '../../components/ThreatCard';

const threats = [
  { icon: <Bug size={20} />, label: 'Cockroach Contamination', desc: 'Hospital kitchens, staff canteens, and pharmacies provide food sources — cockroaches carry E. coli, Salmonella, and hospital-acquired infection vectors.', category: 'crawling-insect' },
  { icon: <AlertTriangle size={20} />, label: 'Rodent Activity in Clinical Areas', desc: 'Rodents in ceiling voids drop faecal matter onto sterile surfaces — a catastrophic biohazard in operating theatres, pharmacies, and neonatal units.', category: 'rodent' },
  { icon: <Bug size={20} />, label: 'Bed Bug Incidents in Wards', desc: 'Hospital inpatient wards and recovery rooms provide ideal bed bug transmission environments — rapid spread across bedding and adjacent rooms.', category: 'ectoparasite' },
  { icon: <Heart size={20} />, label: 'Pharaoh Ant Vectors', desc: 'Pharaoh Ants in heated hospital environments penetrate sterile packaging and IV line sheaths — conventional spraying triggers colony budding and worsens infestations.', category: 'crawling-insect' },
  { icon: <Bug size={20} />, label: 'Flying Insect Contamination', desc: 'House flies and drain flies create mechanical pathogen transmission pathways from waste areas to sterile zones in kitchens and treatment areas.', category: 'flying-insect' },
];

const solutions = [
  { icon: <Leaf size={20} />, title: 'Botanical-Based Synthetics', desc: 'Minimum-impact pyrethrin formulations and botanical-derived actives achieving effective knockdown with the lowest possible toxicity profile.' },
  { icon: <Shield size={20} />, title: 'Physical Barriers First', desc: 'Door sweeps, vent screens, pipe seals, and window meshes — primary defence strategy eliminates chemical dependency by preventing entry entirely.' },
  { icon: <Baby size={20} />, title: 'Vulnerable Patient Protocols', desc: 'Zero-residue treatment plans for neonatal units, paediatric wards, ICUs, and oncology departments — absolute patient safety is non-negotiable.' },
  { icon: <HandHeart size={20} />, title: 'Sanitation Auditing', desc: 'Comprehensive hygiene assessments of waste management, food storage, and cleaning protocols — targeting root causes of pest attraction in clinical settings.' },
  { icon: <Heart size={20} />, title: 'Off-Hours Servicing', desc: 'All treatments scheduled during minimum-census windows — preventing patient exposure while maintaining uninterrupted care operations.' },
  { icon: <FileCheck size={20} />, title: 'Infection Control Integration', desc: 'Pest management integrated within hospital IPC programmes — aligned to WHO guidelines and Kenya\'s IPOA infection prevention standards.' },
];

const compliance = [
  { code: 'WHO Guidelines', desc: 'World Health Organization guidelines for vector control in healthcare facilities — minimum-impact chemical selection.' },
  { code: 'IPOA (Kenya)', desc: 'Infection Prevention and Control guidelines — pest management integration within hospital IPC programmes.' },
  { code: 'NEMA Compliance', desc: 'National Environment Management Authority — approved pesticide usage in sensitive clinical environments.' },
  { code: 'MOH Standards', desc: 'Ministry of Health environmental health standards — pest-free clinical environments with documented inspection histories.' },
];

export default function Healthcare() {
  return (
    <div style={{ background: '#001C3D' }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img src={heroImg} loading="lazy" decoding="async" alt="Healthcare facility pest management" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.3) saturate(0.5)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #001C3D 0%, rgba(0,28,61,0.6) 50%, rgba(0,28,61,0.2) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 pb-14">
          <div className="section-eyebrow mb-4"><Heart size={11} /> Healthcare</div>
          <h2 className="text-4xl md:text-5xl lg:text-4xl sm:text-6xl font-display font-black text-white leading-[1.05]">
            Clinical-Grade<br /><span className="text-cyan-400">Pest Protection.</span>
          </h2>
          <p className="text-slate-200 text-lg mt-4 max-w-2xl leading-relaxed">
            Minimum-impact, patient-safe pest management for hospitals, clinics, and care facilities —
            physical exclusion over chemical dependency.
          </p>
        </div>
      </section>

      {/* ── THREAT PROFILE ───────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="section-eyebrow mb-6"><AlertTriangle size={12} /> Industry Threat Profile</div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
            Pests Common in <span className="text-cyan-400">Healthcare Facilities</span>
          </h3>
          <p className="text-slate-200 text-base max-w-3xl mb-4 leading-relaxed">
            Healthcare environments demand a fundamentally different approach — patients,
            immunocompromised individuals, and clinical staff cannot be exposed to conventional
            chemical treatments. Click any threat below to view the full pest profile.
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
              <p className="text-slate-300 text-sm">Browse our full technical pest directory — species profiles, risk levels, and Q-Zone clinical protocols.</p>
            </div>
            <Link to="/library" className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 text-center text-white font-black px-6 py-3 rounded-full text-sm hover:opacity-90 transition-all shadow-blue-glow group" style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}>
              Full Pest Library <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ─────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8 relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-eyebrow mb-6"><CheckCircle2 size={12} /> The Q-Zone Solution</div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-4">Safety-First <span className="text-cyan-400">Pest Management</span></h3>
          <p className="text-slate-200 text-base max-w-3xl mb-12 leading-relaxed">Physical exclusion first, botanical-based synthetics second — conventional chemistry only when absolutely necessary, with full risk assessment documentation for every intervention.</p>
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

      {/* ── COMPLIANCE ───────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="section-eyebrow mb-6"><FileCheck size={12} /> Compliance Standards Supported</div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-12">Healthcare <span className="text-cyan-400">Standards</span></h3>
          <div className="grid md:grid-cols-2 gap-6">
            {compliance.map((c, i) => (
              <div key={i} className="glass-panel rounded-2xl p-7 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex items-start gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/40 border border-primary/50 flex items-center justify-center group-hover:bg-primary/60 transition-colors"><ShieldCheck size={22} className="text-cyan-400" /></div>
                <div><h4 className="text-white font-black text-xl mb-1">{c.code}</h4><p className="text-slate-300 text-sm leading-relaxed">{c.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
