import * as lucide from 'lucide-react';
const all = Object.keys(lucide);
const social = all.filter(k => k.toLowerCase().includes('facebook') || k.toLowerCase().includes('linkedin') || k.toLowerCase().includes('instagram'));
console.log('Social icons:', social);
console.log('Total icons:', all.length);
