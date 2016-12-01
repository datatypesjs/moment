import assert from 'assert'

import zpad from 'zpad'

import Moment from './Moment'


export default class Century extends Moment {
  constructor (century) {
    super()
    century = Number(century)
    assert(
      0 <= century && century <= 99, // eslint-disable-line yoda
      `Century must be in range [00, 99] and not ${century}`
    )
    this._year = century * 100
  }

  clone () {
    return new Century(this.century)
  }


  set century (century) {
    this._year = century * 100
  }
  setCentury (century) {
    this.century = century
    return this
  }
  get century () {
    return Math.trunc(this._year / 100)
  }

  get string () {
    return zpad(this.century, 2)
  }
}
