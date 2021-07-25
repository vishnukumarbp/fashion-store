module.exports = {
  postcssConfig: {
    plugins: [
      require("autoprefixer")({
        browsers: ["Chrome 68", "Firefox 62", "Safari 12"],
      }),
    ],
  },
};
