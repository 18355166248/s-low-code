"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMfExposeDeclaration = exports.getModuleFederationRemotes = exports.EmitExposeWebpackPlugin = void 0;
var emit_expose_webpack_plugin_1 = require("./webpack/plugins/emit-expose-webpack-plugin");
Object.defineProperty(exports, "EmitExposeWebpackPlugin", { enumerable: true, get: function () { return emit_expose_webpack_plugin_1.EmitExposeWebpackPlugin; } });
var mf_utils_1 = require("./node/mf-utils");
Object.defineProperty(exports, "getModuleFederationRemotes", { enumerable: true, get: function () { return mf_utils_1.getModuleFederationRemotes; } });
var generate_mf_expose_declaration_1 = require("./node/generate-mf-expose-declaration");
Object.defineProperty(exports, "generateMfExposeDeclaration", { enumerable: true, get: function () { return generate_mf_expose_declaration_1.generateMfExposeDeclaration; } });
//# sourceMappingURL=index.js.map