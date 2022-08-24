import { MicroAppConfig } from '../webpack/plugins/emit-expose-webpack-plugin';
/**
 * @Description 格式化 mf 的remote
 * @Author lang.jiang
 * @Date 2022-08-24 17:41:52
 */
export declare const getModuleFederationRemotes: (microAppConfig: MicroAppConfig) => Record<string, string>;
