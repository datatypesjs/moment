import Instant from './Instant'
import * as startOf from '../startOf'
import addDurationToInstant from '../addDurationToInstant'
import precisionToDuration from '../precisionToDuration'


export default class Moment {

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

	// TODO: Re-add when native es2015 support arrives
	// add (duration) {}
	// subtract (duration) {}


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

	get lowerLimit () {
		return new Instant(this.string)
	}

	get upperLimit () {
		return addDurationToInstant(
			this.lowerLimit,
			precisionToDuration(this.constructor.name)
		)
	}
}
