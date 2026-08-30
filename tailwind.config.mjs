/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tokens oficiais do site Link
        hermes: {
          bg: '#fbf8f3',
          deep: '#242029',
          panel: '#fffdfa',
          terminal: '#f5efe8',
          midground: '#242029',
          cream: '#fffdfa',
          muted: 'rgba(36, 32, 41, 0.55)',
          border: 'rgba(231, 221, 214, 0.95)',
          teal: '#765aa6',
          'teal-bright': '#927eb8',
          gold: '#b87964',
          accent: '#4f3c73'
        },
        surface: {
          DEFAULT: '#fffdfa',
          dim: '#f5efe8',
          bright: '#ffffff',
          'container-lowest': '#fffdfa',
          'container-low': '#f8f2ec',
          container: '#f1e8e0',
          'container-high': '#e7ddd6',
          'container-highest': '#d9ccc2',
          variant: '#c9beb5'
        },
        'on-surface': {
          DEFAULT: '#242029',
          variant: 'rgba(36, 32, 41, 0.65)'
        },
        outline: {
          DEFAULT: 'rgba(36, 32, 41, 0.45)',
          variant: 'rgba(36, 32, 41, 0.2)'
        },
        'verde-belic': {
          DEFAULT: '#765aa6',
          50: '#f3eef8',
          100: '#e4dceb',
          200: '#cdbfdd',
          300: '#b29fd0',
          400: '#9b7fbf',
          500: '#765aa6',
          600: '#5f4787',
          700: '#4f3c73',
          800: '#372a51',
          900: '#242029',
          950: '#18131f'
        },
        terracotta: {
          DEFAULT: '#b87964',
          500: '#b87964',
          600: '#8f5e4b'
        },
        gold: {
          DEFAULT: '#b87964',
          400: '#c98b75',
          500: '#b87964',
          600: '#8f5e4b'
        }
      },
      fontFamily: {
        mondwest: ['Georgia', '"Times New Roman"', 'serif'],
        display: ['Georgia', '"Times New Roman"', 'serif'],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Courier New', 'monospace']
      },
      letterSpacing: {
        hermes: '0.1875rem'
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.375rem',
        md: '0.5rem',
        lg: '0.5rem',
        xl: '0.5rem'
      }
    }
  },
  plugins: []
};
