/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      colors: {
        // ══════════════════════════════════════════════════════════
        // Q-ZONE STANDARDIZED PALETTE
        // Primary Blue : #00456E  (headings, buttons, accents)
        // Deep Navy    : #001C3D  (footers, heavy backgrounds)
        // ══════════════════════════════════════════════════════════

        // Backgrounds — deepest to lightest
        background:               '#001C3D',   // Deep Navy — page canvas
        surface:                  '#001C3D',   // same as background
        surfaceContainerLowest:   '#00243A',   // slightly lifted navy
        surfaceContainerLow:      '#002D4A',   // card dark base
        surfaceContainer:         '#003558',   // card / panel mid
        surfaceContainerHigh:     '#003D65',   // elevated panels
        surfaceContainerHighest:  '#00456E',   // Primary Blue — top surface / active

        // Primary — #00456E (brand blue)
        primary:                  '#00456E',
        primaryContainer:         '#003558',   // pressed / deep variant
        onPrimary:                '#FFFFFF',
        onPrimaryContainer:       '#7EC8F0',   // light sky on dark container

        // Secondary — lighter cyan for accents & hover states
        secondary:                '#0097C4',   // vibrant mid-cyan
        secondaryContainer:       '#004D6E',
        onSecondary:              '#FFFFFF',
        onSecondaryContainer:     '#B3E5FC',   // pale cyan

        // Tertiary — highlights, tags, badges
        tertiary:                 '#00B8D9',   // bright teal-cyan
        tertiaryContainer:        '#00243A',
        onTertiary:               '#001C3D',
        onTertiaryContainer:      '#80DEEA',

        // Status
        error:                    '#FF6B6B',
        errorContainer:           '#4A0000',
        onError:                  '#FFFFFF',
        onErrorContainer:         '#FFCDD2',

        // Neutrals / Borders
        outline:                  '#2D5A7B',   // mid-blue border
        outlineVariant:           '#1A4A6E',   // subtle border tint

        // Text — ALWAYS LIGHT on our dark backgrounds
        onSurface:                '#FFFFFF',   // pure white — maximum legibility
        onSurfaceVariant:         '#CBD5E1',   // slate-300 — comfortable body text
      },

      boxShadow: {
        'ambient':    '0 32px 64px -12px rgba(0,28,61,0.8), 0 4px 16px -4px rgba(0,0,0,0.6)',
        'blue-glow':  '0 0 24px 6px rgba(0,69,110,0.55)',
        'cyan-glow':  '0 0 20px 5px rgba(0,151,196,0.45)',
        'card':       '0 2px 12px rgba(0,28,61,0.5)',
      },

      backgroundImage: {
        // Corporate signature gradient: Primary Blue → Cyan
        'primary-gradient':   'linear-gradient(135deg, #00456E 0%, #0097C4 100%)',
        'secondary-gradient': 'linear-gradient(135deg, #003558 0%, #0097C4 100%)',
        // Deep navy hero overlay
        'hero-gradient':      'linear-gradient(to right, #001C3D 0%, #001C3D 50%, transparent 100%)',
        // Subtle surface shimmer
        'surface-shimmer':    'linear-gradient(180deg, #001C3D 0%, #00243A 100%)',
      },

      backdropBlur: {
        'glass': '18px',
      },

      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slide: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseRing: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%':      { transform: 'scale(1.15)', opacity: '0.3' },
        },
      },

      animation: {
        marquee:     'marquee 35s linear infinite',
        slide:       'slide 30s linear infinite',
        'fade-up':   'fadeUp 0.6s ease-out forwards',
        'fade-in':   'fadeIn 0.5s ease-out forwards',
        'pulse-ring':'pulseRing 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
