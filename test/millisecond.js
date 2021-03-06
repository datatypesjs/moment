import runTest from 'ava'
import expect from 'unexpected'

import moment from '../source/index'
import Instant from '../source/classes/Instant'
import Millisecond from '../source/classes/Millisecond'

runTest('2015-11-24T21:15:42.123', test => {
  const millisecond = new Millisecond(test.title)
  const millisecondObject = {
    string: test.title + 'Z',
    lowerLimit: new Instant(test.title),
    upperLimit: new Instant('2015-11-24T21:15:42.124Z'),
  }

  expect(millisecond.object, 'to equal', millisecondObject)
  expect(moment(test.title).object, 'to equal', millisecondObject)
})

runTest('2015-11-24T211542.123', test => {
  const millisecond = new Millisecond(test.title)
  const millisecondObject = {
    string: '2015-11-24T21:15:42.123Z',
    lowerLimit: new Instant('2015-11-24T21:15:42.123Z'),
    upperLimit: new Instant('2015-11-24T21:15:42.124Z'),
  }

  expect(millisecond.object, 'to equal', millisecondObject)
  expect(moment(test.title).object, 'to equal', millisecondObject)
})

runTest.skip('20151124T211542.123', test => {
  const millisecond = new Millisecond(test.title)
  const millisecondObject = {
    string: '2015-11-24T21:15:42.123Z',
    lowerLimit: new Instant('2015-11-24T21:15:42.123Z'),
    upperLimit: new Instant('2015-11-24T21:15:42.124Z'),
  }

  expect(millisecond.object, 'to equal', millisecondObject)
  expect(moment(test.title).object, 'to equal', millisecondObject)
})
