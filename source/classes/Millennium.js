import assert from 'assert'

import Moment from './Moment'


export default class Millennium extends Moment {
  constructor (millennium) {
    super()
    millennium = Number(millennium)
    assert(
      0 <= millennium && millennium <= 9, // eslint-disable-line yoda
      `Millennium must be in range [0, 9] and not ${millennium}`
    )
    this._year = millennium * 1000
  }

  clone () {
    return new Millennium(this.millennium)
  }


  set millennium (millennium) {
    this._year = millennium * 1000
  }
  setMillennium (millennium) {
    this.millennium = millennium
    return this
  }
  get millennium () {
    return Math.trunc(this._year / 1000)
  }

  get string () {
    return String(this.millennium)
  }
}
