function startOfWeek (date) {
  const clone = new Date(date)
  clone.setUTCDate(
    clone.getUTCDate() - ((clone.getUTCDay() + 6) % 7)
  )
  return clone
}

export function year (object) {
  object.month = 1
  month(object)
}

export function month (object) {
  object.day = 1
  day(object)
}

export function week (object) {
  const date = startOfWeek(object.lowerLimit)
  object.month = date.getUTCMonth() + 1
  object.day = date.getUTCDate()

  day(object)
}

export function day (object) {
  object.hour = 0
  hour(object)
}

export function hour (object) {
  object.minute = 0
  minute(object)
}

export function minute (object) {
  object.second = 0
  second(object)
}

export function second (object) {
  object.millisecond = 0
  delete object._isoString
}
