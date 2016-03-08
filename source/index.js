import Duration from '@datatypes/duration'
import addDurationToDate from './addDurationToDate'
import parseDateTime from './parseDateTime'
import serializeDateTime from './serializeDateTime'
import parseDate from './parseDate'
import parseTime from './parseTime'
import splitString from './splitString'
import precisionToDuration from './precisionToDuration'
import * as startOf from './startOf'


export default class Moment {
	constructor (isoString) {
		if (!isoString) {
			let startDate = new Date()

			this._isoString = startDate.toISOString()
			this._lowerLimit = startDate,
			this._upperLimit = addDurationToDate(
				startDate,
				new Duration('P0.001S')
			),
			this._precision = 'millisecond'
		}
		else {
			this._isoString = isoString
			Object.assign(
				this,
				parseDateTime(isoString)
			)
		}
	}

	clone () {
		return new Moment(this.isoString)
	}


	// Years
	set years (years) {
		this._years = years
		this._isoString = null
		this._dateString = null
		return this
	}
	setYears (years) {
		this.years = years
		return this
	}

	get years () { return this._years }
	getYears () { return this._years }


	// Months
	set months (months) {
		this._months = months
		this._isoString = null
		this._dateString = null
		return this
	}
	setMonths (months) {
		this.months = months
		return this
	}

	get months () { return this._months }
	getMonths () { return this._months }


	// Days
	set days (days) {
		this._days = days
		this._isoString = null
		this._dateString = null
		return this
	}
	setDays (days) {
		this.days = days
		return this
	}

	get days () { return this._days }
	getDays () { return this._days }


	// Hours
	set hours (hours) {
		hours = Number(hours)

		this._hours = hours
		this._isoString = null
		this._timeString = null

		this._lowerLimit.setHours(hours)
		this._upperLimit.setHours(hours)
	}

	setHours (hours) {
		this.hours = hours
		return this
	}

	get hours () { return this._hours }
	getHours () { return this._hours }


	// Minutes
	set minutes (minutes) {
		this._minutes = minutes
		this._isoString = null
		this._timeString = null
		return this
	}
	setMinutes (minutes) {
		this.minutes = minutes
		return this
	}

	get minutes () { return this._minutes }
	getMinutes () { return this._minutes }


	// Seconds
	set seconds (seconds) {
		this._seconds = seconds
		this._isoString = null
		this._timeString = null
		return this
	}
	setSeconds (seconds) {
		this.seconds = seconds
		return this
	}

	get seconds () { return this._seconds }
	getSeconds () { return this._seconds }


	// Milliseconds
	set milliseconds (milliseconds) {
		this._milliseconds = milliseconds
		this._isoString = null
		this._timeString = null
		return this
	}
	setMilliseconds (milliseconds) {
		this.milliseconds = milliseconds
		return this
	}

	get milliseconds () { return this._milliseconds }
	getMilliseconds () { return this._milliseconds }

	get precision () { return this._precision }
	set precision (precision) { this._precision = precision }

	get lowerLimit () { return this._lowerLimit }
	set lowerLimit (lowerLimit) { this._lowerLimit = lowerLimit }

	get upperLimit () { return this._lowerLimit }
	set upperLimit (upperLimit) { this._upperLimit = upperLimit }


	startOfYear ()		{ startOf.year(this); return this }
	startOfMonth ()		{ startOf.month(this); return this }
	startOfDay ()		{ startOf.day(this); return this }
	startOfHour ()		{ startOf.hour(this); return this }
	startOfMinute ()	{ startOf.minute(this); return this }
	startOfSecond ()	{ startOf.second(this); return this }


	get isoString () {
		if (!this._isoString) {
			this._isoString = serializeDateTime(this)
		}

		return this._isoString
	}

	toString () { return this.isoString }


	toObject () {
		const returnObject = {
			type: this.type,
			string: this.isoString,
			precision: this.precision,
		}

		if (this._lowerLimit)
			returnObject.lowerLimit = this._lowerLimit

		if (this._upperLimit)
			returnObject.upperLimit = this._upperLimit

		return returnObject
	}

	toJSON () {
		return this.toObject()
	}
}
