import { inject, injectable, singleton, container } from 'tsyringe';

/**
 * Extends a class's method, by wrapping it with another method
 *
 * @param descriptor
 * @param handler
 */
const extendClassMethod = (descriptor, handler) => Object.assign(descriptor, {
    value: handler(descriptor.value),
});

const Inject = (token) => inject(token);
const Injectable = () => injectable();
const Singleton = () => singleton();
const resolve = (token) => container.resolve(token);

export { Inject, Injectable, Singleton, extendClassMethod, resolve };
