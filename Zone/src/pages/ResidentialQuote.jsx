import React, { useState } from 'react';
import { Send, ShieldCheck, Loader2, Home } from 'lucide-react';
import { sendFormEmail } from '../utils/emailService';
import FormHoneypot from '../components/FormHoneypot';
import { hasHoneypotValue } from '../utils/formSecurity';

/* ── Shared input class ─────────────────────────────────────────── */
const inputCls =
  'w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-cyan-500/60 focus:bg-white/10 transition-all';

export default function ResidentialQuote() {
  const [form, setForm] = useState({
    firstName:   '',
    lastName:    '',
    email:       '',
    address:     '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (hasHoneypotValue(new FormData(e.currentTarget))) {
      setSubmitted(true);
      return;
    }
    if (!form.firstName || !form.lastName || !form.email || !form.address) {
      setSendError('Please fill in all required fields.');
      return;
    }
    setSendError('');
    setSending(true);
    try {
      // EMAIL DELIVERY SETUP: this call uses src/utils/emailService.js.
      // Configure VITE_EMAILJS_* values and the EmailJS template described in README.md.
      await sendFormEmail(
        'Residential Quote Request',
        [
          { label: 'First Name',              value: form.firstName },
          { label: 'Last Name',               value: form.lastName },
          { label: 'Email Address',           value: form.email },
          { label: 'Property Address',        value: form.address },
          { label: 'Infestation Description', value: form.description },
        ],
        form.email
      );
      setSubmitted(true);
    } catch (err) {
      setSendError('Failed to send your request. Please try again or call us directly.');
      console.error('EmailJS error:', err);
    } finally {
      setSending(false);
    }
  };

  /* ── Success screen ───────────────────────────────────────────── */
  if (submitted) {
    return (
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
            Thank you, <span className="text-cyan-400">{form.firstName}</span>. Our experts will
            contact you within 2 hours with a scientific assessment.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ firstName: '', lastName: '', email: '', address: '', description: '' });
            }}
            className="text-cyan-400 font-bold hover:text-white transition-colors text-sm underline underline-offset-4"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  /* ── Form ─────────────────────────────────────────────────────── */
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #001020 0%, #001C3D 45%, #002540 100%)' }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00456E 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0097C4 0%, transparent 65%)' }}
      />
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-10 py-20">

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-6">
            <Home size={11} /> Residential Quote
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-4xl sm:text-6xl font-display font-black text-white mb-5 leading-tight tracking-tight">
            Secure Your<br />
            <span className="text-cyan-400">Perimeter</span>
          </h1>
          <p className="text-slate-200 text-lg font-semibold max-w-xl mx-auto leading-relaxed">
            Our experts will respond within 2 hours with a scientific assessment tailored to your property.
          </p>
        </div>

        {/* Form card */}
        <div
          className="rounded-3xl border border-white/10 p-5 sm:p-8 md:p-10"
          style={{ background: 'rgba(0,28,61,0.80)', backdropFilter: 'blur(24px)' }}
        >
          <h2 className="text-2xl font-display font-black text-white mb-1">Request a Quote</h2>
          <p className="text-slate-400 text-sm font-semibold mb-8">
            Fill in your details and we'll prepare a tailored solution for you.
          </p>

          {sendError && (
            <div className="mb-6 px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-semibold">
              {sendError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
            <FormHoneypot />

            {/* First Name + Last Name */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5" htmlFor="rq-first-name">
                  First Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="rq-first-name"
                  name="firstName"
                  type="text"
                  maxLength={120}
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Jane"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5" htmlFor="rq-last-name">
                  Last Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="rq-last-name"
                  name="lastName"
                  type="text"
                  maxLength={120}
                  required
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className={inputCls}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5" htmlFor="rq-email">
                Email Address <span className="text-cyan-400">*</span>
              </label>
              <input
                id="rq-email"
                name="email"
                type="email"
                maxLength={254}
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className={inputCls}
              />
            </div>

            {/* Property Address */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5" htmlFor="rq-address">
                Property Address <span className="text-cyan-400">*</span>
              </label>
              <input
                id="rq-address"
                name="address"
                type="text"
                maxLength={250}
                required
                value={form.address}
                onChange={handleChange}
                placeholder="e.g. 14 Riverside Drive, Nairobi"
                className={inputCls}
              />
            </div>

            {/* Infestation description */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5" htmlFor="rq-description">
                Describe the Infestation <span className="text-slate-600">(optional)</span>
              </label>
              <textarea
                id="rq-description"
                name="description"
                rows={4}
                maxLength={2000}
                value={form.description}
                onChange={handleChange}
                placeholder="Tell us what you're seeing — type of pest, affected areas, duration…"
                className={`${inputCls} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="mt-2 flex items-center justify-center gap-3 text-white font-black py-4 rounded-full text-base transition-all hover:opacity-90 shadow-[0_0_32px_rgba(0,151,196,0.25)] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
            >
              {sending
                ? <><Loader2 size={16} className="animate-spin" /> Sending…</>
                : <><Send size={16} /> Initialize Assessment</>
              }
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
