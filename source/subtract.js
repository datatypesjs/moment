import momentFromString from './index'
import subtractDurationFromInstant from './subtractDurationFromInstant'
import trimToPrecision from './trimToPrecision'


// TODO: Convert to static Moment class when native es2015 support arrives
export default (moment, duration) => {
	return momentFromString(
		trimToPrecision(
			subtractDurationFromInstant(moment.lowerLimit, duration)
				.toISOString(),
			duration.precision
		)
	)
}
