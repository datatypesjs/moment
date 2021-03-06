import Duration from '@datatypes/duration'

export default (precision) => {
  precision = precision.toLowerCase()

  const map = {
    millennium: new Duration('P1000Y'),
    century: new Duration('P100Y'),
    decade: new Duration('P10Y'),
    year: new Duration('P1Y'),
    month: new Duration('P1M'),
    week: new Duration('P1W'),
    weekday: new Duration('P1D'),
    day: new Duration('P1D'),
    ordinalday: new Duration('P1D'),
    hour: new Duration('P1H'),
    minute: new Duration('PT1M'),
    second: new Duration('P1S'),
    millisecond: new Duration('P0.001S'),
  }

  if (!map.hasOwnProperty(precision)) {
    throw new Error(`${precision} is no valid precision String`)
  }

  return map[precision]
}
