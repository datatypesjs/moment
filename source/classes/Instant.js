import 'babel-polyfill'
import moment from '../index'

export default class Instant extends Date {
	constructor () {
		if (arguments.length === 1) {
			arguments[0] = String(arguments[0])
		}

		// 2015-11-24T21 => 2015-11-24T21:00Z
		if (/^\d{4}(-\d{2}){2}T\d{2}Z?$/i.test(arguments[0])) {
			arguments[0] = arguments[0].replace(/Z?$/i, ':00Z')
		}

		super(...arguments)
	}

	toMoment () {
		return moment(this.toISOString())
	}
}
