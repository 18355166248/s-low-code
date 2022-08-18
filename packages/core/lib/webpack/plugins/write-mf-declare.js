"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeMfDeclare = void 0;
const fs = __importStar(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const bundle_ts_declaration_1 = require("./bundle-ts-declaration");
const pack_declare_1 = require("./pack-declare");
const writeMfDeclare = async (appConfig, baseUrl) => {
    console.log("appConfig", appConfig.exposes);
    console.log("baseUrl", baseUrl);
    // 增加临时缓存, 用来打包每个小 bundle
    const cacheFilePath = path_1.default.resolve(baseUrl, ".cache");
    await fs.ensureDir(cacheFilePath);
    const entries = [];
    Object.keys(appConfig.exposes).forEach((key) => {
        const expose = appConfig.exposes[key];
        if (typeof expose === "string" && /\.ts$/.test(expose)) {
            entries.push({
                name: key,
                entryPath: path_1.default.resolve(process.cwd(), expose),
                outputPath: path_1.default.resolve(baseUrl, ".cache", `${key}.d.ts`),
            });
        }
    });
    // 并行打包
    await (0, bundle_ts_declaration_1.bundleTsDeclaration)(entries.slice());
    // 合并上面的小bundle
    const content = (0, pack_declare_1.packDeclare)(entries.map((en) => ({
        path: en.outputPath,
        moduleName: `${appConfig.name}/${en.name}`,
    })));
    await fs.writeFile(path_1.default.resolve(baseUrl, "expose.d.ts"), content);
    await fs.remove(path_1.default.resolve(baseUrl, ".cache"));
};
exports.writeMfDeclare = writeMfDeclare;
//# sourceMappingURL=write-mf-declare.js.map