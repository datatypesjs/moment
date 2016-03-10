import zpad from 'zpad'

import Day from './Day'


export default class Hour extends Day {

	constructor (isoString) {
		const fragments = isoString.split('T')
		const hour = Number(fragments.pop())

		super(fragments[0])

		console.assert(0 <= hour && hour <= 24)
		this._hour = hour
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
