import { InjectionToken } from 'tsyringe';

export declare type ClassConstructor = new (...args: any[]) => {};
export declare type ClassMethod = (...args: any[]) => any;
export declare type ClassMethodWrapper = (oldMethod: ClassMethod) => ClassMethod;
/**
 * Extends a class's method, by wrapping it with another method
 *
 * @param descriptor
 * @param handler
 */
export declare const extendClassMethod: (descriptor: PropertyDescriptor, handler: ClassMethodWrapper) => PropertyDescriptor;
export declare const Inject: (token: InjectionToken<any>) => (target: any, propertyKey: string | symbol, parameterIndex: number) => any;
export declare const Injectable: <T>() => (target: ClassConstructor) => void;
export declare const Singleton: <T>() => (target: ClassConstructor) => void;
export declare const resolve: <T>(token: InjectionToken<T>) => T;

export {};
