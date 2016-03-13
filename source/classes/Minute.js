import zpad from 'zpad'

import Hour from './Hour'


export default class Minute extends Hour {

	constructor (isoString) {
		const pattern = /:?([0-5][0-9])(?:\.([0-9]+))?Z?$/i
		const matches = isoString.match(pattern)

		if (!matches) {
			throw new Error(
				'The provided argument must be valid minute string ' +
				'and not ' + isoString
			)
		}

		const minute = matches[1]
		const minuteFraction = matches[2]

		super(isoString.replace(pattern, ''))

		this._minute = minute
	}

	clone () {
		return new Minute(this.string)
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
