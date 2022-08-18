import fs from "fs";

export interface FileOptions {
  // 声明文件路径
  path: string;
  // 声明文件模块名称
  moduleName: string;
}

/**
 * @Description 打包类型定义文件
 * @Author lang.jiang
 * @Date 2022-08-17 17:32:43
 */

export const packDeclare = (fileOptions: FileOptions[]) => {
  const content = [];

  fileOptions.forEach((file) => {
    let source = fs.readFileSync(file.path, "utf-8");
    content.push(source);
    content.push("\n");
  });

  return content.join("");
};
