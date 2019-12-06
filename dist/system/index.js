System.register(['tsyringe'], function (exports) {
  'use strict';
  var inject, injectable, container, singleton;
  return {
    setters: [function (module) {
      inject = module.inject;
      injectable = module.injectable;
      container = module.container;
      singleton = module.singleton;
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

      var Inject = exports('Inject', inject);
      var Injectable = exports('Injectable', injectable);
      var resolve = exports('resolve', function (token) { return container.resolve(token); });
      var Singleton = exports('Singleton', singleton);

    }
  };
});
