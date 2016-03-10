import Year from './classes/Year'
import Month from './classes/Month'
import Day from './classes/Day'
import Hour from './classes/Hour'
import Minute from './classes/Minute'
import Second from './classes/Second'
import Millisecond from './classes/Millisecond'


export default (isoString) => {

	isoString = String(isoString)
		.toUpperCase()
		.replace('Z', '')

	const invalidError = new Error(isoString + ' is no valid ISO string')

	// Date time
	if (isoString.includes('T')) {
		if (isoString.includes('-')) {
			// 2015-11-24T21:15:42.123 || 2015-W11-4T21:15:42.123
			if (isoString.length === 23) return new Millisecond(isoString)
			// 2015-11-24T21:15:42 || 2015-W11-4T21:15:42
			if (isoString.length === 19) return new Second(isoString)
			// 2015-11-24T21:15 || 2015-W11-4T21:15
			if (isoString.length === 16) return new Minute(isoString)
			// 2015-11-24T21 || 2015-W11-4T21
			if (isoString.length === 13) return new Hour(isoString)
		}
		else {
			// 20151124T211542.123 || 2015W114T211542.123
			if (isoString.length === 19) return new Millisecond(isoString)
			// 20151124T211542 || 2015W114T211542
			if (isoString.length === 15) return new Second(isoString)
			// 20151124T2115 || 2015W114T2115
			if (isoString.length === 13) return new Minute(isoString)
			// 20151124T21 || 2015W114T21
			if (isoString.length === 11) return new Hour(isoString)
		}

		throw invalidError
	}

	// Week date
	if (isoString.includes('W')) {
		// 2015-W37
		if (isoString.length === 8) {
			return new Week(isoString)
		}
		// 2015-W37-5
		if (isoString.length === 10) {
			return new Day(isoString)
		}
	}

	// Only year
	if (isoString.length === 4) {
		return new Year(isoString)
	}

	if (isoString.includes('-')) {
		// ordinal date
		if (isoString.length === 8) {

		}
		return (isoString.length === 10) ?
			new Day(isoString) :
			new Month(isoString)
	}
	else {
		if (isoString.length === 6) return new Month(isoString)
		if (isoString.length === 8) return new Day(isoString)
	}

	throw invalidError
}
