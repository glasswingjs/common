import { inject, injectable, singleton, container } from 'tsyringe';

const Inject = (token) => inject(token);
const Injectable = () => injectable();
const Singleton = () => singleton();
const resolve = (token) => container.resolve(token);

export { Inject, Injectable, Singleton, resolve };
