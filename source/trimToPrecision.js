const isoRegex = /[0-9]{4}(-[0-9]{2}){2}T[0-9]{2}(:[0-9]{2}){2}\.[0-9]{3}Z/i

export default (isoString, precision) => {
	console.assert(
		isoRegex.test(isoString),
		`"${isoString}" is no valid extended ISO string`
	)

	const substringMap = {
		year: 4,
		month: 7,
		week: 8,
		day: 10,
		hour: 13,
		minute: 16,
		second: 19,
		millisecond: 22,
	}

	return isoString.substr(0, substringMap[precision])
}
