/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Bebas Neue"],
        body: ["Outfit"],
      },
      colors: {
        fw: {
          blue: "#11283D",
          darkblue: "#192630",
          grey: "#F8F8F8",
          darkgrey: "#C1C1C1",
          gold: "#FFC804",
          red: "#DD0202",
        },
      },
      fontSize: {
        xsm: "0.75rem",
      },
      boxShadow: {
        sm: "0 1px 10px rgba(0, 0, 0, 0.10)",
      },
      screens: {
        xsm: "360px",
      },
      backgroundImage: {
        "gradient-1": "url('$lib/images/gradient-1.jpg')",
      },
    }
  },
  plugins: [require("daisyui")],
};
