import assert from 'assert'

import zpad from 'zpad'

import Year from './Year'


export default class OrdinalDay extends Year {
  constructor (isoString) {
    const regex = /-([0-2][0-9][0-9]|3[0-5][0-9]|36[0-6])$/

    assert(
      regex.test(isoString),
      `${isoString} does not match ${regex}`
    )

    const fragments = isoString.split('-')
    const ordinalDay = Number(fragments.pop())

    super(fragments.shift())

    assert(
      1 <= ordinalDay && ordinalDay <= 366, // eslint-disable-line yoda
      `Day must be in range [1,366] and not ${ordinalDay}`
    )
    this._ordinalDay = ordinalDay
  }

  clone () {
    return new OrdinalDay(this.string)
  }

  set ordinalDay (ordinalDay) {
    delete this._isoString
    this._ordinalDay = ordinalDay
    return this
  }
  setOrdinalDay (ordinalDay) {
    this.ordinalDay = ordinalDay
    return this
  }

  get ordinalDay () {
    return this._ordinalDay
  }

  get dayString () {
    return zpad(this.ordinalDay, 3)
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
