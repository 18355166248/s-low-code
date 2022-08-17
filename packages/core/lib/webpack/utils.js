"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
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
//# sourceMappingURL=utils.js.map