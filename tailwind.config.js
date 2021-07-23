module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        palette: {
          black: "#000000",
          white: "#FFFFFF",

          pdarker: "#831843",
          pdark: "#9D174D",
          primary: "#DB2777",
          plight: "#F472B6",
          plighter: "#FBCFE8",
          plightest: "#FDF2F8",

          sdarker: "#312E81",
          sdark: "#3730A3",
          secondary: "#4F46E5",
          slight: "#818CF8",
          slighter: "#C7D2FE",
          slightest: "#EEF2FF",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
