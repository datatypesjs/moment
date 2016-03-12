import zpad from 'zpad'

import Day from './Day'


export default class Hour extends Day {

	constructor (isoString) {
		console.assert(/T[0-9]{2}Z?$/i.test(isoString))

		const fragments = isoString.split('T')
		const hour = Number(fragments.pop().replace('Z', ''))

		super(fragments[0])

		console.assert(0 <= hour && hour <= 24)
		this._hour = hour
	}

	clone () {
		return new Hour(this.string)
	}


	set hour (hour) {
		this._hour = hour
		this._isoString = null
		return this
	}
	setHour (hour) {
		this.hour = hour
		return this
	}

	get hour () {
		return this._hour
	}

	get hourString () {
		return zpad(this.hour, 2)
	}

	get string () {
		if (!this._isoString) {
			this._isoString = super.string + 'T' + this.hourString + 'Z'
		}

		return this._isoString
	}

	toString () {
		return this.string
	}
}
