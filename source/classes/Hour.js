import assert from 'assert'

import zpad from 'zpad'

import Day from './Day'


export default class Hour extends Day {
  constructor (isoString) {
    const pattern = /T([01][0-9]|2[0-4])(\.[0-9]+)?Z?$/i
    const matches = isoString.match(pattern)

    if (!matches) {
      throw new Error(
        'The provided argument must be valid ISO string for an hour ' +
        `and not ${isoString}`
      )
    }

    const hour = Number(matches[1])

    super(isoString.replace(pattern, ''))

    assert(
      0 <= hour && hour < 24, // eslint-disable-line yoda
      `Minute must be in range [0,24[ and not ${hour}`
    )
    this._hour = hour
  }

  clone () {
    return new Hour(this.string)
  }


  set hour (hour) {
    delete this._isoString
    this._hour = hour
    return this
  }
  setHour (hour) {
    this.hour = hour
    return this
  }

  get hour () {
    return this._hour
  }

  get hourString () {
    return zpad(this.hour, 2)
  }

  get string () {
    if (!this._isoString) {
      this._isoString = `${super.string}T${this.hourString}Z`
    }

    return this._isoString
  }

  toString () {
    return this.string
  }
}
