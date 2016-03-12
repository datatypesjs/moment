import zpad from 'zpad'

import Hour from './Hour'


export default class Minute extends Hour {

	constructor (isoString) {
		console.assert(/:[0-9]{2}Z?$/i.test(isoString))

		const fragments = isoString.split(':')
		const minute = Number(fragments.pop().replace('Z'))

		super(fragments.join(':'))

		console.assert(0 <= minute && minute < 60)
		this._minute = minute
	}


	set minute (minute) {
		this._minute = minute
		this._isoString = null
		return this
	}
	setMinute (minute) {
		this.minute = minute
		return this
	}

	get minute () {
		return this._minute
	}

	get minuteString () {
		return zpad(this.minute, 2)
	}

	get string () {
		if (!this._isoString) {
			this._isoString = super.string
				.replace('Z', ':' + this.minuteString + 'Z')
		}

		return this._isoString
	}

	toString () {
		return this.string
	}
}
