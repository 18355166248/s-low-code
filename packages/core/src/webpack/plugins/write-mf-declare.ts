import * as fs from "fs-extra";
import path from "path";
import { MicroAppConfig } from "./emit-expose-webpack-plugin";

export const writeMfDeclare = async (
  appConfig: MicroAppConfig,
  baseUrl: string
) => {
  console.log("appConfig", appConfig);
  console.log("baseUrl", baseUrl);
  // 增加临时缓存, 用来打包每个小 bundle
  await fs.ensureDir(path.resolve(baseUrl, ".cache"));
};
