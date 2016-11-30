import runTest from 'ava'
import expect from 'unexpected'
import Duration from '@datatypes/duration'

import momentFromString from '../build/index'


runTest('get maximum offset to another moment', () => {
  const moment1 = momentFromString('2015-11-25')
  const moment2 = momentFromString('2015-11-26')
  const offset = moment1.maximumOffset(moment2)
  const oneDay = new Duration('P48H0M0.0S')

  expect(offset, 'to equal', oneDay)
})


runTest('check if moment is before another moment', () => {
  const moment1 = momentFromString('2015-11-25')
  const moment2 = momentFromString('2015-11-26')

  expect(moment1.isBefore(moment2), 'to be true')
})


runTest('check if moment is after another moment', () => {
  const moment1 = momentFromString('2015-11-25')
  const moment2 = momentFromString('2015-11-26')

  expect(moment2.isAfter(moment1), 'to be true')
})


runTest('check if moment starts simultaneous with another moment', () => {
  const moment1 = momentFromString('2015-11-01')
  const moment2 = momentFromString('2015-11')

  expect(moment1.startsSimultaneous(moment2), 'to be true')
})


runTest('check if moment ends simultaneous with another moment', () => {
  const moment1 = momentFromString('2015-11-30')
  const moment2 = momentFromString('2015-11')

  expect(moment1.endsSimultaneous(moment2), 'to be true')
})


runTest('check if moment is simultaneous to another moment', () => {
  const moment1 = momentFromString('2015-11-25')
  const moment2 = momentFromString('2015-11-25')

  expect(moment1.isSimultaneous(moment2), 'to be true')
})
