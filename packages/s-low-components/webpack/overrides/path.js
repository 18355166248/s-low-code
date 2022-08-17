const path = require("path");

exports.sourcePath = path.resolve(process.cwd(), "src");

exports.publicPath = path.resolve(process.cwd(), "public");

exports.appConfigPath = path.resolve(process.cwd(), "app-config.ts");
