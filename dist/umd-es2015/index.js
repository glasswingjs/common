(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tsyringe')) :
  typeof define === 'function' && define.amd ? define(['exports', 'tsyringe'], factory) :
  (global = global || self, factory((global.gw = global.gw || {}, global.gw.common = {}), global.tsyringe));
}(this, (function (exports, tsyringe) { 'use strict';

  const Inject = (token) => tsyringe.inject(token);
  const Injectable = () => tsyringe.injectable();
  const Singleton = () => tsyringe.singleton();
  const resolve = (token) => tsyringe.container.resolve(token);

  exports.Inject = Inject;
  exports.Injectable = Injectable;
  exports.Singleton = Singleton;
  exports.resolve = resolve;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
