const withMT = require("@material-tailwind/react/utils/withMT");


/** @type {import('tailwindcss').Config} */
module.exports = withMT(
    {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "color-white": "#fff9f9",
          "light-green": "#88b257",
          "medium-green": "#4a701c",
          "dark-green": "#284703",
          "olive-green": "#434d36",
          "soft-green": "#555d4c",
        },
        fontFamily: {
          "poppins": ["Poppins", "sans-serif"],
        },
      },
    },
    plugins: [],
  }
) 

