System.register(['tsyringe'], function (exports) {
  'use strict';
  var inject, injectable, singleton, container;
  return {
    setters: [function (module) {
      inject = module.inject;
      injectable = module.injectable;
      singleton = module.singleton;
      container = module.container;
    }],
    execute: function () {

      /**
       * Extends a class's method, by wrapping it with another method
       *
       * @param descriptor
       * @param handler
       */
      var extendClassMethod = exports('extendClassMethod', function (descriptor, handler) {
          return Object.assign(descriptor, {
              value: handler(descriptor.value),
          });
      });

      var Inject = exports('Inject', function (token) { return inject(token); });
      var Injectable = exports('Injectable', function () { return injectable(); });
      var Singleton = exports('Singleton', function () { return singleton(); });
      var resolve = exports('resolve', function (token) { return container.resolve(token); });

    }
  };
});
