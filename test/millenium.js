import runTest from 'ava'
import expect from 'unexpected'

import momentFromString from '../source'
import Instant from '../source/classes/Instant'
import Millennium from '../source/classes/Millennium'

runTest('2', test => {
  const millennium = new Millennium(test.title)
  const millenniumObject = {
    string: test.title,
    lowerLimit: new Instant('2000-01-01T00:00:00.000Z'),
    upperLimit: new Instant('3000-01-01T00:00:00.000Z'),
  }
  expect(millennium.object, 'to equal', millenniumObject)
  expect(momentFromString(test.title).object, 'to equal', millenniumObject)
})
