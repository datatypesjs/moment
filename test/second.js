import runTest from 'ava'
import expect from 'unexpected'

import moment from '../build/index'
import Instant from '../build/classes/Instant'
import Second from '../build/classes/Second'


runTest('2015-11-24T21:15:42', test => {
  const second = new Second(test.title)
  const secondObject = {
    string: test.title + 'Z',
    lowerLimit: new Instant(test.title),
    upperLimit: new Instant('2015-11-24T21:15:43'),
  }

  expect(second.object, 'to equal', secondObject)
  expect(moment(test.title).object, 'to equal', secondObject)
})

runTest('2015-11-24T211542', test => {
  const second = new Second(test.title)
  const secondObject = {
    string: '2015-11-24T21:15:42Z',
    lowerLimit: new Instant('2015-11-24T21:15:42'),
    upperLimit: new Instant('2015-11-24T21:15:43'),
  }

  expect(second.object, 'to equal', secondObject)
  expect(moment(test.title).object, 'to equal', secondObject)
})
