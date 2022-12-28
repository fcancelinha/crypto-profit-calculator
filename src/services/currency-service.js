//https://exchangerate.host/#/docs
const get = async (from, to) => {
	const response = await fetch(
		`https://api.exchangerate.host/convert?from=${from}&to=${to}`
	)

	if (response.ok) {
		return await response.json()
	}
}

export default get
