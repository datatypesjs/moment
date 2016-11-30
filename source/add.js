import momentFromString from './index'
import addDurationToInstant from './addDurationToInstant'
import trimToPrecision from './trimToPrecision'

// TODO: Convert to static Moment class when native es2015 support arrives
export default (moment, duration) => {
  return momentFromString(
    trimToPrecision(
      addDurationToInstant(moment.lowerLimit, duration)
        .toISOString(),
      duration.precision
    )
  )
}
