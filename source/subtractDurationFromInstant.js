import assert from 'assert'

import Duration from '@datatypes/duration'
import Instant from './classes/Instant'


export default function (instant, duration) {
  assert(
    instant instanceof Instant,
    instant + ' is not an instance of class "Instant"'
  )
  assert(
    duration instanceof Duration,
    duration + ' is not an instance of class "Duration"'
  )

  const clone = new Instant(instant.toJSON())

  if (duration.milliseconds) {
    clone.setUTCMilliseconds(
      clone.getUTCMilliseconds() - duration.milliseconds
    )
  }
  if (duration.seconds) {
    clone.setUTCSeconds(clone.getUTCSeconds() - duration.seconds)
  }
  if (duration.minutes) {
    clone.setUTCMinutes(clone.getUTCMinutes() - duration.minutes)
  }
  if (duration.hours) {
    clone.setUTCHours(clone.getUTCHours() - duration.hours)
  }
  if (duration.days) {
    clone.setUTCDate(clone.getUTCDate() - duration.days)
  }
  if (duration.weeks) {
    clone.setUTCDate(clone.getUTCDate() - (duration.weeks * 7))
  }
  if (duration.months) {
    clone.setUTCMonth(clone.getUTCMonth() - duration.months)
  }
  if (duration.years) {
    clone.setUTCFullYear(clone.getUTCFullYear() - duration.years)
  }

  return clone
}
