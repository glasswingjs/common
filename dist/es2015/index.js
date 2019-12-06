import { inject, injectable, container, singleton } from 'tsyringe';

/**
 * Extends a class's method, by wrapping it with another method
 *
 * @param descriptor
 * @param handler
 */
const extendClassMethod = (descriptor, handler) => Object.assign(descriptor, {
    value: handler(descriptor.value),
});

const Inject = inject;
const Injectable = injectable;
const resolve = (token) => container.resolve(token);
const Singleton = singleton;

export { Inject, Injectable, Singleton, extendClassMethod, resolve };
