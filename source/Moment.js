import addDurationToInstant from './addDurationToInstant'
import splitString from './splitString'
import precisionToDuration from './precisionToDuration'
import * as startOf from './startOf'


export default class Moment {
	constructor () {
		// if (!isoString) {
		// 	let startInstant = new Instant()
		// 	this._dateTime = new DateTime(startInstant.toISOString())
		// }
		// else {
		// 	this._isoString = isoString.replace(' ', 'T')
		//
		// 	if (/[^\d-T:.]/i.test(this._isoString)) {
		// 		throw new Error('ISO string "' + this._isoString +
		// 			'" contains illegal characters')
		// 	}
		//
		// 	if (isoString.includes('T')) {
		// 		return new DateTime(isoString)
		// 	}
		// 	else {
		// 		return new Date(isoString)
		// 	}
		// }
	}

	clone () {
		return new Moment(this.isoString)
	}

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
			this._isoString = this.string
		}

		return this._isoString
	}

	toString () {
		return this.isoString
	}
	toJSON () {
		return this.isoString
	}

	get object () {
		return {
			string: this.string,
			lowerLimit: this.lowerLimit,
			upperLimit: this.upperLimit,
		}
	}

	toObject () {
		return this.object
	}
}
