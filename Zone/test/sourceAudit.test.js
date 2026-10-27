import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('Pest Library does not bypass HashRouter with the History API', async () => {
  const source = await read('src/pages/PestLibrary.jsx');
  assert.doesNotMatch(source, /window\.history\.(replaceState|pushState)/);
});

test('rendered social links do not contain empty anchors or removed networks', async () => {
  const [app, about] = await Promise.all([
    read('src/App.jsx'),
    read('src/pages/AboutUs.jsx'),
  ]);
  const source = `${app}\n${about}`;

  assert.doesNotMatch(source, /href=["']#["']/);
  assert.doesNotMatch(source, /instagram\.com/i);
  assert.doesNotMatch(source, /TikTok/i);
  assert.doesNotMatch(source, /X\s*\/\s*Twitter/i);
  assert.doesNotMatch(source, /InstagramIcon/);
});

test('App does not eagerly import route components that are never rendered', async () => {
  const app = await read('src/App.jsx');
  assert.doesNotMatch(app, /import CommercialPhosphine from/);
  assert.doesNotMatch(app, /import HealthcareEducation from/);
  assert.doesNotMatch(app, /import PhosphineFumigation from/);
});

test('route components are lazy-loaded behind a Suspense boundary', async () => {
  const app = await read('src/App.jsx');

  assert.match(app, /\blazy\b/);
  assert.match(app, /\bSuspense\b/);
  assert.match(app, /const Home\s*=\s*lazy\(\(\)\s*=>\s*import\(['"]\.\/pages\/Home['"]\)\)/);
  assert.match(app, /const PestLibrary\s*=\s*lazy\(\(\)\s*=>\s*import\(['"]\.\/pages\/PestLibrary['"]\)\)/);
  assert.match(app, /<Suspense[\s\S]*?<Routes>/);
  assert.doesNotMatch(app, /^import\s+\w+\s+from\s+['"]\.\/pages\//m);
});

test('live routes import optimized derivatives instead of oversized hero sources', async () => {
  const files = [
    'src/pages/Home.jsx',
    'src/pages/Contact.jsx',
    'src/pages/AboutUs.jsx',
    'src/pages/PestLibrary.jsx',
    'src/pages/Resources.jsx',
    'src/pages/sectors/SectorLayout.jsx',
    'src/pages/residential/ResidentialLayout.jsx',
    'src/pages/sectors/FoodManufacturing.jsx',
    'src/pages/sectors/Hospitality.jsx',
    'src/pages/sectors/Logistics.jsx',
    'src/pages/sectors/Agriculture.jsx',
    'src/pages/sectors/Healthcare.jsx',
    'src/pages/sectors/Education.jsx',
    'src/pages/sectors/Corporate.jsx',
    'src/pages/residential/Apartments.jsx',
  ];
  const source = (await Promise.all(files.map(read))).join('\n');

  assert.match(source, /assets\/optimized\//);
  assert.doesNotMatch(source, /assets\/album\/Highlights\/(DSC08000|DSC08108|DSC08103|DSC08086|DSC08126)\.jpg/);
  assert.doesNotMatch(source, /assets\/background\/(Aperson|pest-library)\.png/);
  assert.doesNotMatch(source, /assets\/sectors\/(food-manufacturing-hero|hospitality-hero|logistics-hero|agriculture-hero|healthcare-education-hero|corporate-hero)\.png/);
  assert.doesNotMatch(source, /assets\/background\/apartments\.jpg/);
});

test('critical hero images are prioritised and non-critical content images are lazy-loaded', async () => {
  const critical = (await Promise.all([
    read('src/pages/Home.jsx'),
    read('src/pages/AboutUs.jsx'),
    read('src/pages/sectors/SectorLayout.jsx'),
    read('src/pages/residential/ResidentialLayout.jsx'),
  ])).join('\n');
  const deferred = `${await read('src/pages/Home.jsx')}\n${await read('src/pages/PestLibrary.jsx')}`;

  assert.match(critical, /fetchPriority=["']high["']/);
  assert.match(critical, /decoding=["']async["']/);
  assert.match(deferred, /loading=["']lazy["']/);
});

test('nested route imagery below shared heroes defers decoding and loading', async () => {
  const files = [
    'src/pages/sectors/FoodManufacturing.jsx',
    'src/pages/sectors/Hospitality.jsx',
    'src/pages/sectors/Logistics.jsx',
    'src/pages/sectors/Agriculture.jsx',
    'src/pages/sectors/Healthcare.jsx',
    'src/pages/sectors/Education.jsx',
    'src/pages/sectors/Corporate.jsx',
  ];

  for (const file of files) {
    const source = await read(file);
    assert.match(source, /loading=["']lazy["']/, `${file} should lazy-load its nested hero image`);
    assert.match(source, /decoding=["']async["']/, `${file} should decode its nested hero image asynchronously`);
  }
});

test('ambient pest is global, non-interactive and respects reduced motion', async () => {
  const [app, component, css] = await Promise.all([
    read('src/App.jsx'),
    read('src/components/AmbientPest.jsx'),
    read('src/index.css'),
  ]);

  assert.match(app, /<AmbientPest\s*\/>/);
  assert.match(component, /prefers-reduced-motion:\s*reduce/);
  assert.match(component, /createPestRun/);
  assert.match(component, /aria-hidden=["']true["']/);
  assert.match(css, /\.ambient-pest[\s\S]*pointer-events:\s*none/);
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
});

test('public pages contain no internal TODOs, pending placeholders or unsafe style injection', async () => {
  const source = (await Promise.all([
    read('src/pages/IPM.jsx'),
    read('src/pages/Resources.jsx'),
    read('src/pages/PestLibrary.jsx'),
  ])).join('\n');

  assert.doesNotMatch(source, /TODO|Pending Approval|Case Study Placeholder|\[Pending\]|Pending stock confirmation/);
  assert.doesNotMatch(source, /dangerouslySetInnerHTML/);
});

test('Pest Library describes the live 36-entry catalogue rather than a stale fixed count', async () => {
  const source = await read('src/pages/PestLibrary.jsx');
  assert.doesNotMatch(source, /20 most common pest/i);
  assert.match(source, /\{pestData\.length\}/);
});

test('public CTAs do not point to the deprecated residential phosphine redirect', async () => {
  const source = (await Promise.all([
    read('src/pages/Home.jsx'),
    read('src/pages/IPM.jsx'),
    read('src/pages/sectors/Agriculture.jsx'),
  ])).join('\n');

  assert.doesNotMatch(source, /to=["']\/residential\/phosphine-fumigation["']/);
});

test('Resources presents third-party links as curated reading rather than Q-Zone-authored latest articles', async () => {
  const source = await read('src/pages/Resources.jsx');

  assert.doesNotMatch(source, /all written by field professionals/i);
  assert.doesNotMatch(source, /Browse Latest Articles/i);
  assert.doesNotMatch(source, /Always Fresh/i);
  assert.doesNotMatch(source, /Subscribe to Updates/i);
  assert.doesNotMatch(source, /resource\.date/);
  assert.match(source, /Curated/i);
});


test('all public enquiry forms include the shared honeypot and reasonable field limits', async () => {
  const files = [
    'src/pages/Contact.jsx',
    'src/pages/ResidentialQuote.jsx',
    'src/pages/PrecisionQuote.jsx',
    'src/pages/CommercialQuote.jsx',
  ];

  for (const file of files) {
    const source = await read(file);
    assert.match(source, /FormHoneypot/, `${file} should render the shared honeypot`);
    assert.match(source, /hasHoneypotValue/, `${file} should discard honeypot submissions before EmailJS`);
    assert.match(source, /maxLength=\{?\d+\}?/, `${file} should bound free-text form fields`);
  }
});


test('deprecated unreachable page components are removed from the deployment source tree', async () => {
  const legacyFiles = [
    'src/pages/CommercialPhosphine.jsx',
    'src/pages/residential/PhosphineFumigation.jsx',
    'src/pages/sectors/HealthcareEducation.jsx',
  ];

  for (const file of legacyFiles) {
    await assert.rejects(access(new URL(`../${file}`, import.meta.url)), undefined, `${file} should not remain as dead source`);
  }
});


test('unknown hash routes recover to the home page instead of rendering a blank shell', async () => {
  const app = await read('src/App.jsx');
  assert.match(app, /<Route\s+path=["']\*["']\s+element=\{<Navigate\s+to=["']\/["']\s+replace\s*\/>\}\s*\/>/);
});


test('Pest Library uses pest terminology accurately instead of calling every catalogue entry a disease vector', async () => {
  const [library, detail, data] = await Promise.all([
    read('src/pages/PestLibrary.jsx'),
    read('src/pages/PestDetail.jsx'),
    read('src/data/pestData.js'),
  ]);
  assert.doesNotMatch(library, /common pest vectors|of \{pestData\.length\} vectors|any pest species found in the Kenyan ecosystem/i);
  assert.doesNotMatch(detail, /risk vector/i);
  assert.doesNotMatch(data, /20 Kenyan Ecosystem Vectors/i);
});

test('HTML shell carries production-facing title and search metadata', async () => {
  const html = await read('index.html');
  assert.match(html, /<title>Q-Zone Pest Control \| Kenya<\/title>/);
  assert.match(html, /<meta\s+name=["']description["']/);
  assert.doesNotMatch(html, /<title>qzone-app<\/title>/i);
});


test('resource descriptions do not promise downloads or Q-Zone-authored material that the page does not provide', async () => {
  const data = await read('src/data/resourcesData.js');
  assert.doesNotMatch(data, /Download our interactive checklist/i);
  assert.match(data, /UK supplier approval requirements/i);
});


test('all static internal Link targets resolve to a live route or an intentional legacy redirect', async () => {
  const files = [
    'src/App.jsx',
    'src/pages/Home.jsx',
    'src/pages/AboutUs.jsx',
    'src/pages/IPM.jsx',
    'src/pages/PestLibrary.jsx',
    'src/pages/PestDetail.jsx',
    'src/pages/Products.jsx',
    'src/pages/PrecisionQuote.jsx',
    'src/pages/Resources.jsx',
    'src/pages/Contact.jsx',
    'src/pages/residential/Apartments.jsx',
    'src/pages/residential/OwnCompounds.jsx',
    'src/pages/residential/GatedEstates.jsx',
    'src/pages/residential/Rentals.jsx',
    'src/pages/residential/ResidentialLayout.jsx',
    'src/pages/sectors/SectorLayout.jsx',
    'src/pages/sectors/FoodManufacturing.jsx',
    'src/pages/sectors/Hospitality.jsx',
    'src/pages/sectors/Logistics.jsx',
    'src/pages/sectors/Agriculture.jsx',
    'src/pages/sectors/Healthcare.jsx',
    'src/pages/sectors/Education.jsx',
    'src/pages/sectors/Corporate.jsx',
  ];
  const sources = await Promise.all(files.map(read));
  const allowed = new Set([
    '/', '/about-us', '/commercial-quote', '/contact', '/ipm', '/library', '/products',
    '/precision-quote', '/residential-quote', '/residential/apartments',
    '/residential/gated-estates', '/residential/general-defense',
    '/residential/own-compounds', '/residential/rentals', '/resources',
    '/sectors', '/sectors/agriculture', '/sectors/corporate', '/sectors/education',
    '/sectors/food-manufacturing', '/sectors/healthcare', '/sectors/hospitality',
    '/sectors/logistics',
  ]);

  for (let i = 0; i < files.length; i += 1) {
    const matches = [...sources[i].matchAll(/\bto=["'](\/[^"']*)["']/g)];
    for (const match of matches) {
      const target = match[1].split('?')[0].replace(/\/$/, '') || '/';
      assert.ok(allowed.has(target), `${files[i]} links to unresolved route ${match[1]}`);
    }
  }

  const app = sources[0];
  assert.match(app, /path=["']library\/:id["']/);
});
