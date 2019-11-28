import { inject, injectable, singleton, container } from 'tsyringe';

var Inject = function (token) { return inject(token); };
var Injectable = function () { return injectable(); };
var Singleton = function () { return singleton(); };
var resolve = function (token) { return container.resolve(token); };

export { Inject, Injectable, Singleton, resolve };
