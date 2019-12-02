define('index', ['exports', 'tsyringe'], function (exports, tsyringe) { 'use strict';

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

  var Inject = function (token) { return tsyringe.inject(token); };
  var Injectable = function () { return tsyringe.injectable(); };
  var Singleton = function () { return tsyringe.singleton(); };
  var resolve = function (token) { return tsyringe.container.resolve(token); };

  exports.Inject = Inject;
  exports.Injectable = Injectable;
  exports.Singleton = Singleton;
  exports.extendPropertyDescriptor = extendPropertyDescriptor;
  exports.resolve = resolve;
  exports.wrapPropertyDescriptorHandler = wrapPropertyDescriptorHandler;

  Object.defineProperty(exports, '__esModule', { value: true });

});
