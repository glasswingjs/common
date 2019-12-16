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

export { extendClassMethod };
