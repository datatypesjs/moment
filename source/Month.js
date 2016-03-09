import zpad from 'zpad'

import addDurationToInstant from './addDurationToInstant'
import precisionToDuration from './precisionToDuration'
import Year from './Year.js'


export default class Month extends Year {

	constructor (isoString) {
		const fragments = isoString.split('-')
		const year = Number(fragments[0])
		const month = Number(fragments[1])

		super(year)

		console.assert(1 <= month && month <= 12)
		this._month = month
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
