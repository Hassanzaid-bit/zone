import React, { useState } from 'react';
import bgContact from '../assets/optimized/DSC08103-contact.webp';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, ArrowRight, Send, ShieldCheck, Loader2 } from 'lucide-react';
import { sendFormEmail } from '../utils/emailService';
import FormHoneypot from '../components/FormHoneypot';
import { hasHoneypotValue } from '../utils/formSecurity';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (hasHoneypotValue(new FormData(e.currentTarget))) {
      setSubmitted(true);
      return;
    }
    setSending(true);
    setSendError('');
    try {
      // EMAIL DELIVERY SETUP: this call uses src/utils/emailService.js.
      // Configure VITE_EMAILJS_* values and the EmailJS template described in README.md.
      await sendFormEmail(
        'Contact Us Form',
        [
          { label: 'Full Name',        value: form.name },
          { label: 'Email Address',    value: form.email },
          { label: 'Phone Number',     value: form.phone },
          { label: 'Service Required', value: form.service },
          { label: 'Message',          value: form.message },
        ],
        form.email
      );
      setSubmitted(true);
    } catch (err) {
      setSendError('Failed to send your enquiry. Please try again or call us directly.');
      console.error('EmailJS error:', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen text-white" style={{ background: '#001C3D' }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative py-24 px-4 sm:px-6 md:px-8 overflow-hidden border-b border-white/10 bg-cover bg-center bg-no-repeat bg-[#001C3D]"
        style={{ backgroundImage: `url(${bgContact})` }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-widest mb-8">
            <ShieldCheck size={12} /> Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white mb-6 leading-tight tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Contact <span className="text-cyan-400" style={{ textShadow: '0 0 40px rgba(34,211,238,0.3)' }}>Us</span>
          </h1>
          <p className="text-white text-xl font-semibold max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Our pest management specialists are ready to help. Reach out directly or submit your enquiry below and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO + FORM ──────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Details */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-display font-black text-white mb-2">Our Details</h2>
              <p className="text-slate-300 font-semibold">Available 24 hours a day, 7 days a week.</p>
            </div>

            {[
              {
                icon: PhoneCall,
                label: 'Phone',
                value: '(+254) 706 274 483',
                href: 'tel:+254706274483',
              },
              {
                icon: Mail,
                label: 'Email',
                value: 'operations@qzone.co.ke',
                href: 'mailto:operations@qzone.co.ke',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-[#00456E]/40 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={22} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{item.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Embedded office map — the whole preview opens the full Google Maps location. */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="flex items-start gap-4 p-5 border-b border-white/10">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                  <MapPin size={21} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Physical Address</p>
                  <p className="text-base font-bold text-white">Korosho Road, Valley Arcade, Nairobi, Kenya</p>
                  <p className="text-xs text-cyan-300 font-bold mt-1">Click the map to open directions</p>
                </div>
              </div>
              <div className="relative h-64 group">
                <iframe
                  title="Q-Zone Pest Control location - Korosho Road, Valley Arcade, Nairobi"
                  src="https://www.google.com/maps?q=Korosho+Road,+Valley+Arcade,+Nairobi,+Kenya&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0 pointer-events-none grayscale-[0.15] contrast-[1.05]"
                />
                <a
                  href="https://maps.app.goo.gl/KEat7UanEohKZMgX7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 block bg-cyan-900/0 group-hover:bg-cyan-900/10 transition-colors"
                  aria-label="Open Q-Zone location in Google Maps"
                >
                  <span className="sr-only">Open Q-Zone location in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Quick Quote CTA */}
            <Link
              to="/precision-quote"
              className="mt-4 flex items-center gap-3 justify-center text-white font-black px-4 sm:px-6 md:px-8 py-5 rounded-full text-base transition-all hover:opacity-90 shadow-blue-glow group"
              style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
            >
              Get a Precision Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quote Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 md:p-10 backdrop-blur-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-6 text-center py-16">
                <div className="w-16 h-16 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                  <ShieldCheck size={30} className="text-cyan-400" />
                </div>
                <h3 className="text-3xl font-display font-black text-white">Thank You!</h3>
                <p className="text-slate-200 font-semibold max-w-sm">
                  Your enquiry has been received. A Q-Zone specialist will contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                  className="text-cyan-400 font-bold hover:text-white transition-colors text-sm underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-display font-black text-white mb-2">Get a Quote</h3>
                <p className="text-slate-300 text-sm font-semibold mb-8">Fill in the form and our team will prepare a tailored solution for you.</p>

                {sendError && (
                  <div className="mb-5 px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-semibold">
                    {sendError}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <FormHoneypot />
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2" htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      maxLength={120}
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-cyan-500/60 focus:bg-white/10 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2" htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      maxLength={254}
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-cyan-500/60 focus:bg-white/10 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2" htmlFor="contact-phone">Phone Number</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      maxLength={40}
                      required
                      pattern="^\+?[0-9]{7,15}$"
                      title="Please enter a valid phone number (7 to 15 digits)."
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+2547XXXXXXXX"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-cyan-500/60 focus:bg-white/10 transition-all"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2" htmlFor="contact-service">Service Required</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-[#001C3D] border border-white/15 rounded-xl px-4 py-3 text-white text-sm font-semibold focus:outline-none focus:border-cyan-500/60 transition-all appearance-none"
                    >
                      <option value="" disabled>Select a service…</option>
                      <option value="residential">Residential Pest Control</option>
                      <option value="commercial">Commercial &amp; Industrial</option>
                      <option value="fumigation">Phosphine Fumigation</option>
                      <option value="ipm">IPM Programme</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2" htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      maxLength={2000}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your pest issue or any specific requirements…"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm font-semibold focus:outline-none focus:border-cyan-500/60 focus:bg-white/10 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="flex items-center justify-center gap-3 text-white font-black py-4 rounded-full text-base transition-all hover:opacity-90 shadow-blue-glow mt-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
                  >
                    {sending
                      ? <><Loader2 size={16} className="animate-spin" /> Sending…</>
                      : <><Send size={16} /> Submit Enquiry</>
                    }
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
