"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCommand = exports.debounce = void 0;
const execa_1 = __importDefault(require("execa"));
const debounce = (fn, timeout = 0) => {
    if (typeof fn !== "function") {
        throw new Error("fn should be a function");
    }
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.call(this, ...args);
        }, timeout);
    };
};
exports.debounce = debounce;
// 执行命令
const runCommand = async (command, args, path) => {
    let p = path;
    if (!p) {
        p = process.cwd();
    }
    if (!args) {
        // \s 匹配任何空白字符，包括空格、制表符、换页符
        // eslint-disable-next-line no-param-reassign
        [command, ...args] = command.split(/\s+/);
    }
    return execa_1.default(command, args, {
        cwd: p,
        stdio: "inherit",
    });
};
exports.runCommand = runCommand;
//# sourceMappingURL=utils.js.map