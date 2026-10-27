import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, CheckCircle2, Target, Eye,
  Star, Users, Award, BookOpen, Leaf, Phone, Mail,
  MapPin, ExternalLink,
  Zap, Building2, Clock, Globe, Shield, Search, FileText,
  UserCheck, FlaskConical, Repeat, Microscope, Smartphone
} from 'lucide-react';

/* ═══ Inline SVG social icons (lucide-react dropped brand icons) ═══ */
const LinkedinIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const FacebookIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
import heroImg from '../assets/optimized/DSC08086-about.webp';

/* ═══════════════════════════════════════════════════════════════
   DATA — Memberships & Certifications
═══════════════════════════════════════════════════════════════ */
const certifications = [
  {
    acronym: 'NPMA',
    name: 'National Pest Management Association',
    desc: 'The US-based industry authority providing access to global best practices, research, and continuing professional development frameworks.',
  },
  {
    acronym: 'PEMAK',
    name: 'Pest Management Association of Kenya',
    desc: "Kenya's national trade body ensuring all member operators comply with local regulatory requirements and ethical business practices.",
  },
  {
    acronym: 'PCPB',
    name: 'Pest Control Products Board',
    desc: "Kenya's statutory regulatory authority overseeing the registration, licensing, and use of all pest control products and fumigation operations.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA — 3 Core Objectives
═══════════════════════════════════════════════════════════════ */
const coreObjectives = [
  {
    keyword: 'PROTECT',
    headline: 'Protect',
    body: 'The customer from disease, fear, and pain caused by undesirable pest activity. Every protocol we design begins with safeguarding the people, property, and products under our care.',
    icon: Shield,
    accent: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    keyword: 'PREVENT',
    headline: 'Prevent',
    body: 'The recurrence of pest infestation and reduce the level of infestation to an acceptable level. We engineer long-term exclusion strategies — not temporary fixes — that deny pests the conditions to return.',
    icon: Repeat,
    accent: 'from-cyan-500/20 to-teal-500/20',
  },
  {
    keyword: 'PURSUE',
    headline: 'Pursue',
    body: 'Perfection as it relates to inspection, identification, environmental modifications, and providing a complete and unique customer service experience that exceeds every expectation.',
    icon: Target,
    accent: 'from-cyan-500/20 to-emerald-500/20',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA — What Makes Us Different (Service Guarantee)
═══════════════════════════════════════════════════════════════ */
const differentiators = [
  {
    title: 'Detailed Reports & Recommendations',
    body: 'Every service visit concludes with a comprehensive digital report — complete with photographs, treatment records, and professional recommendations for environmental improvement.',
    icon: FileText,
  },
  {
    title: 'Smart Pest Control with INSECTRAM',
    body: 'Q-Zone utilizes the Insectram Digital Platform—a high-end, data-driven service engineered for total transparency and the ultimate client experience.',
    icon: Smartphone,
  },
  {
    title: 'Minimum-Impact Environmental Protocols',
    body: 'We prioritize structural exclusion and target-specific biological treatments over broad-spectrum chemicals, ensuring the absolute safety of your family, staff, clients, and the surrounding ecosystem.',
    icon: Leaf,
  },
  {
    title: '24/7 Rapid Emergency Response',
    body: 'Service contract customers receive priority 24/7 emergency call-out. When the situation demands it, our teams mobilise within hours — not days.',
    icon: Clock,
  },
  {
    title: 'The "Same Technician" Guarantee',
    body: 'Consistency builds trust. Your property is assigned a dedicated technician who knows your premises, your risk profile, and your history — no rotating strangers.',
    icon: UserCheck,
  },
  {
    title: 'Constant Research & Behavioural Analysis',
    body: 'We invest continuously in understanding changes in pest behaviour, habitats, dietary sources, and resistance patterns — ensuring our protocols evolve alongside the threats.',
    icon: Microscope,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA — Five Star Protection Philosophy
═══════════════════════════════════════════════════════════════ */
const fiveStarPillars = [
  {
    title: 'Specifically Trained Technicians',
    body: 'Every Q-Zone technician completes a rigorous, species-specific training programme before entering the field. Continuous professional development ensures our teams stay ahead of evolving pest biology and resistance patterns.',
    icon: Users,
  },
  {
    title: 'Dedicated Quality Control Supervisors',
    body: 'A separate QC layer audits every service visit independently. Supervisors verify treatment application, documentation accuracy, and client satisfaction — ensuring nothing falls between the cracks.',
    icon: ShieldCheck,
  },
  {
    title: 'Constant Research & Behavioural Analysis',
    body: 'We invest in understanding pest behaviour, not just eliminating pests. Seasonal patterns, harbourage preferences, and resistance development inform every protocol we deploy across the region.',
    icon: BookOpen,
  },
  {
    title: 'Non-Target Species Protection',
    body: 'Q-Zone is committed to environmental stewardship. Our protocols prioritise non-toxic methods, physical exclusion, and habitat modification — minimising impact on beneficial species, pollinators, and the surrounding ecosystem.',
    icon: Leaf,
  },
  {
    title: 'Audit-Ready Documentation',
    body: 'Every treatment, inspection, and recommendation is digitally documented through the Insectram platform. Clients receive complete, timestamped records ready for ISO, BRCGS, SALSA, and KEPHIS compliance audits.',
    icon: Award,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA — Contact Info
═══════════════════════════════════════════════════════════════ */
const phoneNumbers = [
  { label: 'Main Line', number: '(+254) 706 274 483' },
  { label: 'Operations', number: '(+254) 722 801 996' },
];

const emails = [
  { label: 'Operations', address: 'operations@qzone.co.ke' },
];

const socials = [
  { name: 'LinkedIn',  icon: LinkedinIcon,  url: 'https://www.linkedin.com/company/qzone-ipm/' },
  { name: 'Facebook',  icon: FacebookIcon,  url: 'https://www.facebook.com/QZoneIPM/' },
];

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function AboutUs() {
  return (
    <div className="min-h-screen text-white" style={{ background: '#001C3D' }}>

      {/* ══ HERO — The Q-Zone Legacy ═════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(160deg, #001020 0%, #001C3D 60%, #002540 100%)' }}>
        {/* Blueprint grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }} />

        {/* Hero image — full width */}
        <div className="relative w-full h-[340px] md:h-[440px] overflow-hidden">
          <img
            src={heroImg}
            alt="Q-Zone professional pest management team outside a modern commercial facility"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle bottom fade so text remains readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001C3D]/60 via-transparent to-transparent" />
        </div>

        {/* Hero copy — overlapping the image bottom */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 -mt-32 md:-mt-40 pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-6">
            <Clock size={11} /> Established 2011
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-5 tracking-tight">
            Engineering Pest-Free<br />
            Environments <span className="text-cyan-400">Since 2011.</span>
          </h1>
          <p className="text-slate-200 text-xl md:text-2xl leading-relaxed font-semibold max-w-3xl">
            We develop innovative, environmentally sensitive solutions for the detection, prevention, and elimination of troublesome pests across Kenya.
          </p>
        </div>
      </section>

      {/* ══ OUR STORY ════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8 border-b border-white/10" style={{ background: '#00243A' }}>
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-8">
            <Clock size={11} /> Our Origin Story
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Timeline spine */}
            <div className="hidden md:flex flex-col items-center gap-0 pt-2">
              <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
              <div className="w-px flex-1 bg-gradient-to-b from-cyan-400/60 to-cyan-400/0 min-h-[280px]" />
            </div>

            {/* Story text */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <p className="text-slate-100 text-lg leading-relaxed font-semibold">
                Q-Zone was born in <span className="text-cyan-400 font-black">2011</span> from a straightforward conviction: Kenya's pest management industry was saturated with companies that sprayed chemicals and moved on, leaving building owners with recurring problems and no accountability. Our founders — trained field biologists and environmental scientists — believed the answer lay not in stronger chemicals, but in <span className="text-cyan-300 font-black">smarter science</span>.
              </p>
              <p className="text-slate-200 text-base leading-relaxed font-medium">
                Starting with a single team and a handful of residential clients in Nairobi's Westlands district, Q-Zone quickly built a reputation for doing things differently. Every technician was recruited for their understanding of pest biology, not just their ability to operate a spray machine. Every treatment plan was tailored to the specific species, structure, and risk profile of each site — and every visit was followed by a documented report the client could hold us accountable to.
              </p>
              <p className="text-slate-200 text-base leading-relaxed font-medium">
                Within three years, that methodical approach had earned us our first major commercial contract with a food manufacturing facility in Nairobi's Industrial Area. The brief was simple: achieve and maintain <span className="text-cyan-300 font-black">BRCGS certification</span>. We delivered it — and have retained the contract ever since. That success opened the door to the hospitality, healthcare, logistics, and agri-processing sectors, where regulatory compliance is non-negotiable and the cost of failure is catastrophic.
              </p>
              <p className="text-slate-200 text-base leading-relaxed font-medium">
                Today, Q-Zone operates across Kenya and the wider East African corridor, protecting over <span className="text-cyan-300 font-black">2,400 sites</span> ranging from family apartments to international food production facilities. We built the <span className="text-cyan-300 font-black">Insectram Digital Platform</span> to give clients real-time visibility into every trap, every technician visit, and every compliance record — because trust is built on transparency, not promises.
              </p>

              {/* Founding quote */}
              <blockquote className="mt-2 border-l-4 border-cyan-400/60 pl-6 py-1">
                <p className="text-white text-xl italic font-semibold leading-relaxed">
                  "We don't just treat pests. We engineer environments where pests cannot thrive."
                </p>
                <cite className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-3 block not-italic">
                  — Q-Zone Founders, 2011
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CORPORATE DNA — Mission & Vision ═══════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8" style={{ background: '#001C3D' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

          {/* Mission */}
          <div className="rounded-2xl p-5 sm:p-8 lg:p-10 bg-white/5 border border-white/15 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                <Target size={22} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Corporate DNA</p>
                <h2 className="text-2xl font-display font-black text-white">Our Mission</h2>
              </div>
            </div>
            <p className="text-slate-100 text-lg leading-relaxed font-semibold">
              To exceed customer expectations by delivering <span className="text-cyan-300 font-black">practical, cost-effective, easy-to-implement, and resource-efficient</span> solutions using the latest proven technology.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl p-5 sm:p-8 lg:p-10 bg-white/5 border border-white/15 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                <Eye size={22} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Corporate DNA</p>
                <h2 className="text-2xl font-display font-black text-white">Our Vision</h2>
              </div>
            </div>
            <p className="text-slate-100 text-lg leading-relaxed font-semibold">
              To <span className="text-cyan-300 font-black">prevent the introduction</span> of pests onto client premises, <span className="text-cyan-300 font-black">eliminate current infestations</span>, and <span className="text-cyan-300 font-black">permanently reduce</span> the conditions that encourage their presence.
            </p>
          </div>

        </div>
      </section>

      {/* ══ 3 CORE OBJECTIVES — Protect · Prevent · Pursue ═══════ */}
      <section className="py-12 md:py-24 px-4 md:px-8 border-t border-white/10" style={{ background: '#00243A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-5">
              <Target size={11} /> Core Objectives
            </div>
            <h2 className="text-3xl md:text-4xl sm:text-5xl font-display font-black text-white mb-4">
              Protect. Prevent. <span className="text-cyan-400">Pursue.</span>
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto font-semibold leading-relaxed">
              Every engagement we undertake is governed by three non-negotiable operational pillars.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreObjectives.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.keyword}
                  className="rounded-2xl p-5 sm:p-8 bg-white/5 border border-white/15 hover:border-cyan-500/40 hover:bg-white/8 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Large watermark keyword */}
                  <span className="absolute -bottom-3 -right-2 text-7xl font-display font-black text-white/[0.04] leading-none select-none pointer-events-none">
                    {item.keyword}
                  </span>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:bg-cyan-500/25 transition-colors">
                      <Icon size={24} className="text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-display font-black text-white mb-3">{item.headline}</h3>
                    <p className="text-slate-200 text-base leading-relaxed font-semibold">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ WHAT MAKES US DIFFERENT — Service Guarantee ══════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8" style={{ background: '#001C3D' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-5">
              <Star size={11} /> Service Guarantee
            </div>
            <h2 className="text-3xl md:text-4xl sm:text-5xl font-display font-black text-white mb-4">
              What Makes Us <span className="text-cyan-400">Different</span>
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto font-semibold leading-relaxed">
              These are the operational commitments that separate Q-Zone from every other pest management provider in the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="h-full rounded-2xl p-5 sm:p-8 bg-white/5 border border-white/15 hover:border-cyan-500/40 hover:bg-white/8 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/25 transition-colors">
                      <Icon size={22} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-black text-white mb-2">{item.title}</h3>
                      <p className="text-slate-200 text-sm leading-relaxed font-semibold">{item.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FIVE STAR PROTECTION PHILOSOPHY ════════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8 border-t border-white/10" style={{ background: '#00243A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-5">
              <Star size={11} /> Operational Standards
            </div>
            <h2 className="text-3xl md:text-4xl sm:text-5xl font-display font-black text-white mb-4">
              The 5-Star Protection <span className="text-cyan-400">Philosophy</span>
            </h2>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto font-semibold leading-relaxed">
              We don't just spray — we deploy specifically trained technicians and dedicated Quality Control Supervisors to ensure the highest standards are met on every single site visit.
            </p>
          </div>

          {/* Row 1 — 3 cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-5">
            {fiveStarPillars.slice(0, 3).map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl p-5 sm:p-8 bg-white/5 border border-white/15 hover:border-cyan-500/40 hover:bg-white/8 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:bg-cyan-500/25 transition-colors">
                    <Icon size={24} className="text-cyan-400" />
                  </div>
                  <h3 className="font-display font-black text-white text-lg mb-3">{item.title}</h3>
                  <p className="text-slate-200 text-sm leading-relaxed font-semibold">{item.body}</p>
                </div>
              );
            })}
          </div>
          {/* Row 2 — 2 cards centred */}
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            {fiveStarPillars.slice(3).map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="w-full sm:w-[calc(33.333%-10px)] rounded-2xl p-5 sm:p-8 bg-white/5 border border-white/15 hover:border-cyan-500/40 hover:bg-white/8 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:bg-cyan-500/25 transition-colors">
                    <Icon size={24} className="text-cyan-400" />
                  </div>
                  <h3 className="font-display font-black text-white text-lg mb-3">{item.title}</h3>
                  <p className="text-slate-200 text-sm leading-relaxed font-semibold">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ MEMBERSHIPS & CERTIFICATIONS ═════════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8" style={{ background: '#001C3D' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-5">
              <Award size={11} /> Industry Accreditation
            </div>
            <h2 className="text-3xl md:text-4xl sm:text-5xl font-display font-black text-white mb-4">
              Memberships & <span className="text-cyan-400">Certifications</span>
            </h2>
            <p className="text-slate-200 text-lg max-w-xl mx-auto font-semibold">
              Q-Zone maintains active membership in the industry's most rigorous professional bodies — both locally and internationally.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5 max-w-4xl mx-auto">
            {certifications.map(({ acronym, name, desc }) => (
              <div key={acronym} className="flex-1 min-w-[220px] rounded-2xl p-7 bg-white/5 border border-white/15 hover:border-cyan-500/40 hover:bg-white/8 hover:-translate-y-1 transition-all duration-300 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center mx-auto mb-5 group-hover:bg-cyan-500/20 transition-colors">
                  <span className="text-2xl font-display font-black text-cyan-400">{acronym.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-display font-black text-white mb-1">{acronym}</h3>
                <p className="text-cyan-500/70 text-xs font-semibold italic mb-3">{name}</p>
                <p className="text-slate-300 text-xs leading-relaxed font-semibold">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUICK STATS ═════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8 border-y border-white/10" style={{ background: '#00243A' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: '2011', label: 'Year Founded', icon: Clock },
            { val: '15+', label: 'Years Active', icon: Star },
            { val: '2,400+', label: 'Sites Secured', icon: Building2 },
            { val: '100%', label: 'Compliance Rate', icon: ShieldCheck },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label}>
                <Icon size={18} className="text-cyan-400 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-display font-black text-cyan-400">{item.val}</p>
                <p className="text-xs text-slate-300 font-bold uppercase tracking-widest mt-2">{item.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══ LEADERSHIP & MANAGEMENT SECTION ══════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8 border-y border-white/10" style={{ background: '#001933' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-5">
              <Users size={11} /> Leadership &amp; Governance
            </div>
            <h2 className="text-3xl md:text-4xl sm:text-5xl font-display font-black text-white mb-4">
              Management <span className="text-cyan-400">Team</span>
            </h2>
            <p className="text-slate-200 text-lg max-w-xl mx-auto font-semibold mb-6">
              Q-Zone is led by experienced field biologists, environmental scientists, and commercial compliance specialists with over 15 years of combined operational experience across Kenya and the East African region.
            </p>
          </div>

          <div className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 lg:p-10 bg-white/5 border border-white/10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
              <Users size={26} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-display font-black text-white mb-3">Meet Our Leadership</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-semibold mb-6">
              Individual leadership profiles and executive bios are available upon request for corporate partnership enquiries and audit documentation purposes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white font-black px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
            >
              Request Leadership Profile <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CONTACT & SOCIAL FOOTPRINT ════════════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8" style={{ background: '#001C3D' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-5">
              <Globe size={11} /> Regional Headquarters
            </div>
            <h2 className="text-3xl md:text-4xl sm:text-5xl font-display font-black text-white mb-4">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="text-slate-200 text-lg max-w-xl mx-auto font-semibold">
              Our Nairobi headquarters coordinates specialist teams ready to dispatch across Kenya within 24–48 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">

            {/* HQ Address */}
            <div className="rounded-2xl p-5 sm:p-8 bg-white/5 border border-white/15">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                  <MapPin size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-display font-black text-white">Headquarters</h3>
              </div>
              <p className="text-slate-200 text-base leading-relaxed font-semibold mb-4">
                Henred Rd, Valley Arcade<br />
                Nairobi, Kenya
              </p>
              <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                Regional dispatch teams available across Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and the wider East African corridor.
              </p>
            </div>

            {/* Phone Lines */}
            <div className="rounded-2xl p-5 sm:p-8 bg-white/5 border border-white/15">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                  <Phone size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-display font-black text-white">Direct Lines</h3>
              </div>
              <div className="flex flex-col gap-3">
                {phoneNumbers.map(({ label, number }) => (
                  <a
                    key={number}
                    href={`tel:${number.replace(/[^\d+]/g, '')}`}
                    className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/8 transition-all group"
                  >
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">{label}</span>
                    <span className="text-white text-sm font-black group-hover:text-cyan-400 transition-colors">{number}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Emails */}
            <div className="rounded-2xl p-5 sm:p-8 bg-white/5 border border-white/15">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                  <Mail size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-display font-black text-white">Digital Desks</h3>
              </div>
              <div className="flex flex-col gap-3">
                {emails.map(({ label, address }) => (
                  <a
                    key={address}
                    href={`mailto:${address}`}
                    className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/8 transition-all group"
                  >
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">{label}</span>
                    <span className="text-white text-sm font-bold group-hover:text-cyan-400 transition-colors">{address}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Social Media Row */}
          <div className="flex flex-col items-center">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-5">Connect With Us</p>
            <div className="flex items-center gap-4">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
                    title={item.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8 border-t border-white/10" style={{ background: 'linear-gradient(160deg, #001020, #001C3D)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl sm:text-5xl font-display font-black text-white mb-5 leading-tight">
            Ready to work with<br /><span className="text-cyan-400">Kenya's best?</span>
          </h2>
          <p className="text-slate-200 text-lg max-w-xl mx-auto font-semibold mb-10">
            15+ years of technical excellence, 2,400+ secured sites, and zero compromise on compliance. Let's protect your environment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/precision-quote"
              className="inline-flex items-center gap-2 text-white font-black px-10 py-5 rounded-full text-base hover:opacity-90 transition-all shadow-blue-glow group"
              style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
            >
              Get a Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/residential/general-defense"
              className="inline-flex items-center gap-2 text-white font-black px-4 sm:px-6 md:px-8 py-5 rounded-full text-sm border border-white/30 hover:bg-white/8 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
