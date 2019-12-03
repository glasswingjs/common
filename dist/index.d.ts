import { InjectionToken } from 'tsyringe';

export declare type ClassConstructor = new (...args: any[]) => {};
/**
 * @deprecated
 * @see wrapPropertyDescriptorHandler
 */
export declare type ControllerAction = (...args: any[]) => any;
export declare type ExtendableMethod = (...args: any[]) => any;
export declare type ExtendedMethod = (...args: any[]) => any;
export declare type WrapperMethod = (oldMethod: ExtendableMethod) => ExtendedMethod;
/**
 * Extends a class's method, by wrapping it with another method
 *
 * @param descriptor
 * @param handler
 */
export declare const extendPropertyDescriptor: (descriptor: PropertyDescriptor, handler: WrapperMethod) => PropertyDescriptor;
/**
 * Wraps a decorator's PropertyDescriptor param by extending the descriptor.value with a wrapper
 * @TODO: Method should be replaced with `extendPropertyDescriptor`
 * @deprecated
 *
 * @param descriptor
 * @param handler
 */
export declare const wrapPropertyDescriptorHandler: (descriptor: PropertyDescriptor, handler: (oldMethod: ControllerAction) => any) => PropertyDescriptor;
export declare const Inject: (token: InjectionToken<any>) => (target: any, propertyKey: string | symbol, parameterIndex: number) => any;
export declare const Injectable: <T>() => (target: ClassConstructor) => void;
export declare const Singleton: <T>() => (target: ClassConstructor) => void;
export declare const resolve: <T>(token: InjectionToken<T>) => T;

export {};
