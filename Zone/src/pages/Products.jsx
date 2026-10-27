import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, ShieldCheck } from 'lucide-react';
import sanitaryBinFallback from '../assets/products/sanitary-bin.svg';
import fcuEd21Fallback from '../assets/products/fcu-ed21.svg';
import fcuPracticaFallback from '../assets/products/fcu-practica.svg';
import guardianStationFallback from '../assets/products/guardian-station.svg';
import snapTrapFallback from '../assets/products/snap-trap.svg';
import inspectMonitorFallback from '../assets/products/inspect-monitor.svg';

// Real product photography is used here so visitors see the physical product,
// not an illustration. Each image has a local SVG fallback so the card still
// works if a supplier/CDN image is temporarily unavailable.
//
// IMPORTANT FOR THE SITE OWNER:
// Before a commercial launch, replace any supplier-hosted image with a photo
// supplied/approved by Q-Zone's distributor or manufacturer and store that
// approved file in src/assets/products/. This avoids relying on third-party
// image-hosting or licensing terms long-term.
const products = [
  {
    name: 'Sanitary Bins',
    category: 'Washroom Hygiene',
    image: 'https://cdn1.zohoecommerce.com/product-images/00855.png/5189456000002731009/800x800?format=webp&storefront_domain=www.washroomco.co.za',
    fallbackImage: sanitaryBinFallback,
    imageAlt: 'White slimline pedal-operated sanitary bin',
    description: 'Discreet sanitary-waste units suited to offices, hospitality spaces, healthcare facilities, schools, and managed washrooms.',
    useCase: 'Hygienic, contained disposal with a professional washroom presentation.',
  },
  {
    name: 'FCU ED21',
    category: 'Flying Insect Control',
    image: 'https://sokowise-api.b-cdn.net/media/17908.png?etag=4685a94b40339e940576b54eed7ef9a8&height=640&width=640',
    fallbackImage: fcuEd21Fallback,
    imageAlt: 'ED21 30W professional fly-control unit with aluminium housing and UV tubes',
    description: 'A professional fly-control unit for monitored indoor environments where flying insects need to be intercepted away from sensitive activity zones.',
    useCase: 'Suitable for commercial areas that need dependable flying-insect control and monitoring.',
  },
  {
    name: 'FCU Practica',
    category: 'Flying Insect Control',
    image: 'https://www.pestshields.in/cdn/shop/files/PractikaFL_01_16ee0075-519b-4911-8b6b-cd7d629b3016.jpg?v=1729593320&width=1920',
    fallbackImage: fcuPracticaFallback,
    imageAlt: 'Practika professional glue-board fly-control unit with UV tubes',
    description: 'A compact fly-control unit designed for locations where effective insect interception is required in a smaller, discreet format.',
    useCase: 'A practical option for service areas, preparation spaces, back-of-house zones, and similar interiors.',
  },
  {
    name: 'Guardian Stations',
    category: 'Rodent Management',
    image: 'https://sokowise-api.b-cdn.net/media/v2/17864.webp?etag=cf43734f19602e4f7f2307caeb304d3a&height=500&width=500',
    fallbackImage: guardianStationFallback,
    imageAlt: 'Open black Guardian rodent bait station',
    description: 'Protective rodent-management stations used to support secure, structured monitoring and control programmes around buildings and service areas.',
    useCase: 'Helps keep rodent-control points protected, organised, and easier to inspect during routine servicing.',
  },
  {
    name: 'Snap Traps',
    category: 'Rodent Management',
    image: 'https://mobileimages.lowes.com/productimages/086c7483-20c1-4d16-9b6b-407d88bdbeb0/42155374.jpg?size=pdhz',
    fallbackImage: snapTrapFallback,
    imageAlt: 'Black reusable mechanical rodent snap trap',
    description: 'Mechanical traps for targeted rodent control where rapid interception and clear evidence of activity are important.',
    useCase: 'Useful within monitored rodent programmes and targeted high-activity locations.',
  },
  {
    name: 'Inspect Monitors',
    category: 'Pest Monitoring',
    image: 'https://catchmasterpro.com/cdn/shop/files/Shopify_Product_Images-288I-Product-20240830.jpg?v=1734119487&width=1100',
    fallbackImage: inspectMonitorFallback,
    imageAlt: 'Foldable crawling-insect glue trap and monitoring card',
    description: 'Low-profile monitoring devices that help reveal crawling-insect activity and support evidence-led inspection decisions.',
    useCase: 'Ideal for surveillance points where early detection and trend monitoring matter.',
  },
];

