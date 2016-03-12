import zpad from 'zpad'

import Month from './Month'


export default class Day extends Month {

	constructor (isoString) {
		console.assert(/-(0[1-9]|[12][0-9]|3[01])$/.test(isoString))

		const fragments = isoString.split('-')
		const day = Number(fragments.pop())

		super(fragments.join('-'))

		console.assert(1 <= day && day <= 31)
		this._day = day
	}

	clone () {
		return new Day(this.string)
	}


	set day (day) {
		this._day = day
		this._isoString = null
		return this
	}
	setDay (day) {
		this.day = day
		return this
	}

	get day () {
		return this._day
	}

	get dayString () {
		return zpad(this.day, 2)
	}

	get string () {
		if (!this._isoString) {
			this._isoString = super.string + '-' + this.dayString
		}

		return this._isoString
	}

	toString () {
		return this.string
	}
}
