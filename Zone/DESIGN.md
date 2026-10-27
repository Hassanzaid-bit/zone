# Q-Zone Homepage Redesign - Design System

## Design Theme Overview

- **Color Mode**: LIGHT
- **Primary Font**: Manrope
- **Body Font**: Inter
- **Corner Roundness**: Round Four
- **Brand Custom Color**: `#0B3D1B` (Deep Green)

---

# Design System Strategy: The Scientific Sanctuary

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Technical Naturalist."** 

In the pest management industry, typical design is either hyper-aggressive or clinical. We are breaking this "template" by positioning the brand as a sophisticated intersection of high-science and environmental stewardship. The aesthetic moves away from rigid, boxy grids toward an **Editorial Technical** layout. This is achieved through intentional asymmetry—where high-quality macro photography of nature is juxtaposed against razor-sharp, technical data overlays. By using "breathing room" (generous white space) and overlapping elements, we communicate that the brand is both powerful enough to control an environment and precise enough to protect it.

## 2. Colors & Surface Architecture
The palette is rooted in the depth of the forest, using tonal shifts rather than lines to define the digital space.

### The "No-Line" Rule
To maintain a premium, high-end feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through:
*   **Tonal Shifts:** Transitioning from `surface` (#f7f9fb) to `surface-container-low` (#f2f4f6) to denote a change in content.
*   **Micro-Eclipses:** Using large-scale, high-quality photography to "break" sections.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of vellum.
*   **The Foundation:** Use `surface` as the primary canvas.
*   **The Inset:** Use `surface-container-low` for large content blocks (like a technical data section).
*   **The Hero:** Use `surface-container-lowest` (#ffffff) for floating cards that need to feel light and airy.
*   **The Deep Layer:** Use `primary-container` (#0b3d1b) for high-impact footers or CTA sections to provide a grounding "weight."

### The "Glass & Gradient" Rule
To avoid a flat "out-of-the-box" SaaS look, use **Glassmorphism** for navigation bars and floating technical overlays. 
*   **Glass Specs:** `surface-container` at 80% opacity with a `24px` backdrop blur.
*   **Signature Textures:** For primary buttons and high-level headers, apply a subtle linear gradient from `primary` (#00260c) to `primary-container` (#0b3d1b) at a 135-degree angle. This adds "soul" and a sense of liquid depth.

## 3. Typography
The system utilizes two typefaces: **Manrope** for authoritative headlines and **Inter** for technical precision.

*   **Display & Headline (Manrope):** Chosen for its geometric purity and modern warmth. Use `display-lg` for hero statements, ensuring tight letter-spacing (-0.02em) to evoke an editorial, premium magazine feel.
*   **Body & Labels (Inter):** The workhorse of the system. Inter’s high x-height ensures readability of technical certifications (PCPB/NEMA) even at the `body-sm` scale.
*   **Hierarchy as Authority:** We use extreme scale contrast. A `display-md` headline paired with a `label-md` uppercase sub-header creates an immediate sense of professional expertise.

## 4. Elevation & Depth
We eschew traditional "drop shadows" in favor of **Ambient Tonal Layering.**

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-high` background. The contrast in lightness provides all the visual separation required without "dirtying" the design with grey shadows.
*   **Ambient Shadows:** If an element must float (e.g., a modal), use a shadow color of `primary` at 6% opacity with a `48px` blur. This makes the shadow feel like a natural light obstruction in a forest, rather than a digital effect.
*   **The "Ghost Border" Fallback:** For accessibility in form inputs, use the `outline-variant` token at 15% opacity. It should feel like a suggestion of a boundary, not a cage.

## 5. Components

### Buttons & Interaction
*   **Primary CTA:** Uses the `secondary` (#006b5f) to `secondary-container` (#6df5e1) gradient. Radius is set to `md` (0.375rem) to balance technical precision with approachability.
*   **Secondary/Ghost:** No background. Use `on-surface` text with a `Ghost Border`.

### Technical Chips
*   Use for certifications (PCPB/NEMA). These should use `tertiary-container` backgrounds with `on-tertiary-container` text. Keep them small (`label-sm`) and uppercase to mimic laboratory labeling.

### Cards & Data Lists
*   **Rule:** Forbid divider lines. 
*   **Separation:** Use `32px` of vertical white space or a slight background shift to `surface-container-low`.
*   **Technical Overlay:** In cards featuring photography, use a glassmorphic overlay at the bottom 20% of the image to house the text, ensuring the "Technical Naturalist" vibe.

### Input Fields
*   Backgrounds should be `surface-container-highest`. Upon focus, the background shifts to `surface-container-lowest` with a 2px `secondary` bottom-border only (Editorial style), rather than a full box stroke.

### Specialized Component: The "Trust Shield"
*   A dedicated floating component for PCPB/NEMA logos. It uses a `surface-container-lowest` background, `xl` rounding (0.75rem), and the Ambient Shadow. It should always overlap two background sections to bridge the "No-Line" gap.

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetry:** Place text on the left and allow high-res photography to bleed off the right edge of the screen.
*   **Embrace Depth:** Nest `surface-container` tiers to create a sense of information architecture.
*   **Focus on Detail:** Use the vibrant Teal (`secondary`) sparingly for "Technical Points of Interest" in diagrams.

### Don't:
*   **Don't use 100% Black:** Always use `on-surface` (#191c1e) for text to keep the palette organic.
*   **Don't use Rounded-Full on Buttons:** Keep buttons at `md` or `lg` to maintain a professional, SaaS-grade "technical" edge.
*   **Don't use Grid Lines:** Never use horizontal rules (`<hr>`) to separate content. Use the spacing scale to create "Islands of Information."
