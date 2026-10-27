# Q-Zone Deployment Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Make the Q-Zone React/Vite site deployment-ready by repairing three-recipient form email delivery, reducing initial load cost, adding an accessible ambient cockroach animation, cleaning social/routing/dead-code issues, and producing a verified security/content audit.

**Architecture:** Keep the static GitHub Pages + HashRouter deployment. Send one EmailJS request containing To/CC/BCC template variables, lazy-load page routes, import optimized WebP derivatives, and add a small global SVG animation driven by tested pure motion-generation logic.

**Tech Stack:** React 19, React Router 7, Vite 8, Tailwind CSS 3, EmailJS Browser 4, Node built-in test runner, ImageMagick for image derivatives.

**Spec:** `docs/superpowers/specs/2026-09-04-deployment-hardening-design.md`

## Global Constraints
- Keep GitHub Pages compatibility and `HashRouter`.
- Recipient addresses are `operations@qzone.co.ke`, `accounts@qzone.co.ke`, and `accounts.assistant@qzone.co.ke`.
- Keep Facebook and LinkedIn; remove Instagram, X/Twitter, and TikTok everywhere.
- Do not add an application backend.
- Do not expose private mail-service credentials; Vite EmailJS identifiers are public client configuration only.
- Respect `prefers-reduced-motion` for the ambient pest.
- Preserve original image source files; import optimized derivatives instead.

---

### Task 1: Form email configuration and one-request fan-out

**Files:**
- Create: `test/emailService.test.js`
- Create: `.env.example`
- Modify: `.gitignore`
- Modify: `src/utils/emailService.js`
- Modify: `README.md`

**Interfaces:**
- Produces: `EMAIL_RECIPIENTS`, `buildFormBody(fields)`, `validateEmailConfig(config)`, `buildTemplateParams(formTitle, fields, replyTo)`, `sendFormEmail(formTitle, fields, replyTo)`.
- EmailJS template params: `to_email`, `cc_email`, `bcc_email`, `form_title`, `form_body`, `reply_to`.

- [x] Write failing Node tests asserting three fixed recipients, blank-field filtering, missing-config rejection, and a single EmailJS send call with To/CC/BCC params.
- [x] Run `node --test test/emailService.test.js` and confirm RED because the new exports/behaviour do not exist.
- [x] Implement env-based config, validation, single-send template params, EmailJS `blockHeadless` + `limitRate`, and dependency injection only where needed for network isolation in tests.
- [x] Add `.env.example`, ignore `.env`/`.env.*` except the example, and document exact EmailJS dashboard To/CC/BCC fields plus production domain allowlisting.
- [x] Re-run `node --test test/emailService.test.js` and confirm GREEN.

### Task 2: HashRouter-safe Pest Library filter URLs and social cleanup

**Files:**
- Create: `test/sourceAudit.test.js`
- Modify: `src/pages/PestLibrary.jsx`
- Modify: `src/App.jsx`
- Modify: `src/pages/AboutUs.jsx`

**Interfaces:**
- Pest Library URL state uses React Router `useSearchParams` and `category` query param inside the hash route.
- Source audit checks rendered source for forbidden empty social links and removed social networks.

- [x] Write failing static/source tests for no `window.history.replaceState`, no `href="#"`, no Instagram/TikTok/X social labels/URLs, and no stale unused route-component imports.
- [x] Run `node --test test/sourceAudit.test.js` and confirm RED.
- [x] Replace manual History API calls with `useSearchParams`, remove Instagram/X/TikTok UI and obsolete icon code, and remove unused route imports.
- [x] Re-run `node --test test/sourceAudit.test.js` and confirm GREEN.

### Task 3: Route-level code splitting

**Files:**
- Modify: `test/sourceAudit.test.js`
- Modify: `src/App.jsx`

**Interfaces:**
- Top-level and nested route components are loaded via `React.lazy(() => import(...))`.
- `Routes` render inside one `Suspense` boundary with an accessible page-loading fallback.

- [x] Add a failing source test requiring `lazy`, `Suspense`, and dynamic imports for route modules while rejecting eager page imports.
- [x] Run the test and confirm RED.
- [x] Convert route imports to lazy imports and wrap routes in `Suspense` with a lightweight loader.
- [x] Run tests and `npm run build`; confirm chunks are split and the prior >500 KB entry warning is removed or materially reduced.

### Task 4: Optimize live-route imagery

