import runTest from 'ava'
import expect from 'unexpected'

import Instant from '../build/Instant'
import Day from '../build/Day'


runTest('2015-11-24', test => {
	expect(
		new Day(test.title).object,
		'to equal',
		{
			string: test.title,
			lowerLimit: new Instant('2015-11-24T00:00:00.000Z'),
			upperLimit: new Instant('2015-11-25T00:00:00.000Z')
		}
	)
})

runTest.skip('2015-W48-2', test => {
	expect(
		new Day(test.title).object,
		'to equal',
		{
			string: '2015-11-24',
			lowerLimit: new Instant('2015-11-24T00:00:00.000Z'),
			upperLimit: new Instant('2015-11-25T00:00:00.000Z')
		}
	)
})

runTest.skip('2015-328', test => {
	expect(
		new Day(test.title).object,
		'to equal',
		{
			string: '2015-11-24',
			lowerLimit: new Instant('2015-11-24T00:00:00.000Z'),
			upperLimit: new Instant('2015-11-25T00:00:00.000Z')
		}
	)
})
