"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packDeclare = void 0;
const ts_morph_1 = require("ts-morph");
/**
 * @Description 打包类型定义文件
 * @Author lang.jiang
 * @Date 2022-08-17 17:32:43
 */
const packDeclare = (fileOptions) => {
    const project = new ts_morph_1.Project();
    const content = [];
    fileOptions.forEach((file) => {
        const source = project.addSourceFileAtPath(file.path);
        // 遍历每一个子节点，如果是 SyntaxKind.DeclareKeyword（即 declare 关键词），进行文本替换
        source.forEachDescendant((item) => {
            if (item.getKind() === ts_morph_1.SyntaxKind.DeclareKeyword) {
                // 删除即可, 需要判断是不是第一个节点，否则会报异常
                item.replaceWithText(item.isFirstNodeOnLine() ? "export" : "");
            }
        });
    });
    console.log("content", content);
    return content;
};
exports.packDeclare = packDeclare;
//# sourceMappingURL=pack-declare.js.map