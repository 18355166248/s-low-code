import * as os from "os";
import * as path from "path";
import { runCommand } from "../utils";

export interface BundleFileConfig {
  // 入口文件路径
  entryPath: string;

  // 输出路径
  outputPath: string;
}

export const bundleTsDeclaration = async (entries: BundleFileConfig[]) => {
  // 最大并行工作数目为 cpu 核心数 - 1
  const maxWorkSize = os.cpus().length - 1;

  while (entries.length > 0) {
    const runningItems = entries.splice(0, maxWorkSize);
    await Promise.all(
      runningItems.map((item) => {
        const { entryPath, outputPath } = item;
        console.log("entryPath", entryPath);
        console.log("outputPath", outputPath);
        return runCommand(
          path.resolve(
            require.resolve("dts-bundle-generator"),
            "../bin/dts-bundle-generator.js"
          ),
          [
            entryPath,
            "--out-file",
            outputPath,
            "--project",
            path.resolve(process.cwd(), "tsconfig.json"),
            "--no-banner",
          ]
        );
      })
    );
  }
};
