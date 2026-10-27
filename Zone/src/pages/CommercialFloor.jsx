import React from 'react';
import { Droplets, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CommercialFloor() {
  return (
    <div className="bg-surface min-h-screen pb-32">
      <section className="relative w-full h-[60vh] min-h-[500px]">
        <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80" alt="Industrial Drain" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-x-8 bottom-16 max-w-7xl mx-auto z-10 text-onPrimary">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold mb-4 leading-none">Floor &<br/> Drain Cleaning</h1>
          <p className="text-xl max-w-2xl text-onPrimary/70">Sub-surface eradication of breeding grounds. We treat the unseen architecture of your facility.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-24 grid md:grid-cols-2 gap-16">
        <div>
           <Droplets className="text-secondary mb-6" size={48} />
           <h2 className="text-4xl font-display font-bold text-onSurface mb-6">Enzyme Pathogen Neutralization</h2>
           <p className="text-lg text-onSurfaceVariant leading-relaxed">
             We use proprietary biological foaming agents that eat away the organic sludge fly larvae rely on. This isn't just cleaning; it's habitat destruction.
           </p>
        </div>
        <div className="glass-panel p-12 rounded-3xl bg-surfaceContainerLow ghost-border shadow-ambient relative">
          <ShieldCheck className="absolute top-8 right-8 text-primaryContainer/20" size={100} />
          <h3 className="text-2xl font-display font-bold text-onSurface mb-4">FDA/USDA Compliant</h3>
          <p className="text-onSurfaceVariant mb-8 relative z-10">
            Our processes use food-safe, non-toxic bioenzymes approved for continuous facility operations.
          </p>
          <button className="text-primary font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all relative z-10">
            View Compliance Data <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
