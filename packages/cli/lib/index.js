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
const core_1 = require("@slow/core");
const log = console.log;
// 版本信息 low --version / low -v
commander_1.program.version(`🔱 @s-low/cli ${require("../package.json").version} 🔱`, "-v, --version");
// 类型定义生成器 low gt ?--mf-config-path 路径
commander_1.program
    .command("gt")
    .description("生成 Typescript 类型定义")
    .option("-mcp --mf-config-path <config>", "应用配置文件路径", "mf-config.js")
    .action(async (opt) => {
    log("opt", opt);
    try {
        const { mfConfigPath } = opt;
        const appConfig = await (0, load_ts_config_file_1.loadTsConfigFile)(path_1.default.resolve(process.cwd(), mfConfigPath));
        log("appConfig", JSON.stringify(appConfig));
        await (0, core_1.generateMfExposeDeclaration)(appConfig);
    }
    catch (error) {
        log(chalk_1.default.red("Error \n", chalk_1.default.red(error.message)));
    }
});
log("process.cwd()", process.cwd());
commander_1.program.parse(process.argv);
//# sourceMappingURL=index.js.map