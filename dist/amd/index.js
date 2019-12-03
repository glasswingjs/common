define('index', ['exports', 'tsyringe'], function (exports, tsyringe) { 'use strict';

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

  var Inject = function (token) { return tsyringe.inject(token); };
  var Injectable = function () { return tsyringe.injectable(); };
  var Singleton = function () { return tsyringe.singleton(); };
  var resolve = function (token) { return tsyringe.container.resolve(token); };

  exports.Inject = Inject;
  exports.Injectable = Injectable;
  exports.Singleton = Singleton;
  exports.extendClassMethod = extendClassMethod;
  exports.resolve = resolve;

  Object.defineProperty(exports, '__esModule', { value: true });

});
