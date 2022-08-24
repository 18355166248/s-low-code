// module name: remote/fields

declare module 'remote/fields' {
    export interface FieldNode {
        type: any;
        props: Record<string, any>;
        iconfont: string;
        name: string;
        module?: string;
    }

    export const data: FieldNode[];
    export { data as default };
    export { };
}

