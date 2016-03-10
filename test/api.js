import runTest from 'ava'
import expect from 'unexpected'

import momentFromString from '../source/index'
import Moment from '../source/classes/Moment'
import Day from '../source/classes/Day'
import Minute from '../source/classes/Minute'
import Millisecond from '../source/classes/Millisecond'


runTest.skip('instantiate moment', test => {
	const moment = new Moment()
	expect(moment, 'to equal', '?')
})

runTest.skip('clone', test => {
	const moment = new Millisecond('2015-11-24T12:00:00.000')
	const clone = moment.clone()
	clone.setHour(18)

	expect(moment.hour, 'to equal', 12)
	expect(clone.hour, 'to equal', 18)
})

runTest('toJSON', test => {
	const day = new Day('2015-11-24')
	expect(
		JSON.stringify({day: day}),
		'to equal',
		'{"day":"2015-11-24"}'
	)
})

runTest('toString', test => {
	const day = new Day('2015-11-24')
	expect('test ' + day, 'to equal', 'test 2015-11-24')
})
