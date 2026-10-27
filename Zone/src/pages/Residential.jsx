import React from 'react';
import { Home, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Residential() {
  return (
    <div className="bg-surface min-h-screen">
      <section className="bg-primary text-onPrimary pt-32 pb-48 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto z-10 relative">
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold mb-6">Residential Protection</h1>
          <p className="text-2xl text-onPrimary/80 max-w-2xl leading-relaxed">
            Your home is a sanctuary. We keep it that way with impenetrable biological barriers and meticulous inspection.
          </p>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary-gradient opacity-10 blur-3xl mix-blend-screen"></div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 -mt-24 max-w-7xl mx-auto relative z-20 pb-32">
        <div className="grid md:grid-cols-3 gap-8">
           {[
             {title: 'Quarterly Defense', desc: '4 visits a year to maintain the exterior perimeter barrier.'},
             {title: 'Targeted Eradication', desc: 'Surgical removal of existing interior nests.'},
             {title: 'Mosquito Shield', desc: 'Disrupting the breeding cycle using safe growth inhibitors.'}
           ].map((plan, i) => (
             <div key={i} className="glass-panel p-6 sm:p-8 lg:p-10 rounded-2xl shadow-ambient border-t-[6px] border-t-secondary ghost-border hover:-translate-y-2 transition-transform cursor-pointer">
                <Home className="text-primaryContainer mb-6" size={40} />
                <h3 className="text-2xl font-display font-bold text-onSurface mb-4">{plan.title}</h3>
                <p className="text-onSurfaceVariant leading-relaxed">{plan.desc}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
