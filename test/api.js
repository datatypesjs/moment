import runTest from 'ava'
import expect from 'unexpected'

import momentFromString, {Moment, Year, Month, Day,
	Hour, Minute, Second, Millisecond} from '../source/index'


runTest('instantiate moment', test => {
	const moment = new Moment()
	expect(moment.constructor, 'to equal', Moment)
})

runTest('clone', test => {
	expect(new Year('2015').clone() instanceof Year, 'to be true')
	expect(new Month('2015-11').clone() instanceof Month, 'to be true')
	expect(new Day('2015-11-12').clone() instanceof Day, 'to be true')
	expect(new Hour('2015-11-12T17').clone() instanceof Hour, 'to be true')
	expect(new Minute('2015-11-12T17:34').clone() instanceof Minute,
		'to be true')
	expect(new Second('2015-11-12T17:34:12').clone() instanceof Second,
		'to be true')
	expect(new Millisecond('2015-11-12T17:34:12.345')
		.clone() instanceof Millisecond, 'to be true')
})

runTest('toJSON', test => {
	const day = new Day('2015-11-24')
	expect(
		JSON.stringify({day: day}),
		'to equal',
		'{"day":"2015-11-24"}'
	)
})

runTest('toString', test => {
	const day = new Day('2015-11-24')
	expect('test ' + day, 'to equal', 'test 2015-11-24')
})
