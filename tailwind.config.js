/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',  // ← tambahkan ts dan tsx
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0D0D0D',
          50: '#F5F5F3',
          100: '#E8E8E4',
          200: '#CFCFC8',
          300: '#ADADAA',
          400: '#8C8C88',
          500: '#6B6B66',
          600: '#4A4A46',
          700: '#2E2E2B',
          800: '#1A1A18',
          900: '#0D0D0B',
        },
        accent: '#C8963E',
        accent2: '#4A7C59',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-in': 'slideIn 0.5s ease forwards',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}