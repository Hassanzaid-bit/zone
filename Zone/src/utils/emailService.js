/**
 * Shared EmailJS utility for all Q-Zone forms.
 *
 * Production setup (the only external step required for live delivery):
 * - Configure the VITE_EMAILJS_* values in the deployment environment.
 * - Configure the EmailJS template fields as:
 *     To:       {{to_email}}
 *     CC:       {{cc_email}}
 *     BCC:      {{bcc_email}}
 *     Reply-To: {{reply_to}}
 * - Use {{form_title}} and {{form_body}} in the subject/body as required.
 * - Add the production website origin to the EmailJS domain allowlist.
 * - Copy .env.example to .env.local locally, and set the same three variables
 *   in the production hosting environment. Do not commit .env.local.
 *
 * If forms render but email is not received, check these items in order:
 * 1. The three VITE_EMAILJS_* values exist in the deployed build environment.
 * 2. The EmailJS template uses the exact variable names documented below.
 * 3. The website origin is allowed in EmailJS Account / Security / Domains.
 * 4. The connected EmailJS mail service can send to the configured recipients.
 *
 * Note: Vite variables are embedded into the browser bundle. These EmailJS
 * identifiers are public client configuration, not private mail credentials.
 */

import emailjs from '@emailjs/browser';
import { clampFormValue } from './formSecurity.js';

const env = import.meta.env ?? {};

export const EMAILJS_CONFIG = Object.freeze({
  serviceId: env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: env.VITE_EMAILJS_PUBLIC_KEY ?? '',
});

export const EMAIL_RECIPIENTS = Object.freeze([
  'operations@qzone.co.ke',
  'accounts@qzone.co.ke',
  'accounts.assistant@qzone.co.ke',
]);

export function buildFormBody(fields) {
  return fields
    .filter((field) => {
      if (field?.value === undefined || field?.value === null) return false;
      return clampFormValue(field.value) !== '';
    })
    .map((field) => `${clampFormValue(field.label, 120)}: ${clampFormValue(field.value)}`)
    .join('\n');
}

export function validateEmailConfig(config) {
  const values = [config?.serviceId, config?.templateId, config?.publicKey];
  const invalid = values.some((value) => {
    const normalized = String(value ?? '').trim();
    return normalized === '' || normalized.startsWith('YOUR_');
  });

  if (invalid) {
    throw new Error(
      'EmailJS configuration is incomplete. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY before deploying.',
    );
  }

  return config;
}

export function buildTemplateParams(formTitle, fields, replyTo = '') {
  return {
    to_email: EMAIL_RECIPIENTS[0],
    cc_email: EMAIL_RECIPIENTS[1],
    bcc_email: EMAIL_RECIPIENTS[2],
    form_title: clampFormValue(formTitle, 160),
    form_body: buildFormBody(fields),
    reply_to: clampFormValue(replyTo, 254),
  };
}

export function createSendFormEmail(sendImpl, config = EMAILJS_CONFIG) {
  return async function sendConfiguredFormEmail(formTitle, fields, replyTo = '') {
    validateEmailConfig(config);

    return sendImpl(
      config.serviceId,
      config.templateId,
      buildTemplateParams(formTitle, fields, replyTo),
      {
        publicKey: config.publicKey,
        blockHeadless: true,
        limitRate: {
          id: 'qzone-forms',
          throttle: 10000,
        },
      },
    );
  };
}

export const sendFormEmail = createSendFormEmail(
  (...args) => emailjs.send(...args),
  EMAILJS_CONFIG,
);
