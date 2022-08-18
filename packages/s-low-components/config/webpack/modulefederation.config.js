const path = require("path");
const { dependencies } = require("../../../../package.json");

module.exports = {
  name: "remote",
  url: "http://localhost:4000/",
  // exposes的key需要特殊处理前面加 ./
  exposes: {
    fields: "./src/schema/fields/base.ts",
    test: "./src/schema/fields/test.ts",
    edit: "./src/schema/edit/base.tsx",
    preview: "./src/schema/preview/base.tsx",
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
