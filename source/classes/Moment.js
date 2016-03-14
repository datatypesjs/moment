import Instant from './Instant'
import Duration from '@datatypes/duration'
import * as startOf from '../startOf'
import addDurationToInstant from '../addDurationToInstant'
import precisionToDuration from '../precisionToDuration'


export default class Moment {

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

	maximumOffset (moment) {
		let milliseconds

		// If offset moment is after current moment
		if (moment.lowerLimit > this.lowerLimit) {
			milliseconds = moment.upperLimit - this.lowerLimit
		}
		else {
			milliseconds = this.upperLimit - moment.lowerLimit
		}

		return new Duration()
			.setMilliseconds(milliseconds)
			.normalize()
	}

	isBefore (moment) {
		return this.lowerLimit < moment.lowerLimit
	}

	isAfter (moment) {
		return moment.lowerLimit < this.lowerLimit
	}

	isSimultaneous (moment) {
		return (+moment.lowerLimit === +this.lowerLimit) &&
			(+moment.upperLimit === +this.upperLimit)
	}

	get string () {
		if (!this._isoString) {
			this._isoString = this.string
		}

		return this._isoString
	}
	get isoString () { return this.string }
	toString () { return this.string }
	toJSON () { return this.string }

	get intervalString () {
		return this.lowerLimit.toISOString() +
			'--' +
			this.upperLimit.toISOString()
	}

	get duration () {
		return new Duration()
			.setMilliseconds(this.upperLimit - this.lowerLimit)
			.normalize()
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
