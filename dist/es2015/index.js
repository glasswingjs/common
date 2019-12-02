import { inject, injectable, singleton, container } from 'tsyringe';

/**
 * Extends a class's method, by wrapping it with another method
 *
 * @param descriptor
 * @param handler
 */
const extendPropertyDescriptor = (descriptor, handler) => Object.assign(descriptor, {
    value: handler(descriptor.value),
});
/**
 * Wraps a decorator's PropertyDescriptor param by extending the descriptor.value with a wrapper
 *
 * @param descriptor
 * @param handler
 */
const wrapPropertyDescriptorHandler = (descriptor, handler) => Object.assign(descriptor, {
    value: handler(descriptor.value),
});

const Inject = (token) => inject(token);
const Injectable = () => injectable();
const Singleton = () => singleton();
const resolve = (token) => container.resolve(token);

export { Inject, Injectable, Singleton, extendPropertyDescriptor, resolve, wrapPropertyDescriptorHandler };
