import Millennium from './classes/Millennium'
import Century from './classes/Century'
import Decade from './classes/Decade'
import Year from './classes/Year'
import Month from './classes/Month'
import Week from './classes/Week'
import WeekDay from './classes/WeekDay'
import Day from './classes/Day'
import OrdinalDay from './classes/OrdinalDay'
import Hour from './classes/Hour'
import Minute from './classes/Minute'
import Second from './classes/Second'
import Millisecond from './classes/Millisecond'


export default (isoString) => {
  isoString = String(isoString)
    .toUpperCase()
    .replace('Z', '')

  const invalidError = new Error(`${isoString} is no valid ISO string`)

  // Date time
  if (isoString.includes('T')) {
    if (isoString.includes('-')) {
      if (isoString.includes('.')) {
        // …T21.345
        if (/T[0-9]{2}\.[0-9]+$/i.test(isoString)) {
          return new Minute(isoString)
        }

        // …T2115.345 || …T21:15.345
        if (/T[0-9]{2}:?[0-9]{2}\.[0-9]+$/i.test(isoString)) {
          return new Second(isoString)
        }

        // …T211542.345 || …T21:15:42.345
        if (/T[0-9]{2}(:?[0-9]{2}){2}\.[0-9]+$/i.test(isoString)) {
          return new Millisecond(isoString)
        }
      }
      else {
        if (isoString.includes(':'))  {
          switch (isoString.length) {
            case 14: // 2015-324T21:15
            case 16: // 2015-11-24T21:15 || 2015-W11-4T21:15
              return new Minute(isoString)
            case 17: // 2015-324T21:15:42
            case 19: // 2015-11-24T21:15:42 || 2015-W11-4T21:15:42
              return new Second(isoString)
            default: throw Error()
          }
        }
        else {
          if (isoString.split('-').length === 3) {
            switch (isoString.length) {
              case 13: // 2015-11-24T21 || 2015-W11-4T21
                return new Hour(isoString)
              case 15: // 2015-11-24T2115 || 2015-W11-4T2115
                return new Minute(isoString)
              case 17: // 2015-11-24T211542 || 2015-W11-4T211542
                return new Second(isoString)
              default: throw Error()
            }
          }
          else {
            switch (isoString.length) {
              case 11: // 2015-324T21
                return new Hour(isoString)
              case 13: // 2015-324T2115
                return new Minute(isoString)
              case 15: // 2015-324T211542
                return new Second(isoString)
              default: throw Error()
            }
          }
        }
      }
    }
    else {
      switch (isoString.length) {
        case 11: // 20151124T21 || 2015W114T21
          return new Hour(isoString)
        case 13: // 20151124T2115 || 2015W114T2115
          return new Minute(isoString)
        case 15: // 20151124T211542 || 2015W114T211542
          return new Second(isoString)
        case 19: // 20151124T211542.123 || 2015W114T211542.123
          return new Millisecond(isoString)
        default: throw Error()
      }
    }
  }

  // Week date
  if (isoString.includes('W')) {
    // 2015-W37-5
    if (isoString.length === 10) return new WeekDay(isoString)

    // 2015-W37
    if (isoString.length === 8) return new Week(isoString)
  }

  // Only year
  if (isoString.length === 4) return new Year(isoString)
  if (isoString.length === 3) return new Decade(isoString)
  if (isoString.length === 2) return new Century(isoString)
  if (isoString.length === 1) return new Millennium(isoString)

  if (isoString.includes('-')) {
    // 2015-11-24
    if (isoString.length === 10) return new Day(isoString)

    // 2015-328
    if (isoString.length === 8) return new OrdinalDay(isoString)

    // 2015-11
    return new Month(isoString)
  }

  if (isoString.length === 6) return new Month(isoString)
  if (isoString.length === 8) return new Day(isoString)

  throw invalidError
}
