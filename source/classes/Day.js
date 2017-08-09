import assert from 'assert'

import zpad from 'zpad'

import Month from './Month'


export default class Day extends Month {
  constructor (isoString) {
    const regex = /-(0[1-9]|[12][0-9]|3[01])$/

    assert(
      regex.test(isoString),
      `${isoString} does not match ${regex}`
    )

    const fragments = isoString.split('-')
    const day = Number(fragments.pop())

    super(fragments.join('-'))

    assert(
      1 <= day && day <= 31, // eslint-disable-line yoda
      `Day must be in range [1,31] and not ${day}`
    )
    this._day = day
  }

  clone () {
    return new Day(this.string)
  }

  set day (day) {
    delete this._isoString
    this._day = day
    return this
  }
  setDay (day) {
    this.day = day
    return this
  }

  get day () {
    return this._day
  }

  get dayString () {
    return zpad(this.day, 2)
  }

  get string () {
    if (!this._isoString) {
      this._isoString = `${super.string}-${this.dayString}`
    }

    return this._isoString
  }

  toString () {
    return this.string
  }
}
