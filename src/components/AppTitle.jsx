import React from 'react'
import Typography from '@mui/material/Typography'

const title = 'CRYPTO PROFIT'

const style = {
	title: {
		color: '#ffb300',
	},
	text: {
		fontFamily: 'Cairo',
		color: '#eeeeee',
	},
}

const AppTitle = () => {
	return (
		<Typography variant="h3" sx={{ ...style.text, pt: 1 }}>
			{title} <span style={style.title}>₿</span>
		</Typography>
	)
}

export default AppTitle
