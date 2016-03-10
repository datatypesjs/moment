import runTest from 'ava'
import expect from 'unexpected'

import moment from '../source/index'
import Instant from '../source/classes/Instant'
import Minute from '../source/classes/Minute'


runTest('2015-11-24T21:15', test => {
	const minute = new Minute(test.title)
	const minuteObject = {
		string: test.title + 'Z',
		lowerLimit: new Instant(test.title),
		upperLimit: new Instant('2015-11-24T21:16'),
	}

	expect(minute.object, 'to equal', minuteObject)
	expect(moment(test.title).object, 'to equal', minuteObject)
})

runTest.skip('2015-11-24T21.25', test => {
	expect(
		new Minute(test.title).object,
		'to equal',
		{
			string: '2015-11-24T21:15',
			lowerLimit: new Instant('2015-11-24T21:15'),
			upperLimit: new Instant('2015-11-24T21:16'),
		}
	)
})
