import runTest from 'ava'
import expect from 'unexpected'

import Instant from '../build/Instant'
import Millisecond from '../build/Millisecond'

runTest('2015-11-24T21:15:42.123', test => {
	expect(
		new Millisecond(test.title).object,
		'to equal',
		{
			string: test.title + 'Z',
			lowerLimit: new Instant(test.title),
			upperLimit: new Instant('2015-11-24T21:15:42.124'),
		},
	)
})
