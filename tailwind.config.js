/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "576px",

      md: "768px",

      lg: "992px",

      xl: "1200px",

      "2xl": "1400px",
    },
    extend: {
      colors: {
        primary: "#272835", //header for chart
        secondary: "#f2f2f2",
        light: "#F3F3FF",
        graytext: "#B4B7B0",
        cardGray: "#D2D9DA",
        inputArea: "#F3F3FF",
        customGray: {
          50: "#F4FFFE",
          100: "#E5E5E5",
          200: "#CACACA",
          300: "#C4C4C4",
          400: "#B4B7B0",
          500: "#9F9F9F",
          600: "#969696",
          700: "#979797",
          800: "#6C6C6C;",
          900: "#636363",
          1000: "#5F5F5F",
          2000: "#494D61",
          3000: "#6B6C72",
        },
        customBlue: {
          light: "#CFD8DC",
          dark: "#67748E",
          darkest: "#252F40",
          100: "#8392AB",
          200: "#3785EB",
        },
        customGreen: {
          100: "rgba(31, 195, 158, 0.2)",
          200: "#1FC39E",
          300: "#14937E",
          400: "#0E7469",
          500: "#E0F7F1",
          600: "#0d6e65",
          800: "#2ca01c",
          50: "#F4FFFE",
        },
        green1: "#10786C",
        red1: "#EB5757",
        neutral: {
          400: "#A0ABBB",
        },
        cardgrey: "#F3F3FF",
        customYellow: "#FBFFE4",
      },
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      // ...
      borderColor: ["focus-visible", "first"],
      // ...
      textColor: ["visited"],
      borderStyle: ["responsive", "hover"],
      borderWidth: ["responsive", "hover"],
    },
  },
  plugins: [],
};
