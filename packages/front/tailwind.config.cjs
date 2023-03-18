/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          lightGrayBlue: "#F3FDFF",
          mediumGrayBlue: "#D2E5E9",
          darkGrayBlue: "#161C29",
          green: "#39BB37",
          red: "#BB3737",
          lightGray: "#DCDCDC",
          mediumGray: "#8C8F9A",
        },
      },
    },
    fontFamily: {
      monserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
