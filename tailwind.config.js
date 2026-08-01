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
        netflixRed: '#E50914',
        netflixDarkRed: '#B81D24',
        netflixBlack: '#141414',
        netflixVoid: '#080808',
        netflixGray: '#181818',
        netflixCard: '#2F2F2F',
        netflixTextMuted: '#AAAAAA',
        obsidian: '#0F172A',
        slateMuted: '#475569',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'netflix-red': '0 8px 30px rgba(229, 9, 20, 0.4)',
        'netflix-card': '0 10px 30px rgba(0, 0, 0, 0.8)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-red': 'pulseRed 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRed: {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 20px rgba(229, 9, 20, 0.3)' },
          '50%': { opacity: '0.9', boxShadow: '0 0 40px rgba(229, 9, 20, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
