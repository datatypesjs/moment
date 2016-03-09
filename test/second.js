import runTest from 'ava'
import expect from 'unexpected'

import Instant from '../build/Instant'
import Second from '../build/Second'


runTest('2015-11-24T21:15:42', test => {
	expect(
		new Second(test.title).object,
		'to equal',
		{
			string: test.title + 'Z',
			lowerLimit: new Instant(test.title),
			upperLimit: new Instant('2015-11-24T21:15:43'),
		},
	)
})
