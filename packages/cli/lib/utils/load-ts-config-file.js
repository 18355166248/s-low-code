"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTsConfigFile = void 0;
const interop_require_default_1 = require("./interop-require-default");
/**
 * 加载 typescript 文件，常用于加载一些配置文件
 */
const loadTsConfigFile = async (configPath) => {
    let tsNodeService;
    // Register TypeScript compiler instance
    try {
        tsNodeService = require("ts-node").register({
            compilerOptions: {
                module: "CommonJS",
            },
        });
    }
    catch (e) {
        if (e.code === "MODULE_NOT_FOUND") {
            throw new Error(`'ts-node' is required for the TypeScript configuration files. Make sure it is installed\nError: ${e.message}`);
        }
        throw e;
    }
    tsNodeService.enabled(true);
    let configObject = (0, interop_require_default_1.interopRequireDefault)(require(configPath)).default;
    console.log("configObject", configObject);
    // 配置文件是一个函数，调用之
    if (typeof configObject === "function") {
        configObject = await configObject();
    }
    tsNodeService.enabled(false);
    return configObject;
};
exports.loadTsConfigFile = loadTsConfigFile;
//# sourceMappingURL=load-ts-config-file.js.map