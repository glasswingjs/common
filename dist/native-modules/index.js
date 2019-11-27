import { container } from 'tsyringe';
export { inject as Inject, injectable as Injectable, singleton as Singleton } from 'tsyringe';

var resolve = function (token) { return container.resolve(token); };

export { resolve };
