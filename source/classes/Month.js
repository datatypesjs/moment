import zpad from 'zpad'

import addDurationToInstant from '../addDurationToInstant'
import precisionToDuration from '../precisionToDuration'
import Year from './Year.js'


export default class Month extends Year {

	constructor (isoString) {
		console.assert(/-(0[1-9]|1[0-2])$/.test(isoString))

		const fragments = isoString.split('-')
		const month = Number(fragments[1])

		super(fragments[0])

		console.assert(1 <= month && month <= 12)
		this._month = month
	}

	clone () {
		return new Month(this.string)
	}

	set month (month) {
		this._month = month
		this._isoString = null
		return this
	}
	setMonth (month) {
		this.month = month
		return this
	}


	get month () {
		return this._month
	}

	get monthString () {
		return zpad(this.month, 2)
	}

	get string () {
		if (!this._isoString) {
			this._isoString = super.string + '-' + this.monthString
		}
		return this._isoString
	}
}
