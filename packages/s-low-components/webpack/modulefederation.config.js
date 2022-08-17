const { dependencies } = require("../package.json");

module.exports = {
  name: "remote",
  url: 'http://localhost:4000/',
  exposes: {
    "./fields": "./src/schema/fields/base",
    "./edit": "./src/schema/edit/base",
    "./preview": "./src/schema/preview/base",
  },
  filename: "remoteEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      // eager: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
