import Duration from './Duration.js'
import addDurationToDate from './addDurationToDate.js'
import parseDateTime from './parseDateTime.js'
import parseDate from './parseDate.js'
import parseTime from './parseTime.js'
import splitString from './splitString.js'
import precisionToDuration from './precisionToDuration.js'


export default class Hour {
	constructor (timeString) {
		if (!timeString) {
			let startDate = new Date()

			this.type = 'moment'
			this.timeString = startDate.toISOString()
			this.lowerLimit = startDate,
			this.upperLimit = addDurationToDate(startDate, 'P0.001S'),
			this.precision = 'ms'
		}
		else {
			let intervalSeparator = (timeString.includes('--') ? '--' : '/')
			let dateTimeSeparator = (timeString.includes(' ') ? ' ' : 'T')
			let items

			this.timeString = timeString

			if (timeString.startsWith('R')) {
				this.type = 'repetition'
				items = splitString(timeString, intervalSeparator)
				this.numberOfRepetitions = items[0].substr(1)
				this.timeInterval = items[1]
			}

			else if (items = splitString(timeString, intervalSeparator)) {
				this.type = 'period'
				this.start = parseDateTime(items[0])
				this.end = parseDateTime(items[1])
			}

			else {
				this.type = 'moment'
				let datetime = parseDateTime(timeString)
				this.precision = datetime.precision
				this.lowerLimit = new Date(this.timeString)
				this.upperLimit = addDurationToDate(
					this.lowerLimit,
					precisionToDuration(datetime.precision)
				)
			}
		}
	}

	toObject () {
		let returnObject

		if (this.type === 'moment') {
			returnObject = {
				type: this.type,
				string: this.timeString,
				precision: this.precision,
			}

			if (this.lowerLimit)
				returnObject.lowerLimit = this.lowerLimit

			if (this.upperLimit)
				returnObject.upperLimit = this.upperLimit
		}
		else if (this.type === 'period') {
			returnObject = {
				type: this.type,
				string: this.timeString,
				start: {
					precision: this.start.precision
				},
				end: {
					precision: this.end.precision
				}
			}

			if (this.start.lowerLimit)
				returnObject.start.lowerLimit = this.start.lowerLimit

			if (this.start.upperLimit)
				returnObject.start.upperLimit = this.start.upperLimit

			if (this.end.lowerLimit)
				returnObject.end.lowerLimit = this.end.lowerLimit

			if (this.end.upperLimit)
				returnObject.end.upperLimit = this.end.upperLimit
		}

		return returnObject
	}

	toString () {
		return this.timeString
	}
}