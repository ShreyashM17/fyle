/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'plusJakartaSans' : ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        'primary': '#f36',
      },
      backgroundImage: {
        'indigograd': 'linear-gradient(185.1deg, #190f2f, #242c42 54.02%, #05091c 100.69%)',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

