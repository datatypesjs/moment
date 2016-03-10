import runTest from 'ava'
import expect from 'unexpected'

import moment from '../build/index'
import Instant from '../build/Instant'
import Second from '../build/Second'


runTest('2015-11-24T21:15:42', test => {
	const second = new Second(test.title)
	const secondObject = {
		string: test.title + 'Z',
		lowerLimit: new Instant(test.title),
		upperLimit: new Instant('2015-11-24T21:15:43'),
	}

	expect(second.object, 'to equal', secondObject)
	expect(moment(test.title).object, 'to equal', secondObject)
})