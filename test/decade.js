import runTest from 'ava'
import expect from 'unexpected'

import momentFromString from '../build'
import Instant from '../build/classes/Instant'
import Decade from '../build/classes/Decade'


runTest('200', test => {
  const decade = new Decade(test.title)
  const decadeObject = {
    string: test.title,
    lowerLimit: new Instant('2000-01-01T00:00:00.000Z'),
    upperLimit: new Instant('2010-01-01T00:00:00.000Z'),
  }
  expect(decade.object, 'to equal', decadeObject)
  expect(momentFromString(test.title).object, 'to equal', decadeObject)
})
