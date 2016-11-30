import runTest from 'ava'
import expect from 'unexpected'

import moment from '../build/index'
import Instant from '../build/classes/Instant'
import Day from '../build/classes/Day'


runTest('2015-11-24', test => {
  const day = new Day(test.title)
  const dayObject = {
    string: test.title,
    lowerLimit: new Instant('2015-11-24T00:00:00.000Z'),
    upperLimit: new Instant('2015-11-25T00:00:00.000Z'),
  }

  expect(day.object, 'to equal', dayObject)
  expect(moment(test.title).object, 'to equal', dayObject)
})

runTest.skip('2015-W48-2', test => {
  expect(
    new Day(test.title).object,
    'to equal',
    {
      string: '2015-11-24',
      lowerLimit: new Instant('2015-11-24T00:00:00.000Z'),
      upperLimit: new Instant('2015-11-25T00:00:00.000Z'),
    }
  )
})

runTest.skip('2015-328', test => {
  expect(
    new Day(test.title).object,
    'to equal',
    {
      string: '2015-11-24',
      lowerLimit: new Instant('2015-11-24T00:00:00.000Z'),
      upperLimit: new Instant('2015-11-25T00:00:00.000Z'),
    }
  )
})
