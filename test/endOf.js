import runTest from 'ava'
import expect from 'unexpected'

import Millisecond from '../build/classes/Millisecond'

const unitToIsoString = {
  // TODO: Implement
  // millenium: '2000-00-00T00:00:00.000Z',
  // century: '2100-00-00T00:00:00.000Z',
  // decade: '2110-00-00T00:00:00.000Z',
  year: '2115-12-31T23:59:59.999Z',
  month: '2115-10-31T23:59:59.999Z',
  week: '2115-11-03T23:59:59.999Z',
  day: '2115-10-29T23:59:59.999Z',
  hour: '2115-10-29T18:59:59.999Z',
  minute: '2115-10-29T18:37:59.999Z',
  second: '2115-10-29T18:37:22.999Z',
}


for (const unit in unitToIsoString) {
  if (!unitToIsoString.hasOwnProperty(unit)) continue
  runTest('end of ' + unit, () => {
    const moment = new Millisecond('2115-10-29T18:37:22.345')
    const functionName = 'endOf' +
      unit
        .slice(0, 1)
        .toUpperCase() +
      unit.slice(1)

    if (moment[functionName]) {
      moment[functionName]()
      expect(moment.isoString, 'to equal', unitToIsoString[unit])
    }
  })
}
