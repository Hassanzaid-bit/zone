import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Bug, ArrowRight, ArrowLeft,
  Home, Building2, ShieldCheck, CheckCircle2, Zap,
  PhoneCall, Mail, User, ChevronRight, Rat,
  ShieldAlert, Hammer, HelpCircle, Loader2
} from 'lucide-react';
import { sendFormEmail } from '../utils/emailService';
import FormHoneypot from '../components/FormHoneypot';
import { hasHoneypotValue } from '../utils/formSecurity';

/* ═══════════════════════════════════════════════════════════════
   DATA — Pest options with multipliers
═══════════════════════════════════════════════════════════════ */
const pestOptions = [
  {
    id: 'general-household',
    name: 'General Household Insects',
    description: 'Cockroaches, Ants, Flies, Spiders, Silverfish',
    badge: 'Standard Protocol',
    multiplier: 1.0,
    icon: Bug,
  },
  {
    id: 'rodents-wildlife',
    name: 'Rodents & Wildlife',
    description: 'Rats, Mice, Bats, Feral Pigeons',
    badge: 'Enhanced Protocol',
    multiplier: 1.5,
    icon: Rat,
  },
  {
    id: 'biting-parasitic',
    name: 'Biting & Parasitic',
    description: 'Bed Bugs, Fleas, Ticks, Mosquitoes',
    badge: 'Intensive Protocol',
    multiplier: 2.0,
    icon: ShieldAlert,
  },
  {
    id: 'wood-destroying',
    name: 'Wood-Destroying',
    description: 'Termites, Powder Post Beetles',
    badge: 'Structural Protocol',
    multiplier: 3.5,
    icon: Hammer,
  },
  {
    id: 'unidentified',
    name: 'Unidentified Threat',
    description: 'I need a professional diagnostic audit.',
    badge: 'Diagnostic Protocol',
    multiplier: 1.5,
    icon: HelpCircle,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA — Zone options with multipliers
═══════════════════════════════════════════════════════════════ */
const zoneOptions = [
  {
    id: 'small',
    label: 'Apartment / Small',
    size: 'Under 1,000 sq ft',
    description: 'Studio, 1–2 bedroom apartments, bedsitters, and compact maisonettes.',
    multiplier: 1.0,
    icon: Home,
  },
  {
    id: 'medium',
    label: 'Medium Home',
    size: '1,000 – 2,500 sq ft',
    description: '3–4 bedroom family homes, townhouses, and semi-detached properties.',
    multiplier: 1.8,
    icon: Home,
  },
  {
    id: 'large',
    label: 'Large Estate',
    size: '2,500+ sq ft',
    description: 'Large detached homes, multi-storey residences, estates, and compounds.',
    multiplier: 3.0,
    icon: Building2,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PRICING ENGINE
═══════════════════════════════════════════════════════════════ */
const BASE_KES = 5000;
function calcStartingPrice(pestMultiplier, zoneMultiplier) {
  const baseline = BASE_KES * pestMultiplier * zoneMultiplier;
  return Math.ceil(baseline / 500) * 500;
}

function formatKES(n) {
  return n.toLocaleString('en-KE');
}

/* ═══════════════════════════════════════════════════════════════
   STEP PROGRESS BAR
═══════════════════════════════════════════════════════════════ */
function StepBar({ current, total }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      {Array.from({ length: total }).map((_, i) => (
        <React.Fragment key={i}>
          <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i < current ? 'bg-cyan-400' : i === current ? 'bg-cyan-400/50' : 'bg-white/10'}`} />
        </React.Fragment>
      ))}
      <span className="text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
        Step {current + 1} of {total}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FADE TRANSITION WRAPPER
═══════════════════════════════════════════════════════════════ */
function FadeIn({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 20);
    return () => clearTimeout(t);
  }, []);
  return <div ref={ref}>{children}</div>;
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function PrecisionQuote() {
  // Phases: 'service' → 'pests' → 'zone' → 'results' → 'submitted'
  const [phase, setPhase] = useState('service');
  const [, setSelectedService] = useState(null);
  const [selectedPest, setSelectedPest] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [startingPrice, setStartingPrice] = useState(null);

  // Form state
  const [form, setForm] = useState({ name: '', phone: '', email: '', notes: '' });
  const [formError, setFormError] = useState('');
  const [sending, setSending] = useState(false);

  // Compute the residential starting price when pest & zone are both selected
  useEffect(() => {
    if (selectedPest && selectedZone) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStartingPrice(calcStartingPrice(selectedPest.multiplier, selectedZone.multiplier));
    }
  }, [selectedPest, selectedZone]);

  const goBack = () => {
    if (phase === 'pests')   setPhase('service');
    if (phase === 'zone')    setPhase('pests');
    if (phase === 'results') setPhase('zone');
  };

  const handleFormChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (hasHoneypotValue(new FormData(e.currentTarget))) {
      setPhase('submitted');
      return;
    }
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      setFormError('Please complete all required fields.');
      return;
    }
    setFormError('');
    setSending(true);
    try {
      // EMAIL DELIVERY SETUP: this call uses src/utils/emailService.js.
      // Configure VITE_EMAILJS_* values and the EmailJS template described in README.md.
      await sendFormEmail(
        'Precision Quote — Final Audit Request',
        [
          { label: 'Full Name',                 value: form.name },
          { label: 'Phone Number',              value: form.phone },
          { label: 'Email Address',             value: form.email },
          { label: 'Pest / Threat Category',    value: selectedPest?.name },
          { label: 'Pest Protocol',             value: selectedPest?.badge },
          { label: 'Property Zone',             value: selectedZone?.label },
          { label: 'Property Size',             value: selectedZone?.size },
          { label: 'Starting Price Estimate',    value: startingPrice ? `Starting at KES ${formatKES(startingPrice)}` : 'N/A' },
          { label: 'Complexity Factor',         value: startingPrice ? `×${(selectedPest.multiplier * selectedZone.multiplier).toFixed(1)}` : 'N/A' },
          { label: 'Additional Notes',          value: form.notes },
        ],
        form.email
      );
      setPhase('submitted');
    } catch (err) {
      setFormError('Failed to send your request. Please try again or call us directly.');
      console.error('EmailJS error:', err);
    } finally {
      setSending(false);
    }
  };


  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #001020 0%, #001C3D 45%, #002540 100%)' }}
    >
      {/* ── Decorative bg ─────────────────────────────────────── */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00456E 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0097C4 0%, transparent 65%)' }} />
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-20">

        {/* ══ PAGE HERO ══════════════════════════════════════════ */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-6">
            <Zap size={11} /> Price Estimation
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white mb-5 leading-tight tracking-tight">
            Precision<br />
            <span className="text-cyan-400">Quote Engine</span>
          </h1>
          <p className="text-slate-200 text-xl font-semibold max-w-xl mx-auto leading-relaxed">
            Answer three questions. Receive a calibrated starting-price estimate in seconds — no call required.
          </p>
        </div>

        {/* ══ FLOW CARD ══════════════════════════════════════════ */}
        <div
          className="rounded-3xl border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
          style={{ background: 'rgba(0,28,61,0.80)', backdropFilter: 'blur(24px)' }}
        >

          {/* ── Back button row ─────────────────────────────────── */}
          {['pests', 'zone', 'results'].includes(phase) && (
            <div className="px-10 pt-8">
              <button
                onClick={goBack}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs font-black uppercase tracking-widest group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Back
              </button>
            </div>
          )}

          <div className="px-4 sm:px-6 md:px-8 md:px-12 pt-8 pb-12">

            {/* ════════════════════════════════════════════════
                PHASE: SERVICE SELECTION
            ════════════════════════════════════════════════ */}
            {phase === 'service' && (
              <FadeIn key="service">
                <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-2">
                  What are we protecting?
                </h2>
                <p className="text-slate-200 text-base font-semibold mb-10 leading-relaxed">
                  Select your environment type to begin the diagnostic sequence.
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Commercial — renders first (left) */}
                  <Link
                    to="/commercial-quote"
                    className="group relative rounded-2xl p-5 sm:p-8 text-left border border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/8 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-white/5 border border-white/15 group-hover:bg-white/10 transition-colors">
                      <Building2 size={24} className="text-slate-300" />
                    </div>
                    <h3 className="text-2xl font-display font-black text-white mb-2">Commercial</h3>
                    <p className="text-slate-200 text-sm font-semibold leading-relaxed mb-4">
                      Industrial fumigation, floor & drain eradication, ISO 22000 / BRCGS compliance programmes.
                    </p>
                    <div className="flex items-center gap-2 text-slate-300 text-xs font-black uppercase tracking-widest">
                      Contact Our Team <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>

                  {/* Residential — renders second (right) */}
                  <button
                    onClick={() => { setSelectedService('residential'); setPhase('pests'); }}
                    className="group relative rounded-2xl p-5 sm:p-8 text-left border border-white/10 bg-white/5 hover:border-cyan-400/50 hover:bg-white/8 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,212,255,0.12)] transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-cyan-500/15 border border-cyan-500/30 group-hover:bg-cyan-500/25 transition-colors">
                      <Home size={24} className="text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-display font-black text-white mb-2">Residential</h3>
                    <p className="text-slate-200 text-sm font-semibold leading-relaxed mb-4">
                      Home pest defense, termite barriers, phosphine fumigation, and rodent exclusion.
                    </p>
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-black uppercase tracking-widest">
                      Begin Estimate <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
              </FadeIn>
            )}

            {/* ════════════════════════════════════════════════
                PHASE: STEP 1 — PEST TYPE
            ════════════════════════════════════════════════ */}
            {phase === 'pests' && (
              <FadeIn key="pests">
                <StepBar current={0} total={3} />
                <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-2">
                  What threat are we assessing?
                </h2>
                <p className="text-slate-200 text-base font-semibold mb-4 leading-relaxed">
                  Select the threat category that best describes the issue on your property.
                </p>

                {/* ── Identify Helper Banner ─────────────────── */}
                <Link
                  to="/library"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold mb-8 transition-colors group"
                >
                  Not sure what you are dealing with?
                  <span className="underline underline-offset-2 decoration-cyan-500/40 group-hover:decoration-cyan-300/60 transition-colors">
                    Identify your pest in our Biological Library →
                  </span>
                </Link>

                {/* ── Threat Category Grid ───────────────────── */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {pestOptions.map(pest => {
                    const Icon = pest.icon;
                    const isSelected = selectedPest?.id === pest.id;
                    return (
                      <button
                        key={pest.id}
                        onClick={() => setSelectedPest(pest)}
                        className={`group relative rounded-2xl p-6 text-left border transition-all duration-300
                          hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(0,212,255,0.12)]
                          ${isSelected
                            ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_28px_rgba(0,212,255,0.18)]'
                            : 'border-white/10 bg-white/5 hover:border-cyan-400/50 hover:bg-white/8'
                          }`}
                      >
                        {/* Selected check */}
                        {isSelected && (
                          <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center">
                            <CheckCircle2 size={14} className="text-[#001C3D]" />
                          </div>
                        )}

                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border transition-colors
                            ${isSelected ? 'bg-cyan-500/25 border-cyan-400/60' : 'bg-white/5 border-white/15 group-hover:bg-cyan-500/15 group-hover:border-cyan-500/30'}`}>
                            <Icon size={20} className={isSelected ? 'text-cyan-300' : 'text-slate-300 group-hover:text-cyan-400'} />
                          </div>
                          <div>
                            <div className={`inline-block text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-2 border
                              ${isSelected ? 'text-cyan-300 border-cyan-500/50 bg-cyan-500/15' : 'text-slate-400 border-white/10 bg-white/5'}`}>
                              {pest.badge}
                            </div>
                            <h3 className={`text-lg font-display font-black mb-1 text-white`}>
                              {pest.name}
                            </h3>
                            <p className="text-slate-300 text-xs leading-relaxed font-semibold">{pest.description}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  disabled={!selectedPest}
                  onClick={() => setPhase('zone')}
                  className={`w-full py-4 rounded-full font-black text-base transition-all duration-300 flex items-center justify-center gap-2
                    ${selectedPest
                      ? 'text-white shadow-blue-glow hover:opacity-90'
                      : 'text-slate-500 bg-white/5 border border-white/10 cursor-not-allowed'
                    }`}
                  style={selectedPest ? { background: 'linear-gradient(135deg, #00456E, #0097C4)' } : {}}
                >
                  {selectedPest ? 'Continue to Zone Size' : 'Select a Threat Category to Continue'}
                  {selectedPest && <ArrowRight size={16} />}
                </button>
              </FadeIn>
            )}

            {/* ════════════════════════════════════════════════
                PHASE: STEP 2 — ZONE SIZE
            ════════════════════════════════════════════════ */}
            {phase === 'zone' && (
              <FadeIn key="zone">
                <StepBar current={1} total={3} />
                <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-2">
                  What is the size of your property?
                </h2>
                <p className="text-slate-200 text-base font-semibold mb-10 leading-relaxed">
                  Treatment scope and material volumes scale directly with the property footprint.
                </p>

                {/* Selected pest summary */}
                <div className="flex items-center gap-3 mb-8 p-4 rounded-xl bg-cyan-500/8 border border-cyan-500/20">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                  <p className="text-slate-200 text-sm font-semibold">
                    Pest vector: <span className="text-white font-black">{selectedPest?.name}</span>
                    <span className="text-slate-400 ml-2">({selectedPest?.badge})</span>
                  </p>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                  {zoneOptions.map(zone => {
                    const Icon = zone.icon;
                    const isSelected = selectedZone?.id === zone.id;
                    return (
                      <button
                        key={zone.id}
                        onClick={() => setSelectedZone(zone)}
                        className={`group flex items-center gap-5 p-6 rounded-2xl text-left border transition-all duration-300
                          ${isSelected
                            ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_28px_rgba(0,212,255,0.15)]'
                            : 'border-white/10 bg-white/5 hover:border-cyan-400/50 hover:bg-white/8'
                          }`}
                      >
                        <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border transition-colors
                          ${isSelected ? 'bg-cyan-500/25 border-cyan-400/60' : 'bg-white/5 border-white/15 group-hover:bg-cyan-500/15 group-hover:border-cyan-500/30'}`}>
                          <Icon size={22} className={isSelected ? 'text-cyan-300' : 'text-slate-400 group-hover:text-cyan-400'} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-xl font-display font-black text-white">{zone.label}</h3>
                            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{zone.size}</span>
                          </div>
                          <p className="text-slate-300 text-sm font-semibold leading-relaxed">{zone.description}</p>
                        </div>
                        {isSelected && (
                          <CheckCircle2 size={22} className="text-cyan-400 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <button
                  disabled={!selectedZone}
                  onClick={() => setPhase('results')}
                  className={`w-full py-4 rounded-full font-black text-base transition-all duration-300 flex items-center justify-center gap-2
                    ${selectedZone
                      ? 'text-white shadow-blue-glow hover:opacity-90'
                      : 'text-slate-500 bg-white/5 border border-white/10 cursor-not-allowed'
                    }`}
                  style={selectedZone ? { background: 'linear-gradient(135deg, #00456E, #0097C4)' } : {}}
                >
                  {selectedZone ? 'Calculate My Estimate' : 'Select a Zone to Continue'}
                  {selectedZone && <ArrowRight size={16} />}
                </button>
              </FadeIn>
            )}

            {/* ════════════════════════════════════════════════
                PHASE: STEP 3 — RESULTS + CAPTURE FORM
            ════════════════════════════════════════════════ */}
            {phase === 'results' && startingPrice && (
              <FadeIn key="results">
                <StepBar current={2} total={3} />

                {/* Summary pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full text-cyan-300 border border-cyan-500/30 bg-cyan-500/10">
                    <CheckCircle2 size={10} /> {selectedPest?.name}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full text-cyan-300 border border-cyan-500/30 bg-cyan-500/10">
                    <CheckCircle2 size={10} /> {selectedZone?.label} · {selectedZone?.size}
                  </span>
                </div>

                {/* ── Price Panel ──────────────────────────── */}
                <div className="rounded-2xl p-5 sm:p-8 mb-8 relative overflow-hidden border border-cyan-400/30"
                  style={{ background: 'linear-gradient(135deg, rgba(0,69,110,0.4), rgba(0,36,58,0.6))' }}>
                  {/* Ambient glow */}
                  <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #0097C4, transparent)' }} />

                  <p className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-3">
                    Estimated Starting Price
                  </p>
                  <div className="mb-2">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-300 mb-2">Starting at</p>
                    <p className="text-4xl sm:text-5xl md:text-4xl sm:text-6xl font-display font-black text-cyan-400 tracking-tight leading-none">
                      KES {formatKES(startingPrice)}
                    </p>
                  </div>
                  <p className="text-slate-300 text-xs font-semibold mt-3 leading-relaxed max-w-lg">
                    *This is a starting-price estimate. Final pricing is subject to a physical site audit by a certified Q-Zone technician and may increase based on infestation extent, access requirements, and material volumes.
                  </p>

                  {/* Metric breakdown */}
                  <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/10">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Pest Severity</p>
                      <p className="text-white font-black text-sm">{selectedPest?.badge}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Zone Class</p>
                      <p className="text-white font-black text-sm">{selectedZone?.label}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Complexity Factor</p>
                      <p className="text-cyan-400 font-black text-sm">×{(selectedPest.multiplier * selectedZone.multiplier).toFixed(1)}</p>
                    </div>
                  </div>
                </div>

                {/* ── Capture Form ─────────────────────────── */}
                <div className="rounded-2xl p-5 sm:p-8 border border-white/10 bg-white/5">
                  <h3 className="text-xl font-display font-black text-white mb-1">
                    Request a Final Audit
                  </h3>
                  <p className="text-slate-200 text-sm font-semibold mb-7 leading-relaxed">
                    A certified Q-Zone technician will contact you within 24 hours to confirm your site survey appointment.
                  </p>

                  {formError && (
                    <div className="mb-5 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm font-semibold">
                      {formError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <FormHoneypot />
                    {/* Name */}
                    <div className="relative">
                      <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <input
                        type="text"
                        name="name"
                        maxLength={120}
                        value={form.name}
                        onChange={handleFormChange}
                        placeholder="Full Name *"
                        className="w-full pl-11 pr-4 py-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 font-semibold text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/8 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <PhoneCall size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <input
                        type="tel"
                        name="phone"
                        maxLength={40}
                        required
                        pattern="^\+?[0-9]{7,15}$"
                        title="Please enter a valid phone number (7 to 15 digits)."
                        value={form.phone}
                        onChange={handleFormChange}
                        placeholder="Phone Number * (e.g. +2547XXXXXXXX)"
                        className="w-full pl-11 pr-4 py-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 font-semibold text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/8 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <input
                        type="email"
                        name="email"
                        maxLength={254}
                        value={form.email}
                        onChange={handleFormChange}
                        placeholder="Email Address *"
                        className="w-full pl-11 pr-4 py-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 font-semibold text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/8 transition-all"
                      />
                    </div>

                    {/* Notes */}
                    <textarea
                      name="notes"
                      maxLength={2000}
                      value={form.notes}
                      onChange={handleFormChange}
                      placeholder="Additional details (optional) — access restrictions, preferred time, etc."
                      rows={3}
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 font-semibold text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/8 transition-all resize-none"
                    />

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-4 rounded-full font-black text-base text-white flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-blue-glow mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
                    >
                      {sending
                        ? <><Loader2 size={17} className="animate-spin" /> Sending…</>
                        : <><ShieldCheck size={17} /> Request Final Audit — Contact Me</>
                      }
                    </button>

                    <p className="text-center text-slate-500 text-xs font-semibold">
                      No spam. No obligation. 24 hr response guaranteed.
                    </p>
                  </form>
                </div>
              </FadeIn>
            )}

            {/* ════════════════════════════════════════════════
                PHASE: SUBMITTED — CONFIRMATION SCREEN
            ════════════════════════════════════════════════ */}
            {phase === 'submitted' && (
              <FadeIn key="submitted">
                <div className="text-center py-8">
                  {/* Glow ring */}
                  <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{ background: 'radial-gradient(circle, #0097C4, transparent)' }} />
                    <div className="relative w-24 h-24 rounded-full flex items-center justify-center border-2 border-cyan-400 bg-cyan-500/15">
                      <CheckCircle2 size={40} className="text-cyan-400" />
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-3">
                    Audit Request Confirmed
                  </h2>
                  <p className="text-slate-200 text-base font-semibold max-w-md mx-auto leading-relaxed mb-6">
                    Your site audit request has been received. A certified Q-Zone technician will contact{' '}
                    <span className="text-white font-black">{form.name}</span> within 24 hours to confirm your appointment.
                  </p>

                  {/* Summary recap */}
                  <div className="inline-flex flex-col gap-2 text-left mx-auto mb-10 p-5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest w-20">Pest</span>
                      <span className="text-white font-black text-sm">{selectedPest?.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest w-20">Property</span>
                      <span className="text-white font-black text-sm">{selectedZone?.label} · {selectedZone?.size}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest w-20">Estimate</span>
                      <span className="text-cyan-400 font-black text-sm">Starting at KES {formatKES(startingPrice)}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest w-20">Contact</span>
                      <span className="text-white font-black text-sm">{form.phone}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                      to="/"
                      className="flex items-center gap-2 text-white font-black px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm hover:opacity-90 transition-all shadow-blue-glow"
                      style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
                    >
                      Return Home <ArrowRight size={15} />
                    </Link>
                    <button
                      onClick={() => { setPhase('service'); setSelectedPest(null); setSelectedZone(null); setForm({ name: '', phone: '', email: '', notes: '' }); }}
                      className="flex items-center gap-2 text-white font-black px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm border border-white/30 hover:bg-white/8 transition-all"
                    >
                      Start New Quote
                    </button>
                  </div>
                </div>
              </FadeIn>
            )}

          </div>
        </div>

        {/* ══ TRUST ROW ══════════════════════════════════════════ */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {[
            { icon: ShieldCheck, text: 'PCPB Licensed Technicians' },
            { icon: CheckCircle2, text: '24hr Response Guarantee' },
            { icon: Zap, text: 'Zero Commitment Estimate' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest">
                <Icon size={13} className="text-cyan-400" />
                {item.text}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
