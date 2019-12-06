import {container, inject, injectable, InjectionToken, singleton} from 'tsyringe'

export const Inject = inject
export const Injectable = injectable

export const resolve = <T>(token: InjectionToken<T>): T => container.resolve(token)

export const Singleton = singleton

