const { dependencies } = require("./package.json");

module.exports = {
  name: "remote",
  exposes: {
    "fields": "./src/schema/fields/base.ts",
    "edit": "./src/schema/edit/base.tsx",
    "preview": "./src/schema/preview/base.tsx",
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
