import React, { lazy, Suspense, useState, useEffect, useCallback } from 'react';
import { HashRouter as Router, Routes, Route, Link, NavLink, Outlet, useLocation, Navigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from './assets/logo.png';
import certNpma  from './assets/certifiers/npma.png';
import certPemak from './assets/certifiers/pemak.png';
import certPcpb  from './assets/certifiers/pcpb.png';
import AmbientPest from './components/AmbientPest';

const certifierImages = [
  { src: certNpma,  name: 'NPMA'  },
  { src: certPemak, name: 'PEMAK' },
  { src: certPcpb,  name: 'PCPB'  },
];

// Route components are lazy-loaded so each section downloads only when needed.
const Home = lazy(() => import('./pages/Home'));
const IPM = lazy(() => import('./pages/IPM'));
const PestLibrary = lazy(() => import('./pages/PestLibrary'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ResidentialQuote = lazy(() => import('./pages/ResidentialQuote'));
const CommercialFloor = lazy(() => import('./pages/CommercialFloor'));
const PestList = lazy(() => import('./pages/PestList'));
const PrecisionQuote = lazy(() => import('./pages/PrecisionQuote'));
const PestDetail = lazy(() => import('./pages/PestDetail'));
const CommercialQuote = lazy(() => import('./pages/CommercialQuote'));
const Contact = lazy(() => import('./pages/Contact'));
const Products = lazy(() => import('./pages/Products'));
const Resources = lazy(() => import('./pages/Resources'));

const SectorLayout = lazy(() => import('./pages/sectors/SectorLayout'));
const FoodManufacturing = lazy(() => import('./pages/sectors/FoodManufacturing'));
const Hospitality = lazy(() => import('./pages/sectors/Hospitality'));
const Logistics = lazy(() => import('./pages/sectors/Logistics'));
const Agriculture = lazy(() => import('./pages/sectors/Agriculture'));
const Healthcare = lazy(() => import('./pages/sectors/Healthcare'));
const Education = lazy(() => import('./pages/sectors/Education'));
const Corporate = lazy(() => import('./pages/sectors/Corporate'));

const ResidentialLayout = lazy(() => import('./pages/residential/ResidentialLayout'));
const Apartments = lazy(() => import('./pages/residential/Apartments'));
const OwnCompounds = lazy(() => import('./pages/residential/OwnCompounds'));
const GatedEstates = lazy(() => import('./pages/residential/GatedEstates'));
const Rentals = lazy(() => import('./pages/residential/Rentals'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageLoadingFallback = () => (
  <div
    className="min-h-[55vh] flex items-center justify-center px-6 text-center"
    style={{ background: '#001C3D' }}
    role="status"
    aria-live="polite"
  >
    <div className="flex items-center gap-3 text-slate-200 font-semibold">
      <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
      Loading Q-Zone content…
    </div>
  </div>
);

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
    setResidentialOpen(false);
    setCommercialOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobile = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <div className="min-h-screen bg-background text-white font-sans">
      <ScrollToTop />
      <AmbientPest />

      {/* ── NAVIGATION ──────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between gap-4 border-b border-white/10 backdrop-blur-md" style={{ background: 'rgba(0,16,32,0.92)' }}>
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 relative z-[60]" onClick={closeMobile}>
          <img src={logo} alt="Q-Zone" className="h-10 w-auto" />
        </Link>

        {/* ── Desktop Nav Links (hidden below lg) ──────────────── */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-bold tracking-widest text-slate-200">

          <NavLink to="/" end className={({ isActive }) => `transition-colors py-4 flex-shrink-0 ${isActive ? 'text-cyan-400 border-b-2 border-cyan-400' : 'hover:text-cyan-400'}`}>
            Home
          </NavLink>

          {/* Commercial Dropdown — desktop hover */}
          <div className={`relative group py-4 flex-shrink-0 ${location.pathname.startsWith('/sectors') ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>
            <button className="text-inherit hover:text-cyan-400 transition-colors cursor-pointer">
              Commercial
            </button>
            <div
              className="absolute left-0 top-full mt-1 w-72 rounded-xl shadow-ambient opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-2 z-50 border border-white/10"
              style={{ background: 'rgba(0,69,110,0.95)', backdropFilter: 'blur(18px)' }}
            >
              <Link to="/sectors/food-manufacturing" className="block px-4 py-3 hover:bg-white/10 hover:text-cyan-400 rounded-lg transition-colors text-xs font-semibold text-slate-200 normal-case tracking-normal">Food &amp; Manufacturing</Link>
              <Link to="/sectors/hospitality" className="block px-4 py-3 hover:bg-white/10 hover:text-cyan-400 rounded-lg transition-colors text-xs font-semibold text-slate-200 normal-case tracking-normal">Hospitality</Link>
              <Link to="/sectors/logistics" className="block px-4 py-3 hover:bg-white/10 hover:text-cyan-400 rounded-lg transition-colors text-xs font-semibold text-slate-200 normal-case tracking-normal">Logistics &amp; Storage</Link>
              <Link to="/sectors/agriculture" className="block px-4 py-3 hover:bg-white/10 hover:text-cyan-400 rounded-lg transition-colors text-xs font-semibold text-slate-200 normal-case tracking-normal">Agriculture &amp; Milling</Link>
              <Link to="/sectors/healthcare" className="block px-4 py-3 hover:bg-white/10 hover:text-cyan-400 rounded-lg transition-colors text-xs font-semibold text-slate-200 normal-case tracking-normal">Healthcare</Link>
              <Link to="/sectors/education" className="block px-4 py-3 hover:bg-white/10 hover:text-cyan-400 rounded-lg transition-colors text-xs font-semibold text-slate-200 normal-case tracking-normal">Education</Link>
              <Link to="/sectors/corporate" className="block px-4 py-3 hover:bg-white/10 hover:text-cyan-400 rounded-lg transition-colors text-xs font-semibold text-slate-200 normal-case tracking-normal">Corporate Real Estate</Link>

              <div className="my-1.5 mx-3 border-t border-cyan-500/20" />

              <Link to="/precision-quote?type=commercial" className="block px-4 py-3 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-lg transition-colors text-xs font-bold text-cyan-400 normal-case tracking-normal">⚡ Request Quote</Link>
            </div>
          </div>

          {/* Residential Dropdown — desktop hover */}
          <div className={`relative group py-4 flex-shrink-0 ${location.pathname.startsWith('/residential') ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>
            <button className="text-inherit hover:text-cyan-400 transition-colors cursor-pointer">
              Residential
            </button>
            <div
              className="absolute left-0 top-full mt-1 w-72 rounded-xl shadow-ambient opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-2 z-50 border border-white/10"
              style={{ background: 'rgba(0,69,110,0.95)', backdropFilter: 'blur(18px)' }}
            >
              <Link to="/residential/apartments"    className="block px-4 py-3 hover:bg-white/10 hover:text-cyan-400 rounded-lg transition-colors text-xs font-semibold text-slate-200 normal-case tracking-normal">Apartments</Link>
              <Link to="/residential/own-compounds" className="block px-4 py-3 hover:bg-white/10 hover:text-cyan-400 rounded-lg transition-colors text-xs font-semibold text-slate-200 normal-case tracking-normal">Own Compounds</Link>
              <Link to="/residential/gated-estates" className="block px-4 py-3 hover:bg-white/10 hover:text-cyan-400 rounded-lg transition-colors text-xs font-semibold text-slate-200 normal-case tracking-normal">Gated Estates</Link>
              <Link to="/residential/rentals"       className="block px-4 py-3 hover:bg-white/10 hover:text-cyan-400 rounded-lg transition-colors text-xs font-semibold text-slate-200 normal-case tracking-normal">Rentals</Link>
            </div>
          </div>

          <NavLink to="/ipm" className={({ isActive }) => `transition-colors py-4 flex-shrink-0 ${isActive ? 'text-cyan-400 border-b-2 border-cyan-400' : 'hover:text-cyan-400'}`}>
            IPM
          </NavLink>
          <NavLink to="/about-us" className={({ isActive }) => `transition-colors py-4 flex-shrink-0 ${isActive ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-200 hover:text-cyan-400'}`}>About Us</NavLink>
          <NavLink to="/library" className={({ isActive }) => `transition-colors py-4 flex-shrink-0 ${isActive ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-200 hover:text-cyan-400'}`}>Pest Library</NavLink>
          <NavLink to="/products" className={({ isActive }) => `transition-colors py-4 flex-shrink-0 ${isActive ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-200 hover:text-cyan-400'}`}>Products</NavLink>
          <NavLink to="/resources" className={({ isActive }) => `transition-colors py-4 flex-shrink-0 ${isActive ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-200 hover:text-cyan-400'}`}>Resources</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `transition-colors py-4 flex-shrink-0 ${isActive ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-200 hover:text-cyan-400'}`}>Contact Us</NavLink>
        </div>

        {/* ── Right Side: CTA + Hamburger ──────────────────────── */}
        <div className="flex items-center gap-3">
          {/* Quick Quote CTA — always visible */}
          <Link
            to="/contact"
            onClick={closeMobile}
            className="hidden xl:inline-flex flex-shrink-0 text-sm font-bold bg-primary-gradient text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-all shadow-blue-glow"
          >
            Request Inspection
          </Link>

          {/* Hamburger Toggle — visible below lg */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className="lg:hidden relative z-[60] w-11 h-11 flex items-center justify-center rounded-xl border border-white/15 hover:border-cyan-500/40 transition-all duration-300"
            style={{ background: 'rgba(0,28,61,0.6)' }}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-5 h-5">
              <Menu
                size={20}
                className={`absolute inset-0 text-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`}
              />
              <X
                size={20}
                className={`absolute inset-0 text-cyan-400 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                  }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER OVERLAY ─────────────────────────────────── */}
      {/* Dark backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={closeMobile}
      />

      {/* Slide-in drawer */}
      <div
        id="mobile-drawer"
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm flex flex-col transition-transform duration-300 ease-out lg:hidden border-l border-white/10 bg-[#001C3D]/80 backdrop-blur-md shadow-2xl text-white`}
        style={{
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Drawer header spacer (aligns below sticky nav) */}
        <div className="flex items-center justify-between px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-white/10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Navigation</span>
          <button
            onClick={closeMobile}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/15 hover:border-cyan-500/40 transition-colors"
            style={{ background: 'rgba(0,69,110,0.3)' }}
            aria-label="Close menu"
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        {/* Scrollable link list */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-1 overscroll-contain">

          {/* Home */}
          <Link
            to="/"
            onClick={closeMobile}
            className="block text-xl font-semibold text-white py-4 border-b border-white/5 hover:text-cyan-400 transition-colors"
          >
            Home
          </Link>

          {/* ── Commercial Accordion ──────────────────────── */}
          <div className="border-b border-white/5">
            <button
              onClick={() => setCommercialOpen(prev => !prev)}
              className="w-full flex items-center justify-between text-xl font-semibold text-white py-4 hover:text-cyan-400 transition-colors"
            >
              Commercial
              <ChevronDown
                size={20}
                className={`text-slate-400 transition-transform duration-300 ${commercialOpen ? 'rotate-180 text-cyan-400' : ''}`}
              />
            </button>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: commercialOpen ? '600px' : '0px', opacity: commercialOpen ? 1 : 0 }}
            >
              <div className="pl-4 pb-4 space-y-1">
                <Link to="/sectors/food-manufacturing" onClick={closeMobile} className="block py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors">Food &amp; Manufacturing</Link>
                <Link to="/sectors/hospitality" onClick={closeMobile} className="block py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors">Hospitality</Link>
                <Link to="/sectors/logistics" onClick={closeMobile} className="block py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors">Logistics &amp; Storage</Link>
                <Link to="/sectors/agriculture" onClick={closeMobile} className="block py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors">Agriculture &amp; Milling</Link>
                <Link to="/sectors/healthcare" onClick={closeMobile} className="block py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors">Healthcare</Link>
                <Link to="/sectors/education" onClick={closeMobile} className="block py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors">Education</Link>
                <Link to="/sectors/corporate" onClick={closeMobile} className="block py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors">Corporate Real Estate</Link>

                {/* Divider */}
                <div className="my-2 border-t border-cyan-500/20" />

                <Link to="/precision-quote?type=commercial" onClick={closeMobile} className="block py-2.5 text-base font-bold text-cyan-400 hover:text-white transition-colors">⚡ Request Quote</Link>
              </div>
            </div>
          </div>

          {/* ── Residential Accordion ──────────────────────── */}
          <div className="border-b border-white/5">
            <button
              onClick={() => setResidentialOpen(prev => !prev)}
              className="w-full flex items-center justify-between text-xl font-semibold text-white py-4 hover:text-cyan-400 transition-colors"
            >
              Residential
              <ChevronDown
                size={20}
                className={`text-slate-400 transition-transform duration-300 ${residentialOpen ? 'rotate-180 text-cyan-400' : ''}`}
              />
            </button>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: residentialOpen ? '280px' : '0px', opacity: residentialOpen ? 1 : 0 }}
            >
              <div className="pl-4 pb-4 space-y-1">
                <Link to="/residential/apartments"    onClick={closeMobile} className="block py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors">Apartments</Link>
                <Link to="/residential/own-compounds" onClick={closeMobile} className="block py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors">Own Compounds</Link>
                <Link to="/residential/gated-estates" onClick={closeMobile} className="block py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors">Gated Estates</Link>
                <Link to="/residential/rentals"       onClick={closeMobile} className="block py-2.5 text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors">Rentals</Link>
              </div>
            </div>
          </div>

          {/* IPM */}
          <Link
            to="/ipm"
            onClick={closeMobile}
            className="block text-xl font-semibold text-white py-4 border-b border-white/5 hover:text-cyan-400 transition-colors"
          >
            IPM
          </Link>

          {/* About Us */}
          <Link
            to="/about-us"
            onClick={closeMobile}
            className="block text-xl font-semibold text-white py-4 border-b border-white/5 hover:text-cyan-400 transition-colors"
          >
            About Us
          </Link>

          {/* Pest Library */}
          <Link
            to="/library"
            onClick={closeMobile}
            className="block text-xl font-semibold text-white py-4 border-b border-white/5 hover:text-cyan-400 transition-colors"
          >
            Pest Library
          </Link>

          {/* Products */}
          <Link
            to="/products"
            onClick={closeMobile}
            className="block text-xl font-semibold text-white py-4 border-b border-white/5 hover:text-cyan-400 transition-colors"
          >
            Products
          </Link>

          {/* Resources */}
          <Link
            to="/resources"
            onClick={closeMobile}
            className="block text-xl font-semibold text-white py-4 border-b border-white/5 hover:text-cyan-400 transition-colors"
          >
            Resources
          </Link>

          {/* Contact Us */}
          <Link
            to="/contact"
            onClick={closeMobile}
            className="block text-xl font-semibold text-white py-4 hover:text-cyan-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Drawer footer CTA */}
        <div className="px-4 sm:px-6 py-5 border-t border-white/10 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
          <Link
            to="/contact"
            onClick={closeMobile}
            className="block w-full text-center text-base font-black text-white py-4 rounded-full shadow-blue-glow transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #00456E, #0097C4)' }}
          >
            Request Inspection
          </Link>
        </div>
      </div>

      {/* ── PAGE OUTLET ─────────────────────────────────────────── */}
      <main className="p-0">
        <Outlet />
      </main>

      {/* ── MEGA FOOTER ──────────────────────────────────────────── */}
      <footer style={{ background: '#001C3D' }} className="text-white border-t border-white/10">

        {/* Top brand strip */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-12 flex flex-col lg:flex-row gap-12 justify-between">

          {/* Brand block */}
          <div className="lg:max-w-[260px] flex-shrink-0">
            <img src={logo} alt="Q-Zone" className="h-12 w-auto mb-5" />
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Setting the absolute standard in technical pest management.
            </p>
            <p className="text-xs text-slate-400 font-bold mb-4">
              Direct: <a href="mailto:operations@qzone.co.ke" className="text-cyan-400 hover:underline">operations@qzone.co.ke</a>
            </p>
            
            {/* Social Media links inside brand block */}
            <div className="flex items-center gap-3.5 mt-2">
              <a href="https://www.linkedin.com/company/qzone-ipm/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.facebook.com/QZoneIPM/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" title="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
            </div>
            
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-4">Pure science. Zero spectacle.</p>
          </div>

          {/* Link columns grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 flex-1 text-sm">

            {/* Column 1: Commercial */}
            <div>
              <h4 className="font-black uppercase tracking-widest text-slate-400 mb-5 text-[11px]">Commercial</h4>
              <div className="flex flex-col gap-3">
                <Link to="/sectors" className="text-gray-300 hover:text-cyan-400 transition-colors">Sectors Overview</Link>
                <Link to="/sectors/food-manufacturing" className="text-gray-300 hover:text-cyan-400 transition-colors">Food &amp; Manufacturing</Link>
                <Link to="/sectors/logistics" className="text-gray-300 hover:text-cyan-400 transition-colors">Logistics &amp; Storage</Link>
                <Link to="/sectors/hospitality" className="text-gray-300 hover:text-cyan-400 transition-colors">Hospitality</Link>
                <Link to="/sectors/corporate" className="text-gray-300 hover:text-cyan-400 transition-colors">Corporate Real Estate</Link>
                <Link to="/sectors/agriculture" className="text-gray-300 hover:text-cyan-400 transition-colors">Agriculture &amp; Estates</Link>
                <Link to="/sectors/healthcare" className="text-gray-300 hover:text-cyan-400 transition-colors">Healthcare</Link>
                <Link to="/sectors/education" className="text-gray-300 hover:text-cyan-400 transition-colors">Education</Link>
              </div>
            </div>

            {/* Column 2: Residential */}
            <div>
              <h4 className="font-black uppercase tracking-widest text-slate-400 mb-5 text-[11px]">Residential</h4>
              <div className="flex flex-col gap-3">
                <Link to="/residential/apartments" className="text-gray-300 hover:text-cyan-400 transition-colors">Apartments</Link>
                <Link to="/residential/own-compounds" className="text-gray-300 hover:text-cyan-400 transition-colors">Own Compounds</Link>
                <Link to="/residential/gated-estates" className="text-gray-300 hover:text-cyan-400 transition-colors">Gated Estates</Link>
                <Link to="/residential/rentals" className="text-gray-300 hover:text-cyan-400 transition-colors">Rentals</Link>
              </div>
            </div>

            {/* Column 3: Explore & Resources */}
            <div>
              <h4 className="font-black uppercase tracking-widest text-slate-400 mb-5 text-[11px]">Resources &amp; Explore</h4>
              <div className="flex flex-col gap-3">
                <Link to="/library" className="text-gray-300 hover:text-cyan-400 transition-colors">Pest Library</Link>
                <Link to="/products" className="text-gray-300 hover:text-cyan-400 transition-colors">Products</Link>
                <Link to="/ipm" className="text-gray-300 hover:text-cyan-400 transition-colors">IPM Programme</Link>
                <a href="https://www.insectram.co.uk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">Insectram Technology ↗</a>
                <Link to="/resources" className="text-gray-300 hover:text-cyan-400 transition-colors">Latest Articles</Link>
                <Link to="/resources" className="text-gray-300 hover:text-cyan-400 transition-colors">Industry Trends</Link>
              </div>
            </div>

            {/* Column 4: Company */}
            <div>
              <h4 className="font-black uppercase tracking-widest text-slate-400 mb-5 text-[11px]">Company</h4>
              <div className="flex flex-col gap-3">
                <Link to="/about-us" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link>
                <Link to="/about-us" className="text-gray-300 hover:text-cyan-400 transition-colors">Our Story</Link>
                <Link to="/about-us" className="text-gray-300 hover:text-cyan-400 transition-colors">Mission &amp; Vision</Link>
                <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact Us</Link>
                <Link to="/residential-quote" className="text-gray-300 hover:text-cyan-400 transition-colors">Get a Quote</Link>
              </div>
            </div>

          </div>
        </div>

        {/* Accreditation badges */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 border-t border-white/10 py-10">
          <p className="text-center text-slate-500 text-xs font-black uppercase tracking-widest mb-8">
            Accredited Memberships &amp; Certifications
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-2xl mx-auto">
            {certifierImages.map(({ src, name }) => (
              <div key={name} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center text-center transition-all hover:bg-white/10">
                <img src={src} alt={`${name} certification`} className="h-14 md:h-16 w-auto object-contain rounded-md" />
                <span className="text-white font-semibold text-sm tracking-widest uppercase mt-4">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-white/10 py-6 px-6 md:px-10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold uppercase tracking-widest">
            <span>&copy; {new Date().getFullYear()} Q-Zone Pest Control. All rights reserved.</span>
            <span>Registered in Kenya · PCPB Licensed · PEMAK Member</span>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
          {/* ── Top Level ─────────────────────────────── */}
          <Route index element={<Home />} />
          <Route path="ipm" element={<IPM />} />

          {/* ── Residential sub-ecosystem ─────────────── */}
          <Route path="residential" element={<ResidentialLayout />}>
            <Route index element={<Navigate to="apartments" replace />} />
            <Route path="apartments"    element={<Apartments />} />
            <Route path="own-compounds" element={<OwnCompounds />} />
            <Route path="gated-estates" element={<GatedEstates />} />
            <Route path="rentals"       element={<Rentals />} />
            {/* Legacy routes kept as redirects */}
            <Route path="general-defense"   element={<Navigate to="/residential/apartments" replace />} />
            <Route path="termite-barrier"   element={<Navigate to="/residential/own-compounds" replace />} />
            <Route path="rodent-exclusion"  element={<Navigate to="/residential/own-compounds" replace />} />
            <Route path="phosphine-fumigation" element={<Navigate to="/sectors/agriculture" replace />} />
          </Route>

          {/* ── Commercial ────────────────────────────── */}
          <Route path="commercial-phosphine" element={<Navigate to="/sectors/agriculture" replace />} />
          <Route path="commercial-floor" element={<CommercialFloor />} />
          <Route path="commercial-quote" element={<CommercialQuote />} />

          {/* ── Discovery ─────────────────────────────── */}
          <Route path="library" element={<PestLibrary />} />
          <Route path="library/:id" element={<PestDetail />} />
          <Route path="about-us" element={<AboutUs />} />

          {/* ── Sector sub-ecosystem ──────────────────── */}
          <Route path="sectors" element={<SectorLayout />}>
            <Route index element={<Navigate to="food-manufacturing" replace />} />
            <Route path="food-manufacturing" element={<FoodManufacturing />} />
            <Route path="hospitality" element={<Hospitality />} />
            <Route path="logistics" element={<Logistics />} />
            <Route path="agriculture" element={<Agriculture />} />
            <Route path="healthcare-education" element={<Navigate to="/sectors/healthcare" replace />} />
            <Route path="healthcare" element={<Healthcare />} />
            <Route path="education" element={<Education />} />
            <Route path="corporate" element={<Corporate />} />
          </Route>
          <Route path="pest-list" element={<PestList />} />

          {/* ── Quotes ────────────────────────────────── */}
          <Route path="residential-quote" element={<ResidentialQuote />} />
          <Route path="precision-quote" element={<PrecisionQuote />} />

          {/* ── Contact ───────────────────────────────── */}
          <Route path="contact" element={<Contact />} />

          {/* ── Products & Resources ─────────────────── */}
          <Route path="products" element={<Products />} />
          <Route path="resources" element={<Resources />} />

          {/* Recover safely from unknown hash routes. */}
          <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
