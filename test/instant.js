import runTest from 'ava'
import expect from 'unexpected'

import Instant from '../source/classes/Instant'


// Dash separated date section

runTest('2015-11-24T21', test => {
  const actual = new Instant(test.title)
  const expected = new Instant('2015-11-24T21:00')

  expect(actual.toISOString(), 'to equal', expected.toISOString())
})

runTest('2015-11-24T2115', test => {
  const actual = new Instant(test.title)
  const expected = new Instant('2015-11-24T21:15')

  expect(actual.toISOString(), 'to equal', expected.toISOString())
})

runTest('2015-11-24T211542', test => {
  const actual = new Instant(test.title)
  const expected = new Instant('2015-11-24T21:15:42')

  expect(actual.toISOString(), 'to equal', expected.toISOString())
})

runTest('2015-11-24T211542.123', test => {
  const actual = new Instant(test.title)
  const expected = new Instant('2015-11-24T21:15:42.123')

  expect(actual.toISOString(), 'to equal', expected.toISOString())
})

runTest('2015-11-24T211542123', test => {
  const actual = new Instant(test.title)
  const expected = new Instant('2015-11-24T21:15:42.123')

  expect(actual.toISOString(), 'to equal', expected.toISOString())
})


// Date section without a separator

runTest('20151124T21', test => {
  const actual = new Instant(test.title)
  const expected = new Instant('2015-11-24T21:00')

  expect(actual.toISOString(), 'to equal', expected.toISOString())
})

runTest('20151124T2115', test => {
  const actual = new Instant(test.title)
  const expected = new Instant('2015-11-24T21:15')

  expect(actual.toISOString(), 'to equal', expected.toISOString())
})

runTest('20151124T211542', test => {
  const actual = new Instant(test.title)
  const expected = new Instant('2015-11-24T21:15:42')

  expect(actual.toISOString(), 'to equal', expected.toISOString())
})

runTest('20151124T211542.123', test => {
  const actual = new Instant(test.title)
  const expected = new Instant('2015-11-24T21:15:42.123')

  expect(actual.toISOString(), 'to equal', expected.toISOString())
})

runTest('20151124T211542123', test => {
  const actual = new Instant(test.title)
  const expected = new Instant('2015-11-24T21:15:42.123')

  expect(actual.toISOString(), 'to equal', expected.toISOString())
})
