(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tsyringe')) :
  typeof define === 'function' && define.amd ? define(['exports', 'tsyringe'], factory) :
  (global = global || self, factory((global.gw = global.gw || {}, global.gw.common = {}), global.tsyringe));
}(this, (function (exports, tsyringe) { 'use strict';

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

  const Inject = (token) => tsyringe.inject(token);
  const Injectable = () => tsyringe.injectable();
  const Singleton = () => tsyringe.singleton();
  const resolve = (token) => tsyringe.container.resolve(token);

  exports.Inject = Inject;
  exports.Injectable = Injectable;
  exports.Singleton = Singleton;
  exports.extendPropertyDescriptor = extendPropertyDescriptor;
  exports.resolve = resolve;
  exports.wrapPropertyDescriptorHandler = wrapPropertyDescriptorHandler;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
