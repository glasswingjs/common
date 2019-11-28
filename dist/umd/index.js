(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tsyringe')) :
  typeof define === 'function' && define.amd ? define(['exports', 'tsyringe'], factory) :
  (global = global || self, factory((global.gw = global.gw || {}, global.gw.common = {}), global.tsyringe));
}(this, (function (exports, tsyringe) { 'use strict';

  var Inject = function (token) { return tsyringe.inject(token); };
  var Injectable = function () { return tsyringe.injectable(); };
  var Singleton = function () { return tsyringe.singleton(); };
  var resolve = function (token) { return tsyringe.container.resolve(token); };

  exports.Inject = Inject;
  exports.Injectable = Injectable;
  exports.Singleton = Singleton;
  exports.resolve = resolve;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
