export declare type ClassMethod = (...args: any[]) => any;
export declare type ClassMethodWrapper = (oldMethod: ClassMethod) => ClassMethod;
/**
 * Extends a class's method, by wrapping it with another method
 *
 * @param descriptor
 * @param handler
 */
export declare const extendClassMethod: (descriptor: PropertyDescriptor, handler: ClassMethodWrapper) => PropertyDescriptor;

export {};
