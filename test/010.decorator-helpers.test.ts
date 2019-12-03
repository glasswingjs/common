import 'reflect-metadata'

import {expect} from 'chai'

import {extendPropertyDescriptor} from '../src'

describe('@glasswing/common', () => {
  describe('decorator-helpers', () => {
    it('extendPropertyDescriptor(descriptor, () => () => any)', () => {
      let descriptor: PropertyDescriptor = {
        value: () => 1,
      }

      descriptor = extendPropertyDescriptor(descriptor, oldMethod => () => oldMethod() + 1)

      expect(descriptor.value()).to.be.a('number')
      expect(descriptor.value()).to.equal(2)
    })
  })
})
