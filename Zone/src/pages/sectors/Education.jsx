import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, AlertTriangle, Bug, CheckCircle2,
  GraduationCap, Leaf, Shield, FileCheck, ArrowRight, BookOpen
} from 'lucide-react';
import heroImg from '../../assets/optimized/healthcare-education-hero.webp';
import ThreatCard from '../../components/ThreatCard';

const threats = [
  { icon: <Bug size={20} />, label: 'Termite Structural Damage', desc: 'Termites cause progressive structural damage to wooden school furniture, library shelving, and building fabric — often discovered only after severe destruction.', category: 'wood-destroying-insect' },
  { icon: <AlertTriangle size={20} />, label: 'Ant Activity', desc: 'Ants contaminate food preparation areas, classroom snack supplies, and penetrate sealed packaging in school kitchens and tuck shops.', category: 'crawling-insect' },
  { icon: <Bug size={20} />, label: 'Rodent Intrusion', desc: 'Rodents in ceiling voids and storage areas contaminate food supplies and teaching materials. Gnawing on electrical wiring creates hidden fire hazards.', category: 'rodent' },
  { icon: <AlertTriangle size={20} />, label: 'Cockroaches in Kitchens', desc: 'School cafeterias and food preparation areas provide ideal conditions — cockroaches carry Salmonella and enteric pathogens, directly affecting student health.', category: 'crawling-insect' },
  { icon: <Bug size={20} />, label: 'Bed Bug Infestations in Dormitories', desc: 'Boarding school dormitories provide ideal bed bug transmission environments — rapid spread affects student welfare, school reputation, and parental trust.', category: 'ectoparasite' },
];

const solutions = [
  { icon: <Leaf size={20} />, title: 'Child-Safe Formulations', desc: 'Treatment protocols designed specifically for children\'s environments — minimum-impact, low-toxicity products with no student contact risk.' },
  { icon: <Shield size={20} />, title: 'Physical Barriers First', desc: 'Door sweeps, vent screens, and structural proofing — reducing chemical dependency by preventing pest entry at the source.' },
  { icon: <GraduationCap size={20} />, title: 'Holiday & Weekend Servicing', desc: 'All treatments scheduled during school holidays, weekends, and non-occupancy periods — ensuring student and staff safety at all times.' },
  { icon: <BookOpen size={20} />, title: 'Staff Awareness Training', desc: 'Customized pest awareness training for kitchen staff, teachers, and facility managers — early identification reduces treatment costs significantly.' },
  { icon: <FileCheck size={20} />, title: 'Documented Records', desc: 'Complete service documentation for school management, parents, and inspection bodies — maintaining full transparency and accountability.' },
  { icon: <CheckCircle2 size={20} />, title: 'Termite Structural Protection', desc: 'Barrier programmes protecting school buildings, libraries, and furniture from subterranean and dry-wood termite species common in Kenya.' },
];

const compliance = [
  { code: 'MoE Standards', desc: 'Ministry of Education school safety standards — pest-free learning environments with documented inspection histories.' },
  { code: 'NEMA Compliance', desc: 'National Environment Management Authority — approved pesticide usage and environmental impact assessment in school environments.' },
  { code: 'Public Health Act', desc: 'Kenya Public Health Act requirements for public buildings — pest control certification and hygiene compliance documentation.' },
  { code: 'School Inspection Standards', desc: 'TSC and Ministry of Education inspection requirements — pest control records readily available for school audits and inspections.' },
];

export default function Education() {
  return (
    <div style={{ background: '#001C3D' }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img src={heroImg} loading="lazy" decoding="async" alt="Education facility pest management" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.3) saturate(0.5)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #001C3D 0%, rgba(0,28,61,0.6) 50%, rgba(0,28,61,0.2) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 pb-14">
          <div className="section-eyebrow mb-4"><GraduationCap size={11} /> Education</div>
          <h2 className="text-4xl md:text-5xl lg:text-4xl sm:text-6xl font-display font-black text-white leading-[1.05]">
            Safe Learning<br /><span className="text-cyan-400">Environments.</span>
          </h2>
          <p className="text-slate-200 text-lg mt-4 max-w-2xl leading-relaxed">
            Child-safe pest management for schools, colleges, and boarding institutions —
            protecting students, staff, and school reputation.
          </p>
        </div>
      </section>

      {/* ── THREAT PROFILE ───────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="section-eyebrow mb-6"><AlertTriangle size={12} /> Threat Profile</div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
            Pests Common in <span className="text-cyan-400">Education Settings</span>
          </h3>
          <p className="text-slate-200 text-base max-w-3xl mb-4 leading-relaxed">
            Schools, boarding facilities, and universities present unique pest challenges — high
            occupancy, food service areas, and dormitories create conditions requiring careful,
            child-safe management. Click any threat to learn more.
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
              <p className="text-white font-black text-base mb-1">Need to identify another pest affecting your school?</p>
              <p className="text-slate-300 text-sm">Browse our full technical pest directory — species profiles, risk levels, and Q-Zone control protocols.</p>
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
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-4">Child-Safe <span className="text-cyan-400">Pest Management</span></h3>
          <p className="text-slate-200 text-base max-w-3xl mb-12 leading-relaxed">Our education protocols prioritize structural exclusion and child-safe products — every intervention is scheduled to avoid student contact and protect your institution's reputation.</p>
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
          <div className="section-eyebrow mb-6"><FileCheck size={12} /> Compliance Standards</div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-12">Education <span className="text-cyan-400">Standards</span></h3>
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
