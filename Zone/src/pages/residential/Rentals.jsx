import React from 'react';
import bgRentals from '../../assets/background/rentals.jpg';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, FileText, CheckCircle2, Zap,
  Eye, AlertTriangle, Bug, Star, Repeat, Users
} from 'lucide-react';
import ThreatCard from '../../components/ThreatCard';

const methodology = [
  {
    step: '01', title: 'Pre-Tenancy Inspection Report',
    body: 'Before any new tenant moves in, we conduct a full unit inspection and issue a signed pest-status certificate — documenting the condition of the property and confirming it is pest-free at the point of handover.',
    icon: Eye,
  },
  {
    step: '02', title: 'Rapid Eradication Treatment',
    body: 'Where active infestations are discovered between tenancies, our rapid-response team deploys within 48 hours — using targeted formulations matched to the confirmed species to achieve complete eradication before the new lease begins.',
    icon: Zap,
  },
  {
    step: '03', title: 'Documented Treatment Report',
    body: 'Every treatment visit generates a detailed digital report specifying the species targeted, products used (with PCPB registration numbers), application zones, and re-entry intervals — ready for landlord compliance records.',
    icon: FileText,
  },
  {
    step: '04', title: 'End-of-Tenancy Certification',
    body: 'At tenancy end, we issue a comprehensive service record covering the full lease period — providing landlords and property managers with a clean audit trail for deposit dispute resolution and property compliance.',
    icon: ShieldCheck,
  },
];

const included = [
  'Detailed digital treatment reports for landlord compliance records',
  'Pre-tenancy pest clearance certificate — signed and dated',
  'End-of-tenancy service record for deposit dispute protection',
  '48-hour rapid-response deployment for urgent clearance between leases',
  'PCPB-registered formulations with documented registration numbers on every report',
  'Landlord and tenant separate notifications — full transparency for both parties',
];

const threats = [
  {
    icon: <Bug size={20} />,
    label: 'Cockroaches',
    desc: 'Common in kitchens, bathrooms, drains, cupboards, and shared utility spaces.',
    category: 'crawling-insect',
  },
  {
    icon: <AlertTriangle size={20} />,
    label: 'Bedbugs',
    desc: 'Common risk in high-turnover units, furnished rentals, and shared accommodation.',
    category: 'ectoparasite',
  },
  {
    icon: <Users size={20} />,
    label: 'Rodents',
    desc: 'Entry through gaps, ceilings, drains, stores, and poorly sealed service areas.',
    category: 'rodent',
  },
  {
    icon: <Bug size={20} />,
    label: 'Ants',
    desc: 'Trails around food storage, sinks, bins, and wall cracks.',
    category: 'crawling-insect',
  },
  {
    icon: <Repeat size={20} />,
    label: 'Flies',
    desc: 'Activity linked to bins, food waste, drains, and nearby communal areas.',
    category: 'flying-insect',
  },
];

export default function Rentals() {
  return (
    <div className="text-white">

      {/* ── Page Intro ──────────────────────────────────────────── */}
      <section
        className="relative min-h-screen w-full overflow-hidden border-b border-white/10 bg-cover bg-center bg-no-repeat bg-[#001C3D]"
        style={{ backgroundImage: `url(${bgRentals})` }}
      >
        <div className="absolute inset-0 bg-[#001C3D]/80 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.18em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-5">
              <FileText size={11} /> Rental Properties
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-4xl sm:text-6xl font-display font-black text-white leading-tight mb-5">
              Rapid Eradication<br />
              <span className="text-cyan-400">&amp; Turnover Protection.</span>
            </h2>
            <p className="text-slate-100 text-xl leading-relaxed font-semibold mb-5">
              High tenant turnover increases the risk of unexpected infestations. We provide landlords and property managers with fast, compliant, and{' '}
              <span className="text-cyan-300">documented pest clearance services</span> between leases — protecting your property value and ensuring a safe, hygienic environment for incoming tenants.
            </p>
            <div className="inline-flex items-center gap-3 mt-2 px-5 py-3 rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-sm">
              <Star size={15} className="text-amber-400" />
              <span className="text-sm font-black text-white uppercase tracking-widest">Key Feature: Detailed Digital Treatment Reports for Landlord Compliance</span>
            </div>
          </div>

          <div className="rounded-3xl p-5 sm:p-8 bg-white/5 border border-white/15 flex flex-col gap-5">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Programme Guarantees</p>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-black text-sm mb-0.5">Pre-Tenancy Clearance</p>
                <p className="text-slate-300 text-xs leading-relaxed">Documented inspections and clearance certificates issued for incoming tenants.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-black text-sm mb-0.5">48-Hour Turnover Response</p>
                <p className="text-slate-300 text-xs leading-relaxed">Rapid eradication treatment scheduled instantly between rental leases.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={16} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-black text-sm mb-0.5">Audit-Trail Protection</p>
                <p className="text-slate-300 text-xs leading-relaxed">Service records safeguarding landlords from tenant deposit or health disputes.</p>
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
            Common Pests in <span className="text-cyan-400">Rentals</span>
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
              Our 4-Step <span className="text-cyan-400">Rental Protocol</span>
            </h2>
            <p className="text-slate-100 text-lg max-w-xl mx-auto leading-relaxed font-semibold">
              Documented, fast, and designed to protect both landlords and tenants at every stage of the lease cycle.
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
              What Every<br /><span className="text-cyan-400">Rental Programme Includes</span>
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
              <Zap size={11} /> Fast-Track Clearance
            </div>
            <h3 className="text-2xl font-display font-black text-white leading-snug mb-4">
              Protect your property between leases.
            </h3>
            <p className="text-slate-100 text-base leading-relaxed font-semibold mb-6">
              Contact our team for a fast-track rental clearance booking. We respond within 48 hours, clear the property, and issue full documentation — so your next tenancy starts cleanly.
            </p>
            <Link
              to="/precision-quote"
              className="inline-flex items-center gap-2 text-white font-black px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm transition-all hover:opacity-90 shadow-blue-glow group"
              style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
            >
              Book Rental Clearance
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
