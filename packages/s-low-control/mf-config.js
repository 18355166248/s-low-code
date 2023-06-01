const { dependencies } = require("./package.json");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  name: "host",
  remotes: [
    {
      name: "remote",
      url: isDev ? "http://localhost:4000/" : "http://110.42.188.221:10001/",
    },
  ],
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
