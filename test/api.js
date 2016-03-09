import runTest from 'ava'
import expect from 'unexpected'

import Minute from '../build/Minute'
import Day from '../build/Day'
import Millisecond from '../build/Millisecond'


runTest('set & get year', test => {
	const moment = new Minute('2015-11-24T18:00')
	moment.setYear(1995)
	expect(moment.year, 'to equal', 1995)
	moment.year = 1998
	expect(moment.year, 'to equal', 1998)
})


runTest('set & get month', test => {
	const moment = new Minute('2015-11-24T18:00')
	moment.setMonth(9)
	expect(moment.month, 'to equal', 9)
	moment.month = 10
	expect(moment.month, 'to equal', 10)
})


runTest('set & get day', test => {
	const moment = new Minute('2015-11-24T18:00')
	moment.setDay(22)
	expect(moment.day, 'to equal', 22)
	moment.day = 23
	expect(moment.day, 'to equal', 23)
})


runTest('set & get hour', test => {
	const moment = new Minute('2015-11-24T18:00')
	moment.setHour(12)
	expect(moment.hour, 'to equal', 12)
	moment.hour = 17
	expect(moment.hour, 'to equal', 17)
})

runTest('set & get minute', test => {
	const moment = new Minute('2015-11-24T18:00')
	moment.setMinute(45)
	expect(moment.minute, 'to equal', 45)
	moment.minute = 50
	expect(moment.minute, 'to equal', 50)
})

runTest('set & get second', test => {
	const moment = new Millisecond('2015-11-24T18:00:00.000')
	moment.setSecond(45)
	expect(moment.second, 'to equal', 45)
	moment.second = 50
	expect(moment.second, 'to equal', 50)
})

runTest('set & get millisecond', test => {
	const moment = new Millisecond('2015-11-24T18:00:00.000')
	moment.setMillisecond(700)
	expect(moment.millisecond, 'to equal', 700)
	moment.millisecond = 800
	expect(moment.millisecond, 'to equal', 800)
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
