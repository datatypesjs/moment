import Instant from './Instant'
import Duration from '@datatypes/duration'
import * as startOf from '../startOf'
import * as endOf from '../endOf'
import addDurationToInstant from '../addDurationToInstant'
import precisionToDuration from '../precisionToDuration'


export default class Moment {

	startOfYear ()		{ startOf.year(this); return this }
	startOfMonth ()		{ startOf.month(this); return this }
	startOfWeek ()		{ startOf.week(this); return this }
	startOfDay ()		{ startOf.day(this); return this }
	startOfHour ()		{ startOf.hour(this); return this }
	startOfMinute ()	{ startOf.minute(this); return this }
	startOfSecond ()	{ startOf.second(this); return this }

	endOfYear ()	{ endOf.year(this); return this }
	endOfMonth ()	{ endOf.month(this); return this }
	endOfWeek ()	{ endOf.week(this); return this }
	endOfDay ()		{ endOf.day(this); return this }
	endOfHour ()	{ endOf.hour(this); return this }
	endOfMinute ()	{ endOf.minute(this); return this }
	endOfSecond ()	{ endOf.second(this); return this }

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

	startsSimultaneous (moment) {
		return +moment.lowerLimit === +this.lowerLimit
	}

	endsSimultaneous (moment) {
		return +moment.upperLimit === +this.upperLimit
	}

	isSimultaneous (moment) {
		return this.startsSimultaneous(moment) &&
			this.endsSimultaneous(moment)
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
