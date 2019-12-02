import { inject, injectable, singleton, container } from 'tsyringe';

/**
 * Extends a class's method, by wrapping it with another method
 *
 * @param descriptor
 * @param handler
 */
var extendPropertyDescriptor = function (descriptor, handler) {
    return Object.assign(descriptor, {
        value: handler(descriptor.value),
    });
};
/**
 * Wraps a decorator's PropertyDescriptor param by extending the descriptor.value with a wrapper
 *
 * @param descriptor
 * @param handler
 */
var wrapPropertyDescriptorHandler = function (descriptor, handler) {
    return Object.assign(descriptor, {
        value: handler(descriptor.value),
    });
};

var Inject = function (token) { return inject(token); };
var Injectable = function () { return injectable(); };
var Singleton = function () { return singleton(); };
var resolve = function (token) { return container.resolve(token); };

export { Inject, Injectable, Singleton, extendPropertyDescriptor, resolve, wrapPropertyDescriptorHandler };
