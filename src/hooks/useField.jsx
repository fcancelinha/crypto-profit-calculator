import { useState } from 'react'

const useField = (type) => {
	const [value, setValue] = useState('')
	const reg = /^[0-9]+([\\,\\.]?)([0-9]{1,20})?$/g

	const onChange = (event) => {
		const eventValue = event.target.value.toString()

		if (eventValue.match(reg) || !eventValue) {
			setValue(eventValue)
		}
	}

	return {
		type,
		value,
		onChange,
	}
}

export default useField
