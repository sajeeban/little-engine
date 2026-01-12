/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FBEED0',
          soft: 'rgba(251, 238, 208, 0.4)',
        },
        gold: {
          DEFAULT: '#DDAF61',
          hover: '#C89B50',
        },
        blue: {
          deep: '#317EB9',
          sky: '#78BAE3',
          light: '#A0D2EB', // Darkened for better visibility on white/cream
        },
        dark: '#2C3E50',
        grey: '#455A64', // Darkened from #546E7A for better contrast
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2.5rem',
      },
      animation: {
        'blob': 'morph 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        morph: {
          '0%, 100%': { borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' },
          '50%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
