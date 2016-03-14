import zpad from 'zpad'

import Second from './Second'


export default class Millisecond extends Second {

	constructor (isoString) {
		console.assert(
			/\.[0-9]+Z?$/i.test(isoString),
			'The provided argument must be valid millisecond string ' +
			'and not ' + isoString
		)

		const fragments = isoString.split('.')
		const digits = fragments.pop().replace('Z', '')
		const millisecond = Number('0.' + digits) * 1000

		super(fragments.join('.'))

		console.assert(
			0 <= millisecond && millisecond < 1000,
			'Millisecond must be in range [0,1000[ and not ' + millisecond
		)
		this._millisecond = millisecond
	}

	clone () {
		return new Millisecond(this.string)
	}

	set millisecond (millisecond) {
		delete this._isoString
		this._millisecond = millisecond
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
