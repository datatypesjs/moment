# Moment

ISO 8601 based time and date module.


## Installation

```shell
npm install --save @datatypes/moment
```


## Usage

There are classes for every level of precision.
These classes are all subclasses of the `Moment` base class.

```js
import momentFromString, {Moment, Instant, Year, Month, Day,
	Hour, Minute, Second, Millisecond} from '@datatypes/moment'

const year = new Year('2015')
const month = new Month('2015-11')
const day = new Day('2015-11-24')
const hour = new Hour('2015-11-24T21')
const minute = new Minute('2015-11-24T21:32')
// …

// If the precision is not known before instantiation or may vary
const moment = momentFromString('2015-11-24T21:32:45')

// Returns `new Second('2015-11-24T21:32:45')`
```

The `Instant` class is a simple wrapper for the native `Date` class
in order to be consistent with the ISO 8601 naming schema.

Possible formats for the time-string
(when a string can be interpreted as a date or a time, date takes precedence)

1. Date
	- Millennium: '2'
	- Century: `20`
	- Decade: `201`
	- Year: `2015`, `0002`
	- Month: `2015-11`
	- Week:
		- `2015-W48`
		- `2015W48`
	- Day:
		- `2015-11-24`
		- `20151124`
		- `2015-W48-2`
		- `2015W482`
		- `2015-328`
		- `2015328`

1. Time
	- Minute:
		- `21:32`
		- `2132`
	- Second:
		- `21:32:43`
		- `213243`
	- Millisecond:
		- `21:32:43.654`
		- `213243.654`

1. Datetime
	- `<date>T<time>`
	- `<date> <time>`


## Properties

Implemented with setters & getters.
Therefore some properties are static and some are dynamically created.

```js
const minute = new Minute('2015-11-24T21:37')

console.log(minute.day, minute.month, minute.day, minute.hour, minute.minute)
// 2015 11 24 21 37

console.log(minute.string)
// 2015-11-24T21:37Z

console.log(minute.object)
// { string: '2015-11-24T21:37Z',
//   lowerLimit: new Instant('2015-11-24T21:37:00.000Z'),
//   upperLimit: new Instant('2015-11-24T21:38:00.000Z') }

console.log(minute.lowerLimit.toISOString())
// 2015-11-24T21:37:00.000Z

console.log(minute.upperLimit.toISOString())
// 2015-11-24T21:38:00.000Z

console.log(minute.intervalString)
// Returns an interval string with start and end properties
// from a moment with upperLimit and lowerLimit properties.
//
// 2015-11-24T21:37:00.000Z--2015-11-24T21:38:00.000Z
```

Setters for properties are available as native setters and as methods:

```js
const minute = new Minute('2015-11-24T21:37')

minute.minute = 42
minute.setMinute(32)
```

This allows for easy chaining:

```js
const moment = new Moment()
	.setYear(2015)
	.setMonth(11)
	.setDay(24)
	.setHour(21)
	.setMinute(37)
```


## Methods

### `toString()` or `toJSON()` (alias for `.string`)

```js
new Day('2015-11-24').toString() === '2015-11-24'
```


### `toObject()` (alias for `.object`)

Returns a plain-object representation of the Moment instance.
The lower limit is always inclusive and the upper limit exclusive.

```js
new Millisecond('2015-11-24T21:37:42.123Z').toObject() === {
	string: '2015-11-24T21:37:42.123Z',
	lowerLimit: new Instant('2015-11-24T21:37:42.123Z'),
	upperLimit: new Instant('2015-11-24T21:37:42.124Z'),
	precision: 'millisecond'
}
```


### `startOfYear()`, `startOfMonth()`, `startOfDay()`, …

### `maximumOffset(anotherMoment)`

### `isBefore(anotherMoment)`

### `isAfter(anotherMoment)`

### `isSimultaneous(anotherMoment)`

### `clone()`
