import React, { useRef } from 'react';
import bgResources from '../assets/optimized/DSC08000-hero.webp';
import { Link } from 'react-router-dom';
import { resourcesList } from '../data/resourcesData';
import { ArrowRight, ArrowLeft, ExternalLink, BookOpen, Bug, ShieldCheck, Home, Factory, Leaf } from 'lucide-react';

/* ── Category carousel data ─────────────────────────────────────── */
const categories = [
  {
    id: 'ipm',
    title: 'Integrated Pest Management',
    description: 'Discover how our science-led IPM cycle replaces reactive chemical treatments with precision, accountability, and continuously improving protocols.',
    icon: ShieldCheck,
    accent: 'from-cyan-500/30 to-blue-700/30',
    border: 'border-cyan-500/30',
    link: '/ipm',
    isExternal: false,
  },
  {
    id: 'compliance',
    title: 'Commercial Compliance',
    description: 'BRCGS, SALSA, ISO 22000 — stay ahead of audits with our guides tailored for food manufacturers, hospitality operators, and logistics hubs.',
    icon: Factory,
    accent: 'from-indigo-500/30 to-violet-700/30',
    border: 'border-indigo-500/30',
    link: '/sectors/food-manufacturing',
    isExternal: false,
  },
  {
    id: 'residential',
    title: 'Residential Safety',
    description: 'Protect your home, family, and investment. In-depth guides on termite barriers, rodent exclusion, and child-safe treatment protocols.',
    icon: Home,
    accent: 'from-emerald-500/30 to-teal-700/30',
    border: 'border-emerald-500/30',
    link: '/residential/apartments',
    isExternal: false,
  },
  {
    id: 'technology',
    title: 'Insectram Technology',
    description: 'How QR-verified traps, GPS-stamped technician visits, and real-time dashboards are making pest control fully transparent and audit-ready.',
    icon: Bug,
    accent: 'from-amber-500/30 to-orange-700/30',
    border: 'border-amber-500/30',
    link: 'https://www.insectram.co.uk',
    isExternal: true,
  },
  {
    id: 'environment',
    title: 'Eco & Responsible Pest Control',
    description: 'Why responsible pesticide stewardship protects biodiversity and why our targeted approach is better for Kenya\'s ecosystem long term.',
    icon: Leaf,
    accent: 'from-lime-500/30 to-green-700/30',
    border: 'border-lime-500/30',
    link: '/ipm',
    isExternal: false,
  },
];

/* ── Arrow Button ───────────────────────────────────────────────── */
function ArrowBtn({ dir, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 'left' ? 'Scroll left' : 'Scroll right'}
      className="flex-shrink-0 w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-slate-300 hover:bg-cyan-500/20 hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
    >
      {dir === 'left' ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
    </button>
  );
}

/* ── Category pill badge ────────────────────────────────────────── */
function CategoryPill({ label }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
      {label}
    </span>
  );
}

export default function Resources() {
  const catRef = useRef(null);
  const artRef = useRef(null);

  const scrollCat = (dir) => {
    if (!catRef.current) return;
    const amount = catRef.current.offsetWidth * 0.8;
    catRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  const scrollArt = (dir) => {
    if (!artRef.current) return;
    const amount = artRef.current.offsetWidth * 0.8;
    artRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white" style={{ background: '#001C3D' }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden py-24 md:py-32 px-4 md:px-10 border-b border-white/10 bg-cover bg-center bg-no-repeat bg-[#001C3D]"
        style={{ backgroundImage: `url(${bgResources})` }}
      >
        {/* Blueprint grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }} />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0097C4 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-6">
            <BookOpen size={11} /> Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-5 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Pest Control &amp; <span className="text-cyan-400">Industry Resources</span>
          </h1>
          <p className="text-white text-lg md:text-xl leading-relaxed font-semibold max-w-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Explore a curated mix of Q-Zone guidance and third-party industry reading on pest management, compliance, monitoring technology, and responsible control.
          </p>
        </div>
      </section>

      {/* ── CAROUSEL 1: Categories ───────────────────────────────── */}
      <section className="py-14 md:py-20 px-4 md:px-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          {/* Header row */}
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-2">Browse by Topic</p>
              <h2 className="text-2xl md:text-3xl font-display font-black text-white leading-tight">
                Choose Your Area of Interest
              </h2>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <ArrowBtn dir="left"  onClick={() => scrollCat('left')}  />
              <ArrowBtn dir="right" onClick={() => scrollCat('right')} />
            </div>
          </div>

          {/* Scrollable track */}
          <div
            ref={catRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const Wrapper = cat.isExternal ? 'a' : Link;
              const wrapperProps = cat.isExternal
                ? { href: cat.link, target: '_blank', rel: 'noopener noreferrer' }
                : { to: cat.link };
              return (
                <Wrapper
                  key={cat.id}
                  {...wrapperProps}
                  className={`snap-start flex-shrink-0 w-[80vw] sm:w-[46vw] md:w-[36vw] lg:w-[28vw] xl:w-[22vw] rounded-2xl p-7 border ${cat.border} bg-gradient-to-br ${cat.accent} backdrop-blur-sm flex flex-col gap-5 group hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon size={22} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-black text-white mb-3 leading-snug group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      {cat.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-black text-cyan-400 uppercase tracking-widest group-hover:gap-3 transition-all">
                    {cat.isExternal ? 'Visit Resource' : 'Explore Topic'} {cat.isExternal ? <ExternalLink size={13} /> : <ArrowRight size={13} />}
                  </span>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CAROUSEL 2: Curated Reading ───────────────────────────── */}
      <section className="py-14 md:py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header row */}
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-2">Curated Reading</p>
              <h2 className="text-2xl md:text-3xl font-display font-black text-white leading-tight">
                Research & Industry Sources
              </h2>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <ArrowBtn dir="left"  onClick={() => scrollArt('left')}  />
              <ArrowBtn dir="right" onClick={() => scrollArt('right')} />
            </div>
          </div>

          {/* Scrollable track */}
          <div
            ref={artRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {resourcesList.map((resource) => (
              <div
                key={resource.id}
                className="snap-start flex-shrink-0 w-[85vw] sm:w-[46vw] md:w-[36vw] lg:w-[28vw] xl:w-[22vw] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col overflow-hidden hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-300"
              >
                {/* Colour accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 to-indigo-500" />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Meta row */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <CategoryPill label={resource.category} />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">External reading</span>
                  </div>

                  <h3 className="text-lg font-display font-black text-white leading-snug">
                    {resource.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {resource.description}
                  </p>

                  {/* Individual source links */}
                  <div className="flex flex-col gap-2 mt-auto pt-2 border-t border-white/10">
                    {resource.sources.map((src, i) => (
                      <a
                        key={i}
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-white transition-colors group/src truncate"
                      >
                        <ExternalLink size={11} className="flex-shrink-0" />
                        <span className="truncate">{src.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-4 md:px-10 border-t border-white/10" style={{ background: '#001020' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-black text-white mb-2">Need help applying this guidance?</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Talk to our technical team about the pest risks, compliance requirements, or monitoring approach relevant to your site.
            </p>
          </div>
          <Link
            to="/contact"
            className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 text-center text-white font-black px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm hover:opacity-90 transition-all shadow-blue-glow group"
            style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
          >
            Ask Our Technical Team <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
