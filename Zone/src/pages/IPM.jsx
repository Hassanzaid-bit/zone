import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Search, FlaskConical, Eye, Zap, ClipboardCheck,
  ChevronRight, Shield, AlertTriangle, MapPin, TrendingDown,
  HelpCircle, Building2, CheckCircle2, BarChart3, Database,
  Microscope, Bug, FileText, ShieldAlert, Activity
} from 'lucide-react';

// ── 9-Step IPM Protocol ──────────────────────────────────────────
const stages = [
  {
    number: '01',
    title: 'Initial Consultation',
    subtitle: 'Understanding Your Facility & Programme Goals',
    icon: ClipboardCheck,
    description:
      'Every Q-Zone programme begins with a structured consultation to understand the client\'s operational environment, regulatory requirements, previous pest history, and specific risk tolerances. This informs the scope and depth of the site survey.',
    keyActions: [
      'Review of client\'s existing pest management records and previous reports',
      'Discussion of operational constraints — occupied hours, sensitive zones, chemical restrictions',
      'Identification of applicable audit standards (BRCGS, ISO 22000, MOH, HACCP)',
      'Scoping of programme deliverables and service frequency',
    ],
    outcome: 'A clear programme brief agreed between client and Q-Zone — the foundation for all subsequent stages.',
  },
  {
    number: '02',
    title: 'Site Inspection',
    subtitle: 'Structural Denial Through Full Building Envelope Analysis',
    icon: Search,
    description:
      'Our certified surveyors analyze the full building envelope — structure, construction materials, drainage routes, and architectural gaps — to identify every physical pathway through which pests can access the facility.',
    keyActions: [
      'Full architectural gap-map and ingress audit across all elevations',
      'Inspection of rooflines, cavity walls, pipe runs, and conduit routes',
      'Drainage and water-source risk assessment',
      'Documentation of all structural vulnerabilities in a Site Risk Register',
    ],
    outcome: 'A comprehensive Site Risk Register that becomes the foundation of your entire pest management programme.',
  },
  {
    number: '03',
    title: 'Pest Identification',
    subtitle: 'Precision Species Profiling for Targeted Control',
    icon: Microscope,
    description:
      'Reactive treatment without accurate identification is wasteful and hazardous. Q-Zone technicians are trained in precision species identification, enabling selection of physical, cultural, and chemical controls that are specifically tailored to the confirmed pest species.',
    keyActions: [
      'Taxonomic identification of all captured or observed organisms',
      'Habitat and behaviour profiling per confirmed species',
      'Selection of species-specific physical and cultural controls',
      'Elimination of broad-spectrum chemical use through targeted precision',
    ],
    outcome: 'A species-specific treatment protocol eliminating unnecessary chemical application and reducing risk to non-target species.',
  },
  {
    number: '04',
    title: 'Infestation-Level Assessment',
    subtitle: 'Quantifying Population Pressure to Set Action Thresholds',
    icon: BarChart3,
    description:
      'Understanding the severity of an infestation determines whether immediate intervention is required or whether monitoring is sufficient. Q-Zone uses a structured scale to classify infestation levels and set appropriate action thresholds.',
    keyActions: [
      'Population pressure assessment using trap catches, sightings data, and damage evidence',
      'Classification on Q-Zone\'s 4-tier infestation scale',
      'Setting of action thresholds appropriate to the facility type and regulatory context',
      'Documentation of baseline infestation level for trend comparison in future visits',
    ],
    infestationLevels: [
      { level: 'Low', color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10', desc: 'Isolated sightings. No active colony confirmed. Preventive monitoring sufficient.' },
      { level: 'Moderate', color: 'text-amber-400 border-amber-500/40 bg-amber-500/10', desc: 'Consistent activity. Colony or harborage likely present. Targeted intervention recommended.' },
      { level: 'High', color: 'text-orange-400 border-orange-500/40 bg-orange-500/10', desc: 'Multiple zones affected. Active reproduction confirmed. Immediate control programme required.' },
      { level: 'Severe', color: 'text-rose-400 border-rose-500/40 bg-rose-500/10', desc: 'Widespread infestation. Significant regulatory and health risk. Emergency response initiated.' },
    ],
    outcome: 'A documented infestation-level classification that justifies the recommended intervention and sets measurable programme targets.',
  },
  {
    number: '05',
    title: 'Evaluate',
    subtitle: 'Diagnostic Assessment: Risks, Audits & Site Conditions',
    icon: FlaskConical,
    description:
      'Before any treatment is recommended, our technicians systematically work through six diagnostic questions to understand the pest\'s biology, source, impact, and the conditions sustaining it. This evaluation drives every subsequent decision.',
    keyActions: [
      'Systematic application of the 6-question diagnostic protocol at every site visit',
      'Industry audit review — identification of applicable compliance standards and current gap status',
      'Environmental and sanitation conditions assessment (food sources, water, harbourage)',
      'Risk mapping across operational zones — identifying Critical Control Points for pest vectors',
    ],
    diagnosticQuestions: true,
    outcome: 'A complete diagnostic picture that drives a targeted, evidence-based treatment recommendation.',
  },
  {
    number: '06',
    title: 'Treatment Recommendation',
    subtitle: 'Evidence-Based Protocol Selection',
    icon: FileText,
    description:
      'Based on confirmed pest species, infestation level, and site conditions, Q-Zone prepares a formal treatment recommendation document outlining the proposed methods, products, application zones, and expected outcomes.',
    keyActions: [
      'Selection of least-toxic effective method for the confirmed pest and environment',
      'Preparation of formal treatment proposal with product data sheets (SDS)',
      'Client review and approval of proposed programme before implementation',
      'Pre-treatment advisory to client on preparation requirements (e.g., food clearance, access)',
    ],
    outcome: 'A client-approved treatment plan with full transparency on methods, materials, and expected results.',
  },
  {
    number: '07',
    title: 'Control Implementation',
    subtitle: 'Safe, Precise Intervention Without Compromising Operations',
    icon: Zap,
    description:
      'When the treatment plan is approved, our team executes targeted interventions using the safest effective method available. Physical exclusion is prioritized, with chemical applications reserved only when necessary — always using food-safe, approved formulations.',
    keyActions: [
      'Priority use of physical methods: trapping, exclusion, proofing, habitat modification',
      'Chemical application only at confirmed infestation points with PCPB-approved products',
      'Strict pre-harvest intervals and residue-free formulations for food environments',
      'Containment protocols to prevent operational disruption during treatment',
    ],
    outcome: 'Swift, targeted elimination with full documentation of materials used — traceable for any food safety or compliance audit.',
  },
  {
    number: '08',
    title: 'Monitoring & Documentation',
    subtitle: 'Verified Digital Tracking & Continuous Surveillance',
    icon: Eye,
    description:
      'Monitoring is the backbone of an accountable IPM programme. We deploy structured monitoring networks — each QR-verified through the Insectram platform — to create an auditable, documented inspection regime that cannot be falsified.',
    keyActions: [
      'Full deployment of rodent bait stations, insect light traps, and pheromone monitors',
      'QR-code scan verification at every trap point via Insectram® digital platform',
      'GPS-timestamped technician routes preventing "ghost visits"',
      'Real-time dashboard accessible by client for live trend analysis and historical records',
    ],
    outcome: 'A fully auditable monitoring network with zero-falsification accountability — ready for third-party inspections at any time.',
  },
  {
    number: '09',
    title: 'Review, Reporting & Continuous Improvement',
    subtitle: 'Data-Driven Programme Optimisation',
    icon: ClipboardCheck,
    description:
      'An IPM programme is only as strong as its documentation and its capacity for self-correction. Every Q-Zone programme is subject to structured review cycles that generate compliance-ready reports and drive continuous programme improvement.',
    keyActions: [
      'Monthly trend analysis comparing monitoring data across service periods',
      'KPI tracking: catch rates, infestation hotspots, seasonal patterns',
      'Automated generation of audit-ready compliance reports via Insectram®',
      'Programme amendments based on data — not assumptions — for compounding improvement',
    ],
    outcome: 'A living, improving pest management programme that satisfies the most demanding third-party food safety certifications.',
  },
];

// ── Six Diagnostic Questions (used within Evaluate step) ─────────
const diagnosticQuestions = [
  { number: 'Q1', question: 'What species is it?', rationale: 'Accurate identification drives every downstream decision. The wrong assumption leads to the wrong treatment.', icon: Bug },
  { number: 'Q2', question: 'Where does it come from?', rationale: 'Understanding the source — external harbourage, structural breach, or product contamination — is prerequisite to prevention.', icon: MapPin },
  { number: 'Q3', question: 'What damage does it cause?', rationale: 'Risk must be quantified. Physical damage, contamination risk, and regulatory exposure all determine intervention urgency.', icon: AlertTriangle },
  { number: 'Q4', question: 'Where are they found?', rationale: 'Precise location mapping of active areas and harbourage zones focuses treatment effort and prevents waste.', icon: Search },
  { number: 'Q5', question: 'How many are there?', rationale: 'Population size informs the action threshold. A threshold-based approach prevents over-treatment of low-risk sightings.', icon: BarChart3 },
  { number: 'Q6', question: 'Why are they there?', rationale: 'Root cause analysis — structural faults, sanitation gaps, food sources — is the only basis for durable long-term control.', icon: HelpCircle },
];

// ── What Every Programme Includes ────────────────────────────────
const programmeIncludes = [
  'Initial consultation & site scoping',
  'Full structural site inspection',
  'Precision pest identification',
  'Infestation-level assessment',
  'Diagnostic evaluation (6-question protocol)',
  'Written treatment plan & client approval',
  'Control implementation with PCPB-approved methods',
  'QR-verified monitoring & digital documentation',
  'Monthly KPI reporting & continuous improvement reviews',
];

const complianceBadges = ['ISO 22000', 'BRCGS', 'SALSA', 'HACCP', 'PCPB', 'NEMA'];

// ── Shared eyebrow pill ───────────────────────────────────────────────
function Eyebrow({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/30 bg-cyan-500/10">
      {Icon && <Icon size={12} />}
      {children}
    </div>
  );
}

export default function IPM() {
  const [activeStage, setActiveStage] = useState(null);

  return (
    <div className="flex flex-col bg-background min-h-screen text-white">

      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full min-h-[82vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #001C3D 0%, #00243A 60%, #002D4A 100%)' }}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-25"
            style={{ background: 'radial-gradient(circle, #00456E 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 -left-20 w-[500px] h-[400px] opacity-15"
            style={{ background: 'radial-gradient(circle, #0097C4 0%, transparent 65%)' }} />
          {/* Blueprint grid */}
          <div className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: Text */}
          <div>
            <div className="mb-8">
              <Eyebrow icon={Shield}>Scientific Methodology</Eyebrow>
            </div>
            <h1 className="text-4xl sm:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
              Integrated{' '}
              <span className="text-cyan-400">
                Pest Management:
              </span>
              <br />
              <span className="text-slate-300 text-4xl md:text-5xl font-semibold block mt-3">
                A Data-Driven Evolution.
              </span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-lg font-medium">
              IPM is not a product — it is a philosophy of precision. Q-Zone's programme replaces reactive chemical dependency with a structured, evidence-based framework that produces verifiable, audit-ready results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/precision-quote"
                className="flex items-center gap-2 text-white font-bold px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm transition-all hover:opacity-90 shadow-blue-glow group"
                style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
              >
                Request an IPM Audit
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#five-stages"
                className="flex items-center gap-2 text-white font-bold px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm border border-white/50 hover:bg-white/10 transition-all"
              >
                View the Framework <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Right: Stats glass panel */}
          <div className="rounded-3xl p-5 sm:p-8 shadow-ambient border border-white/10 bg-white/5 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Programme Outcomes</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { val: '9-Step', label: 'Structured Protocol', icon: ClipboardCheck },
                { val: '100%', label: 'Audit Traceability', icon: FileText },
                { val: '6', label: 'Diagnostic Protocols', icon: FlaskConical },
                { val: '0', label: 'Ghost Visits Tolerated', icon: CheckCircle2 },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={14} className="text-cyan-400" />
                      <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">{item.label}</span>
                    </div>
                    <p className="text-3xl font-display font-extrabold text-white">{item.val}</p>
                  </div>
                );
              })}
            </div>
            <div className="border-t border-white/10 pt-5">
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-3">Supports Compliance With</p>
              <div className="flex flex-wrap gap-2">
                {complianceBadges.map(badge => (
                  <span key={badge} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md text-cyan-400 bg-cyan-500/10 border border-cyan-500/25">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          DEFINITION BANNER — 3 pillars
      ════════════════════════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 md:px-8 border-b border-white/10" style={{ background: '#00243A' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: TrendingDown, title: 'Prevention Over Reaction', body: 'IPM prioritizes structural and environmental controls over chemical treatments, reducing long-term operational cost and risk.' },
            { icon: Database, title: 'Data-Driven Decisions', body: 'Every intervention is justified by monitoring data. Threshold-based action eliminates the over-application of pesticides.' },
            { icon: Shield, title: 'Compliance by Design', body: 'The programme architecture is specifically engineered to produce the documented evidence required for ISO, BRCGS, and SALSA audits.' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10">
                  <Icon size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          IPM CYCLE DIAGRAM — Visual infographic
      ════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8 border-t border-white/10" style={{ background: '#001C3D' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Eyebrow icon={FlaskConical}>The 9-Step Protocol</Eyebrow>
            <h2 className="text-3xl md:text-4xl sm:text-5xl font-display font-extrabold text-white mt-6 mb-4">
              The IPM <span className="text-cyan-400">Continuous Cycle</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Unlike one-off treatments, our IPM protocol is a continuous, data-driven cycle. Every step feeds into the next, ensuring your environment remains permanently protected.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative mt-12 mb-16 max-w-4xl mx-auto">
            {/* The vertical line */}
            <div className="absolute left-6 md:left-12 top-6 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 via-indigo-500/30 to-transparent"></div>

            <div className="space-y-12">
              {[
                { 
                  step: 'Step 1', 
                  title: 'Comprehensive Inspection', 
                  desc: 'Our certified surveyors perform a full architectural gap-map and ingress audit. We analyze the complete building envelope—inspecting rooflines, cavity walls, pipe runs, and conduit routes—to identify every physical pathway through which pests can enter.', 
                  icon: Search, 
                  color: 'from-cyan-500/20 to-blue-600/20',
                  borderColor: 'border-cyan-400/50',
                  iconColor: 'text-cyan-400' 
                },
                { 
                  step: 'Step 2', 
                  title: 'Biological Identification', 
                  desc: 'Reactive treatment is hazardous without exact profiling. We taxonomically identify observed organisms to understand their specific habitats, behaviors, and dietary needs. This allows us to select precision controls tailored exclusively to the confirmed species.', 
                  icon: Microscope, 
                  color: 'from-blue-500/20 to-indigo-600/20',
                  borderColor: 'border-blue-400/50',
                  iconColor: 'text-blue-400' 
                },
                { 
                  step: 'Step 3', 
                  title: 'Targeted Action/Treatment', 
                  desc: 'When an active outbreak is confirmed, we execute surgical interventions. We prioritize physical exclusion and habitat modification first, deploying low-toxicity, PCPB-approved treatments solely where necessary to minimize systemic risk.', 
                  icon: ShieldAlert, 
                  color: 'from-indigo-500/20 to-violet-600/20',
                  borderColor: 'border-indigo-400/50',
                  iconColor: 'text-indigo-400' 
                },
                { 
                  step: 'Step 4', 
                  title: 'Continuous Monitoring', 
                  desc: 'Monitoring is the backbone of accountable IPM. We deploy QR-verified monitoring stations and utilize the Insectram digital platform for real-time tracking, verifying technician routes and preventing ghost visits while maintaining ISO-ready audit trails.', 
                  icon: Activity, 
                  color: 'from-violet-500/20 to-cyan-600/20',
                  borderColor: 'border-violet-400/50',
                  iconColor: 'text-violet-400' 
                },
              ].map((node, i) => {
                const Icon = node.icon;
                return (
                  <div key={i} className="relative pl-20 md:pl-32 pr-2 group">
                    {/* Timeline Dot */}
                    <div className={`absolute left-6 md:left-12 top-1/2 -translate-y-1/2 -ml-6 md:-ml-7 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#001C3D] flex flex-col items-center justify-center z-10`}>
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${node.color} border-2 ${node.borderColor} flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.15)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300`}>
                        <Icon size={24} className={node.iconColor} />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="rounded-2xl p-6 md:p-8 border border-white/10 bg-white/5 backdrop-blur-sm shadow-ambient hover:border-cyan-500/30 transition-all duration-300 group-hover:bg-white/10 relative overflow-hidden">
                      <div className="absolute -right-4 -bottom-4 opacity-[0.03] pointer-events-none transform group-hover:scale-110 group-hover:opacity-10 transition-all duration-500 text-white">
                        <Icon size={140} />
                      </div>
                      <div className="relative z-10">
                        <span className={`text-xs font-black uppercase tracking-widest ${node.iconColor} mb-3 block`}>{node.step}</span>
                        <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-4 leading-tight">{node.title}</h3>
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base font-medium">
                          {node.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Explanation callout */}
          <div className="mt-16 rounded-2xl p-6 bg-cyan-500/5 border border-cyan-500/20 flex flex-col sm:flex-row gap-5 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
              <Shield size={20} className="text-cyan-400" />
            </div>
            <div>
              <p className="text-white font-black text-base mb-1">Unbroken Chain of Protection</p>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Traditional pest control is linear: treat and leave. IPM is circular: each cycle generates new data that sharpens the next inspection, refines identification, and makes every subsequent intervention more precise. Programmes improve compounding over months — not just visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5-STAGE FRAMEWORK
      ════════════════════════════════════════════════════════════ */}
      <section id="five-stages" className="py-12 md:py-24 px-4 md:px-8 w-full" style={{ background: '#001C3D' }}>
        <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <div className="mb-6">
            <Eyebrow icon={ClipboardCheck}>The Q-Zone Framework</Eyebrow>
          </div>
          <h2 className="text-4xl md:text-4xl sm:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
            The 9-Step{' '}
            <span className="text-cyan-400">IPM Protocol</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            A rigorous, sequential methodology. Each stage builds directly upon the last, creating a compounding programme that improves with every cycle.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === idx;
            return (
              <div
                key={stage.number}
                onClick={() => setActiveStage(isActive ? null : idx)}
                role="button"
                aria-expanded={isActive}
                className="cursor-pointer rounded-2xl p-5 sm:p-8 border transition-all duration-300 bg-white/5 border-white/10 hover:border-cyan-500/30 hover:bg-white/8"
                style={isActive ? { borderColor: 'rgba(0,69,110,0.6)', background: 'rgba(0,69,110,0.15)' } : {}}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Icon + number */}
                  <div className="flex-shrink-0 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3 lg:w-28">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/15 flex-shrink-0">
                      <Icon size={24} className="text-cyan-400" />
                    </div>
                    <span className="text-5xl lg:text-4xl sm:text-6xl font-display font-extrabold leading-none text-white/15">
                      {stage.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                      <h3 className="text-2xl lg:text-3xl font-display font-extrabold text-white">{stage.title}</h3>
                      <span className="hidden sm:block text-cyan-500 text-xs font-bold">—</span>
                      <span className="text-sm font-semibold text-slate-300">{stage.subtitle}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4 font-medium">{stage.description}</p>

                    {/* Expandable section */}
                    <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="border-t border-white/10 pt-6 mt-2">
                        <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">Key Actions</p>
                        <ul className="flex flex-col gap-3 mb-6">
                          {stage.keyActions.map((action, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-cyan-400" />
                              <span className="text-slate-200 text-sm leading-relaxed font-medium">{action}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Infestation Levels — shown in step 04 */}
                        {stage.infestationLevels && (
                          <div className="mb-6">
                            <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Infestation Level Scale</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {stage.infestationLevels.map(({ level, color, desc }) => (
                                <div key={level} className={`rounded-xl p-4 border ${color} flex items-start gap-3`}>
                                  <span className={`text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded border ${color} flex-shrink-0`}>{level}</span>
                                  <p className="text-slate-300 text-xs leading-relaxed">{desc}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Six Diagnostic Questions — embedded in Evaluate step 05 */}
                        {stage.diagnosticQuestions && (
                          <div className="mb-6">
                            <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">The 6 Diagnostic Questions</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {diagnosticQuestions.map((q) => {
                                const QIcon = q.icon;
                                return (
                                  <div key={q.number} className="rounded-xl p-4 bg-white/5 border border-white/10 hover:border-cyan-500/25 transition-all">
                                    <div className="flex items-center gap-2 mb-2">
                                      <QIcon size={13} className="text-cyan-400 flex-shrink-0" />
                                      <span className="text-white font-bold text-sm">{q.question}</span>
                                    </div>
                                    <p className="text-slate-400 text-xs leading-relaxed">{q.rationale}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        <div className="rounded-xl px-5 py-4 bg-cyan-500/5 border border-cyan-500/20">
                          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Stage Outcome</p>
                          <p className="text-white text-sm font-semibold leading-relaxed">{stage.outcome}</p>
                        </div>
                      </div>
                    </div>

                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors mt-4">
                      <ChevronRight size={14} className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
                      {isActive ? 'Hide Details' : 'View Key Actions'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-500 font-bold uppercase tracking-widest mt-10">
          Click any step to expand its key actions and outcome
        </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          WHAT EVERY Q-ZONE PROGRAMME INCLUDES
      ════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8 relative overflow-hidden" style={{ background: '#001C3D' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #00456E 0%, transparent 60%)' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="mb-6">
              <Eyebrow icon={CheckCircle2}>Every Q-Zone Programme</Eyebrow>
            </div>
            <h2 className="text-4xl md:text-4xl sm:text-5xl font-display font-extrabold text-white mb-6 leading-tight">
              What Every Programme{' '}
              <span className="text-cyan-400">Includes</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Every Q-Zone IPM programme — regardless of sector or scale — delivers the same nine core components as standard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {programmeIncludes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl p-5 bg-white/5 border border-white/10 hover:border-cyan-500/25 hover:bg-white/8 transition-all">
                <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-200 text-sm font-semibold leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SIX CRITICAL DIAGNOSTIC QUESTIONS — Standalone Reference
      ════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8 relative overflow-hidden" style={{ background: '#001C3D' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #00456E 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="mb-6">
              <Eyebrow icon={FlaskConical}>Diagnostic Protocol</Eyebrow>
            </div>
            <h2 className="text-4xl md:text-4xl sm:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
              Six Questions We Ask{' '}
              <span className="text-cyan-400">Every Time</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Before any intervention is recommended, our technicians systematically answer these six questions. The rigour of this diagnostic process is what separates precision management from guesswork.
            </p>
          </div>

          {/* Glass panel wrapping the 6 cards */}
          <div className="rounded-3xl p-5 sm:p-8 lg:p-12 border border-white/10 bg-white/5 backdrop-blur-sm shadow-ambient">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {diagnosticQuestions.map((q) => {
                const Icon = q.icon;
                return (
                  <div
                    key={q.number}
                    className="rounded-xl p-6 bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/8 transition-all duration-300 group"
                  >
                    {/* Icon + number */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/25 flex-shrink-0">
                        <Icon size={16} className="text-cyan-400" />
                      </div>
                      <span className="text-3xl font-display font-extrabold leading-none text-white/20">
                        {q.number}
                      </span>
                    </div>
                    <h4 className="font-display font-extrabold text-white text-lg mb-3 leading-snug group-hover:text-cyan-400 transition-colors">
                      {q.question}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      {q.rationale}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom principle note */}
            <div className="mt-8 rounded-2xl p-6 bg-cyan-500/5 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/25">
                <Database size={18} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-1">Every question. Every visit. Every site.</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  This six-question protocol is enforced at every service visit, not just the initial survey. Consistent diagnostic rigour is what drives programme improvement over time and keeps your compliance documentation current.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          COMPLIANCE & CERTIFICATION SECTION
      ════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Checklist */}
          <div>
            <div className="mb-6">
              <Eyebrow icon={Building2}>Audit Performance</Eyebrow>
            </div>
            <h2 className="text-4xl md:text-4xl sm:text-5xl font-display font-extrabold text-white mb-6 leading-tight">
              Built to Pass the{' '}
              <span className="text-cyan-400">Strictest Audits</span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8 font-medium text-lg">
              The Q-Zone IPM programme is not designed around minimum compliance — it is designed to be the single most reliable piece of evidence in your audit pack. Every stage, every visit, and every diagnostic question generates the documentation your certification body requires.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              {[
                'Fully documented service reports after every visit',
                'Trend analysis graphs included in your monthly review',
                'Site Risk Register maintained and updated continuously',
                'Zero-falsification QR verification on all monitoring points',
                'Pre-formatted export for ISO 22000 and BRCGS audit packs',
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 font-medium text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/precision-quote"
              className="inline-flex items-center gap-2 text-white font-bold px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm transition-all hover:opacity-90 shadow-blue-glow group"
              style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
            >
              Start Your IPM Programme
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Certification grid */}
          <div className="rounded-3xl p-5 sm:p-8 lg:p-10 border border-white/10 bg-white/5 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Certification Standards Supported</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'ISO 22000', desc: 'Food Safety Management Systems' },
                { name: 'BRCGS', desc: 'Global Food Safety Standard' },
                { name: 'SALSA', desc: 'Safe & Local Supplier Approval' },
                { name: 'Red Tractor', desc: 'UK Agricultural Assurance' },
                { name: 'PCPB', desc: 'Pest Control Products Board (KE)' },
                { name: 'NEMA', desc: 'National Environment Management' },
              ].map(({ name, desc }) => (
                <div
                  key={name}
                  className="rounded-xl p-5 border border-white/10 bg-white/5 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <p className="text-lg font-display font-extrabold mb-1 text-white">{name}</p>
                  <p className="text-slate-300 text-xs font-medium leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OPERATIONAL SAFETY ── */}
      <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          
          {/* Left: PPE and Safety Section */}
          <div className="glass-panel rounded-3xl p-5 sm:p-8 lg:p-10 border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="mb-6">
              <Eyebrow icon={Shield}>Operational Safety</Eyebrow>
            </div>
            <h3 className="text-3xl font-display font-extrabold text-white mb-6">
              Safety, Equipment &amp; PPE Standards
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6 font-semibold">
              Our teams use appropriate PPE, inspection tools, monitoring systems, and treatment equipment based on the site risk and service plan.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Q-Zone field personnel strictly adhere to certified hazard-containment protocols. Depending on the service environment, operations mandate the use of personal protective equipment including full-face dual-cartridge respirators, chemical-resistant coveralls, and steel-toe safety footwear. All equipment and air-monitoring instruments undergo routine testing and calibration to guarantee compliance-level security across every commercial and residential site.
            </p>
            <div className="rounded-xl p-4 bg-cyan-950/20 border border-cyan-500/20 text-xs text-slate-400 font-semibold leading-relaxed">
              <span className="text-cyan-400 font-black">Information Governance Note:</span> Detailed chemical dosages and rodenticide application instructions are omitted to prevent unsafe application. All actions comply with PCPB-registered formulations.
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════ */}
      <section
        className="py-12 md:py-28 px-4 md:px-8 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #001C3D 0%, #00243A 100%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, #00456E 0%, transparent 65%)' }} />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="mb-8">
            <Eyebrow icon={Zap}>Take the First Step</Eyebrow>
          </div>
          <h2 className="text-4xl md:text-4xl sm:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
            Ready to Implement a{' '}
            <span className="text-cyan-400">True IPM Programme?</span>
          </h2>
          <p className="text-slate-300 text-lg font-medium mb-12 max-w-xl leading-relaxed">
            Our team will conduct a full site survey, build your Site Risk Register, and have your programme live within days — not weeks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/precision-quote"
              className="flex items-center gap-2 text-white font-bold px-10 py-5 rounded-full text-base transition-all hover:opacity-90 shadow-blue-glow group"
              style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
            >
              Request a Site Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-white font-bold px-10 py-5 rounded-full text-base border border-white/50 hover:bg-white/10 transition-all"
            >
              Discuss a Commercial Programme
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
