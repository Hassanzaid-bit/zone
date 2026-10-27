# Q-Zone IPM Website

React + Vite website for Q-Zone IPM. The site is designed mobile-first, uses hash-based routing for static hosting, and keeps public enquiry forms behind one shared EmailJS integration.

## Local development

Requirements: a current Node.js LTS release and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

The website itself will run without EmailJS credentials, but form delivery will only work after the email setup below is completed.

## Product images

The Products page uses six lightweight SVG illustrations stored in:

```text
src/assets/products/
```

They are bundled into the deployed site rather than hot-linked from an external image host. This avoids broken images if another website changes its URLs, and avoids depending on manufacturer/store photography with uncertain reuse rights. The illustrations are generic representations; exact supplied appearance/specification can still vary by current model and stock.

When adding a new product, place its image inside `src/assets/products/`, import it in `src/pages/Products.jsx`, and provide a meaningful `imageAlt` value. Prefer local WebP/SVG assets over external image URLs.

## Email delivery setup (EmailJS)

All public forms already call the shared utility in:

```text
src/utils/emailService.js
```

The form pages are:

```text
src/pages/Contact.jsx
src/pages/ResidentialQuote.jsx
src/pages/PrecisionQuote.jsx
src/pages/CommercialQuote.jsx
```

### 1. Create/connect the EmailJS service

Create an EmailJS account and connect the mailbox/service that should send Q-Zone website enquiries.

### 2. Create one EmailJS template

Configure the template fields with these **exact** variables:

```text
To Email:  {{to_email}}
CC:        {{cc_email}}
BCC:       {{bcc_email}}
Reply-To:  {{reply_to}}
```

Suggested subject:

```text
{{form_title}}
```

Suggested body:

```text
New Q-Zone website enquiry

{{form_body}}
```

The current application sends each submission to:

```text
To:  operations@qzone.co.ke
CC:  accounts@qzone.co.ke
BCC: accounts.assistant@qzone.co.ke
```

To change these recipients later, update `EMAIL_RECIPIENTS` in `src/utils/emailService.js`.

### 3. Configure the environment variables

Copy the example file:

```bash
cp .env.example .env.local
```

Then replace the example values with the IDs from EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=public_xxxxx
```

For production, add the same three variables in the hosting provider's environment settings **before** building/deploying the site.

> Vite variables beginning with `VITE_` are included in the browser bundle. EmailJS service/template/public IDs are client configuration. Never place an SMTP password, mailbox password, private API key, or other secret in a `VITE_` variable.

### 4. Allow the live website domain

In EmailJS, add the final production website origin under **Account → Security → Domains**. If the production domain is not allowlisted, requests may be blocked even when the IDs are correct.

### 5. Test all four forms

After deployment, submit one test from each form and confirm:

- the success state appears in the browser;
- the message arrives at the To/CC/BCC addresses;
- Reply-To is the visitor's email address;
- the correct form title and submitted fields appear in the message;
- a failed EmailJS request shows the form error state rather than a false success message.

The shared client also enables EmailJS headless-browser blocking, a 10-second client throttle, field-length clamping, and a honeypot on the public forms. These are anti-abuse controls, not a replacement for mailbox/provider spam controls.

## Mobile-first / responsive notes

The site uses responsive Tailwind breakpoints, a dedicated mobile navigation drawer, local responsive images, and global overflow protection. Small-screen form controls are forced to at least 16px text size to avoid iOS Safari focus zoom.

When editing pages, use mobile spacing first (for example `px-4 sm:px-6 md:px-8`) and only add multi-column layouts at `sm`, `md`, or `lg` breakpoints. Avoid fixed-width content that can exceed a 320px viewport.

Recommended manual viewport checks before release:

```text
320 × 568   compact mobile
375 × 667   common mobile
390 × 844   modern mobile
768 × 1024  tablet
1280+       desktop
```

Check the navigation drawer, hero headings, forms, cards, maps/iframes, buttons, and footer at each size.

## Production checks

Run these before deployment:

```bash
npm test
npm run audit:project
npm run lint
npm run build
```

If `npm test` cannot import a package, run `npm install` first to restore `node_modules` from `package-lock.json`.

## Deployment

The site uses `HashRouter` so routes work on static hosting without server-side rewrite rules. Vite is currently configured with base `/Zone/` for the existing GitHub Pages-style deployment path.

Deploy the contents produced by:

```bash
npm run build
```

and make sure the production environment contains the three `VITE_EMAILJS_*` variables at build time.

## Product photography

The Products page currently uses real product photographs from supplier/manufacturer product listings, with the original local SVG illustrations retained as automatic fallbacks. This makes the page visually accurate while keeping a graceful fallback if an external CDN is unavailable.

For the production website, the recommended final step is to obtain Q-Zone's own product photos or supplier/manufacturer-approved image files and save them in `src/assets/products/`. Then replace the remote URLs in `src/pages/Products.jsx` with local imports. This removes the long-term dependency on third-party image hosting and makes image-usage permission explicit.
