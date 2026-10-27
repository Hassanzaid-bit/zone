import React, { useState } from 'react';
import { Building2, ChevronDown, Send, ShieldCheck, Zap, Loader2 } from 'lucide-react';
import { sendFormEmail } from '../utils/emailService';
import FormHoneypot from '../components/FormHoneypot';
import { hasHoneypotValue } from '../utils/formSecurity';

/* ═══════════════════════════════════════════════════════════════
   INDUSTRY SECTOR DEFINITIONS
═══════════════════════════════════════════════════════════════ */
const INDUSTRIES = [
  { value: '', label: 'Select Industry Sector', disabled: true },
  { value: 'food-beverage',    label: 'Food & Beverage Manufacturing' },
  { value: 'hospitality',     label: 'Hospitality & Hotels' },
  { value: 'warehouse',       label: 'Warehouse & Logistics' },
  { value: 'healthcare',      label: 'Healthcare Facilities' },
  { value: 'agriculture',     label: 'Agriculture and Milling' },
  { value: 'corporate',       label: 'Corporate Real Estate' },
  { value: 'other',           label: 'Other' },
];

/* ── Shared input / select / textarea class tokens ────────────── */
const inputCls =
  'w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-cyan-500/60 focus:bg-white/10 transition-all';
const selectCls =
  'w-full bg-[#001020] border border-white/15 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-cyan-500/60 transition-all appearance-none cursor-pointer';
const labelCls =
  'block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5';

/* ── Compliance checkbox list for Food & Beverage ─────────────── */
const COMPLIANCE_STANDARDS = ['ISO 22000', 'BRCGS', 'HACCP'];

/* ── Storage type options for Warehouse ──────────────────────── */
const STORAGE_TYPES = [
  'Perishable Cold-Chain',
  'Ambient / Dry Goods',
  'Non-Food Goods',
];

/* ── Processing commodity options for Agriculture ─────────────── */
const COMMODITIES = ['Grain', 'Maize', 'Animal Feed', 'Timber', 'Tea / Coffee', 'Other'];

/* ── Access window options for Corporate ─────────────────────── */
const ACCESS_WINDOWS = ['Day Shift Only', 'Night Shift Only', '24-Hour Access'];

