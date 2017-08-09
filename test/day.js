import runTest from 'ava'
import expect from 'unexpected'

import momentFromString from '../build'
import Instant from '../build/classes/Instant'
import Day from '../build/classes/Day'
import WeekDay from '../source/classes/WeekDay'
import OrdinalDay from '../source/classes/OrdinalDay'


runTest('2015-11-24', test => {
  const day = new Day(test.title)
  const dayObject = {
    string: test.title,
    lowerLimit: new Instant('2015-11-24T00:00:00.000Z'),
    upperLimit: new Instant('2015-11-25T00:00:00.000Z'),
  }

  expect(day.object, 'to equal', dayObject)
  expect(momentFromString(test.title).object, 'to equal', dayObject)
})


runTest('2015-W48-2', test => {
  expect(
    new WeekDay(test.title).object,
    'to equal',
    {
      string: test.title,
      lowerLimit: new Instant('2015-11-24T00:00:00.000Z'),
      upperLimit: new Instant('2015-11-25T00:00:00.000Z'),
    }
  )
})

runTest('2016-W52-7', test => {
  expect(
    new WeekDay(test.title).object,
    'to equal',
    {
      string: test.title,
      lowerLimit: new Instant('2017-01-01T00:00:00.000Z'),
      upperLimit: new Instant('2017-01-02T00:00:00.000Z'),
    }
  )
})

runTest('2015-001', test => {
  expect(
    new OrdinalDay(test.title).object,
    'to equal',
    {
      string: test.title,
      lowerLimit: new Instant('2015-01-01T00:00:00.000Z'),
      upperLimit: new Instant('2015-01-02T00:00:00.000Z'),
    }
  )
})

runTest('2015-328', test => {
  expect(
    new OrdinalDay(test.title).object,
    'to equal',
    {
      string: test.title,
      lowerLimit: new Instant('2015-11-24T00:00:00.000Z'),
      upperLimit: new Instant('2015-11-25T00:00:00.000Z'),
    }
  )
})
