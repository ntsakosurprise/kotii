module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "png", "html"],
  bail: 1, // stop jest at the first possible failure
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md|html)$":
      "<rootDir>/assetsTransformer.js",
    "\\.(css|less)$": "<rootDir>/assetsTransformer.js",
  },
  collectCoverage: true, // Collect coverage information
  collectCoverageFrom: ["src/**/*.{js,jsx}"], // Collect coverage information from anything with .js or jsx in src dir
  coverageDirectory: "coverage", // Save collected coverage in this directory/folder
  coveragePathIgnorePatterns: ["/node_modules/"], // Please ignore coverage for anything in the folders specfied here
  coverageProvider: "babel",
  displayName: {
    name: "kotii-theme",
    color: "green",
  }, // uniquely identifies a test on a console when jest is running tests
  errorOnDeprecated: true, // Show errors for deprecated api calls of jest
  testEnvironment: "jsdom",
};
