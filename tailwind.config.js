module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        gold: "#D4AF37",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
