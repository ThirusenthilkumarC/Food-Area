/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0D0D0D",
          card: "#161616",
          elevated: "#1E1E1E",
          border: "rgba(255, 255, 255, 0.08)",
        },
        brand: {
          orange: "#FF6B35",
          "orange-glow": "#FF5A00",
          "orange-hover": "#E55620",
          cream: "#F5F5F7",
          gold: "#D4AF37",
          green: "#45A735"
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Playfair Display', 'Plus Jakarta Sans', 'serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 35px -5px rgba(255, 107, 53, 0.35)',
        'glow-soft': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'luxury': '0 30px 60px -12px rgba(0, 0, 0, 0.5), 0 18px 36px -18px rgba(255, 107, 53, 0.12)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
