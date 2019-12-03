import {container, inject, injectable, InjectionToken, singleton} from 'tsyringe'

import {ClassConstructor} from '../_types'

export const Inject = (
  token: InjectionToken<any>,
): ((target: any, propertyKey: string | symbol, parameterIndex: number) => any) => inject(token)

export const Injectable = <T>(): ((target: ClassConstructor) => void) => injectable()

export const Singleton = <T>(): ((target: ClassConstructor) => void) => singleton()

export const resolve = <T>(token: InjectionToken<T>): T => container.resolve(token)
