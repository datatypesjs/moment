import zpad from 'zpad'

import Second from './Second'


export default class Millisecond extends Second {

	constructor (isoString) {
		const fragments = isoString.split('.')
		const millisecond = Number(fragments.pop())

		super(fragments.join('.'))

		console.assert(
			0 <= millisecond && millisecond < 1000,
			'Millisecond must be in range [0,1000[ and not ' + millisecond
		)
		this._millisecond = millisecond
	}

	set millisecond (millisecond) {
		this._millisecond = millisecond
		this._isoString = null
		return this
	}
	setMillisecond (millisecond) {
		this.millisecond = millisecond
		return this
	}

	get millisecond () {
		return this._millisecond
	}

	get millisecondString () {
		return zpad(this.millisecond, 3)
	}

	get string () {
		if (!this._isoString) {
			this._isoString = super.string
				.replace('Z', '.' + this.millisecondString + 'Z')
		}

		return this._isoString
	}

	toString () {
		return this.string
	}
}
