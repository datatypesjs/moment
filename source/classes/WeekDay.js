import assert from 'assert'

import Week from './Week'



export default class WeekDay extends Week {
  constructor (isoString) {
    const regex = /-[1-7]$/

    assert(
      regex.test(isoString),
      `${isoString} does not match ${regex}`
    )

    const fragments = isoString.split('-')
    const weekDay = Number(fragments.pop())

    super(fragments.join('-'))

    assert(
      1 <= weekDay && weekDay <= 31, // eslint-disable-line yoda
      `Day must be in range [1,31] and not ${weekDay}`
    )
    this._weekDay = weekDay
  }

  clone () {
    return new WeekDay(this.string)
  }

  set weekDay (weekDay) {
    delete this._isoString
    this._weekDay = weekDay
    return this
  }
  setWeekDay (weekDay) {
    this.weekDay = weekDay
    return this
  }

  get weekDay () {
    return this._weekDay
  }

  get weekDayString () {
    return String(this.weekDay)
  }

  get string () {
    if (!this._isoString) {
      this._isoString = `${super.string}-${this.weekDayString}`
    }

    return this._isoString
  }

  toString () {
    return this.string
  }
}
