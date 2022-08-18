import { ModuleDeclarationKind, Project, SyntaxKind } from "ts-morph";

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
  const project = new Project();
  const content = [];
  fileOptions.forEach((file) => {
    const source = project.addSourceFileAtPath(file.path);

    // 遍历每一个子节点，如果是 SyntaxKind.DeclareKeyword（即 declare 关键词），进行文本替换
    source.forEachDescendant((item) => {
      if (item.getKind() === SyntaxKind.DeclareKeyword) {
        // 删除即可, 需要判断是不是第一个节点，否则会报异常
        item.replaceWithText(item.isFirstNodeOnLine() ? "export" : "");
      }
    });
  });

  console.log("content", content);
  return content;
};
