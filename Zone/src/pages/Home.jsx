import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import heroSlide01 from '../assets/optimized/home-carousel/DSC07999.webp';
import heroSlide02 from '../assets/optimized/home-carousel/DSC08037.webp';
import heroSlide03 from '../assets/optimized/home-carousel/DSC08060.webp';
import heroSlide04 from '../assets/optimized/home-carousel/DSC08086.webp';
import heroSlide05 from '../assets/optimized/home-carousel/DSC08118.webp';
import heroSlide06 from '../assets/optimized/home-carousel/DSC08157.webp';
import residentialImg from '../assets/optimized/DSC08108-residential.webp';
import commercialImg from '../assets/optimized/Aperson-commercial.webp';
import fumigationImg from '../assets/background/PestControl_FQU0121.jpg';
import ipmImg from '../assets/background/logo_icon.png';
import {
  ArrowRight, ShieldCheck, QrCode, Activity,
  LineChart, PhoneCall, Zap, TrendingUp, CheckCircle2
} from 'lucide-react';

const changingText = ["Commercial", "Residential", "IPM", "Pest", "Termites", "Rodents", "Mosquitoes", "Cockroaches", "Bed Bugs"];

const heroSlides = [
  heroSlide01,
  heroSlide02,
  heroSlide03,
  heroSlide04,
  heroSlide05,
  heroSlide06,
];

// Dynamically import all company logos
const companyImagesDir = import.meta.glob('../assets/companies/*.{png,jpeg,jpg}', { eager: true });
const companyImages = Object.values(companyImagesDir).map(m => m.default);

