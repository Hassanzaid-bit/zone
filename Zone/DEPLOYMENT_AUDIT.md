# Q-Zone Website Deployment Audit

**Audit date:** 4 September 2026  
**Target:** React/Vite static site using `HashRouter` and GitHub Pages base `/Zone/`

## Executive status

The codebase has been hardened and cleaned for deployment. Local tests, lint, production build, source-security checks, route-link checks, and static preview HTTP checks pass.

Two external/business actions remain before real production launch:

1. **Configure and test the real EmailJS account/template.** The original project contained placeholder EmailJS IDs, so live email delivery cannot be verified without the real service ID, template ID, and public key.
2. **Approve a privacy/data-protection notice for the forms.** The site collects personal contact information but currently has no privacy notice. Q-Zone should approve the purpose, retention, processor/third-party handling, contact point, and any applicable transfer wording before publication.

These are deployment configuration/governance items, not unresolved application-code failures.

---

## 1. Form delivery to three Q-Zone inboxes

### Fixed

All four public forms now share one email utility:

- Contact Us
- Residential Quote
- Precision Quote
- Commercial Assessment

Every legitimate submission maps the same message to:

- **To:** `operations@qzone.co.ke`
- **CC:** `accounts@qzone.co.ke`
- **BCC:** `accounts.assistant@qzone.co.ke`

The implementation sends **one EmailJS request**, rather than three parallel requests. This is more reliable with EmailJS browser-side rate limiting and still distributes one submission to all three inboxes.

### Production setup required

Set these deployment variables from `.env.example`:

```text
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Configure the EmailJS template address fields exactly as:

```text
To Email:  {{to_email}}
CC:        {{cc_email}}
BCC:       {{bcc_email}}
Reply-To:  {{reply_to}}
```

Use `{{form_title}}` and `{{form_body}}` for the email subject/body.

Also configure the real production origin in EmailJS **Allowed Origins / Domains**. If form abuse becomes significant, enable provider-side CAPTCHA or move form submission behind a serverless endpoint with server-side rate limiting.

### Added abuse/error controls

- Missing/placeholder EmailJS config is rejected with a clear error.
- Submit buttons prevent repeat clicks while a request is in progress.
- EmailJS SDK headless-browser blocking is enabled.
- Client throttle is set to 10 seconds.
- All forms include a hidden honeypot field; bot-filled submissions are silently discarded.
- Free-text values are length-bounded in the UI and clamped again before email formatting.
- Send failures preserve a user-facing retry/call message rather than falsely displaying success.

**Verification:** recipient mapping, config validation, one-request behavior, throttling options, honeypot detection, and value limiting have automated tests.

---

## 2. Image and load-performance improvements

### Live-route image optimization

Fourteen large live-route images were converted to display-appropriate WebP derivatives while preserving the original source images in the project archive.

**Combined live image payload represented by those files:**

- Before: **18.42 MB**
- Optimized derivatives: **3.21 MB**
- Reduction: **82.6%**

Examples:

| Image | Before | Optimized | Reduction |
|---|---:|---:|---:|
| DSC08000 hero | 1.71 MB | 0.34 MB | 80.0% |
| DSC08103 contact | 2.03 MB | 0.41 MB | 80.1% |
| DSC08086 about | 2.56 MB | 0.55 MB | 78.4% |
| Aperson commercial | 1.49 MB | 0.07 MB | 95.2% |
| Pest Library hero | 1.31 MB | 0.21 MB | 84.0% |

No live page now directly imports the five large `album/Highlights` JPGs that were causing the most noticeable delay.

### Loading behaviour

- Critical hero images use high-priority/asynchronous decoding where appropriate.
- Non-critical page images use lazy loading and asynchronous decoding.
- Logo-marquee images below the fold are lazy-loaded.
- Route modules are code-split with `React.lazy` and `Suspense`.

### JavaScript entry improvement

Captured production-build entry bundle:

- Before: **664.22 kB** raw / **176.44 kB gzip**
- After: **271.39 kB** raw / **86.83 kB gzip**
- Raw reduction: **59.1%**
- Gzip reduction: **50.8%**

The original Vite oversized-entry warning is no longer emitted.

### Remaining image risk

The Pest Library still uses **36 third-party hotlinked pest-image URLs**, including several Google image-thumbnail URLs. This can cause:

- variable load speed;
- broken images when third-party URLs change;
- hotlink blocking;
- unclear image licensing/attribution obligations.

**Recommendation:** replace each pest image gradually with a Q-Zone-owned, commissioned, properly licensed, or clearly reusable local/CDN asset. This audit did not download/rehost third-party copyrighted images without permission.

---

## 3. Security and resilience review

### Source-level checks now passing

The deployment scanner checks the public source tree for:

- empty or hash-only links;
- `dangerouslySetInnerHTML`;
- direct History API manipulation that bypasses React Router;
- removed Instagram/TikTok/X links;
- EmailJS placeholder IDs;
- internal TODO/pending content;
- `eval()` / `new Function()`;
- direct imports of known oversized live images;
- `target="_blank"` links missing `rel="noopener noreferrer"`;
- insecure public `http://` URLs.

