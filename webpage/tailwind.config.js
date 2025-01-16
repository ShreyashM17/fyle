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
        'formblur': 'rgba(53, 53, 175, 0.12)'
      },
      backgroundImage: {
        'indigograd': 'linear-gradient(185.1deg, #190f2f, #242c42 54.02%, #05091c 100.69%)',
      },

      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "loop-scroll-y-10": "loop-scroll-y 10s linear infinite",
        "loop-scroll-y-25": "loop-scroll-y 25s linear infinite",
        "loop-scroll-y-35": "loop-scroll-y 35s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0%)"},
          to: { transform: "translateX(-100%)"},
        },
        "loop-scroll-y": {
          from: { transform: "translateY(0%)"},
          to: { transform: "translateY(-100%)"},
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

