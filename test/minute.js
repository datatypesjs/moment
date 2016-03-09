import runTest from 'ava'
import expect from 'unexpected'

import Instant from '../build/Instant'
import Minute from '../build/Minute'


runTest('2015-11-24T21:15', test => {
	expect(
		new Minute(test.title).object,
		'to equal',
		{
			string: test.title + 'Z',
			lowerLimit: new Instant(test.title),
			upperLimit: new Instant('2015-11-24T21:16'),
		},
	)
})

runTest.skip('2015-11-24T21.25', test => {
	expect(
		new Minute(test.title).object,
		'to equal',
		{
			string: '2015-11-24T21:15',
			lowerLimit: new Instant('2015-11-24T21:15'),
			upperLimit: new Instant('2015-11-24T21:16'),
		}
	)
})
