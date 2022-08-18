import webpack from "webpack";
import path from "path";
import { debounce } from "../utils";
import { writeMfDeclare } from "./write-mf-declare";

export interface MicroAppConfig {
  name: string;
  exposes: {
    [key: string]: string;
  };
  filename: string;
  shared: Record<string, any>;
}

interface EmitExposeWebpackPluginConfig {
  // app 配置
  appConfig: MicroAppConfig;

  // 输出内容的基础路径，如果没有指定则为 compilation.compiler.outputPath
  // 由于 serve 模式 build 模式输出位置不同，这个选项是有必要的，降低开发成本
  outputBasePath?: string;
}

/**
 * @Description
 * @Author lang.jiang
 * @Date 2022-08-12 15:21:45
 */
export class EmitExposeWebpackPlugin {
  private readonly config: EmitExposeWebpackPluginConfig;

  constructor(config: EmitExposeWebpackPluginConfig) {
    this.config = config;
  }

  apply(compiler: webpack.Compiler) {
    const { appConfig, outputBasePath } = this.config;
    console.log(appConfig, outputBasePath);

    const handler = debounce(async (compilation: webpack.Compilation) => {
      try {
        // 用 try catch 包裹一下防止 webpack-dev-server 热更新过程中偶发的强制 exit 现象
        if (appConfig) {
          // 拿到本项目的 outputPath
          const { outputPath } = compilation.compiler;
          // 生成相关目录
          const target = path.resolve(
            outputBasePath ?? outputPath,
            "mf-expose-types"
          );
          console.log(
            "[mf-lite] compiling shared remote module declarations..."
          );

          // 基于用户的配置 appConfig 生成类型定义
          await writeMfDeclare(appConfig, target);
        }
      } catch (e) {
        console.log(e);
      }
    }, 1500);

    // afterEmit 生命周期的时机：输出 asset 到 output 目录之后
    // 实践证明，它不会阻塞 webpack dev-server 的流程，不会影响开发体验。
    compiler.hooks.afterEmit.tap("EmitMfExposeWebpackPlugin", handler);
  }
}
