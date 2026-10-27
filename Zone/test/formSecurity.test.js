import test from 'node:test';
import assert from 'node:assert/strict';
import { hasHoneypotValue, clampFormValue, FORM_FIELD_LIMIT } from '../src/utils/formSecurity.js';

test('hasHoneypotValue silently detects bot-filled website field', () => {
  const clean = new FormData();
  clean.set('website', '');
  assert.equal(hasHoneypotValue(clean), false);

  const bot = new FormData();
  bot.set('website', 'https://spam.example');
  assert.equal(hasHoneypotValue(bot), true);
});

test('clampFormValue trims values and caps a field to the configured safety limit', () => {
  assert.equal(clampFormValue('  hello  '), 'hello');
  assert.equal(clampFormValue('x'.repeat(FORM_FIELD_LIMIT + 50)).length, FORM_FIELD_LIMIT);
});
