import runTest from 'ava'
import expect from 'unexpected'

import momentFromString from '../build'
import Instant from '../build/classes/Instant'
import Century from '../build/classes/Century'


runTest('20', test => {
  const century = new Century(test.title)
  const centuryObject = {
    string: test.title,
    lowerLimit: new Instant('2000-01-01T00:00:00.000Z'),
    upperLimit: new Instant('2100-01-01T00:00:00.000Z'),
  }
  expect(century.object, 'to equal', centuryObject)
  expect(momentFromString(test.title).object, 'to equal', centuryObject)
})
