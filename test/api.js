import runTest from 'ava'
import expect from 'unexpected'
import Duration from '@datatypes/duration'

import {
  Moment, Year, Month, Day,
  Hour, Minute, Second, Millisecond,
} from '..'


runTest('instantiate moment', () => {
  const moment = new Moment()
  expect(moment.constructor, 'to equal', Moment)
})

runTest('clone', () => {
  /* eslint-disable newline-per-chained-call */
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
  /* eslint-enable newline-per-chained-call */
})

runTest('toJSON', () => {
  const day = new Day('2015-11-24')
  expect(
    JSON.stringify({day: day}),
    'to equal',
    '{"day":"2015-11-24"}'
  )
})

runTest('toString', () => {
  const day = new Day('2015-11-24')
  expect('test ' + day, 'to equal', 'test 2015-11-24')
})

runTest('interval string', () => {
  const day = new Day('2015-11-24')
  expect(
    day.intervalString,
    'to equal',
    '2015-11-24T00:00:00.000Z--2015-11-25T00:00:00.000Z'
  )

  const minute = new Minute('2015-11-24T17:34')
  expect(
    minute.intervalString,
    'to equal',
    '2015-11-24T17:34:00.000Z--2015-11-24T17:35:00.000Z'
  )
})

runTest('duration', () => {
  const day = new Day('2015-11-24')
  expect(day.duration, 'to equal', new Duration('P24H0M0.0S'))
})
