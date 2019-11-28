import 'reflect-metadata'
import {expect} from 'chai'

import {Inject, Injectable, resolve, Singleton} from '../src'

let count = 0

@Injectable()
class MyInjectable {
  constructor(protected index: number = count++) {}

  public theIndex() {
    return this.index
  }
}

@Singleton()
class MySingleton {
  constructor(protected index: number = count++) {}

  public theIndex() {
    return this.index
  }
}

@Injectable()
class Dependable {
  constructor(
    @Inject(MyInjectable) public theInjectable: MyInjectable,
    @Inject(MySingleton) public theSingleton: MySingleton,
  ) {}
}

describe('src/di => HttpException', () => {
  it('', () => {
    let dependable: Dependable = resolve(Dependable)

    expect(dependable.theInjectable.theIndex()).to.equal(0)
    expect(dependable.theSingleton.theIndex()).to.equal(1)

    dependable = resolve(Dependable)

    expect(dependable.theInjectable.theIndex()).to.equal(2)
    expect(dependable.theSingleton.theIndex()).to.equal(1)
  })
})
