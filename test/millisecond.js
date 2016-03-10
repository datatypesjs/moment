import runTest from 'ava'
import expect from 'unexpected'

import moment from '../source/index'
import Instant from '../source/classes/Instant'
import Millisecond from '../source/classes/Millisecond'

runTest('2015-11-24T21:15:42.123', test => {
	const millisecond = new Millisecond(test.title)
	const millisecondObject = {
		string: test.title + 'Z',
		lowerLimit: new Instant(test.title),
		upperLimit: new Instant('2015-11-24T21:15:42.124'),
	}

	expect(millisecond.object, 'to equal', millisecondObject)
	expect(moment(test.title).object, 'to equal', millisecondObject)
})
