/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Kita geser setengah karena isinya kita duplikat
        }
      },
      colors: {
        // Light mode colors (soft, tidak sakit mata)
        'light-bg': '#fafaf9',
        'light-surface': '#f5f5f4',
        'light-border': '#e7e5e4',
        'light-text': '#292524',
      }
    },
  },
  plugins: [],

}

