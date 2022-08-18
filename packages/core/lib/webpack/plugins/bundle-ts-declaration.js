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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bundleTsDeclaration = void 0;
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const utils_1 = require("../utils");
const bundleTsDeclaration = async (entries) => {
    // 最大并行工作数目为 cpu 核心数 - 1
    const maxWorkSize = os.cpus().length - 1;
    while (entries.length > 0) {
        const runningItems = entries.splice(0, maxWorkSize);
        await Promise.all(runningItems.map((item) => {
            const { entryPath, outputPath } = item;
            return (0, utils_1.runCommand)(path.resolve(require.resolve("dts-bundle-generator"), "../bin/dts-bundle-generator.js"), [
                entryPath,
                "--out-file",
                outputPath,
                "--project",
                path.resolve(process.cwd(), "tsconfig.json"),
                "--no-banner",
            ]);
        }));
    }
};
exports.bundleTsDeclaration = bundleTsDeclaration;
//# sourceMappingURL=bundle-ts-declaration.js.map