/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // MIKI: Daftarkan Font Baru Disini
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      colors: {
        // Light mode colors (yang kamu punya)
        'light-bg': '#fafaf9',
        'light-surface': '#f5f5f4',
        'light-border': '#e7e5e4',
        'light-text': '#292524',
        
        // ✨ NEW: Discord Ash Theme (Miki's Gift)
        'ash': {
          DEFAULT: '#313338', // Main Background (Soft Black)
          surface: '#2b2d31', // Card/Navbar (Slightly Darker/Lighter)
          darker: '#1e1f22',  // Sidebar/Deep Background
          text: '#dbdee1',    // Text color soft white
        }
      }
    },
  },
  plugins: [],
}