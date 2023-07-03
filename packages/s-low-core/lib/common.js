"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomHexColor = void 0;
// 生成随机颜色
const generateRandomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
exports.generateRandomHexColor = generateRandomHexColor;
//# sourceMappingURL=common.js.map