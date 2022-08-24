#!/usr/bin/env node

import { program } from "commander";
import path from "path";
import chalk from "chalk";
import { loadTsConfigFile } from "./utils/load-ts-config-file";
import { generateMfExposeDeclaration, MicroAppConfig } from "@slow/core";

const log = console.log;

// 版本信息 low --version / low -v
program.version(
  `🔱 @s-low/cli ${require("../package.json").version} 🔱`,
  "-v, --version"
);

// 类型定义生成器 low gt ?--mf-config-path 路径
program
  .command("gt")
  .description("生成 Typescript 类型定义")
  .option(
    "-mcp --mf-config-path <config>",
    "应用配置文件路径",
    "mf-config.js"
  )
  .action(async (opt) => {
    log("opt", opt);
    try {
      const { mfConfigPath } = opt;
      const appConfig = await loadTsConfigFile(
        path.resolve(process.cwd(), mfConfigPath)
      );
      log("appConfig", JSON.stringify(appConfig));
      await generateMfExposeDeclaration(appConfig as MicroAppConfig);
    } catch (error: any) {
      log(chalk.red("Error \n", chalk.red(error.message)));
    }
  });

log("process.cwd()", process.cwd());

program.parse(process.argv);
