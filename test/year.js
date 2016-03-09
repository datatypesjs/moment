import runTest from 'ava'
import expect from 'unexpected'

import Instant from '../build/Instant'
import Year from '../build/Year'


runTest('2015', test => {
	expect(
		new Year(test.title).object,
		'to equal',
		{
			string: test.title,
			lowerLimit: new Instant('2015-01-01T00:00:00.000Z'),
			upperLimit: new Instant('2016-01-01T00:00:00.000Z'),
		}
	)
})
