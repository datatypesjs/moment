import zpad from 'zpad'

import addDurationToInstant from './addDurationToInstant'
import precisionToDuration from './precisionToDuration'
import Instant from './Instant'
import Moment from './Moment'


export default class Year extends Moment {
	constructor (year) {
		super()
		year = Number(year)
		console.assert(0 <= year && year <= 9999)
		this._year = year
	}


	set year (year) {
		this._year = year
		this._yearString = null
		this._isoString = null
		return this
	}
	setYear (year) {
		this.year = year
		return this
	}


	get year () {
		return this._year
	}

	get yearString () {
		return zpad(this.year, 2)
	}

	get string () {
		if (!this._isoString) {
			this._isoString = this.yearString
		}
		return this._isoString
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
