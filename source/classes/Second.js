import zpad from 'zpad'

import Minute from './Minute'


export default class Second extends Minute {

	constructor (isoString) {
		console.assert(/:[0-9]{2}Z?$/i.test(isoString))

		const fragments = isoString.split(':')
		const second = Number(fragments.pop().replace('Z', ''))

		super(fragments.join(':'))

		console.assert(0 <= second && second < 60)
		this._second = second
	}

	clone () {
		return new Second(this.string)
	}


	set second (second) {
		this._second = second
		this._isoString = null
		return this
	}
	setSecond (second) {
		this.second = second
		return this
	}

	get second () {
		return this._second
	}

	get secondString () {
		return zpad(this.second, 2)
	}

	get string () {
		if (!this._isoString) {
			this._isoString = this._isoString = super.string
					.replace('Z', ':' + this.secondString + 'Z')
		}

		return this._isoString
	}

	toString () {
		return this.string
	}
}
