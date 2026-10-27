import React from 'react';
import bgEstates from '../../assets/background/gatet-communities.jpg';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, QrCode, CheckCircle2, Zap,
  Eye, Users, AlertTriangle, Bug, Star, Building2
} from 'lucide-react';
import ThreatCard from '../../components/ThreatCard';

const methodology = [
  {
    step: '01', title: 'Estate-Wide Risk Assessment',
    body: 'We work with estate management to survey all common areas — drains, bin compounds, landscaping, and perimeter fencing — building a unified risk register covering every shared space.',
    icon: Building2,
  },
  {
    step: '02', title: 'Common Area Defence Programme',
    body: 'Systematic treatment of communal corridors, car parks, waste areas, swimming pool surrounds, and shared utilities with species-specific formulations and physical exclusion.',
    icon: ShieldCheck,
  },
  {
    step: '03', title: 'Individual Home Treatments',
    body: 'Each residential unit receives tailored treatment aligned with the estate-wide programme — ensuring that no individual infestation becomes a community-wide problem.',
    icon: Eye,
  },
  {
    step: '04', title: 'Insectram Digital Reporting',
    body: 'All monitoring points are QR-verified through the Insectram platform. Estate management receives centralised monthly compliance summaries with full trap-level visibility.',
    icon: QrCode,
  },
];

const included = [
  'Unified reporting to estate management on a monthly cadence',
  '24/7 rapid emergency response for urgent pest sightings in common areas',
  'Insectram digital platform — zero-falsification QR verification on all monitors',
  'Estate-wide risk register maintained and updated continuously',
  'PCPB-registered formulations safe for children, pets, and landscaping',
  'Individual unit documentation available per household on request',
];

const threats = [
  {
    icon: <AlertTriangle size={20} />,
    label: 'Termites',
    desc: 'Estate-wide termite pressure affecting gardens, timber structures, fences, and shared facilities.',
    category: 'wood-destroying-insect',
  },
  {
    icon: <Users size={20} />,
    label: 'Rodents',
    desc: 'Activity around refuse areas, drains, parking zones, perimeter walls, and landscaped areas.',
    category: 'rodent',
  },
  {
    icon: <Bug size={20} />,
    label: 'Ants',
    desc: 'Recurring trails around kitchens, patios, gardens, and shared outdoor spaces.',
    category: 'crawling-insect',
  },
  {
    icon: <Bug size={20} />,
    label: 'Cockroaches',
    desc: 'Activity linked to drains, bins, kitchens, and shared service areas.',
    category: 'crawling-insect',
  },
  {
    icon: <Zap size={20} />,
    label: 'Flying Insects',
    desc: 'Flies and mosquitoes around waste areas, water points, gardens, and outdoor lighting.',
    category: 'flying-insect',
  },
];

export default function GatedEstates() {
  return (
    <div className="text-white">

      {/* ── Page Intro ──────────────────────────────────────────── */}
      <section
        className="relative min-h-screen w-full overflow-hidden border-b border-white/10 bg-cover bg-center bg-no-repeat bg-[#001C3D]"
        style={{ backgroundImage: `url(${bgEstates})` }}
      >
        <div className="absolute inset-0 bg-[#001C3D]/80 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.18em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-5">
              <Building2 size={11} /> Master-Planned Communities
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-4xl sm:text-6xl font-display font-black text-white leading-tight mb-5">
              Scalable Pest Management for<br />
              <span className="text-cyan-400">Master-Planned Communities.</span>
            </h2>
            <p className="text-slate-100 text-xl leading-relaxed font-semibold mb-5">
              Large estates require uniform, community-wide protocols to prevent localised infestations from migrating. Q-Zone partners with estate management to deliver{' '}
              <span className="text-cyan-300">systematic common-area defence</span> and individual home treatments powered by our Insectram Digital Platform.
            </p>
            <div className="inline-flex items-center gap-3 mt-2 px-5 py-3 rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-sm">
              <Star size={15} className="text-amber-400" />
              <span className="text-sm font-black text-white uppercase tracking-widest">Key Feature: Unified Reporting & 24/7 Emergency Response</span>
            </div>
          </div>

          <div className="rounded-3xl p-5 sm:p-8 bg-white/5 border border-white/15 flex flex-col gap-5">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Programme Guarantees</p>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-black text-sm mb-0.5">Unified Dashboard Reporting</p>
                <p className="text-slate-300 text-xs leading-relaxed">Real-time status reports for both estate managers and individual homeowners.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-black text-sm mb-0.5">24/7 Priority Emergency Response</p>
                <p className="text-slate-300 text-xs leading-relaxed">Fast-track response SLA for critical common-area pest infestations.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-black text-sm mb-0.5">Public Health & NEMA Compliant</p>
                <p className="text-slate-300 text-xs leading-relaxed">All treatments fully certified, utilizing botanical-synthetic formulations.</p>
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
            Common Pests in <span className="text-cyan-400">Gated Estates</span>
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
              Our 4-Step <span className="text-cyan-400">Estate Protocol</span>
            </h2>
            <p className="text-slate-100 text-lg max-w-xl mx-auto leading-relaxed font-semibold">
              A community-wide programme built for estate management accountability and resident confidence.
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
              What Every<br /><span className="text-cyan-400">Estate Programme Includes</span>
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
              <Zap size={11} /> Estate Partnership
            </div>
            <h3 className="text-2xl font-display font-black text-white leading-snug mb-4">
              Partner with Q-Zone for your estate.
            </h3>
            <p className="text-slate-100 text-base leading-relaxed font-semibold mb-6">
              Contact our estate partnerships team. We'll conduct a full estate survey, produce a scalable programme proposal, and have your community enrolled within days.
            </p>
            <Link
              to="/precision-quote"
              className="inline-flex items-center gap-2 text-white font-black px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm transition-all hover:opacity-90 shadow-blue-glow group"
              style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
            >
              Request an Estate Proposal
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
