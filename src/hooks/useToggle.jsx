import React, { useState } from 'react'

const useToggle = (initialState = true) => {
	const [toggle, setToggle] = useState(initialState)

	const wrappedSetToggle = () => {
		setToggle(!toggle)
	}

	return [toggle, wrappedSetToggle]
}

export default useToggle
