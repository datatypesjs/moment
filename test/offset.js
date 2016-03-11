import runTest from 'ava'
import expect from 'unexpected'
import Duration from '@datatypes/duration'

import momentFromString, {add, subtract} from '../source/index'
import Instant from '../source/classes/Instant'


runTest('get maximum offset to another moment', test => {
	const moment1 = momentFromString('2015-11-25')
	const moment2 = momentFromString('2015-11-26')
	const offset = moment1.maximumOffset(moment2)
	const oneDay = new Duration('P48H0M0.0S')

	expect(offset, 'to equal', oneDay)
})
