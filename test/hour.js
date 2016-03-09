import runTest from 'ava'
import expect from 'unexpected'

import Instant from '../build/Instant'
import Hour from '../build/Hour'


runTest('2015-11-24T21', test => {
	expect(
		new Hour(test.title).object,
		'to equal',
		{
			string: test.title + 'Z',
			lowerLimit: new Instant('2015-11-24T21:00Z'),
			upperLimit: new Instant('2015-11-24T22:00Z'),
		},
	)
})
