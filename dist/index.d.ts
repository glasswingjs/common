import { InjectionToken, inject, injectable, singleton } from 'tsyringe';

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
export declare const Inject: typeof inject;
export declare const Injectable: typeof injectable;
export declare const resolve: <T>(token: InjectionToken<T>) => T;
export declare const Singleton: typeof singleton;

export {};