**Files:**
- Create: `src/assets/optimized/*.webp`
- Modify: page imports in `src/pages/Home.jsx`, `src/pages/Contact.jsx`, `src/pages/AboutUs.jsx`, `src/pages/PestLibrary.jsx`, `src/pages/Resources.jsx`, `src/pages/sectors/SectorLayout.jsx`, `src/pages/residential/ResidentialLayout.jsx`, sector hero pages, and other live routes whose imported image exceeds 700 KB.
- Modify: `test/sourceAudit.test.js`

**Interfaces:**
- Optimized assets are WebP derivatives imported directly by Vite.
- Critical hero `<img>` elements use `loading="eager"`, `fetchPriority="high"`, `decoding="async"`; non-critical images use `loading="lazy"`, `decoding="async"`.

- [x] Add a failing source audit requiring album live-route imports to come from `assets/optimized` and rejecting direct imports of the five large album JPGs.
- [x] Generate WebP derivatives with ImageMagick (`-auto-orient -strip`, max 1920 px for landscape hero images, display-appropriate size for smaller cards, quality ~78–82).
- [x] Update imports and image loading attributes without changing visual layout.
- [x] Re-run tests and `npm run build`; record before/after largest image and JS entry sizes.

### Task 5: Ambient cockroach animation

**Files:**
- Create: `src/utils/pestMotion.js`
- Create: `test/pestMotion.test.js`
- Create: `src/components/AmbientPest.jsx`
- Modify: `src/App.jsx`
- Modify: `src/index.css`

**Interfaces:**
- `createPestRun(viewportWidth, viewportHeight, randomFn)` returns `{ keyframes, durationMs, idleMs }`.
- Keyframes contain transform/opacity/easing values that begin and end outside the viewport.
- `AmbientPest` schedules one Web Animations API run at a time and does not render motion when reduced-motion is requested.

- [x] Write failing tests for valid duration/idle ranges, entry/exit outside viewport, intermediate waypoint count, transform rotation, and deterministic output with an injected random function.
- [x] Run `node --test test/pestMotion.test.js` and confirm RED.
- [x] Implement the pure path generator.
- [x] Re-run unit tests and confirm GREEN.
- [x] Add the SVG `AmbientPest` component, global placement, and subtle leg/body animation CSS; use `pointer-events: none`, `aria-hidden`, and reduced-motion handling.
- [x] Run all tests, lint, and build.

### Task 6: Automated link/dead-code/security/content audit

**Files:**
- Create: `scripts/audit-project.mjs`
- Create: `DEPLOYMENT_AUDIT.md`
- Modify: `package.json`
- Modify: public-facing IPM/Resources copy only where clearly internal placeholder text is being exposed.

**Interfaces:**
- `npm run audit:project` performs deterministic local checks: empty anchors, `javascript:` URLs, insecure `http://` external links in JS/JSX data, `dangerouslySetInnerHTML`, placeholder EmailJS IDs, direct History API manipulation, removed social URLs, and missing local import targets.
- `DEPLOYMENT_AUDIT.md` records resolved items, external/manual configuration, content risks, and remaining recommendations.

- [x] Write the audit script checks so it initially fails on known placeholder/internal TODO content and any unresolved forbidden patterns.
- [x] Run `npm run audit:project` and confirm RED on current unresolved items.
- [x] Remove/replace public-facing internal TODO and pending approval blocks that are not suitable for production, while preserving business content that needs stakeholder verification in the audit report instead of inventing facts.
- [x] Review Pest Library data count/categories and hotlinked image sources; document reliability/licensing recommendations rather than downloading third-party copyrighted images without permission.
- [x] Attempt `npm audit`; if registry access fails, document the network limitation and separately review installed dependency versions against current official advisories/release information.
- [x] Run `npm run audit:project` and confirm GREEN.

### Task 7: Final verification and delivery

**Files:**
- Modify: `DEPLOYMENT_AUDIT.md` with final measurements/results.
- Create: `/mnt/data/QZone-deployment-ready.zip`

**Interfaces:**
- Delivery ZIP excludes `node_modules`, `dist`, `.git`, and local secret `.env` files; includes `.env.example`, source, tests, and audit report.

- [x] Run `node --test test/*.test.js`.
- [x] Run `npm run lint`.
- [x] Run `npm run build`.
- [x] Run `npm run audit:project`.
- [x] Run browser smoke verification against the Vite dev/preview server if the available browser harness supports it.
- [x] Confirm `git diff --check` and inspect final diff for accidental secrets or unrelated changes.
- [x] Create the clean deployment ZIP and verify its contents.
