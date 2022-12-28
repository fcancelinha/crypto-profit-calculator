import { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage'
import useMedia from './useMedia'
import { lightTheme } from '../styles/lightTheme'
import { darkTheme } from '../styles/darkTheme'

const usePrefersDarkMode = () => {
	return useMedia(['(prefers-color-scheme: dark)'], [true], false)
}

const useDarkMode = () => {
	const [enabledState, setEnabledState] = useLocalStorage(
		'theme',
		'dark-mode'
	)
	const [theme, setTheme] = useState(lightTheme)
	const prefersDarkMode = usePrefersDarkMode()

	const enabled =
		typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode

	useEffect(() => {
		setTheme(
			enabled && enabledState === 'dark-mode' ? darkTheme : lightTheme
		)
	}, [enabled, enabledState])

	const wrapSetDarkMode = () => {
		if (theme.palette.mode === 'dark') {
			setTheme(lightTheme)
			setEnabledState('light-mode')
		} else {
			setTheme(darkTheme)
			setEnabledState('dark-mode')
		}
	}

	return [theme, wrapSetDarkMode]
}

export default useDarkMode
