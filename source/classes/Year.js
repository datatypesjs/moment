import assert from 'assert'

import zpad from 'zpad'

import Moment from './Moment'


export default class Year extends Moment {
  constructor (year) {
    super()
    year = Number(year)
    assert(
      0 <= year && year <= 9999, // eslint-disable-line yoda
      `Year must be in range [0,9999] and not ${year}`
    )
    this._year = year
  }

  clone () {
    return new Year(this.string)
  }


  set year (year) {
    delete this._isoString
    this._year = year
    return this
  }
  setYear (year) {
    this.year = year
    return this
  }


  get year () {
    return this._year
  }

  get yearString () {
    return zpad(this.year, 2)
  }

  get string () {
    if (!this._isoString) {
      this._isoString = this.yearString
    }
    return this._isoString
  }
}
