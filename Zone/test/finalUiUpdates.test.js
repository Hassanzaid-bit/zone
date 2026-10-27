import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('residential precision quote presents a starting price only', async () => {
  const source = await read('src/pages/PrecisionQuote.jsx');
  assert.match(source, /Starting at KES/);
  assert.doesNotMatch(source, /priceRange\.max|Estimated Intervention Range|Estimated Price Range/);
});

test('navigation places About Us after IPM and Products immediately before Resources', async () => {
  const app = await read('src/App.jsx');
  const desktop = app.slice(app.indexOf('{/* ── Desktop Nav Links'), app.indexOf('{/* ── Right Side: CTA'));
  const ipm = desktop.indexOf('>\n            IPM\n');
  const about = desktop.indexOf('>About Us</NavLink>');
  const products = desktop.indexOf('>Products</NavLink>');
  const resources = desktop.indexOf('>Resources</NavLink>');
  assert.ok(ipm >= 0 && about > ipm, 'About Us should immediately follow IPM in the desktop navigation');
  assert.ok(products > about && resources > products, 'Products should appear before Resources');
  assert.match(app, /const Products\s*=\s*lazy\(\(\)\s*=>\s*import\(['"]\.\/pages\/Products['"]\)\)/);
  assert.match(app, /<Route path=["']products["'] element=\{<Products \/>\} \/>/);
});

test('Products page is enquiry-only and routes visitors to Contact', async () => {
  const source = await read('src/pages/Products.jsx');
  for (const name of ['Sanitary Bins', 'FCU ED21', 'FCU Practica', 'Guardian Stations', 'Snap Traps', 'Inspect Monitors']) {
    assert.match(source, new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
  assert.match(source, /to=["']\/contact["']/);
  assert.match(source, /Reach Out/i);
  assert.doesNotMatch(source, /Add to Cart|KES\s*[0-9]|KSh\s*[0-9]/i);
});

test('Contact page embeds the Nairobi map and opens the full map when clicked', async () => {
  const source = await read('src/pages/Contact.jsx');
  assert.match(source, /<iframe/);
  assert.match(source, /google\.com\/maps\?q=/);
  assert.match(source, /maps\.app\.goo\.gl\/KEat7UanEohKZMgX7/);
  assert.match(source, /pointer-events-none/);
});

test('Home hero rotates through at least six optimized highlight images without carousel controls', async () => {
  const source = await read('src/pages/Home.jsx');
  const optimizedImports = [...source.matchAll(/assets\/optimized\/home-carousel\/[^'"]+\.webp/g)];
  assert.ok(optimizedImports.length >= 6, `expected at least six optimized carousel imports, found ${optimizedImports.length}`);
  assert.match(source, /heroSlides/);
  assert.match(source, /setHeroIndex/);
  assert.doesNotMatch(source, /aria-label=["'](Next|Previous) slide["']/i);
});

test('Ambient pest animation rotates between multiple pest silhouettes', async () => {
  const source = await read('src/components/AmbientPest.jsx');
  for (const pest of ['cockroach', 'ant', 'fly', 'mosquito', 'mouse', 'beetle']) {
    assert.match(source, new RegExp(`['"]${pest}['"]`));
  }
  assert.match(source, /setPestType/);
});

test('Key Pest Library photographs use stable Commons sources rather than prior hotlinks', async () => {
  const source = await read('src/data/pestData.js');
  for (const id of ['cockroaches', 'rats', 'mice', 'house-flies', 'bed-bugs', 'mosquitoes', 'termites', 'ants', 'weevils', 'nairobi-fly', 'locusts']) {
    const start = source.indexOf(`id: '${id}'`);
    assert.ok(start >= 0, `${id} entry should exist`);
    const next = source.indexOf("\n  {", start + 1);
    const entry = source.slice(start, next === -1 ? source.length : next);
    assert.match(entry, /commons\.wikimedia\.org\/wiki\/Special:Redirect\/file\//, `${id} should use a Wikimedia Commons image`);
  }
});