export default function Products() {
  return (
    <div className="min-h-screen text-white" style={{ background: '#001C3D' }}>
      <section className="relative overflow-hidden border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <div
          className="absolute -right-28 -top-28 h-[520px] w-[520px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0097C4 0%, transparent 67%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,151,196,1) 1px, transparent 1px), linear-gradient(to right, rgba(0,151,196,1,1) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-12">
          <div>
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-400 sm:px-4 sm:text-xs sm:tracking-[0.18em] mb-6 sm:mb-7">
              <Package size={13} className="shrink-0" /> <span>Q-Zone Supply Range</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black tracking-tight leading-[0.98] mb-5 sm:mb-6 break-words">
              Professional Pest &amp; Hygiene <span className="text-cyan-400">Products</span>
            </h1>
            <p className="text-slate-200 text-base sm:text-lg md:text-xl font-semibold leading-relaxed max-w-3xl">
              Q-Zone also supplies selected pest-management and hygiene products for homes, facilities, and managed commercial environments. Browse the range, then reach out to our team for availability and the right fit for your site.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-5 sm:p-7 md:p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/25 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="text-cyan-400" size={22} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-400 mb-2">Product enquiries</p>
                <p className="text-slate-200 text-sm sm:text-base font-semibold leading-relaxed">
                  No online checkout is required. Tell us what you need and Q-Zone will confirm current availability, model options, and suitability for your application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-9 sm:mb-12">
          <div>
            <p className="text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-3">Available product categories</p>
            <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight">Built for practical pest management</h2>
          </div>
          <p className="text-slate-300 text-sm sm:text-base font-semibold max-w-xl leading-relaxed">
            Product appearance and exact specifications can vary by model and stock. Contact the Q-Zone team before purchase for current product details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map(({ name, category, image, fallbackImage, imageAlt, description, useCase }) => (
            <article
              key={name}
              className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:border-cyan-400/40 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="relative aspect-[8/5] overflow-hidden border-b border-white/10 bg-white">
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-contain p-4 sm:p-5 transition-transform duration-500 group-hover:scale-[1.035]"
                  loading="lazy"
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = fallbackImage;
                  }}
                />
              </div>

              <div className="p-5 sm:p-7 flex flex-col min-h-[320px]">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-3">{category}</p>
                <h3 className="text-2xl font-display font-black text-white mb-3">{name}</h3>
                <p className="text-slate-300 text-sm sm:text-base font-semibold leading-relaxed mb-5">{description}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-7">
                  <span className="text-white font-black">Best suited for:</span> {useCase}
                </p>
                <Link
                  to="/contact"
                  className="mt-auto inline-flex min-h-11 items-center gap-2 text-cyan-400 font-black text-sm uppercase tracking-widest hover:text-white transition-colors group/link"
                >
                  Reach Out <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto rounded-3xl border border-cyan-400/25 p-6 sm:p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          style={{ background: 'linear-gradient(135deg, rgba(0,69,110,0.72), rgba(0,36,58,0.9))' }}>
          <div>
            <p className="text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-3">Need help choosing?</p>
            <h2 className="text-3xl md:text-4xl font-display font-black mb-3 leading-tight">Tell us the pest or hygiene challenge.</h2>
            <p className="text-slate-200 text-sm sm:text-base font-semibold max-w-2xl leading-relaxed">
              Q-Zone can help match the appropriate monitoring, control, or hygiene product to your site and operational needs.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 bg-primary-gradient text-white px-6 sm:px-8 py-4 rounded-full font-black text-center shadow-blue-glow hover:opacity-90 transition-all"
          >
            Reach Out to Q-Zone <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