Current result: **0 source blockers across 36 scanned source files**.

### Dependency review

Installed key versions at audit time include:

- React `19.2.7`
- React DOM `19.2.7`
- React Router DOM `7.17.0`
- EmailJS Browser `4.4.1`
- Vite `8.0.16`

`npm audit` was attempted, but the audit endpoint could not be reached from this execution environment (`EAI_AGAIN registry.npmjs.org`). Therefore this report does **not** claim a complete npm advisory clearance.

A manual current-advisory check confirmed that Vite `8.0.16` is the patched version for the June 2026 high-severity `server.fs.deny` Windows alternate-path advisory (affected through `8.0.15`). Earlier April 2026 Vite 8 advisories were patched in versions before `8.0.16` as well.

References:

- GitHub Vite advisory GHSA-fx2h-pf6j-xcff: https://github.com/vitejs/vite/security/advisories/GHSA-fx2h-pf6j-xcff
- Vite security advisories: https://github.com/vitejs/vite/security/advisories

### Secrets

No private SMTP password or private API secret was added. Vite `VITE_*` values are browser-visible by design; only the EmailJS browser identifiers belong there.

---

## 4. Cockroach / pest animation

A global lightweight SVG cockroach was added as an ambient interaction.

It does **not** use a robotic infinite left-to-right loop. Each run:

- starts outside a random viewport edge;
- follows several uneven randomized waypoints;
- changes direction/rotation based on the generated path;
- varies speed and easing;
- disappears off-screen;
- remains idle for a randomized interval before another run.

Accessibility/safety behaviour:

- `pointer-events: none` so it never blocks forms or navigation;
- `aria-hidden="true"` because it is decorative;
- fully disabled when the user requests `prefers-reduced-motion: reduce`;
- animation is below the navigation layer.

The pure movement generator has deterministic automated coverage.

---

## 5. Navigation, links, socials, and dead code

### Social cleanup

Removed site-wide references to:

- Instagram
- TikTok
- X / Twitter

Retained the approved:

- Facebook
- LinkedIn

No empty `href="#"` social anchors remain.

### Routing fixes

- Pest Library query/filter state now uses React Router rather than manually calling `window.history.replaceState`.
- Unknown hash routes now safely redirect to Home instead of rendering an empty route shell.
- All hard-coded internal React Router `Link` targets are covered by an automated route-integrity check.
- The dynamic `/library/:id` pest-detail route is verified by the source test.

### Phosphine route repair

Several public CTAs previously linked to `/residential/phosphine-fumigation`, but that route immediately redirected to Apartments. Those CTAs now point to the relevant Agriculture or Contact path.

The obsolete public fumigation page was removed instead of restoring detailed dosage/protocol content that should only be published after current product-label and regulatory review.

### Dead source removed

Removed three unreachable legacy page components:

- `CommercialPhosphine.jsx`
- `residential/PhosphineFumigation.jsx`
- `sectors/HealthcareEducation.jsx`

Legacy URL redirects remain where useful for old bookmarks.

---

## 6. Pest Library and Resources audit

### Pest Library corrections

