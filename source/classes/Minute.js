import assert from 'assert'

import zpad from 'zpad'

import Hour from './Hour'


export default class Minute extends Hour {
  constructor (isoString) {
    const pattern = /:?([0-5][0-9])(\.[0-9]+)?Z?$/i
    const matches = isoString.match(pattern)

    if (!matches) {
      throw new Error(
        'The provided argument must be valid minute string ' +
        `and not ${isoString}`
      )
    }

    const minute = Number(matches[1])

    super(isoString.replace(pattern, ''))

    assert(
      0 <= minute && minute < 60, // eslint-disable-line yoda
      `Minute must be in range [0,60[ and not ${minute}`
    )
    this._minute = minute
  }

  clone () {
    return new Minute(this.string)
  }


  set minute (minute) {
    delete this._isoString
    this._minute = minute
    return this
  }
  setMinute (minute) {
    this.minute = minute
    return this
  }

  get minute () {
    return this._minute
  }

  get minuteString () {
    return zpad(this.minute, 2)
  }

  get string () {
    if (!this._isoString) {
      this._isoString = super.string
        .replace('Z', `:${this.minuteString}Z`)
    }

    return this._isoString
  }
}
