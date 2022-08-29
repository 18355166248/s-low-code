import * as fs from "fs-extra";
import path from "path";
import { BundleFileConfig, bundleTsDeclaration } from "./bundle-ts-declaration";
import { MicroAppConfig } from "./emit-expose-webpack-plugin";
import { packDeclare } from "./pack-declare";

export const writeMfDeclare = async (
  appConfig: MicroAppConfig,
  baseUrl: string
) => {
  console.log("appConfig", appConfig.exposes);
  console.log("baseUrl", baseUrl);
  // 增加临时缓存, 用来打包每个小 bundle
  const cacheFilePath = path.resolve(baseUrl, ".cache");
  await fs.ensureDir(cacheFilePath);

  const entries: (BundleFileConfig & { name: string })[] = [];

  Object.keys(appConfig.exposes).forEach((key: string) => {
    const expose = appConfig.exposes[key];
    if (typeof expose === "string" && /\.ts$/.test(expose)) {
      entries.push({
        name: key,
        entryPath: path.resolve(process.cwd(), expose),
        outputPath: path.resolve(baseUrl, ".cache", `${key}.d.ts`),
      });
    }
  });

  // 并行打包
  await bundleTsDeclaration(entries.slice());

  // 合并上面的小bundle
  const content = packDeclare(
    entries.map((en) => ({
      path: en.outputPath,
      moduleName: `${appConfig.name}/${en.name}`,
    }))
  );

  await fs.writeFile(path.resolve(baseUrl, "expose.d.ts"), content);
  await fs.remove(path.resolve(baseUrl, ".cache"));
};