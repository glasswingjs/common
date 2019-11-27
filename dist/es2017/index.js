import { container } from 'tsyringe';
export { inject as Inject, injectable as Injectable, singleton as Singleton } from 'tsyringe';

const resolve = (token) => container.resolve(token);

export { resolve };
