import moment from '..'


function getZeroBasedIsoWeekDay (date) {
  return (date.getDay() + 6) % 7
}

function getIsoWeekDay (date) {
  return getZeroBasedIsoWeekDay(date) + 1
}

// From stackoverflow.com/a/45592631
function weekDateToDate (year, week, weekDay) {
  const zeroBasedWeek = week - 1
  const zeroBasedWeekDay = weekDay - 1
  let days = (zeroBasedWeek * 7) + zeroBasedWeekDay

  // Dates start at 2017-01-01 and not 2017-01-00
  days += 1

  const firstDayOfYear = new Date(year, 0, 1)
  const firstIsoWeekDay = getIsoWeekDay(firstDayOfYear)
  const zeroBasedFirstIsoWeekDay = getZeroBasedIsoWeekDay(firstDayOfYear)

  // If year begins with W52 or W53
  if (firstIsoWeekDay > 4) {
    days += 8 - firstIsoWeekDay
  }
  // Else begins with W01
  else {
    days -= zeroBasedFirstIsoWeekDay
  }

  const date = new Date(year, 0, days)
  return date
}

function ordinalDateToDate (year, day) {
  const date = new Date(year, 0, day)
  return date
}

function sanitizeTimeString (timeString) {
  // Is ISO week based (e.g. 2015-W48…)
  if (/^[0-9]{4}-W[0-9]{2}/i.test(timeString)) {
    let fragments = timeString.split('-')
    fragments[1] = fragments[1].slice(1) // Remove "W"
    fragments = fragments.map(Number)

    // Is ISO week date (e.g. 2015-W48-2)
    if (/-[0-9]$/.test(timeString)) {
      return weekDateToDate(...fragments)
        .toISOString()
    }

    // Is ISO week (e.g. 2015-W48)
    return weekDateToDate(...fragments, 1)
      .toISOString()
  }

  // Is ordinal date (e.g. 2015-328)
  if (/^[0-9]{4}-[0-9]{3}$/i.test(timeString)) {
    return ordinalDateToDate(...timeString.split('-'))
  }

  // Correctly handle moments larger than a decade
  if (timeString.length < 4 && !/(-|:)/.test(timeString)) {
    return timeString.padEnd(4, '0')
  }

  // Add dash separators to date section
  const dateMatch = timeString.match(/^([0-9]{4})([0-9]{2})([0-9]{2})T/i)
  if (dateMatch) {
    timeString = timeString.replace(
      /^[0-9]{8}T/i,
      `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}T`
    )
  }

  // Add colon and dot separators to time section
  if (/^[0-9]{4}-[0-9]{2}-[0-9]{2}T/i.test(timeString)) {
    // T21 => T21:00Z
    if (/T[0-9]{2}Z?$/i.test(timeString)) {
      return timeString.replace(/Z?$/i, ':00Z')
    }
    // T2115 => T21:15Z
    else if (/T[0-9]{4}Z?$/i.test(timeString)) {
      return timeString.replace(/([0-9]{2})Z?$/i, ':$1Z')
    }
    // T211542 => T21:15:42Z
    else if (/T[0-9]{6}Z?$/i.test(timeString)) {
      return timeString.replace(/([0-9]{2})([0-9]{2})Z?$/i, ':$1:$2Z')
    }
    // T211542123 => T21:15:42.123Z
    else if (/T[0-9]{9}Z?$/i.test(timeString)) {
      return timeString.replace(
        /([0-9]{2})([0-9]{2})([0-9]{3})Z?$/i,
        ':$1:$2.$3Z'
      )
    }
    // T211542.123 => T21:15:42.123Z
    else if (/T[0-9]{6}.[0-9]{3}Z?$/i.test(timeString)) {
      return timeString.replace(
        /([0-9]{2})([0-9]{2}).([0-9]{3})Z?$/i,
        ':$1:$2.$3Z'
      )
    }
  }

  return timeString
}


export default class Instant extends Date {
  constructor () {
    if (arguments.length === 1) {
      const timeString = typeof arguments[0].toISOString === 'function'
        ? arguments[0].toISOString()
        : String(arguments[0])

      arguments[0] = sanitizeTimeString(timeString)
    }

    super(...arguments)
  }

  toMoment () {
    return moment(this.toISOString())
  }

  clone () {
    return new Instant(String(this))
  }
}
