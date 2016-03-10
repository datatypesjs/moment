import runTest from 'ava'
import expect from 'unexpected'

import moment from '../build/index'
import Instant from '../build/Instant'
import Hour from '../build/Hour'


runTest('2015-11-24T21', test => {
	const hour = new Hour(test.title)
	const hourObject = {
		string: test.title + 'Z',
		lowerLimit: new Instant('2015-11-24T21:00Z'),
		upperLimit: new Instant('2015-11-24T22:00Z'),
	}

	expect(hour.object, 'to equal', hourObject)
	expect(moment(test.title).object, 'to equal', hourObject)
})
