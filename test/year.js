import runTest from 'ava'
import expect from 'unexpected'

import moment from '../source/index'
import Instant from '../source/classes/Instant'
import Year from '../source/classes/Year'


runTest('2015', test => {
	const year = new Year(test.title)
	const yearObject = {
		string: test.title,
		lowerLimit: new Instant('2015-01-01T00:00:00.000Z'),
		upperLimit: new Instant('2016-01-01T00:00:00.000Z'),
	}

	expect(year.object, 'to equal', yearObject)
	expect(moment(test.title).object, 'to equal', yearObject)
})
