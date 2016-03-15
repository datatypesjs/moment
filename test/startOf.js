import runTest from 'ava'
import expect from 'unexpected'

import Millisecond from '../source/classes/Millisecond'
import Day from '../source/classes/Day'

const unitToIsoString = {
	// TODO: Implement
	// millenium: '2000-00-00T00:00:00.000Z',
	// century: '2100-00-00T00:00:00.000Z',
	// decade: '2110-00-00T00:00:00.000Z',
	year: '2115-01-01T00:00:00.000Z',
	month: '2115-11-01T00:00:00.000Z',
	week: '2115-11-18T00:00:00.000Z',
	day: '2115-11-24T00:00:00.000Z',
	hour: '2115-11-24T18:00:00.000Z',
	minute: '2115-11-24T18:37:00.000Z',
	second: '2115-11-24T18:37:22.000Z',
}


for (let unit in unitToIsoString) {
	runTest('start of ' + unit, test => {
		const moment = new Millisecond('2115-11-24T18:37:22.345')
		const functionName = 'startOf' +
			unit.slice(0,1).toUpperCase() +
			unit.slice(1)

		if (moment[functionName]) {
			moment[functionName]()
			expect(moment.isoString, 'to equal', unitToIsoString[unit])
		}
	})
}


runTest ('start of week (extended test)', test => {
	const dateToReference = {
		'2016-03-03': '2016-02-29', // Previous month
		'2016-03-06': '2016-02-29', // Sunday to previous month
		'2016-03-07': '2016-03-07', // Monday
		'2016-03-10': '2016-03-07', // Regular weekday
		'2016-03-13': '2016-03-07', // Sunday
	}
	for (let date in dateToReference) {
		expect(
			new Day(date).startOfWeek().isoString,
			'to equal',
			dateToReference[date]
		)
	}
})
