#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const load_ts_config_file_1 = require("./utils/load-ts-config-file");
const log = console.log;
// 版本信息 low --version / low -v
commander_1.program.version(`🔱 @s-low/cli ${require("../package.json").version} 🔱`, "-v, --version");
// 类型定义生成器 low generate-dts ?--app-config-path 路径
commander_1.program
    .command("generate-dts")
    .description("生成 Typescript 类型定义")
    .option("--app-config-path <config>", "应用配置文件路径", "app-config.ts")
    .action(async (opt) => {
    log("opt", opt);
    try {
        const { appConfigPath } = opt;
        const appConfig = await (0, load_ts_config_file_1.loadTsConfigFile)(path_1.default.resolve(process.cwd(), appConfigPath));
        log("appConfig", appConfig);
    }
    catch (error) {
        log(chalk_1.default.red("Error \n", chalk_1.default.red(error.message)));
    }
});
log("process.cwd()", process.cwd());
commander_1.program.parse(process.argv);
//# sourceMappingURL=index.js.map