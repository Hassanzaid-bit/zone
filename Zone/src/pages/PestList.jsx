import React from 'react';
import { Search } from 'lucide-react';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const pestsList = [
  "Ants (Carpenter)", "Ants (Fire)", "Bed Bugs", "Beetles", "Cockroaches (German)", 
  "Cockroaches (American)", "Crickets", "Earwigs", "Fleas", "Flies", "Mice", "Moths", 
  "Mosquitoes", "Rats", "Silverfish", "Spiders", "Termites", "Ticks", "Wasps"
];

export default function PestList() {
  return (
    <div className="bg-surfaceContainerLow min-h-screen flex flex-col md:flex-row">
      {/* A-Z Sidebar */}
      <div className="hidden md:flex flex-col w-24 border-r border-outlineVariant/15 py-12 items-center bg-surfaceContainerLowest sticky top-0 h-screen overflow-y-auto">
        {alphabet.map(letter => (
          <span key={letter} className="text-sm font-bold text-onSurfaceVariant/50 hover:text-primary cursor-pointer py-2 transition-colors">
            {letter}
          </span>
        ))}
      </div>

      <div className="flex-1 p-5 sm:p-8 md:p-24 relative">
        <div className="flex justify-between items-end mb-16">
           <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-onSurface">Technical Profile<br/><span className="text-primary">Directory</span></h1>
           <div className="glass-panel ghost-border px-4 py-2 rounded-full flex items-center gap-2 shadow-sm bg-surfaceContainerHighest">
             <Search size={18} className="text-onSurfaceVariant" />
             <input type="text" placeholder="Search taxonomic log..." className="bg-transparent border-none outline-none text-sm placeholder:text-onSurfaceVariant font-medium w-48" />
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-outlineVariant/15 pt-8">
           {pestsList.map(pest => (
             <div key={pest} className="group flex flex-col justify-between p-6 bg-surfaceContainerLowest rounded-xl ghost-border hover:shadow-ambient cursor-pointer transition-all">
                <span className="font-display font-bold text-lg text-onSurface">{pest}</span>
                <span className="text-xs font-bold text-primary uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity">View Profile +</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
