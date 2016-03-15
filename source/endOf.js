import monthDays from 'month-days'

export function year (object) {
	object.month = 12
	month(object)
}

export function month (object) {
	object.day = monthDays(object.month, object.year)
	day(object)
}

export function week (object) {
	const lowerLimit = new Date(object.lowerLimit)
	const firstDayOfWeek = lowerLimit.getUTCDate() - lowerLimit.getUTCDay()
	const date = new Date(
		lowerLimit.setUTCDate(firstDayOfWeek.getUTCDate() + 7)
	)
	object.month = date.getUTCMonth() + 1
	object.day = date.getUTCDate()
	day(object)
}

export function day (object) {
	object.hour = 23
	hour(object)
}

export function hour (object) {
	object.minute = 59
	minute(object)
}

export function minute (object) {
	object.second = 59
	second(object)
}

export function second (object) {
	object.millisecond = 999
	delete object._isoString
}
