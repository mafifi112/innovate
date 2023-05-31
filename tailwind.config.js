/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    colors: {
      primary: {
        100: "#f6f7ff",
        200: "#edeeff",
        500: "#4a4b66",
        600: "#4d53fd",
        800: "#292b75",
        900: "#20225b",
      },
      white: "#ffffff",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
