import runTest from 'ava'
import expect from 'unexpected'
import Duration from '@datatypes/duration'

import momentFromString, {add, subtract} from '../source/index'
import Instant from '../source/classes/Instant'


runTest('add duration to moment', test => {
	const moment = momentFromString('2015-11-25')
	const oneHour = new Duration('P1H')
	const newMoment = add(moment, oneHour)
	const newMomentObject = {
		string: '2015-11-25T01Z',
		lowerLimit: new Instant('2015-11-25T01'),
		upperLimit: new Instant('2015-11-25T02'),
	}

	expect(newMoment.object, 'to equal', newMomentObject)
})


runTest('subtract duration from moment', test => {
	const moment = momentFromString('2015-11-25')
	const oneHour = new Duration('P1H')
	const newMoment = subtract(moment, oneHour)
	const newMomentObject = {
		string: '2015-11-24T23Z',
		lowerLimit: new Instant('2015-11-24T23'),
		upperLimit: new Instant('2015-11-25T00'),
	}

	expect(newMoment.object, 'to equal', newMomentObject)
})
