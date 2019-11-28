import { InjectionToken } from 'tsyringe';

export declare type Constructor<T> = new (...args: any[]) => T;
export declare const Inject: (token: InjectionToken<any>) => (target: any, propertyKey: string | symbol, parameterIndex: number) => any;
export declare const Injectable: <T>() => (target: Constructor<T>) => void;
export declare const Singleton: <T>() => (target: Constructor<T>) => void;
export declare const resolve: <T>(token: InjectionToken<T>) => T;

export {};
