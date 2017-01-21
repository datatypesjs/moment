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

      // Add dash separators to date section
      const dateMatch = arguments[0].match(/^(\d{4})(\d{2})(\d{2})T/i)
      if (dateMatch) {
        arguments[0] = arguments[0].replace(
          /^\d{8}T/i,
          `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}T`
        )
      }

      // Add colon and dot separators to time section
      if (/^\d{4}-\d{2}-\d{2}T/i.test(arguments[0])) {
        // T21 => T21:00Z
        if (/T\d{2}Z?$/i.test(arguments[0])) {
          arguments[0] = arguments[0].replace(/Z?$/i, ':00Z')
        }
        // T2115 => T21:15Z
        else if (/T\d{4}Z?$/i.test(arguments[0])) {
          arguments[0] = arguments[0].replace(/(\d{2})Z?$/i, ':$1Z')
        }
        // T211542 => T21:15:42Z
        else if (/T\d{6}Z?$/i.test(arguments[0])) {
          arguments[0] = arguments[0].replace(/(\d{2})(\d{2})Z?$/i, ':$1:$2Z')
        }
        // T211542123 => T21:15:42.123Z
        else if (/T\d{9}Z?$/i.test(arguments[0])) {
          arguments[0] = arguments[0]
            .replace(/(\d{2})(\d{2})(\d{3})Z?$/i, ':$1:$2.$3Z')
        }
        // T211542.123 => T21:15:42.123Z
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
