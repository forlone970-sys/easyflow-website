/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./medimate/**/*.html",
    "./spendora/**/*.html",
    "./promptflow/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        easyflow: {
          50: '#F0F6FE',
          100: '#E0EDFD',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#2563EB',
          600: '#1D4ED8', // Primary dominant tech blue
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#172554',
          950: '#0F172A',
          accent: '#38BDF8',
          navy: '#0F172A',
          slate: '#475569',
          border: '#E2E8F0',
          ice: '#F8FAFC',
        },
        promptflow: {
          50: '#F0F9F9',
          100: '#E0F4F4',
          200: '#B2EBEB',
          300: '#75D7D7',
          400: '#26B8B8',
          500: '#009E9E',
          600: '#008B8B', // Dark Cyan Primary
          700: '#007373',
          800: '#005959',
          900: '#003D3D',
          950: '#062020',
          accent: '#008B8B',
          charcoal: '#121619',
          surface: '#181C20',
          panel: '#1E2328',
          border: '#2A313A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
        'glass-hover': '0 16px 36px -4px rgba(29, 78, 216, 0.12), inset 0 1px 0 0 rgba(255, 255, 255, 0.9)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.35), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 16px 36px -4px rgba(29, 78, 216, 0.12), 0 6px 12px -2px rgba(15, 23, 42, 0.05)',
        'elevated': '0 20px 40px -15px rgba(29, 78, 216, 0.15)',
        'pf-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
        'pf-glass-hover': '0 16px 36px -4px rgba(0, 139, 139, 0.18), inset 0 1px 0 0 rgba(255, 255, 255, 0.95)',
        'pf-glow': '0 0 25px -5px rgba(0, 139, 139, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
