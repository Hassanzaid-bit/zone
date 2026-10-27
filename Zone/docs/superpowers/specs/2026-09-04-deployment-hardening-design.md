# Q-Zone Deployment Hardening Design

## Goal
Prepare the existing React/Vite Q-Zone website for deployment by fixing form delivery, improving perceived and measured performance, adding a subtle pest animation, cleaning social/navigation issues, and completing a security/content audit without changing the current GitHub Pages architecture.

## Architecture
The site remains a static React 19 + Vite 8 application using `HashRouter` for GitHub Pages. Email delivery continues through EmailJS, but the app makes one EmailJS request per form submission and supplies three recipients to the EmailJS template (`to_email`, `cc_email`, `bcc_email`) so all three inboxes receive the same message without violating EmailJS's one-request-per-second browser rate limit.

Vite route components will be lazy-loaded with `React.lazy` and `Suspense`. Large locally bundled imagery used by live routes will be converted to WebP and resized to display-appropriate dimensions; non-critical `<img>` elements will use native lazy loading while critical hero images remain eager/high-priority.

A global `AmbientPest` component will render an SVG cockroach. It will appear only occasionally, traverse randomized edge-to-edge waypoints with varied speed/easing/rotation, ignore pointer events, and disable itself when `prefers-reduced-motion: reduce` is active.

## Form Delivery
- Recipient 1: `operations@qzone.co.ke`
- Recipient 2: `accounts@qzone.co.ke`
- Recipient 3: `accounts.assistant@qzone.co.ke`
- EmailJS settings move to `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.
- These Vite values are configuration, not secrets; browser EmailJS public identifiers remain visible in the client bundle by design.
- The EmailJS dashboard template must use `{{to_email}}`, `{{cc_email}}`, and `{{bcc_email}}` in its To/CC/BCC fields, and `{{form_title}}`, `{{form_body}}`, `{{reply_to}}` in the subject/body/reply-to fields.
- The browser SDK will use `blockHeadless` and `limitRate` for lightweight abuse resistance. EmailJS domain allowlisting must be configured in the EmailJS dashboard for the production origin.
- Forms retain their existing success/error UI; misconfiguration should return a clear configuration error instead of sending a broken request.

## Performance
- Lazy-load page-level routes.
- Convert all live-route album hero images currently imported from `src/assets/album/Highlights` to WebP.
- Convert other >700 KB live-route PNG hero assets to WebP where it materially reduces bundle size.
- Preserve original source images in the repository; only optimized derivatives are imported by the app.
- Add `loading="lazy"` and `decoding="async"` to non-critical repeated/content images; hero images use eager/high priority where they are `<img>` elements.
- Rebuild and compare output chunk/image sizes.

## Routing and Link Cleanup
- Replace `window.history.replaceState` in Pest Library with React Router search-param navigation compatible with `HashRouter`.
- Remove Instagram, X/Twitter, and TikTok from all rendered social lists; keep Facebook and LinkedIn.
- Remove dead `href="#"` social links.
- Remove page imports that have no matching rendered route and are currently dead code.
- Audit internal `Link`/`NavLink` destinations against route declarations.

## Ambient Pest Interaction
- One global SVG cockroach only.
- First appearance delayed; subsequent appearances separated by randomized idle intervals.
- Each run starts off-screen, crosses 3–6 randomized waypoints, rotates toward travel direction, varies pace/easing, then exits off-screen.
- `pointer-events: none`, `aria-hidden="true"`, no keyboard/focus impact.
- Disabled for reduced-motion users.
- Animation stays below sticky navigation and does not obscure forms persistently.

## Security Audit Scope
Static-site checks include:
- exposed private credentials/secrets,
- unsafe HTML injection patterns,
- risky external-link handling,
- EmailJS abuse controls and domain restriction guidance,
- dependency/advisory review,
- dead links/empty anchors,
- unsupported browser history manipulation,
- insecure HTTP content,
- form validation and duplicate-submit behaviour.

`npm audit` will be attempted. If the runtime cannot reach npm's audit endpoint, dependency versions will be reviewed against current vendor/repository information and the limitation documented.

## Content Audit Scope
- Flag or remove visible internal TODO/pending copy that should not ship publicly.
- Review Pest Library image-source reliability and identify hotlinked/search-result images that should be replaced with owned or properly licensed assets.
- Check Pest Library count/category wording against actual data.
- Check Resources/IPM for placeholder or approval-pending sections.
- Preserve business claims unless they are clearly placeholders; questionable factual/regulatory claims will be listed in the audit rather than silently rewritten without a source.

## Verification
Required final checks:
- automated Node tests for new pure logic and static project audits,
- `npm run lint`,
- `npm run build`,
- route/link/source audit,
- production bundle size comparison,
- browser smoke test if a browser harness is available,
- final security/content audit report.
