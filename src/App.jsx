import React, { useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import get from './services/crypto-service'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import AppTitle from './components/AppTitle'
import Rollout from './components/Rollout'
import Main from './components/Main'
import Donations from './components/Donations'
import useDarkMode from './hooks/useDarkMode'
import Github from './components/Github'
import Typography from '@mui/material/Typography'

const style = {
	container: {
		p: 0,
		m: 0,
	},
	paper: {
		pt: 2,
		borderRadius: 4,
		width: '100%',
		pb: 2,
		mb: 2,
		mt: -14
	},
	notice: {
		alignSelf: 'center',
		fontSize: 10,
		fontFamily: 'Monospace',
		fontWeight: 'bold',
		ml: 'auto',
		mr: 'auto',
	},
}

const filterCoins = [
	'USDT',
	'USDC',
	'HEX',
	'BUSD',
	'DAI',
	'TUSD',
	'UST',
	'USDP',
]

const setBodyColor = (color) => {
	document.body.style.backgroundColor = color
}

const App = () => {
	const [theme, setTheme] = useDarkMode()
	const [crypto, setCrypto] = useState([])
	const [selectedCurrency, setSelectedCurrency] = useState({currency: 'USD', symbol: '$'})
	
	setBodyColor(theme.palette.background.default)

	useEffect(() => {
		get(selectedCurrency.currency)
			.then((response) => {
				const result = response.filter((x) => filterCoins.indexOf(x.currency) < 0)
				setCrypto(result)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [selectedCurrency.currency])


	return (
		<ThemeProvider theme={theme}>
			<Grid
				justifyContent="center"
				alignItems="stretch"
				id="main-body"
				bgcolor="background.default"
				sx={style.container}
				columns={24}
			>

				<Box sx={{pb: 15, textAlign: 'center', backgroundColor: '#000000'}} boxShadow={10}>
					<Rollout cryptoList={crypto} currency={selectedCurrency.symbol} />

					<AppTitle />

					<Github />
				</Box>

				<Box>
					<Grid item xs={24} sm={24} md={12} lg={9} xl={7} sx={{alignSelf: 'center', ml: 'auto', mr:'auto'}} >
						<Paper sx={style.paper} elevation={6}>

							<Main crypto={crypto} selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} handleThemeChange={() => setTheme()} />

							<Donations />

						</Paper>
					</Grid>
				</Box>

				<Box sx={{ textAlign: 'center', mb: 2, ml: 'auto', mr:'auto' }}>
					<Typography
						variant="caption"
						sx={style.notice}
						color="primary.main">
						exchange rates might not reflect current ones
					</Typography>

					<br />

					<Link
						href="https://nomics.com/"
						target="_blank"
						rel="noreferrer"
						variant="caption"
						color="primary.main"
						sx={style.notice}>
						Crypto Market Cap & Pricing Data Provided By Nomics
					</Link>
				</Box>

			</Grid>
		</ThemeProvider>
	)
}

export default App
