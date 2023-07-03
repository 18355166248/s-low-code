"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModuleFederationRemotes = void 0;
/**
 * @Description 格式化 mf 的remote
 * @Author lang.jiang
 * @Date 2022-08-24 17:41:52
 */
const getModuleFederationRemotes = (microAppConfig) => {
    const remotes = {};
    for (const remote of microAppConfig.remotes) {
        remotes[remote.name] = `${remote.name}@${remote.url.endsWith("/") ? remote.url : `${remote.url}/`}remoteEntry.js`;
    }
    return remotes;
};
exports.getModuleFederationRemotes = getModuleFederationRemotes;
//# sourceMappingURL=mf-utils.js.map