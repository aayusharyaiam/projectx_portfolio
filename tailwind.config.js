/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        card: '#12121A',
        'card-hover': '#1a1a2e',
        primary: {
          DEFAULT: '#7C5CFF',
          light: '#A17CFF',
          dark: '#6344e0',
        },
        surface: {
          50: '#f8f8fc',
          100: '#e8e8f0',
          200: '#d0d0e0',
          300: '#a0a0b8',
          400: '#6b6b80',
          500: '#4a4a5e',
          600: '#2a2a3e',
          700: '#1e1e2e',
          800: '#16161f',
          900: '#0e0e14',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-lg': ['5rem', { lineHeight: '1.05', fontWeight: '700' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7C5CFF 0%, #A17CFF 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
