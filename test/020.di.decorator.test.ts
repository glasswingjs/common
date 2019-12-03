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
  constructor(@Inject(MyInjectable) public injected: MyInjectable, @Inject(MySingleton) public single: MySingleton) {}
}

describe('@glasswing/common', () => {
  describe('src/di', () => {
    afterEach(() => {
      count = 0
    })

    it('@Injectable', () => {
      let injected: MyInjectable = resolve(MyInjectable)

      expect(injected.theIndex()).to.equal(0)

      injected = resolve(MyInjectable)

      expect(injected.theIndex()).to.equal(1)
    })

    it('@Singleton', () => {
      let single: MySingleton = resolve(MySingleton)

      expect(single.theIndex()).to.equal(0)

      single = resolve(MySingleton)

      expect(single.theIndex()).to.equal(0)
    })

    it('@Injectable & @Singleton within another DI', () => {
      let depended: Dependable = resolve(Dependable)

      expect(depended.injected.theIndex()).to.equal(0)
      expect(depended.single.theIndex()).to.equal(0)

      depended = resolve(Dependable)

      expect(depended.injected.theIndex()).to.equal(1)
      expect(depended.single.theIndex()).to.equal(0)
    })
  })
})
