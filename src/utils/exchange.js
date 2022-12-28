import get from '../services/currency-service'

// currency: 'USD', symbol: '$'
export const exchange = async (fields, from, to, mode) => {
	const response = await get(from, to)
	const rate = response.info.rate

	const amount = (fields.coinAmount.value / rate).toFixed(2)
	const buy = (fields.buyValue.value / rate).toFixed(2)
	const sell = (fields.sellValue.value / rate).toFixed(2)

	if (mode) {
		fields.coinAmount.onChange({ target: { value: amount } })
	}

	fields.buyValue.onChange({ target: { value: buy } })
	fields.sellValue.onChange({ target: { value: sell } })
}