/* ═══════════════════════════════════════════════════════════════
   DYNAMIC FIELDS — keyed by industry value
═══════════════════════════════════════════════════════════════ */
function DynamicFields({ industry, dynamic, onDynamic }) {
  const set = (key, val) => onDynamic(prev => ({ ...prev, [key]: val }));

  const toggleCheck = (key, item) => {
    const arr = dynamic[key] || [];
    onDynamic(prev => ({
      ...prev,
      [key]: arr.includes(item) ? arr.filter(x => x !== item) : [...arr, item],
    }));
  };

  if (!industry) return null;

  /* ── Food & Beverage ─────────────────────────────────────────── */
  if (industry === 'food-beverage') return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <div>
        <label className={labelCls}>Compliance alignment sought</label>
        <div className="flex flex-wrap gap-3 mt-1">
          {COMPLIANCE_STANDARDS.map(std => (
            <label key={std} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={(dynamic.compliance || []).includes(std)}
                onChange={() => toggleCheck('compliance', std)}
                className="w-4 h-4 accent-cyan-400 rounded"
              />
              <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                {std}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>Primary production type</label>
        <input
          type="text"
          className={inputCls}
          placeholder="e.g. dry goods, meat processing, dairy"
          value={dynamic.productionType || ''}
          onChange={e => set('productionType', e.target.value)}
        />
      </div>
    </div>
  );

  /* ── Hospitality ──────────────────────────────────────────────── */
  if (industry === 'hospitality') return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <div>
        <label className={labelCls}>Total number of rooms / guest suites</label>
        <input
          type="number"
          min="1"
          className={inputCls}
          placeholder="e.g. 120"
          value={dynamic.roomCount || ''}
          onChange={e => set('roomCount', e.target.value)}
        />
      </div>
      <div>
        <label className={labelCls}>On-site commercial kitchens / dining spaces (count)</label>
        <input
          type="number"
          min="0"
          className={inputCls}
          placeholder="e.g. 3"
          value={dynamic.kitchenCount || ''}
          onChange={e => set('kitchenCount', e.target.value)}
        />
      </div>
    </div>
  );

  /* ── Warehouse & Logistics ────────────────────────────────────── */
  if (industry === 'warehouse') return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <div>
        <label className={labelCls}>Number of active loading bays</label>
        <input
          type="number"
          min="0"
          className={inputCls}
          placeholder="e.g. 8"
          value={dynamic.loadingBays || ''}
          onChange={e => set('loadingBays', e.target.value)}
        />
      </div>
      <div>
        <label className={labelCls}>Storage environment type</label>
        <div className="relative">
          <select
            className={`${selectCls} text-white`}
            value={dynamic.storageType || ''}
            onChange={e => set('storageType', e.target.value)}
            style={{ colorScheme: 'dark' }}
          >
            <option value="" disabled className="bg-[#001020] text-slate-400">Select environment type…</option>
            {STORAGE_TYPES.map(t => (
              <option key={t} value={t} className="bg-[#001020] text-white">{t}</option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );

  /* ── Healthcare ───────────────────────────────────────────────── */
  if (industry === 'healthcare') return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <div>
        <label className={labelCls}>Requires sterile environment / OR isolation protocols?</label>
        <div className="flex gap-6 mt-1">
          {['Yes', 'No'].map(opt => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="sterile-env"
                value={opt}
                checked={dynamic.sterileEnv === opt}
                onChange={() => set('sterileEnv', opt)}
                className="w-4 h-4 accent-cyan-400"
              />
              <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">{opt}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>Total bed capacity / ward count</label>
        <input
          type="number"
          min="1"
          className={inputCls}
          placeholder="e.g. 250"
          value={dynamic.bedCapacity || ''}
          onChange={e => set('bedCapacity', e.target.value)}
        />
      </div>
    </div>
  );

  /* ── Agriculture & Milling ────────────────────────────────────── */
  if (industry === 'agriculture') return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <div>
        <label className={labelCls}>Silo / bulk raw material storage capacity</label>
        <input
          type="text"
          className={inputCls}
          placeholder="e.g. 5,000 MT, 12 silos"
          value={dynamic.storageCapacity || ''}
          onChange={e => set('storageCapacity', e.target.value)}
        />
      </div>
      <div>
        <label className={labelCls}>Primary processing commodity</label>
        <div className="relative">
          <select
            className={`${selectCls} text-white`}
            value={dynamic.commodity || ''}
            onChange={e => set('commodity', e.target.value)}
            style={{ colorScheme: 'dark' }}
          >
            <option value="" disabled className="bg-[#001020] text-slate-400">Select commodity…</option>
            {COMMODITIES.map(c => (
              <option key={c} value={c} className="bg-[#001020] text-white">{c}</option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );

  /* ── Corporate Real Estate ────────────────────────────────────── */
  if (industry === 'corporate') return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <div>
        <label className={labelCls}>Number of floors / independent office units</label>
        <input
          type="number"
          min="1"
          className={inputCls}
          placeholder="e.g. 14"
          value={dynamic.floors || ''}
          onChange={e => set('floors', e.target.value)}
        />
      </div>
      <div>
        <label className={labelCls}>Facility access window</label>
        <div className="relative">
          <select
            className={`${selectCls} text-white`}
            value={dynamic.accessWindow || ''}
            onChange={e => set('accessWindow', e.target.value)}
            style={{ colorScheme: 'dark' }}
          >
            <option value="" disabled className="bg-[#001020] text-slate-400">Select access window…</option>
            {ACCESS_WINDOWS.map(w => (
              <option key={w} value={w} className="bg-[#001020] text-white">{w}</option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );

  /* ── Other ────────────────────────────────────────────────────── */
  if (industry === 'other') return (
    <div className="animate-fade-in">
      <label className={labelCls}>Facility operational dynamics & environmental risk factors</label>
      <textarea
        rows={5}
        className={`${inputCls} resize-none`}
        placeholder="Describe your facility's operations, observable risk factors, any known pest activity, and any compliance requirements that apply…"
        value={dynamic.operationalNotes || ''}
        onChange={e => set('operationalNotes', e.target.value)}
      />
    </div>
  );

  return null;
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function CommercialQuote() {
  const [form, setForm] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    industry: '',
    squareFootage: '',
  });
  const [dynamic, setDynamic] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleIndustryChange = e => {
    setForm(prev => ({ ...prev, industry: e.target.value }));
    setDynamic({}); // reset dynamic fields when sector changes
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (hasHoneypotValue(new FormData(e.currentTarget))) {
      setSubmitted(true);
      return;
    }
    if (!form.company || !form.contact || !form.email || !form.industry || !form.squareFootage) {
      setError('Please complete all required fields before submitting.');
      return;
    }
    setError('');
    setSending(true);
    try {
      const industryLabel = INDUSTRIES.find(i => i.value === form.industry)?.label || form.industry;

      // Build the base fields
      const fields = [
        { label: 'Company Name',              value: form.company },
        { label: 'Contact Person',            value: form.contact },
        { label: 'Corporate Email',           value: form.email },
        { label: 'Phone Number',              value: form.phone },
        { label: 'Industry Sector',           value: industryLabel },
        { label: 'Facility Square Footage',   value: form.squareFootage },
      ];

      // Append sector-specific dynamic fields
      if (form.industry === 'food-beverage') {
        fields.push({ label: 'Compliance Alignment', value: (dynamic.compliance || []).join(', ') });
        fields.push({ label: 'Primary Production Type', value: dynamic.productionType || '' });
      } else if (form.industry === 'hospitality') {
        fields.push({ label: 'Total Rooms / Guest Suites', value: dynamic.roomCount || '' });
        fields.push({ label: 'Commercial Kitchens / Dining Spaces', value: dynamic.kitchenCount || '' });
      } else if (form.industry === 'warehouse') {
        fields.push({ label: 'Active Loading Bays', value: dynamic.loadingBays || '' });
        fields.push({ label: 'Storage Environment Type', value: dynamic.storageType || '' });
      } else if (form.industry === 'healthcare') {
        fields.push({ label: 'Sterile Environment / OR Isolation Required', value: dynamic.sterileEnv || '' });
        fields.push({ label: 'Total Bed Capacity / Ward Count', value: dynamic.bedCapacity || '' });
      } else if (form.industry === 'agriculture') {
        fields.push({ label: 'Silo / Bulk Storage Capacity', value: dynamic.storageCapacity || '' });
        fields.push({ label: 'Primary Processing Commodity', value: dynamic.commodity || '' });
      } else if (form.industry === 'corporate') {
        fields.push({ label: 'Number of Floors / Office Units', value: dynamic.floors || '' });
        fields.push({ label: 'Facility Access Window', value: dynamic.accessWindow || '' });
      } else if (form.industry === 'other') {
        fields.push({ label: 'Operational Dynamics & Risk Factors', value: dynamic.operationalNotes || '' });
      }

      // EMAIL DELIVERY SETUP: this call uses src/utils/emailService.js.
      // Configure VITE_EMAILJS_* values and the EmailJS template described in README.md.
      await sendFormEmail('Commercial Assessment Form', fields, form.email);
      setSubmitted(true);
    } catch (err) {
      setError('Failed to send your request. Please try again or call us directly.');
      console.error('EmailJS error:', err);
    } finally {
      setSending(false);
    }
  };


  /* ── Success state ──────────────────────────────────────────── */
  if (submitted) return (
    <div
      className="min-h-screen text-white flex items-center justify-center px-4 sm:px-6 md:px-8"
      style={{ background: 'linear-gradient(160deg, #001020 0%, #001C3D 45%, #002540 100%)' }}
    >
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mx-auto mb-8">
          <ShieldCheck size={36} className="text-cyan-400" />
        </div>
        <h2 className="text-4xl font-display font-black text-white mb-4">Request Received</h2>
        <p className="text-slate-200 font-semibold leading-relaxed mb-8">
          Thank you, <span className="text-cyan-400">{form.contact}</span>. A Q-Zone commercial specialist
          will contact you within 24 hours to discuss a tailored solution for{' '}
          <span className="text-cyan-400">{form.company}</span>.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ company: '', contact: '', email: '', phone: '', industry: '', squareFootage: '' }); setDynamic({}); }}
          className="text-cyan-400 font-bold hover:text-white transition-colors text-sm underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    </div>
  );

  /* ── Form state ─────────────────────────────────────────────── */
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #001020 0%, #001C3D 45%, #002540 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00456E 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0097C4 0%, transparent 65%)' }} />
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-20">

        {/* ── Page Hero ───────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-6">
            <Zap size={11} /> Commercial Assessment
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white mb-5 leading-tight tracking-tight">
            Enterprise<br />
            <span className="text-cyan-400">Pest Control</span>
          </h1>
          <p className="text-slate-200 text-xl font-semibold max-w-2xl mx-auto leading-relaxed">
            From BRCGS food facilities to multi-floor corporate towers — tell us about your operation and we'll engineer the right programme.
          </p>
        </div>

        {/* ── Two-col layout ──────────────────────────────────────── */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left panel — Brand info ────────────────────────────── */}
          <div className="lg:col-span-2 rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-10 flex flex-col gap-8"
            style={{ background: 'rgba(0,69,110,0.35)', backdropFilter: 'blur(18px)' }}>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-6">
                <Building2 size={26} className="text-cyan-400" />
              </div>
              <h2 className="text-3xl font-display font-black text-white mb-3">Enterprise Grade Protection</h2>
              <p className="text-slate-300 font-semibold leading-relaxed text-sm">
                From zero-tolerance food manufacturing to international logistics warehousing — Q-Zone delivers audit-ready, compliance-aligned pest management programmes at scale.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { label: 'BRCGS & ISO 22000 Compliance', desc: 'Programmes structured to meet the highest international food safety standards.' },
                { label: 'Digital Reporting via Insectram', desc: 'Real-time access to every trap, technician visit, and compliance record.' },
                { label: 'Dedicated Account Manager', desc: 'A single point of accountability for all your pest management needs.' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-3">
                  <ShieldCheck size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-black">{item.label}</p>
                    <p className="text-slate-400 text-xs font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-5 bg-white/5 border border-white/10 mt-auto">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Security Note</p>
              <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                All site assessments are conducted under NDA where requested. Client data is never shared with third parties.
              </p>
            </div>
          </div>

          {/* Right panel — Form ─────────────────────────────────── */}
          <div className="lg:col-span-3 rounded-3xl border border-white/10 p-5 sm:p-8 md:p-10"
            style={{ background: 'rgba(0,28,61,0.80)', backdropFilter: 'blur(24px)' }}>

            <h2 className="text-2xl font-display font-black text-white mb-1">Commercial Assessment</h2>
            <p className="text-slate-400 text-sm font-semibold mb-8">
              Complete this form and a specialist will prepare a tailored solution within 24 hours.
            </p>

            {error && (
              <div className="mb-6 px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-semibold">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              <FormHoneypot />

              {/* Company Name */}
              <div>
                <label className={labelCls} htmlFor="cq-company">Company Name <span className="text-cyan-400">*</span></label>
                <input
                  id="cq-company"
                  name="company"
                  type="text"
                  maxLength={160}
                  required
                  className={inputCls}
                  placeholder="e.g. Naivas Ltd"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              {/* Contact & Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls} htmlFor="cq-contact">Contact Person <span className="text-cyan-400">*</span></label>
                  <input
                    id="cq-contact"
                    name="contact"
                    type="text"
                    maxLength={120}
                    required
                    className={inputCls}
                    placeholder="Full name"
                    value={form.contact}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="cq-email">Corporate Email <span className="text-cyan-400">*</span></label>
                  <input
                    id="cq-email"
                    name="email"
                    type="email"
                    maxLength={254}
                    required
                    className={inputCls}
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className={labelCls} htmlFor="cq-phone">Phone Number</label>
                <input
                  id="cq-phone"
                  name="phone"
                  type="tel"
                  maxLength={40}
                  className={inputCls}
                  placeholder="+2547XXXXXXXX"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Industry Sector — drives dynamic fields */}
              <div>
                <label className={labelCls} htmlFor="cq-industry">Industry Sector <span className="text-cyan-400">*</span></label>
                <div className="relative">
                  <select
                    id="cq-industry"
                    name="industry"
                    required
                    className={`${selectCls} ${form.industry ? 'text-white' : 'text-slate-500'}`}
                    value={form.industry}
                    onChange={handleIndustryChange}
                    style={{ colorScheme: 'dark' }}
                  >
                    {INDUSTRIES.map(({ value, label, disabled }) => (
                      <option
                        key={value || '__placeholder'}
                        value={value}
                        disabled={disabled}
                        className="bg-[#001020] text-white"
                      >
                        {label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* ── Facility Square Footage — ALWAYS VISIBLE ─────── */}
              <div>
                <label className={labelCls} htmlFor="cq-sqft">
                  Facility Square Footage (Approx) <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="cq-sqft"
                  name="squareFootage"
                  type="text"
                  maxLength={80}
                  required
                  className={inputCls}
                  placeholder="e.g. 8,500 sq ft"
                  value={form.squareFootage}
                  onChange={handleChange}
                />
              </div>

              {/* ── Dynamic industry-specific fields ─────────────── */}
              {form.industry && (
                <div className="flex flex-col gap-5 border-t border-white/10 pt-6">
                  <p className="text-[10px] font-black uppercase tracking-widest text-cyan-400/70">
                    Sector-Specific Details — {INDUSTRIES.find(i => i.value === form.industry)?.label}
                  </p>
                  <DynamicFields
                    industry={form.industry}
                    dynamic={dynamic}
                    onDynamic={setDynamic}
                  />
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="mt-2 flex items-center justify-center gap-3 text-white font-black py-4 rounded-full text-base transition-all hover:opacity-90 shadow-[0_0_32px_rgba(0,151,196,0.25)] group disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
              >
                {sending
                  ? <><Loader2 size={16} className="animate-spin" /> Sending…</>
                  : <><Send size={16} /> Submit Assessment Request</>
                }
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
