import runTest from 'ava'
import expect from 'unexpected'

import Instant from '../source/classes/Instant'


runTest.skip('20', test => {
	expect(
		new Moment(test.title).toObject(),
		'to equal',
		{
			string: test.title,
			lowerLimit: new Instant('2000-01-01T00:00:00.000Z'),
			upperLimit: new Instant('2100-01-01T00:00:00.000Z'),
			precision: 'century'
		}
	)
})
