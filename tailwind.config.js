module.exports = {
  mode: "jit",
  purge: ["./*.html", "./js/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#ffc107",
        },
        inset: ["hover"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