- Catalogue count is now dynamic from `pestData.length` rather than stale hard-coded “20”.
- Current dataset contains **36 entries**.
- Broad wording that called every entry a “vector” was changed to “pest/pest species”; not every listed organism is a disease vector.
- The claim that Q-Zone can treat “any pest species found in the Kenyan ecosystem” was softened to a defensible “wide range”.
- Inline CSS previously injected with `dangerouslySetInnerHTML` was moved to the stylesheet.

### Resources corrections

- Removed “pending stock confirmation” store/product claims.
- Removed a public-facing internal IPM TODO and unapproved case-study placeholder.
- External reading is now clearly presented as **curated third-party reading**, not Q-Zone-authored “latest articles”.
- Stale BRCGS/SALSA wording was updated to current official reference pages.
- The SALSA entry no longer promises an “interactive checklist” that the website does not provide and now identifies SALSA as relevant to UK supplier approval requirements.

### Recommended editorial review

Before public launch, verify or source the following business claims because the project files themselves do not establish them:

1. Current PCPB, PEMAK, NPMA and any NEMA membership/certification claims and the right to display each badge.
2. Named customer testimonials, quoted outcomes, company names, and permission to publish them.
3. SLA/guarantee claims such as 2-hour response, 24-hour response guarantee, `<4-hour` emergency response, same-technician guarantee, and zero-downtime guarantee.
4. Broad safety language such as “family-safe” or “zero disruption”; ensure wording matches approved product labels, service conditions, and actual contracts.
5. Pest biological/health statements in the 36-entry library. Add source references to authoritative entomology/public-health material, especially where diseases or species prevalence in Kenya are asserted.

---

## 7. Data protection / privacy gap

The forms collect personal data including names, phone numbers, email addresses, physical addresses, business details, and pest/property descriptions.

No privacy/data-protection notice currently exists in the site source.

Kenya's Office of the Data Protection Commissioner states that a data subject has a right to be informed how personal data will be used and describes transparency, purpose limitation, data minimisation, retention, and transfer safeguards among the core principles.

Before production, Q-Zone should approve a real privacy notice covering at least:

- identity/contact details of the data controller;
- why enquiry/quote data is collected;
- what information is collected;
- lawful basis approved by Q-Zone's data-governance/legal owner;
- who receives/processes the data, including the email delivery provider;
- retention/deletion approach;
- data-subject rights and contact path;
- applicable third-party/cross-border processing safeguards;
- complaint/escalation information as appropriate.

Reference: ODPC — Rights of a Data Subject and Data Protection Statement: https://www.odpc.go.ke/rights-of-a-data-subject/ and https://www.odpc.go.ke/data-protection-statement/

This audit intentionally did not invent legal policy wording or a consent basis without Q-Zone approval.

---

## 8. Verification performed

Automated/local checks included:

```bash
npm test
npm run lint
npm run build
npm run audit:project
git diff --check
```

The built GitHub Pages shell was served through Vite Preview at `/Zone/` and returned HTTP `200`; the built JS, CSS, and `/Zone/favicon.svg` also returned `200`. Representative hash-route URLs returned the production shell successfully.

The preferred `agent-browser` automation CLI was not installed in this execution environment. A direct Chromium headless attempt was blocked by the container runtime/DBus environment before DOM capture, so this report does not claim a completed interactive visual-browser pass. The deterministic source tests, production build, route-link tests, and HTTP preview checks are included instead.

---

## 9. Deployment checklist

Before switching the public site over:

- [ ] Add real EmailJS environment values in the deployment configuration.
- [ ] Configure EmailJS template To / CC / BCC / Reply-To variables.
- [ ] Restrict EmailJS Allowed Origins to the real production domain(s).
- [ ] Perform one real submission from each of the four forms and confirm all three inboxes receive it.
- [ ] Approve and publish the privacy/data-protection notice.
- [ ] Verify current PCPB/PEMAK/NPMA/NEMA evidence and marketing use of badges.
- [ ] Verify testimonial permissions and contractual SLA/guarantee claims.
- [ ] Gradually replace the 36 hotlinked pest images with owned/licensed local/CDN images.
- [ ] Run `npm audit` again in an environment with npm registry access.
- [ ] Do a final desktop/mobile visual smoke test on the actual deployed URL.

Once those external/configuration items are completed, the codebase is set up for the final production validation pass.
