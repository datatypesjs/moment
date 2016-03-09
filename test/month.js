import runTest from 'ava'
import expect from 'unexpected'

import Instant from '../build/Instant'
import Month from '../build/Month'


runTest('2015-11', test => {
	expect(
		new Month(test.title).object,
		'to equal',
		{
			string: test.title,
			lowerLimit: new Instant('2015-11-01T00:00:00.000Z'),
			upperLimit: new Instant('2015-12-01T00:00:00.000Z'),
		}
	)
})
