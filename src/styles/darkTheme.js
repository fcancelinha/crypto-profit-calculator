import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#F5B041',
			light: '#f5f5f5',
			contrastText: '#0A0A0A',
			dark: '#CF9200',
		},
		secondary: {
			main: '#0a0a0a',
			contrastText: '#f5f5f5',
			dark: '#212121',
			light: '#ffab40',
		},
		background: {
			default: '#1A1A1A',
			paper: '#000000',
		},
		text: {
			primary: '#eeeeee',
		},
		divider: '#252525',
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiTypography-root': {
						color: '#eeeeee',
					},
					'& .MuiInputLabel-formControl': {
						color: '#eeeeee',
					},
					'& .MuiFormHelperText-root': {
						color: '#eeeeee',
					},
					'&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
						{
							borderColor: '#eeeeee',
						},
					'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
						{
							borderColor: '#ffb300',
						},
				},
			},
		},
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

//.Mui-focused
