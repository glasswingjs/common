(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tsyringe')) :
	typeof define === 'function' && define.amd ? define(['exports', 'tsyringe'], factory) :
	(global = global || self, factory((global.gw = global.gw || {}, global.gw.http = {}), global.tsyringe));
}(this, (function (exports, tsyringe) { 'use strict';

	const resolve = (token) => tsyringe.container.resolve(token);

	Object.defineProperty(exports, 'Inject', {
		enumerable: true,
		get: function () {
			return tsyringe.inject;
		}
	});
	Object.defineProperty(exports, 'Injectable', {
		enumerable: true,
		get: function () {
			return tsyringe.injectable;
		}
	});
	Object.defineProperty(exports, 'Singleton', {
		enumerable: true,
		get: function () {
			return tsyringe.singleton;
		}
	});
	exports.resolve = resolve;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
