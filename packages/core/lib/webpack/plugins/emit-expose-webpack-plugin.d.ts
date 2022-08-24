import webpack from "webpack";
export interface MicroAppConfig {
    name: string;
    exposes: {
        [key: string]: string;
    };
    filename: string;
    shared: Record<string, any>;
}
interface EmitExposeWebpackPluginConfig {
    appConfig: MicroAppConfig;
    outputBasePath?: string;
}
/**
 * @Description
 * @Author lang.jiang
 * @Date 2022-08-12 15:21:45
 */
export declare class EmitExposeWebpackPlugin {
    private readonly config;
    constructor(config: EmitExposeWebpackPluginConfig);
    apply(compiler: webpack.Compiler): void;
}
export {};
