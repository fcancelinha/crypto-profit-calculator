import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#0A0A0A',
			light: '#1A1A1A',
			contrastText: '#f5f5f5',
			dark: '#313131',
		},
		secondary: {
			main: '#d5d5d5',
			contrastText: '#0A0A0A',
			dark: '#adadad',
			light: '#ffab40',
		},
		background: {
			default: '#EAEDED',
			paper: '#EAEDED',
		},
		text: {
			primary: '#0A0A0A',
		},
		divider: '#252525',
	},
	components: {
		MuiLink: {
			styleOverrides: {
				root: {
					'&:hover': {
						color: '#900C3F',
					},
				},
			},
		},
	},
})
