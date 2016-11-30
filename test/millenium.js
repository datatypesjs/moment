import runTest from 'ava'
import expect from 'unexpected'

import Instant from '../build/classes/Instant'
import Moment from '../build/classes/Moment'

runTest.skip('2', test => {
  expect(
    new Moment(test.title)
      .toObject(),
    'to equal',
    {
      string: test.title,
      lowerLimit: new Instant('2000-01-01T00:00:00.000Z'),
      upperLimit: new Instant('3000-01-01T00:00:00.000Z'),
      precision: 'millennium',
    }
  )
})
