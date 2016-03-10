import runTest from 'ava'
import expect from 'unexpected'

import moment from '../build/index'
import Instant from '../build/Instant'
import Month from '../build/Month'


runTest('2015-11', test => {
	const month = new Month(test.title)
	const monthObject = {
		string: test.title,
		lowerLimit: new Instant('2015-11-01T00:00:00.000Z'),
		upperLimit: new Instant('2015-12-01T00:00:00.000Z'),
	}

	expect(month.object, 'to equal', monthObject)
	expect(moment(test.title).object, 'to equal', monthObject)
})
