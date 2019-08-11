export declare const _: unique symbol;
export declare const curry: (fn: Function, arity?: number) => (...args: any[]) => any;
export declare function compose<T>(...funcs: Function[]): (args: any) => T;
export declare const first: (data: any) => any;
export declare const last: (data: any) => any;
export declare const prop: (...args: any[]) => any;
export declare const wait: (time: number) => Promise<unknown>;
