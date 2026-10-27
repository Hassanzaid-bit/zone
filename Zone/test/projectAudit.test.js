import test from 'node:test';
import assert from 'node:assert/strict';
import { scanSourceText } from '../scripts/audit-project.mjs';

test('scanSourceText catches deployment blockers and ignores safe external links', () => {
  const source = `
    <a href="#">Empty</a>
    <a href="https://example.com" target="_blank">Unsafe tab</a>
    <a href="https://safe.example" target="_blank" rel="noopener noreferrer">Safe tab</a>
    <div dangerouslySetInnerHTML={{ __html: content }} />
    const service = 'YOUR_SERVICE_ID';
    // TODO: internal placeholder
  `;

  const issues = scanSourceText('src/example.jsx', source);
  const rules = issues.map((issue) => issue.rule);

  assert.ok(rules.includes('empty-link'));
  assert.ok(rules.includes('unsafe-new-tab'));
  assert.ok(rules.includes('dangerous-html'));
  assert.ok(rules.includes('placeholder-config'));
  assert.ok(rules.includes('internal-placeholder'));
  assert.equal(issues.filter(({ rule }) => rule === 'unsafe-new-tab').length, 1);
});

test('scanSourceText catches removed social networks and router bypasses', () => {
  const source = `
    window.history.replaceState({}, '', '/library');
    <a href="https://instagram.com/qzone">Instagram</a>
  `;

  const issues = scanSourceText('src/example.jsx', source);
  const rules = issues.map((issue) => issue.rule);

  assert.ok(rules.includes('router-bypass'));
  assert.ok(rules.includes('removed-social'));
});
