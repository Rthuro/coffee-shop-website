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
    },
    
  },
  plugins: [],
}

