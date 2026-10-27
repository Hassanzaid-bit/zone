import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, AlertTriangle, Bug, CheckCircle2,
  BedDouble, Star, EyeOff, Zap, Clock, Shield, FileCheck, ArrowRight
} from 'lucide-react';
import heroImg from '../../assets/optimized/hospitality-hero.webp';
import ThreatCard from '../../components/ThreatCard';

const threats = [
  { icon: <BedDouble size={20} />, label: 'Bed Bug Infestations', desc: 'Rapid room-to-room spread through guest luggage and laundry — one TripAdvisor review can destroy years of brand equity.', category: 'ectoparasite' },
  { icon: <Bug size={20} />, label: 'Cockroach Harbourage', desc: 'Kitchens, back-of-house corridors, and service areas provide ideal harbourage for German cockroaches in particular.', category: 'crawling-insect' },
  { icon: <AlertTriangle size={20} />, label: 'Rodent Presence', desc: 'Guest-visible rodent sightings are a reputational catastrophe — social media amplification is immediate and irreversible.', category: 'rodent' },
  { icon: <Bug size={20} />, label: 'Stored Product Moths & Ants', desc: 'Pantry and linen storage areas attract Indian Meal Moths and textile pests; ant activity contaminates food service areas.', category: 'stored-product-insect' },
  { icon: <AlertTriangle size={20} />, label: 'Fly Activity in F&B Areas', desc: 'House flies and fruit flies in restaurants, bars, and buffet areas constitute an immediate food safety violation and guest experience hazard.', category: 'flying-insect' },
];

const solutions = [
  { icon: <EyeOff size={20} />, title: 'Discrete Interventions', desc: 'Our technicians operate in plain attire with unmarked equipment. No branded vehicles at your entrance. Zero visual impact on your guest experience.' },
  { icon: <Zap size={20} />, title: 'Zero-Odour Treatments', desc: 'Advanced gel baiting, heat remediation, and targeted cryonite applications — no sprays, no lingering chemical smells, no room downtime.' },
  { icon: <Clock size={20} />, title: 'Rapid Response Protocol', desc: 'Critical sightings in guest-facing areas trigger our <2-hour emergency response. We resolve the issue before the next check-in cycle.' },
  { icon: <Star size={20} />, title: 'Proactive Monitoring', desc: 'Bed bug interceptor traps, rodent activity sensors, and pheromone-based early detection — we catch threats before your guests do.' },
  { icon: <Shield size={20} />, title: 'Brand Reputation Shield', desc: 'Confidential reporting, NDA-protected service records, and discrete pest management that never appears on any guest-facing documentation.' },
  { icon: <BedDouble size={20} />, title: 'Room Clearance Certification', desc: 'Post-treatment rooms receive a certified clearance report before being returned to the booking system — zero risk of guest exposure.' },
];

const compliance = [
  { code: 'HACCP Food Safety', desc: 'Full kitchen and F&B pest management integration with your HACCP hazard analysis documentation.' },
  { code: 'Local Health Authority', desc: 'Compliance with county and municipal health inspection requirements — proactive documentation for unannounced audits.' },
  { code: 'Brand Standards', desc: 'Support for Marriott, Hilton, Accor, and independent luxury brand pest management quality standards and SLA requirements.' },
  { code: 'Tourism Regulatory', desc: 'Alignment with Tourism Regulatory Authority requirements for pest-free guest accommodation environments.' },
];

export default function Hospitality() {
  return (
    <div style={{ background: '#001C3D' }}>

      {/* ── HERO IMAGE ─────────────────────────────────────────── */}
      <section className="relative w-full h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <img
          src={heroImg}
          loading="lazy"
          decoding="async"
          alt="Luxury hotel lobby"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.3) saturate(0.5)' }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #001C3D 0%, rgba(0,28,61,0.6) 50%, rgba(0,28,61,0.2) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 pb-14">
          <div className="section-eyebrow mb-4">
            <Star size={11} /> Hospitality
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-4xl sm:text-6xl font-display font-black text-white leading-[1.05]">
            Protecting<br />
            <span className="text-cyan-400">Five-Star Reputations.</span>
          </h2>
          <p className="text-slate-200 text-lg mt-4 max-w-2xl leading-relaxed">
            Discrete, rapid-response pest interventions engineered to protect your brand —
            zero-odour treatments, proactive monitoring, and absolute confidentiality.
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
            Critical Threats to <span className="text-cyan-400">Guest Experience</span>
          </h3>
          <p className="text-slate-200 text-base max-w-3xl mb-4 leading-relaxed">
            In hospitality, perception is everything. A single pest sighting doesn't just risk a health
            code violation — it triggers a cascade of negative reviews, social media exposure, and
            irrecoverable brand damage. Click any threat to learn more.
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
              <p className="text-white font-black text-base mb-1">Need to identify another pest affecting your property?</p>
              <p className="text-slate-300 text-sm">Browse our full technical pest directory — species profiles, risk levels, and discrete Q-Zone protocols.</p>
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
            Invisible Protection, <span className="text-cyan-400">Visible Results</span>
          </h3>
          <p className="text-slate-200 text-base max-w-3xl mb-12 leading-relaxed">
            We operate as an invisible security layer — your guests never see us, never smell our
            treatments, and never know we were there. But the protection is absolute.
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
            Standards We <span className="text-cyan-400">Uphold</span>
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
