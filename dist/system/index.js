System.register(['tsyringe'], function (exports) {
	'use strict';
	var container;
	return {
		setters: [function (module) {
			container = module.container;
			var _setter = {};
			_setter.Inject = module.inject;
			_setter.Injectable = module.injectable;
			_setter.Singleton = module.singleton;
			exports(_setter);
		}],
		execute: function () {

			var resolve = exports('resolve', function (token) { return container.resolve(token); });

		}
	};
});
