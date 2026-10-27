import React, { useState, useMemo, useEffect } from 'react';
import bgPestLibrary from '../assets/optimized/pest-library.webp';
import pestFallback from '../assets/optimized/pest-library.webp';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search, Bug, ArrowRight, ShieldCheck, AlertTriangle,
  ChevronRight, Filter
} from 'lucide-react';
import pestData from '../data/pestData';

/* ── Risk badge colour map ──────────────────────────────────── */
function riskColor(level) {
  switch (level) {
    case 'Critical': return 'text-rose-400 border-rose-500/40 bg-rose-500/10';
    case 'High':     return 'text-amber-400 border-amber-500/40 bg-amber-500/10';
    case 'Medium':   return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10';
    case 'Low':      return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    default:         return 'text-slate-400 border-white/10 bg-white/5';
  }
}

/* ── Category list for filter chips ─────────────────────────── */
const categories = ['All', ...new Set(pestData.map(p => p.category))];

export default function PestLibrary() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Helper to match category slug case-insensitively
  const getCategoryFromSlug = (slug) => {
    if (!slug) return null;
    const cleaned = slug.toLowerCase().replace(/_/g, '-');
    for (const cat of categories) {
      const catSlug = cat.toLowerCase().replace(/\s+/g, '-');
      if (catSlug === cleaned || cat.toLowerCase() === cleaned) {
        return cat;
      }
    }
    return null;
  };

  const initialCategory = useMemo(() => {
    const catParam = searchParams.get('category') || searchParams.get('filter');
    const matched = getCategoryFromSlug(catParam);
    return matched || 'All';
  }, [searchParams]);

  const [searchTerm, setSearchTerm] = useState(() => searchParams.get('search') || '');
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  /* Re-sync when the query parameters change */
  useEffect(() => {
    const searchParam = searchParams.get('search');
    const catParam = searchParams.get('category') || searchParams.get('filter');

    if (searchParam !== null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSearchTerm(searchParam);
      setActiveCategory('All');
    } else if (catParam !== null) {
      const matched = getCategoryFromSlug(catParam);
      if (matched) {
        setActiveCategory(matched);
        setSearchTerm('');
      }
    } else {
      // If no query parameters, check if search term was cleared
      if (!searchParam) {
        setSearchTerm('');
      }
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    return pestData.filter(pest => {
      const matchesSearch =
        pest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pest.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pest.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || pest.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen text-white" style={{ background: '#001C3D' }}>

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section
        className="relative w-full py-24 px-4 sm:px-6 md:px-8 overflow-hidden bg-cover bg-center bg-no-repeat bg-[#001C3D]"
        style={{ backgroundImage: `url(${bgPestLibrary})` }}
      >
        {/* Decorative */}
        <div className="absolute -top-28 -right-28 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00456E 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0097C4 0%, transparent 65%)' }} />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }} />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-6">
            <Bug size={11} /> Biological Index
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white mb-5 tracking-tight leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Pest <span className="text-cyan-400">Library</span>
          </h1>
          <p className="text-white text-xl font-semibold max-w-2xl mx-auto leading-relaxed mb-12 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            A comprehensive technical directory of {pestData.length} common pests — with species profiles, infestation indicators, and Q-Zone's precision control protocols.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search by pest name, scientific name, or category…"
              className="w-full pl-13 pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-slate-500 font-semibold text-base focus:outline-none focus:border-cyan-400/60 focus:bg-white/8 transition-all shadow-ambient"
            />
          </div>
        </div>
      </section>

      {/* ══ FILTER CHIPS ════════════════════════════════════════ */}
      <section className="py-6 px-4 md:px-8 border-b border-white/10" style={{ background: '#00243A' }}>
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto scroll-smooth hide-scrollbar pb-2">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest shrink-0 mr-2">
            <Filter size={12} /> Filter:
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSearchTerm('');
                if (cat === 'All') {
                  setSearchParams({}, { replace: true });
                } else {
                  const slug = cat.toLowerCase().replace(/\s+/g, '-');
                  setSearchParams({ category: slug }, { replace: true });
                }
              }}
              className={`whitespace-nowrap shrink-0 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest border transition-all duration-200 glass-panel
                ${activeCategory === cat
                  ? 'text-white border-cyan-400 bg-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                  : 'text-slate-300 border-white/10 bg-[#001C3D]/60 hover:text-white hover:border-white/25 hover:bg-[#001C3D]/80'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ══ PEST GRID ══════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 md:px-8" style={{ background: '#001C3D' }}>
        <div className="max-w-7xl mx-auto">

          {/* Active filter banner — shown when ?search= param is set */}
          {searchParams.get('search') && (
            <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-xl border border-cyan-500/30 bg-cyan-500/8">
              <Filter size={14} className="text-cyan-400 flex-shrink-0" />
              <p className="text-sm font-bold text-white flex-1">
                Showing results for:{' '}
                <span className="text-cyan-400">{searchParams.get('search')}</span>
              </p>
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); setSearchParams({}, { replace: true }); }}
                className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
              >
                Clear ✕
              </button>
            </div>
          )}

          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-slate-400 text-sm font-bold">
              Showing <span className="text-white font-black">{filtered.length}</span> of {pestData.length} pests
            </p>
            {searchTerm && !searchParams.get('search') && (
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); setSearchParams({}, { replace: true }); }}
                className="text-cyan-400 text-xs font-black uppercase tracking-widest hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <AlertTriangle size={40} className="text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-display font-black text-white mb-2">No results found</h3>
              <p className="text-slate-300 font-semibold">Try adjusting your search term or clearing the category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map(pest => (
                <Link
                  key={pest.id}
                  to={`/library/${pest.id}`}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5
                    hover:border-cyan-400/50 hover:bg-white/8 hover:-translate-y-1
                    hover:shadow-[0_0_28px_rgba(0,212,255,0.10)]
                    transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative w-full h-44 overflow-hidden">
                    <img
                      src={pest.image}
                      alt={pest.name}
                      loading="lazy"
                      decoding="async"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = pestFallback;
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ filter: 'brightness(0.55) saturate(0.5)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001C3D] via-[#001C3D]/30 to-transparent" />

                    {/* Risk badge */}
                    <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${riskColor(pest.riskLevel)}`}>
                      {pest.riskLevel}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{pest.category}</p>
                    <h3 className="text-lg font-display font-black text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {pest.name}
                    </h3>
                    <p className="text-cyan-500/70 text-xs font-semibold italic mb-3">{pest.scientificName}</p>
                    <p className="text-slate-300 text-xs leading-relaxed flex-1 line-clamp-2">{pest.characteristics}</p>

                    {/* View details link */}
                    <div className="flex items-center gap-1.5 mt-4 text-cyan-400 text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all">
                      View Profile <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom accent on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400/0 group-hover:bg-cyan-400/40 transition-all duration-300" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══ BOTTOM CTA ════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 md:px-8 border-t border-white/10" style={{ background: '#00243A' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.18em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-6">
            <ShieldCheck size={11} /> Can't find your pest?
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4">
            Not listed? We've still got you covered.
          </h2>
          <p className="text-slate-200 text-base font-semibold leading-relaxed mb-8 max-w-xl mx-auto">
            Our technicians can identify and manage a wide range of pest species encountered in Kenya. Book a diagnostic audit and we'll identify the threat on-site.
          </p>
          <Link
            to="/precision-quote"
            className="inline-flex items-center gap-2 text-white font-black px-4 sm:px-6 md:px-8 py-4 rounded-full text-sm hover:opacity-90 transition-all shadow-blue-glow group"
            style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
          >
            Request a Diagnostic Audit
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
