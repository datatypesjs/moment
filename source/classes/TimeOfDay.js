import zpad from 'zpad'

export default class Time {
  constructor (timeString) {
    timeString = timeString.replace(/:/g, '')

    const [time] = timeString.split('.')
    let [, fraction = 0] = timeString.split('.')

    this._hours = 0
    this._minutes = 0
    this._seconds = 0
    this._milliseconds = 0

    fraction = Number(`0.${fraction}`)

    if (time.length >= 2) {
      this._hours = Number(time.slice(0, 2)) || 0
      this._minutes = fraction * 60
    }
    if (time.length >= 4) {
      this._minutes = Number(time.slice(2, 4)) || 0
      this._seconds = fraction * 60
    }
    if (time.length === 6) {
      this._seconds = Number(time.slice(4, 6)) || 0
      this._milliseconds = fraction
    }

    // Create internal timeString
    this.getString()

    this.precision = this._milliseconds
      ? 'millisecond'
      : this._seconds
        ? 'second'
        : this._minutes
          ? 'minute'
          : 'hour'
  }

  // Hours
  set hours (hours) {
    hours = Number(hours)

    this._hours = hours
    this._timeString = null

    this._lowerLimit.setHours(hours)
    this._upperLimit.setHours(hours)
  }

  setHours (hours) {
    this.hours = hours
    return this
  }
  get hours () { return this._hours } // eslint-disable-line brace-style
  getHours () { return this._hours } // eslint-disable-line brace-style


  // Minutes
  set minutes (minutes) {
    this._minutes = minutes
    this._timeString = null
    return this
  }
  setMinutes (minutes) {
    this.minutes = minutes
    return this
  }
  get minutes () { return this._minutes } // eslint-disable-line brace-style
  getMinutes () { return this._minutes } // eslint-disable-line brace-style


  // Seconds
  set seconds (seconds) {
    this._seconds = seconds
    this._timeString = null
    return this
  }
  setSeconds (seconds) {
    this.seconds = seconds
    return this
  }
  get seconds () { return this._seconds } // eslint-disable-line brace-style
  getSeconds () { return this._seconds } // eslint-disable-line brace-style


  // Milliseconds
  set milliseconds (milliseconds) {
    this._milliseconds = milliseconds
    this._timeString = null
    return this
  }
  setMilliseconds (milliseconds) {
    this.milliseconds = milliseconds
    return this
  }
  // eslint-disable-next-line brace-style
  get milliseconds () { return this._milliseconds }
  // eslint-disable-next-line brace-style
  getMilliseconds () { return this._milliseconds }


  get string () {
    if (!this._timeString) {
      this._timeString =
        `${zpad(this._hours, 2)}:${zpad(this._minutes, 2)}:` +
        `${zpad(this._seconds, 2)}.${zpad(this._milliseconds, 3)}`
    }
    return this._timeString
  }

  getString () {
    return this.string
  }
}
