import {container, inject, injectable, InjectionToken, singleton} from 'tsyringe'

// interface Constructor<T> {
//   new (...args: any[]): T
// }

type Constructor<T> = new (...args: any[]) => T

export const Inject = (
  token: InjectionToken<any>,
): ((target: any, propertyKey: string | symbol, parameterIndex: number) => any) => inject(token)

export const Injectable = <T>(): ((target: Constructor<T>) => void) => injectable()

export const Singleton = <T>(): ((target: Constructor<T>) => void) => singleton()

export const resolve = <T>(token: InjectionToken<T>): T => container.resolve(token)