// ── Infinite Marquee Component ────────────────────────────────────
function InfiniteMarquee({ images }) {
  // Duplicate enough times to guarantee seamless loop
  const track = [...images, ...images, ...images, ...images];
  return (
    <div className="marquee-track">
      <div className="marquee-strip">
        {track.map((src, idx) => (
          <div key={idx} className="flex-shrink-0 flex items-center justify-center px-4">
            <img
              src={src}
              alt={`Partner ${idx}`}
              loading="lazy"
              decoding="async"
              className="marquee-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const reviews = [
  {
    rating: 5.0,
    quote: "Q-Zone transformed our BRCGS audit readiness overnight. The Insectram platform gives us a live view of every trap and every technician — no more chasing reports. We passed our last audit with zero pest-related non-conformances.",
    name: "James Mwabili",
    role: "Operations Manager",
    company: "NutriFoods Kenya Ltd",
    sector: "FOOD MANUFACTURING",
    serviceType: "BRCGS Audit Program",
    location: "Nairobi",
  },
  {
    rating: 4.8,
    quote: "We had a severe bed bug issue affecting three of our guest suites during peak season. Q-Zone responded within four hours, conducted a professional inspection, and eliminated the problem discreetly. Zero disruption to guests. Exceptional service.",
    name: "Grace Odhiambo",
    role: "General Manager",
    company: "Serenade Boutique Hotel",
    sector: "HOSPITALITY",
    serviceType: "Specialized Bedbug Eradication",
    location: "Mombasa",
  },
  {
    rating: 4.9,
    quote: "As a gated estate management company, pest control used to be a constant complaint from residents. Since switching to Q-Zone's estate programme, we've had zero escalations in 18 months. The monthly digital reports keep our committee fully informed.",
    name: "David Kimani",
    role: "Estate Director",
    company: "Runda Parklands Estate",
    sector: "RESIDENTIAL",
    serviceType: "Gated Estate Program",
    location: "Nairobi",
  },
  {
    rating: 4.6,
    quote: "Our warehouse stores grain products year-round. Before Q-Zone, we had recurring weevil infestations costing thousands in stock losses. Their phosphine fumigation programme has completely eliminated the problem — and the documentation is impeccable.",
    name: "Fatima Hassan",
    role: "Warehouse Manager",
    company: "Coastal Grain Distributors",
    sector: "LOGISTICS & STORAGE",
    serviceType: "Grain Phosphine Fumigation",
    location: "Mombasa",
  },
  {
    rating: 5.0,
    quote: "Q-Zone's team is professional, highly knowledgeable, and genuinely communicates what they're doing and why. The same technician visits every month — by now he knows our building better than most of our staff. That consistency is rare.",
    name: "Ruth Agola",
    role: "Facilities Manager",
    company: "Amara Corporate Towers",
    sector: "CORPORATE REAL ESTATE",
    serviceType: "Integrated Pest Management",
    location: "Nairobi",
  },
  {
    rating: 4.7,
    quote: "We run a paediatric clinic and had a cockroach problem that was unacceptable in our environment. Q-Zone used zero-exposure gel bait protocols completely safe for our patients. Problem solved in two visits. They've been our exclusive pest partner since.",
    name: "Dr. Samuel Ate",
    role: "Clinical Director",
    company: "Sunrise Paediatric Clinic",
    sector: "HEALTHCARE",
    serviceType: "Clinical Pest Defense",
    location: "Nairobi",
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  );
}

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [activeReview, setActiveReview] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroVisible, setHeroVisible] = useState(true);
  const autoPlayRef = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % changingText.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return undefined;

    let swapTimeout;
    const preloadNext = (index) => {
      const preloader = new Image();
      preloader.src = heroSlides[index];
    };

    preloadNext(1);
    const interval = window.setInterval(() => {
      setHeroVisible(false);
      swapTimeout = window.setTimeout(() => {
        setHeroIndex((current) => {
          const next = (current + 1) % heroSlides.length;
          preloadNext((next + 1) % heroSlides.length);
          return next;
        });
        setHeroVisible(true);
      }, 420);
    }, 4700);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(swapTimeout);
    };
  }, []);

  const startAutoPlay = useCallback(() => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (!isHovering.current) {
        setActiveReview(prev => (prev + 1) % reviews.length);
      }
    }, 5000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(autoPlayRef.current);
  }, [startAutoPlay]);

  const handleHoverEnter = () => { isHovering.current = true; };
  const handleHoverLeave = () => { isHovering.current = false; };

  // Card position classifier
  const getCardState = (idx) => {
    const total = reviews.length;
    const prev = (activeReview - 1 + total) % total;
    const next = (activeReview + 1) % total;
    if (idx === activeReview) return 'active';
    if (idx === prev) return 'prev';
    if (idx === next) return 'next';
    return 'hidden';
  };

  const cardClasses = {
    active: 'absolute z-20 scale-100 opacity-100 blur-none translate-x-0 shadow-[0_20px_50px_rgba(0,28,61,0.8)] border border-cyan-400/50 pointer-events-none',
    prev:   'absolute z-10 scale-75 opacity-40 blur-[2px] -translate-x-[62%] md:-translate-x-[42%] cursor-pointer hover:opacity-70',
    next:   'absolute z-10 scale-75 opacity-40 blur-[2px] translate-x-[62%] md:translate-x-[42%] cursor-pointer hover:opacity-70',
    hidden: 'absolute z-0 scale-50 opacity-0 pointer-events-none',
  };

  return (
    <div className="flex flex-col min-h-screen text-white" style={{ background: '#001C3D' }}>

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
          Full-bleed image right, bold typographic left
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative flex flex-col lg:flex-row items-center min-h-[calc(100vh-80px)] py-12 lg:py-0 overflow-hidden">
        {/* Left: Text Block */}
        <div className="w-full lg:w-[52%] px-4 sm:px-6 md:px-8 lg:pl-20 lg:pr-12 z-10 py-16 lg:py-0 flex flex-col justify-center lg:min-h-[calc(100vh-80px)]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Commercial &amp; Residential Pest Management — Kenya
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-display font-black tracking-tight text-white mb-4 leading-none">
            QZONE
            <span className="text-2xl md:text-3xl mt-4 block font-semibold text-slate-300">
              THE BEST SOLUTION FOR
            </span>
            <div className="text-cyan-400 h-24 md:h-32 transition-all duration-500 ease-in-out mt-2" style={{ textShadow: '0 0 40px rgba(34,211,238,0.3)' }}>
              {changingText[textIndex]}
            </div>
          </h1>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              to="/precision-quote"
              className="flex items-center gap-2 hover:opacity-90 text-white px-4 sm:px-6 md:px-8 py-4 rounded-lg font-black shadow-blue-glow transition-all text-base group"
              style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
            >
              Get a Quote <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link
              to="/library"
              className="flex items-center gap-2 bg-white/5 text-white border border-white/20 hover:bg-white/10 px-4 sm:px-6 md:px-8 py-4 rounded-lg font-semibold transition-all text-base"
            >
              Identify Pest
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10 mt-12 border-t border-white/10 pt-10">
            {[
              { val: '15+', label: 'Years Active' },
              { val: '2,400+', label: 'Sites Secured' },
              { val: '100%', label: 'Compliance Rate' },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="text-3xl font-display font-black text-cyan-400">{val}</p>
                <p className="text-xs text-slate-200 font-bold uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* PCPB / NEMA Certification Badge */}
          <div className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-sm">
            <ShieldCheck size={16} className="text-cyan-400" />
            <span className="text-xs font-black uppercase tracking-widest text-white">PCPB / NEMA Certified Control</span>
          </div>
        </div>

        {/* Right: Bleed image placeholder */}
        <div className="w-full lg:w-[55%] h-[50vh] lg:absolute lg:right-0 lg:top-0 lg:h-full mt-8 lg:mt-0 relative overflow-hidden bg-slate-950/20 lg:rounded-l-[3rem] border-l border-white/10 flex flex-col justify-center px-4 sm:px-6 md:px-8 md:px-16 text-left">
          {/* Auto-rotating Q-Zone operations carousel. No controls: the imagery stays ambient. */}
          <img
            src={heroSlides[heroIndex]}
            alt={`Q-Zone field operations in Kenya ${heroIndex + 1}`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-500 ease-out ${
              heroVisible ? 'opacity-100 scale-100' : 'opacity-35 scale-[1.015]'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#001C3D]/5 to-[#001C3D]/20 pointer-events-none" />

          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>


      </section>

      {/* ═══════════════════════════════════════════════════════════
          CORE SERVICES SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white mb-6">
            Core <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-slate-200 text-xl max-w-2xl mx-auto font-semibold">
            Highly specialized intervention across all environments. Built on science. Measured by results.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-white/10">

          {/* ── 1: Commercial & Industrial ── */}
          <div className="py-20 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 rounded-2xl border border-white/10 overflow-hidden relative h-[400px] lg:h-[500px] group shadow-ambient">
              <img
                src={commercialImg}
                alt="Q-Zone commercial pest control operations"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001C3D]/50 via-transparent to-transparent" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start lg:pl-12">
              <span className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Zap size={12} /> 01 — Commercial
              </span>
              <h3 className="text-3xl lg:text-4xl sm:text-5xl font-display font-black mb-6 text-white leading-tight">
                Commercial &amp; Industrial Integrity
              </h3>
              <p className="text-lg text-slate-200 leading-relaxed mb-8 font-semibold">
                High-stakes commercial and industrial environments demand total regulatory safeguarding. Q-Zone provides integrated pest management, fumigation, monitoring, and prevention solutions for commercial facilities, institutions, and food-processing sites across Kenya.
              </p>
              <Link to="/sectors/food-manufacturing" className="flex items-center gap-3 bg-white/5 text-cyan-400 px-4 sm:px-6 md:px-8 py-4 rounded-full font-black transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] border border-white/15 hover:border-cyan-400/40 group">
                Explore Commercial <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </Link>
            </div>
          </div>

          {/* ── 2: Residential Bio-Defense ── */}
          <div className="py-20 flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 rounded-2xl border border-white/10 overflow-hidden relative h-[400px] lg:h-[500px] group shadow-ambient">
              <img
                src={residentialImg}
                alt="Q-Zone residential pest management service"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001C3D]/50 via-transparent to-transparent" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start lg:pr-12">
              <span className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Zap size={12} /> 02 — Residential
              </span>
              <h3 className="text-3xl lg:text-4xl sm:text-5xl font-display font-black mb-6 text-white leading-tight">
                Residential Bio-Defense &amp; Control
              </h3>
              <p className="text-lg text-slate-200 leading-relaxed mb-8 font-semibold">
                Comprehensive residential pest control across Kenya. Our certified technicians mitigate all biological threats using non-intrusive, botanical-based protocols with zero disruption to your household.
              </p>
              <Link to="/residential/apartments" className="flex items-center gap-3 bg-white/5 text-cyan-400 px-4 sm:px-6 md:px-8 py-4 rounded-full font-black transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] border border-white/15 hover:border-cyan-400/40 group">
                Explore Residential <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </Link>
            </div>
          </div>

          {/* ── 3: Fumigation ── */}
          <div className="py-20 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 rounded-2xl border border-white/10 overflow-hidden relative h-[400px] lg:h-[500px] group shadow-ambient">
              <img
                src={fumigationImg}
                alt="Q-Zone specialized fumigation services"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001C3D]/50 via-transparent to-transparent" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start lg:pl-12">
              <span className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Zap size={12} /> 03 — Fumigation
              </span>
              <h3 className="text-3xl lg:text-4xl sm:text-5xl font-display font-black mb-6 text-white leading-tight">
                Specialized Fumigation Protocols
              </h3>
              <p className="text-lg text-slate-200 leading-relaxed mb-8 font-semibold">
                Q-Zone leads the industry in advanced fumigation techniques. Precision-metered gas applications reach deep-seated infestations that standard treatments miss, eliminating complex pest pressures at the source.
              </p>
              <Link to="/sectors/agriculture" className="flex items-center gap-3 bg-white/5 text-cyan-400 px-4 sm:px-6 md:px-8 py-4 rounded-full font-black transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] border border-white/15 hover:border-cyan-400/40 group">
                Explore Service <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </Link>
            </div>
          </div>

          {/* ── 4: IPM ── */}
          <div className="py-20 flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 rounded-2xl border border-white/10 overflow-hidden relative h-[400px] lg:h-[500px] group shadow-ambient bg-[#001020]">
              <img
                src={ipmImg}
                alt="Q-Zone Scientific IPM strategy"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-contain p-6 sm:p-8 lg:p-10 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001C3D]/60 via-transparent to-transparent" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start lg:pr-12">
              <span className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Zap size={12} /> 04 — IPM Strategy
              </span>
              <h3 className="text-3xl lg:text-4xl sm:text-5xl font-display font-black mb-6 text-white leading-tight">
                Scientific IPM &amp; Market Ecosystem
              </h3>
              <p className="text-lg text-slate-200 leading-relaxed mb-6 font-semibold">
                Integrated Pest Management—a data-driven, long-term strategy for total pest suppression rooted in science.
              </p>
              <p className="text-base text-slate-300 leading-relaxed mb-10 font-semibold">
                Habitat modification, pheromone-based monitoring, and predictive analytics address the root causes of infestations. Engineered specifically for East African market conditions, ensuring a 100% pest-free baseline.
              </p>
              <Link to="/ipm" className="flex items-center gap-3 bg-white/5 text-cyan-400 px-4 sm:px-6 md:px-8 py-4 rounded-full font-black transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] border border-white/15 hover:border-cyan-400/40 group">
                Explore IPM <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INSECTRAM DIGITAL ECOSYSTEM
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="rounded-3xl p-6 md:p-16 relative overflow-hidden shadow-ambient border border-white/15 bg-white/5 backdrop-blur-sm">
          {/* Background glow orbs */}
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(0,69,110,0.3)' }} />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(34,211,238,0.08)' }} />

          {/* Header */}
          <div className="flex flex-col lg:flex-row gap-16 items-start relative z-10 mb-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-widest mb-6">
                <Activity size={12} /> Digital Platform
              </div>
              <h2 className="text-4xl md:text-4xl sm:text-6xl font-display font-black text-white mb-6 leading-tight tracking-tight">
                Smart Pest Control <br />
                with{' '}
                <span className="text-cyan-400" style={{ textShadow: '0 0 40px rgba(34,211,238,0.3)' }}>
                  INSECTRAM
                </span>
              </h2>
              <p className="text-xl text-slate-200 leading-relaxed font-semibold max-w-lg mb-6">
                Q-Zone integrates the new Insectram Online Booking System and Digital Platform—a seamless, high-end ecosystem engineered for total real-time transparency, lightning-fast reservations, and the ultimate client experience.
              </p>

              {/* Tag pills / capability list - mobile-first styling */}
              <div className="grid grid-cols-1 md:flex md:flex-wrap gap-3 mb-8 w-full">
                {['Seamless Integration', 'Smart Scheduling', 'Cashless Flow', 'Mobile Sync'].map(feature => (
                  <span key={feature} className="inline-flex items-center gap-3 p-4 md:px-4 md:py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-[15px] md:text-sm tracking-wide">
                    <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0" />
                    {feature}
                  </span>
                ))}
              </div>

              {/* External Link */}
              <a 
                href="https://www.insectram.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 p-5 md:px-6 md:py-4 rounded-xl md:rounded-full text-white font-black uppercase tracking-widest text-[13px] md:text-sm hover:opacity-90 transition-all shadow-blue-glow w-full md:w-auto text-center"
                style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
              >
                Explore Insectram Technology <ArrowRight size={18} />
              </a>
            </div>

            {/* Live Site Map Mockup */}
            <div className="flex-1 w-full rounded-2xl p-6 shadow-ambient border border-white/15 bg-white/5">
              <div className="flex flex-col gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="flex justify-between items-start md:items-center flex-col xl:flex-row gap-3">
                  <h4 className="font-display font-black text-white text-lg">Real-Time Property Monitoring Map</h4>
                  <span className="flex items-center gap-2 text-[10px] md:text-xs font-black text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/30 whitespace-nowrap">
                    <Activity size={12} /> System Active & Protecting
                  </span>
                </div>
                <p className="text-slate-300 text-sm font-medium leading-relaxed">
                  Track the exact status of every zone in your facility 24/7, right from your phone or desktop.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {[
                  { zone: 'Main Warehouse', sub: 'Zero Activity Detected (Secure)', color: 'emirald' },
                  { zone: 'Cold Storage & Kitchen', sub: 'All Smart Traps Active', color: 'emirald' },
                  { zone: 'Production Floor', sub: '100% Compliance Maintained', color: 'emirald' },
                  { zone: 'Exterior Perimeter', sub: 'Active Surveillance Ongoing', color: 'amber' },
                ].map((node, idx) => (
                  <div key={idx} className="rounded-xl p-5 flex flex-col items-start gap-2 border border-white/10 bg-white/5 hover:border-cyan-500/30 transition-all cursor-default">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full animate-pulse flex-shrink-0 ${
                        node.color === 'emirald'
                          ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]'
                          : 'bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.7)]'
                      }`} />
                      <span className="text-sm font-bold text-white leading-tight">{node.zone}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-300 ml-6 tracking-wide">{node.sub}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 font-bold text-right uppercase tracking-widest mt-4">
                Smart Sensor & Activity Dashboard
              </p>
            </div>
          </div>

          {/* 3-Column Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              {
                icon: QrCode,
                title: 'QR-Verified Monitoring',
                body: 'Ensure 100% technician accountability. Every trap features a unique QR code eliminating "Zero-Ghost" visits entirely.',
                badges: [],
              },
              {
                icon: ShieldCheck,
                title: 'Audit-Ready Compliance',
                body: 'Automated systems support the highest global industry regulations and standards.',
                badges: ['BRCGS', 'SALSA', 'ISO 22000', 'Red Tractor'],
              },
              {
                icon: LineChart,
                title: 'Real-Time Analytics',
                body: 'Interactive Heat Maps and Trend Analysis graphs shift you from reactive treatments to predictive control.',
                badges: [],
              },
            ].map((item, i) => {
              const Icon = item.icon;
              const { title, body, badges } = item;
              return (
                <div
                  key={i}
                  className="p-5 sm:p-8 rounded-2xl border border-white/10 bg-white/5 group hover:bg-[#00456E]/60 transition-colors duration-500 shadow-sm hover:shadow-[0_0_28px_rgba(34,211,238,0.1)] cursor-default"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-8 transition-colors border border-cyan-500/25">
                    <Icon size={26} />
                  </div>
                <h4 className="text-xl font-display font-black text-white mb-3 transition-colors">{title}</h4>
                <p className="text-slate-300 leading-relaxed transition-colors font-semibold text-sm mb-4">{body}</p>
                {badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {badges.map((badge) => (
                      <span key={badge} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md bg-white/5 text-slate-200 transition-colors border border-white/10">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          COMPANIES WE WORK WITH — Infinite Marquee
          Positioned directly below Insectram ("Tech + Trust" block)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-8 md:py-12 overflow-hidden relative border-y border-white/10" style={{ background: '#00243A' }}>
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-sm font-black uppercase tracking-[0.25em] text-slate-300">
            Trusted by Industry Leaders
          </h3>
          <div className="h-px flex-1 sm:mx-8 bg-gradient-to-r from-transparent via-white/15 to-transparent hidden sm:block" />
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
            Companies Working With Q-Zone
          </span>
        </div>

        {/* The marquee itself */}
        {companyImages.length > 0 ? (
          <InfiniteMarquee images={companyImages} />
        ) : (
          /* Fallback: text slugs if no images are loaded yet */
          <div className="marquee-track">
            <div className="marquee-strip gap-20 px-4 sm:px-6 md:px-8">
              {['NAIVAS', 'BIDCO', 'KENYA AIRWAYS', 'TUSKER', 'EQUITY BANK', 'KPLC', 'SAFARICOM', 'KCB',
                'NAIVAS', 'BIDCO', 'KENYA AIRWAYS', 'TUSKER', 'EQUITY BANK', 'KPLC', 'SAFARICOM', 'KCB'].map((name, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 text-lg font-display font-extrabold tracking-wider text-slate-1400"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CUSTOMER REVIEWS — 3D CoverFlow Carousel
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8 border-t border-white/10" style={{ background: '#001C3D' }}>
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] text-cyan-400 border border-cyan-500/40 bg-cyan-500/10 mb-6">
              <ShieldCheck size={11} /> Verified Client Reviews
            </div>
            <h2 className="text-3xl md:text-4xl sm:text-5xl font-display font-black text-white mb-4">
              What Our Clients <span className="text-cyan-400">Say</span>
            </h2>
            <p className="text-slate-200 text-lg font-semibold max-w-xl mx-auto">
              Trusted by 2,400+ sites across Kenya. Here's what our clients say after experiencing the Q-Zone difference.
            </p>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[1,2,3,4,5].map(s => <StarIcon key={s} />)}
              <span className="ml-2 text-white font-black text-sm">4.9 / 5.0</span>
              <span className="ml-1 text-slate-400 text-xs font-semibold">(312 verified reviews)</span>
            </div>
          </div>

          {/* ── 3D CoverFlow Stage ── */}
          <div
            className="relative w-full h-[480px] md:h-[440px] flex items-center justify-center overflow-hidden select-none"
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
          >
            {reviews.map((review, idx) => {
              const state = getCardState(idx);
              return (
                <div
                  key={review.name}
                  onClick={() => state !== 'active' && state !== 'hidden' && setActiveReview(idx)}
                  className={[
                    'w-[90vw] max-w-[500px] rounded-2xl p-7 bg-white/5 flex flex-col gap-4 group',
                    'transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]',
                    cardClasses[state],
                  ].join(' ')}
                >
                  {/* Stars & Approval Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => <StarIcon key={i} />)}
                      <span className="ml-1 text-xs text-amber-400 font-black">{review.rating}</span>
                    </div>

                  </div>

                  {/* Quote */}
                  <blockquote className="text-slate-200 text-xs md:text-sm leading-relaxed font-medium flex-1 italic">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>

                  {/* Service type & Location metadata */}
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    {review.serviceType} · {review.location}
                  </div>

                  {/* Attribution */}
                  <div className="flex items-center gap-3 border-t border-white/10 pt-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-400 font-black text-sm">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-white font-black text-sm group-hover:text-cyan-400 transition-colors">{review.name}</p>
                      <p className="text-slate-400 text-xs font-semibold">{review.role} · {review.company}</p>
                    </div>
                    <span className="ml-auto text-[10px] font-black uppercase tracking-widest text-cyan-400/70 bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded-full whitespace-nowrap">{review.sector}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveReview(idx)}
                aria-label={`Review ${idx + 1}`}
                className={`rounded-full transition-all duration-500 ${
                  idx === activeReview
                    ? 'w-8 h-2.5 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]'
                    : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PEST LIBRARY CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-12 md:py-24 px-4 md:px-8 overflow-hidden w-full">
        {/* Deep blue gradient background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #001020, #001C3D, #002540)' }} />
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1548174542-a82ddf08a50c?q=80&w=1400&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover mix-blend-overlay"
            style={{ opacity: 0.05 }}
          />
        </div>
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(0,69,110,0.25)' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-black uppercase tracking-widest border border-cyan-500/30">
            Identify and Protect
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white mb-6 leading-tight">
            Q-Zone starts with{' '}
            <span className="text-cyan-400" style={{ textShadow: '0 0 40px rgba(34,211,238,0.3)' }}>
              science
            </span>
          </h2>
          <p className="text-slate-200 text-xl font-semibold mb-12 max-w-2xl leading-relaxed">
            A technical naturalist approach to identifying and controlling common environmental disruptors.
          </p>
          <Link
            to="/library"
            className="flex items-center gap-3 hover:opacity-90 text-white px-10 py-5 rounded-full font-black transition-all text-lg shadow-blue-glow group"
            style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
          >
            Browse Full Pest Library <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          GET A QUOTE CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-24 px-4 md:px-8 text-center relative overflow-hidden border-t border-white/10" style={{ background: '#001020' }}>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-4xl sm:text-6xl font-display font-black text-white mb-6 leading-tight">
            Get a quote{' '}
            <span className="text-cyan-400">today</span>
          </h2>
          <p className="text-2xl text-slate-200 mb-4 font-semibold">
            Eliminate pests and prevent future problems.
          </p>
          <p className="text-lg text-slate-300 mb-12">
            Available 24 hours a day, 7 days a week.
          </p>

          <a
            href="tel:+254706274483"
            className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 hover:opacity-90 text-white px-10 py-6 rounded-full font-display font-black text-3xl md:text-4xl shadow-blue-glow transition-transform hover:-translate-y-1 group border border-white/15"
            style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
          >
            <span className="bg-white/10 p-4 rounded-full group-hover:scale-110 transition-transform">
              <PhoneCall size={34} className="text-cyan-400" />
            </span>
            (+254) 706 274 483
          </a>
        </div>
      </section>

    </div>
  );
}
