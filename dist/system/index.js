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

      var Inject = exports('Inject', function (token) { return inject(token); });
      var Injectable = exports('Injectable', function () { return injectable(); });
      var Singleton = exports('Singleton', function () { return singleton(); });
      var resolve = exports('resolve', function (token) { return container.resolve(token); });

    }
  };
});
