const { dependencies } = require("../package.json");

module.exports = {
  name: "remote",
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
