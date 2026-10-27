/**
 * ThreatCard — Shared clickable threat/vector card for Commercial and Residential pages.
 *
 * Props:
 *   icon       — React element (Lucide icon)
 *   label      — string threat title
 *   desc       — string short description
 *   pestFilter — string to pass as ?search= query param on /library
 *                e.g. "rodent", "cockroach", "bed bug"
 *                Matches against pest name, scientific name, or category.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ThreatCard({ icon, label, desc, category, pestFilter }) {
  const navigate = useNavigate();

  const href = category
    ? `/library?category=${encodeURIComponent(category)}`
    : (pestFilter ? `/library?search=${encodeURIComponent(pestFilter)}` : '/library');

  const handleClick = () => navigate(href);
  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKey}
      aria-label={`${label} — view in Pest Library`}
      className={[
        'group relative glass-panel rounded-2xl p-6 border border-white/10 cursor-pointer',
        'hover:border-cyan-500/50 hover:bg-white/8 hover:-translate-y-1',
        'focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#001C3D]',
        'transition-all duration-300 select-none',
      ].join(' ')}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20
                        flex items-center justify-center text-red-400
                        group-hover:bg-red-500/20 transition-colors">
          {icon}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="text-white font-bold text-lg mb-1 leading-snug
                           group-hover:text-cyan-300 transition-colors">
              {label}
            </h4>
            {/* Arrow indicator — shown on hover */}
            <ArrowUpRight
              size={16}
              className="flex-shrink-0 mt-1 text-cyan-400 opacity-0 group-hover:opacity-100
                         -translate-x-1 group-hover:translate-x-0
                         transition-all duration-300"
              aria-hidden="true"
            />
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>

          {/* "View in Pest Library" inline hint */}
          <p className="mt-2 text-[11px] font-black uppercase tracking-widest
                        text-cyan-500/50 group-hover:text-cyan-400
                        transition-colors duration-200">
            View in Pest Library →
          </p>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl
                      bg-cyan-400/0 group-hover:bg-cyan-400/40
                      transition-all duration-300" />
    </div>
  );
}
