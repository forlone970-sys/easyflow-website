/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        easyflow: {
          50: '#F0F9FB',
          100: '#E0F3F7',
          200: '#BAE6EF',
          300: '#7CD0DF',
          400: '#38B5CB',
          500: '#0593A9',
          600: '#046E86', // Primary dominant blue from logo
          700: '#06576B',
          800: '#084858',
          900: '#0A3B49',
          950: '#03242E',
          accent: '#00C6DB',
          navy: '#0B1E2D',
          slate: '#475569',
          border: '#E2E8F0',
          ice: '#F4FAFC',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(4, 110, 134, 0.04), 0 1px 2px -1px rgba(4, 110, 134, 0.04)',
        'card': '0 4px 20px -2px rgba(11, 30, 45, 0.05), 0 2px 6px -1px rgba(11, 30, 45, 0.03)',
        'card-hover': '0 16px 36px -4px rgba(4, 110, 134, 0.12), 0 6px 12px -2px rgba(4, 110, 134, 0.05)',
        'elevated': '0 20px 40px -15px rgba(4, 110, 134, 0.15)',
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
