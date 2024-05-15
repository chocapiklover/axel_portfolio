/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        'negative': '-1', 
      },
      maxWidth: {
        '3/5': '60vh',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 5s ease infinite',
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

