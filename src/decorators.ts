declare type ExtendableMethod = (...args: any[]) => any

declare type ExtendedMethod = (...args: any[]) => any

declare type WrapperMethod = (oldMethod: ExtendableMethod) => ExtendedMethod

/**
 * Extends a class's method, by wrapping it with another method
 *
 * @param descriptor
 * @param handler
 */
export const extendPropertyDescriptor = (descriptor: PropertyDescriptor, handler: WrapperMethod): PropertyDescriptor =>
  Object.assign(descriptor, {
    value: handler(descriptor.value),
  })
