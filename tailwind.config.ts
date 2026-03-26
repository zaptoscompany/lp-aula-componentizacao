import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts,js}',
    './components/**/*.{vue,ts,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        // ─── Cores base ───────────────────────────────────────────
        white: '#ffffff',
        black: '#000000',

        // ─── Primary — Azul-noite profundo (#020618) ──────────────
        primary: {
          50:  '#e8eef8',
          100: '#c5d1ec',
          200: '#9db0df',
          300: '#718ed2',
          400: '#4e72c8',
          500: '#2d57be',
          600: '#1e3d96',
          700: '#122870',
          800: '#08154a',
          900: '#030c2c',
          950: '#020618', // base
        },

        // ─── Secondary — Verde Nuxt (#00DC82) ─────────────────────
        secondary: {
          50:  '#e6fff4',
          100: '#b3ffe1',
          200: '#80ffcd',
          300: '#4dffb9',
          400: '#1affa5',
          500: '#00f090',
          600: '#00DC82', // base
          700: '#00a862',
          800: '#007545',
          900: '#00422a',
          950: '#002117',
        },

        // ─── Background / Surface ──────────────────────────────────
        background: {
          DEFAULT: '#020618', // fundo principal (primary-950)
          soft:    '#030c2c', // levemente mais claro (primary-900)
          muted:   '#08154a', // cards, painéis (primary-800)
          elevated:'#122870', // elementos elevados (primary-700)
        },

        // ─── Foreground / Texto ────────────────────────────────────
        foreground: {
          DEFAULT: '#e8eef8', // texto principal (primary-50)
          muted:   '#9db0df', // texto secundário/placeholder (primary-200)
          subtle:  '#4e72c8', // texto desativado (primary-400)
        },

        // ─── Accent — destaque e chamadas à ação ──────────────────
        accent: {
          DEFAULT: '#00DC82', // secondary-600
          light:   '#4dffb9', // secondary-300
          dark:    '#00a862', // secondary-700
          glow:    '#00f090', // secondary-500 (efeito glow/neon)
        },

        // ─── Border ───────────────────────────────────────────────
        border: {
          DEFAULT: '#122870', // borda sutil (primary-700)
          accent:  '#00DC82', // borda destacada (accent)
          muted:   '#08154a', // borda quase invisível (primary-800)
        },
      },

      // ─── Gradientes ─────────────────────────────────────────────
      backgroundImage: {
        // Hero / seções principais
        'gradient-hero':        'linear-gradient(135deg, #020618 0%, #0f3460 50%, #020618 100%)',
        'gradient-dark':        'linear-gradient(180deg, #020618 0%, #030c2c 100%)',
        'gradient-dark-soft':   'linear-gradient(180deg, #030c2c 0%, #08154a 100%)',

        // Accent / CTA
        'gradient-accent':      'linear-gradient(135deg, #00DC82 0%, #00f090 100%)',
        'gradient-accent-glow': 'linear-gradient(135deg, #00a862 0%, #00DC82 50%, #4dffb9 100%)',

        // Primary suave (para cards e seções)
        'gradient-primary':     'linear-gradient(135deg, #030c2c 0%, #122870 100%)',
        'gradient-primary-h':   'linear-gradient(90deg, #020618 0%, #1e3d96 100%)',

        // Mistura primary + secondary
        'gradient-brand':       'linear-gradient(135deg, #020618 0%, #00DC82 100%)',
        'gradient-brand-soft':  'linear-gradient(135deg, #030c2c 0%, #007545 100%)',
        'gradient-brand-vivid': 'linear-gradient(90deg, #020618 0%, #00f090 50%, #020618 100%)',

        // Radial (glows)
        'gradient-glow-green':  'radial-gradient(ellipse at center, #00DC8233 0%, transparent 70%)',
        'gradient-glow-blue':   'radial-gradient(ellipse at center, #2d57be33 0%, transparent 70%)',
        'gradient-spotlight':   'radial-gradient(ellipse 80% 50% at 50% 0%, #122870 0%, #020618 100%)',
      },

      // ─── Fontes ──────────────────────────────────────────────────
      fontFamily: {
        sans:    ['"Public Sans"', '"Public Sans Fallback"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Public Sans"', '"Public Sans Fallback"', 'ui-sans-serif', 'sans-serif'],
        mono:    ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },

      fontSize: {
        // ─── Display / Hero ─────────────────────────────
        'display-2xl': ['4.5rem',  { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-xl':  ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg':  ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-md':  ['2.25rem', { lineHeight: '1.2',  letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm':  ['1.875rem',{ lineHeight: '1.25', letterSpacing: '0',       fontWeight: '600' }],

        // ─── Body ────────────────────────────────────────
        'body-xl':  ['1.25rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-lg':  ['1.125rem',{ lineHeight: '1.75', fontWeight: '400' }],
        'body-md':  ['1rem',    { lineHeight: '1.6',  fontWeight: '400' }],
        'body-sm':  ['0.875rem',{ lineHeight: '1.5',  fontWeight: '400' }],
        'body-xs':  ['0.75rem', { lineHeight: '1.5',  fontWeight: '400' }],

        // ─── Label / Overline ────────────────────────────
        'label-lg': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '600' }],
        'label-sm': ['0.75rem',  { lineHeight: '1.4', letterSpacing: '0.1em',  fontWeight: '600' }],
      },

      fontWeight: {
        thin:       '100',
        extralight: '200',
        light:      '300',
        normal:     '400',
        medium:     '500',
        semibold:   '600',
        bold:       '700',
        extrabold:  '800',
        black:      '900',
      },

      // ─── Box shadows com as cores do tema ───────────────────────
      boxShadow: {
        'glow-accent':  '0 0 20px 4px #00DC8244',
        'glow-primary': '0 0 20px 4px #2d57be44',
        'glow-soft':    '0 4px 32px 0 #00DC8222',
        'card':         '0 2px 16px 0 #02061888',
      },
    },
  },
  plugins: [],
} satisfies Config
