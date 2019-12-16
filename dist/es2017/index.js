/**
 * Extends a class's method, by wrapping it with another method
 *
 * @param descriptor
 * @param handler
 */
const extendClassMethod = (descriptor, handler) => Object.assign(descriptor, {
    value: handler(descriptor.value),
});

export { extendClassMethod };
