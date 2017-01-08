import 'babel-polyfill'

import moment from '..'

export default class Instant extends Date {
  constructor () {
    if (arguments.length === 1) {
      arguments[0] = typeof arguments[0].toISOString === 'function'
        ? arguments[0].toISOString()
        : String(arguments[0])

      // Correctly handle moments larger than a decade
      if (arguments[0].length < 4 && !/(-|:)/.test(arguments[0])) {
        arguments[0] = arguments[0].padEnd(4, '0')
      }
      else if (/^\d{4}-\d{2}-\d{2}T/i.test(arguments[0])) {
        // 2015-11-24T21 => 2015-11-24T21:00Z
        if (/T\d{2}Z?$/i.test(arguments[0])) {
          arguments[0] = arguments[0].replace(/Z?$/i, ':00Z')
        }
        // 2015-11-24T2115 => 2015-11-24T21:15Z
        else if (/T\d{4}Z?$/i.test(arguments[0])) {
          arguments[0] = arguments[0].replace(/(\d{2})Z?$/i, ':$1Z')
        }
        // 2015-11-24T211542 => 2015-11-24T21:15:42Z
        else if (/T\d{6}Z?$/i.test(arguments[0])) {
          arguments[0] = arguments[0].replace(/(\d{2})(\d{2})Z?$/i, ':$1:$2Z')
        }
        // 2015-11-24T211542123 => 2015-11-24T21:15:42.123Z
        else if (/T\d{9}Z?$/i.test(arguments[0])) {
          arguments[0] = arguments[0]
            .replace(/(\d{2})(\d{2})(\d{3})Z?$/i, ':$1:$2.$3Z')
        }
        // 2015-11-24T211542.123 => 2015-11-24T21:15:42.123Z
        else if (/T\d{6}.\d{3}Z?$/i.test(arguments[0])) {
          arguments[0] = arguments[0]
            .replace(/(\d{2})(\d{2}).(\d{3})Z?$/i, ':$1:$2.$3Z')
        }
      }
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
