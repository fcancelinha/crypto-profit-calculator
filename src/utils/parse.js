export const parse = (number) => {
	const parsedValue = parseFloat(number)
	return isNaN(parsedValue) ? 0 : parsedValue
}
