import runTest from 'ava'
import expect from 'unexpected'
import Duration from '@datatypes/duration'

import Instant from '../source/classes/Instant'
import momentFromString, {add} from '../source/index'


runTest('add duration to moment', test => {
	const moment = momentFromString('2015-11-25')
	const oneHour = new Duration('P1H')
	const newMoment = add(moment, oneHour)
	const newMomentObject = {
		string: '2015-11-25T01Z',
		lowerLimit: new Instant('2015-11-25T01'),
		upperLimit: new Instant('2015-11-25T02')
	}

	expect(newMoment.object, 'to equal', newMomentObject)
})
