export interface FileOptions {
    path: string;
    moduleName: string;
}
/**
 * @Description 打包类型定义文件
 * @Author lang.jiang
 * @Date 2022-08-17 17:32:43
 */
export declare const packDeclare: (fileOptions: FileOptions[]) => string;
