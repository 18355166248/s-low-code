export interface BundleFileConfig {
    entryPath: string;
    outputPath: string;
}
export declare const bundleTsDeclaration: (entries: BundleFileConfig[]) => Promise<void>;
