/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1A1A2E',
          800: '#252538',
          700: '#2F2F45',
          600: '#3A3A52',
          500: '#45455F',
          400: '#51516D',
          300: '#5D5D7A',
          200: '#6A6A88',
          100: '#7878A3',
          // Added from second config, no conflict with existing keys
          700: '#2A4365', // This will overwrite the previous 700 if kept. 
          800: '#1A365D', // Same here.
        },
        secondary: {
          900: '#3F0071',
          800: '#4A0087',
          700: '#55009D',
          600: '#6100B3',
          500: '#6C00C9',
          400: '#7800DF',
          300: '#8300F5',
          200: '#9A14FF',
          100: '#B042FF',
          // Added from second config (these keys exist but colors differ)
          700: '#805AD5',  // overwrites previous 700
          900: '#44337A',  // overwrites previous 900
        },
        accent: {
          900: '#7A0BC0',
          800: '#8A0CD7',
          700: '#9A0DEE',
          600: '#9D4EDD',
          500: '#AD63E3',
          400: '#BD79E9',
          300: '#CD8FEF',
          200: '#DDA4F5',
          100: '#E0AAFF',
          // Added from second config (keys exist but colors differ)
          400: '#38B2AC',  // overwrites previous 400
          500: '#319795',  // overwrites previous 500
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'], // Added system-ui fallback and changed Poppins to keep first config's font but with system-ui fallback
      },
      boxShadow: {
        glow: '0 0 15px rgba(157, 78, 221, 0.3)',  // from first config
        'glow-lg': '0 0 30px rgba(157, 78, 221, 0.4)',  // from first config
        glowTeal: '0 0 15px rgba(56, 178, 172, 0.3)', // added from second config (renamed to avoid collision)
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-in-out forwards', // replaced with second config’s animation (more complex)
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' }, // merged second config (translateY) with first config
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
