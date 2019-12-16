(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory((global.gw = global.gw || {}, global.gw.common = {})));
}(this, (function (exports) { 'use strict';

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

  exports.extendClassMethod = extendClassMethod;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
