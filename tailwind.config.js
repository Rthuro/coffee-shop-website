/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      screens:{
        "xs": '320px'
      },
      colors: {
        'customCream': '#FAF6ED',
        'customBlue': '#284961',
      },
      animation: {
        'appear': 'appear 0.2s ease-in-out forwards',
      },
      keyframes: {
        appear: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      }
    },
    
  },
  plugins: [],
}

