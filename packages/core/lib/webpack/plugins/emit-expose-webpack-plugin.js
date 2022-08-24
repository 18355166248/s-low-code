"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitExposeWebpackPlugin = void 0;
const path_1 = __importDefault(require("path"));
const utils_1 = require("../utils");
const write_mf_declare_1 = require("./write-mf-declare");
/**
 * @Description
 * @Author lang.jiang
 * @Date 2022-08-12 15:21:45
 */
class EmitExposeWebpackPlugin {
    config;
    constructor(config) {
        this.config = config;
    }
    apply(compiler) {
        const { appConfig, outputBasePath } = this.config;
        console.log("EmitExposeWebpackPlugin", appConfig, outputBasePath);
        const handler = (0, utils_1.debounce)(async (compilation) => {
            try {
                // 用 try catch 包裹一下防止 webpack-dev-server 热更新过程中偶发的强制 exit 现象
                if (appConfig) {
                    // 拿到本项目的 outputPath
                    const { outputPath } = compilation.compiler;
                    // 生成相关目录
                    const target = path_1.default.resolve(outputBasePath ?? outputPath, "mf-expose-types");
                    console.log("[mf-lite] compiling shared remote module declarations...");
                    // 基于用户的配置 appConfig 生成类型定义
                    await (0, write_mf_declare_1.writeMfDeclare)(appConfig, target);
                }
            }
            catch (e) {
                console.log(e);
            }
        }, 1500);
        // afterEmit 生命周期的时机：输出 asset 到 output 目录之后
        // 实践证明，它不会阻塞 webpack dev-server 的流程，不会影响开发体验。
        compiler.hooks.afterEmit.tap("EmitMfExposeWebpackPlugin", handler);
    }
}
exports.EmitExposeWebpackPlugin = EmitExposeWebpackPlugin;
//# sourceMappingURL=emit-expose-webpack-plugin.js.map