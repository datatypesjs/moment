import assert from 'assert'

import zpad from 'zpad'

import Moment from './Moment'


export default class Decade extends Moment {
  constructor (decade) {
    super()
    decade = Number(decade)
    assert(
      0 <= decade && decade <= 999, // eslint-disable-line yoda
      `Decade must be in range [000, 999] and not "${decade}"`
    )
    this._year = decade * 10
  }

  clone () {
    return new Decade(this.decade)
  }


  set decade (decade) {
    this._year = decade * 10
  }
  setDecade (decade) {
    this.decade = decade
    return this
  }
  get decade () {
    return Math.trunc(this._year / 10)
  }

  get string () {
    return zpad(this.decade, 3)
  }
}
