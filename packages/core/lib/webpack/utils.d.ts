export declare const debounce: <T extends (...args: any[]) => any>(fn: T, timeout?: number) => (...args: Parameters<T>) => void;
