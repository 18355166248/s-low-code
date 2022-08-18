import execa from "execa";
export declare const debounce: <T extends (...args: any[]) => any>(fn: T, timeout?: number) => (...args: Parameters<T>) => void;
export declare const runCommand: (command: string, args?: string[], path?: string) => Promise<execa.ExecaChildProcess>;
