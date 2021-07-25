module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "\\.(css|less|scss|sass)$":
      "<rootDir>/node_modules/jest-css-modules-transform",
  },
  transformIgnorePatterns: ["/node_modules/.+\\.js$"],
};
