'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tsyringe = require('tsyringe');

var resolve = function (token) { return tsyringe.container.resolve(token); };

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
