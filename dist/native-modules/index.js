import { inject, injectable, container, singleton } from 'tsyringe';

/**
 * Extends a class's method, by wrapping it with another method
 *
 * @param descriptor
 * @param handler
 */
var extendClassMethod = function (descriptor, handler) {
    return Object.assign(descriptor, {
        value: handler(descriptor.value),
    });
};

var Inject = inject;
var Injectable = injectable;
var resolve = function (token) { return container.resolve(token); };
var Singleton = singleton;

export { Inject, Injectable, Singleton, extendClassMethod, resolve };
