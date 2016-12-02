import Instant from './classes/Instant'

export default function (instant, duration) {
  const clone = new Instant(instant)

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
