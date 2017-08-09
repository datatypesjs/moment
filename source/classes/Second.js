import assert from 'assert'

import zpad from 'zpad'

import Minute from './Minute'


export default class Second extends Minute {
  constructor (isoString) {
    const pattern = /:?([0-9]{2})(\.[0-9]+)?Z?$/i
    const matches = isoString.match(pattern)

    if (!matches) {
      throw new Error(
        'The provided argument must be valid ISO string for a second ' +
        `and not ${isoString}`
      )
    }

    const second = Number(matches[1])

    super(isoString.replace(pattern, ''))

    assert(
      0 <= second && second < 60, // eslint-disable-line yoda
      `Second must be in range [0,60[ and not ${second}`
    )
    this._second = second
  }

  clone () {
    return new Second(this.string)
  }


  set second (second) {
    delete this._isoString
    this._second = second
    return this
  }
  setSecond (second) {
    this.second = second
    return this
  }

  get second () {
    return this._second
  }

  get secondString () {
    return zpad(this.second, 2)
  }

  get string () {
    if (!this._isoString) {
      this._isoString = super.string
        .replace('Z', `:${this.secondString}Z`)
    }

    return this._isoString
  }

  toString () {
    return this.string
  }
}
