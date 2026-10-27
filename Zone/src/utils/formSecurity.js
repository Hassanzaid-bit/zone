export const FORM_FIELD_LIMIT = 2000;

export function hasHoneypotValue(formData) {
  return String(formData?.get?.('website') ?? '').trim() !== '';
}

export function clampFormValue(value, maxLength = FORM_FIELD_LIMIT) {
  return String(value ?? '').trim().slice(0, maxLength);
}
