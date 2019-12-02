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

export type ControllerAction = (...args: any[]) => any

/**
 * Wraps a decorator's PropertyDescriptor param by extending the descriptor.value with a wrapper
 *
 * @param descriptor
 * @param handler
 */
export const wrapPropertyDescriptorHandler = (
  descriptor: PropertyDescriptor,
  handler: (oldMethod: ControllerAction) => any,
): PropertyDescriptor =>
  Object.assign(descriptor, {
    value: handler(descriptor.value),
  })
