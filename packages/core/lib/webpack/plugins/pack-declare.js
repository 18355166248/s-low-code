"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.packDeclare = void 0;
const fs_1 = __importDefault(require("fs"));
/**
 * @Description 打包类型定义文件
 * @Author lang.jiang
 * @Date 2022-08-17 17:32:43
 */
const packDeclare = (fileOptions) => {
    const content = [];
    fileOptions.forEach((file) => {
        let source = fs_1.default.readFileSync(file.path, "utf-8");
        content.push(source);
        content.push("\n");
    });
    return content.join("");
};
exports.packDeclare = packDeclare;
//# sourceMappingURL=pack-declare.js.map