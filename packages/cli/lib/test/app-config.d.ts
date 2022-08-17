declare const config: {
    name: string;
    url: string;
    exposes: any[];
    remotes: {
        name: string;
        url: string;
        sharedLibraries: string[];
    }[];
};
export default config;
