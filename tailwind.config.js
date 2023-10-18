/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/pages/*"],
  theme: {
    extend: {
      backgroundImage: {
        'PromoteBGD': "url('/img/bgd-prom.jpg')",
        'InquireBGD': "url('/img/bgd-inquire.jpg')",
        'ExploreBGD': "url('/img/bgd-explore.jpg')",
        'AboutBGD': "url('/img/bgd-about.jpg')",
      },
      colors: {
        "main-red": "#FB3E3E",
        "main-blue": "#AF80C5",
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },

  daisyui: {
    themes: ["light", "cupcake"],
  },

  plugins: [require("daisyui")],
};
