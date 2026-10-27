import test from 'node:test';
import assert from 'node:assert/strict';
import {
  EMAIL_RECIPIENTS,
  buildFormBody,
  validateEmailConfig,
  buildTemplateParams,
  createSendFormEmail,
} from '../src/utils/emailService.js';

test('uses the three required Q-Zone recipient addresses', () => {
  assert.deepEqual(EMAIL_RECIPIENTS, [
    'operations@qzone.co.ke',
    'accounts@qzone.co.ke',
    'accounts.assistant@qzone.co.ke',
  ]);
});

test('buildFormBody omits blank values and trims displayed values', () => {
  const body = buildFormBody([
    { label: 'Name', value: '  Jane Doe  ' },
    { label: 'Email', value: '' },
    { label: 'Phone', value: null },
    { label: 'Message', value: ' Need help ' },
  ]);

  assert.equal(body, 'Name: Jane Doe\nMessage: Need help');
});

test('validateEmailConfig rejects missing or placeholder EmailJS settings', () => {
  assert.throws(
    () => validateEmailConfig({ serviceId: '', templateId: 'template_ok', publicKey: 'public_ok' }),
    /EmailJS configuration is incomplete/i,
  );

  assert.throws(
    () => validateEmailConfig({ serviceId: 'YOUR_SERVICE_ID', templateId: 'template_ok', publicKey: 'public_ok' }),
    /EmailJS configuration is incomplete/i,
  );
});

test('buildTemplateParams maps the three recipients into To, CC and BCC variables', () => {
  const params = buildTemplateParams(
    'Contact Us Form',
    [{ label: 'Name', value: 'Jane' }],
    'jane@example.com',
  );

  assert.equal(params.to_email, 'operations@qzone.co.ke');
  assert.equal(params.cc_email, 'accounts@qzone.co.ke');
  assert.equal(params.bcc_email, 'accounts.assistant@qzone.co.ke');
  assert.equal(params.form_title, 'Contact Us Form');
  assert.equal(params.form_body, 'Name: Jane');
  assert.equal(params.reply_to, 'jane@example.com');
});

test('createSendFormEmail makes exactly one EmailJS request with abuse controls', async () => {
  const calls = [];
  const sendImpl = async (...args) => {
    calls.push(args);
    return { status: 200, text: 'OK' };
  };
  const config = {
    serviceId: 'service_test',
    templateId: 'template_test',
    publicKey: 'public_test',
  };

  const send = createSendFormEmail(sendImpl, config);
  await send('Residential Quote Request', [{ label: 'Name', value: 'Jane' }], 'jane@example.com');

  assert.equal(calls.length, 1);
  const [serviceId, templateId, templateParams, options] = calls[0];
  assert.equal(serviceId, 'service_test');
  assert.equal(templateId, 'template_test');
  assert.equal(templateParams.to_email, 'operations@qzone.co.ke');
  assert.equal(templateParams.cc_email, 'accounts@qzone.co.ke');
  assert.equal(templateParams.bcc_email, 'accounts.assistant@qzone.co.ke');
  assert.deepEqual(options, {
    publicKey: 'public_test',
    blockHeadless: true,
    limitRate: { id: 'qzone-forms', throttle: 10000 },
  });
});
