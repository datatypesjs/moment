import assert from 'assert'

import zpad from 'zpad'

import Year from './Year.js'


export default class Week extends Year {
  constructor (isoString) {
    const regex = /-W([0-4][0-9]|5[0-3])$/i
    assert(
      regex.test(isoString),
      `"${isoString}" does not match "${regex}"`
    )

    const fragments = isoString.split(/-W/i)
    const week = Number(fragments[1])

    super(fragments[0])

    assert(
      1 <= week && week <= 53, // eslint-disable-line yoda
      `Week must be in range [1,53] and not ${week}`
    )
    this._week = week
  }

  clone () {
    return new Week(this.string)
  }

  set week (week) {
    delete this._isoString
    this._week = week
    return this
  }
  setWeek (week) {
    this.week = week
    return this
  }


  get week () {
    return this._week
  }

  get weekString () {
    return zpad(this.week, 2)
  }

  get string () {
    if (!this._isoString) {
      this._isoString = `${super.string}-W${this.weekString}`
    }
    return this._isoString
  }
}
