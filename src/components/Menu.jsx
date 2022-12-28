import React, { useState } from 'react'
import CryptoSearch from './CryptoSearch'
import CurrencySelect from './CurrencySelect'
import useToggle from '../hooks/useToggle'
import { exchange } from '../utils/exchange'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Fab from '@mui/material/Fab'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import FeedbackIcon from '@mui/icons-material/Feedback';
import SearchIcon from '@mui/icons-material/Search'
import Stack from '@mui/material/Stack'
import AppsIcon from '@mui/icons-material/Apps'
import NightsStayIcon from '@mui/icons-material/NightsStay'

const style = {
	fabBox: {
		display: 'flex',
		backgroundColor: 'transparent',
		justifyContent: 'flex-end',
		flexDirection: 'column',
		position: 'fixed',
		right: 0,
		bottom: 0,
		mb: 5,
		mr: 5,
	},
	fabMenu: {
		position: 'fixed',
		right: 0,
		bottom: 0,
		height: 369,
		width: 369,
		borderTopLeftRadius: 500,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;',
	},
	fabMenuButtonBox: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignSelf: 'flex-end',
	},
	fabMenuButtonLabel: {
		position: 'absolute',
	},
}

const Menu = ({
	handleThemeChange,
	selectedCoin,
	cryptoList,
	handleCoinSelection,
	setSelectedCurrency,
	fields,
	selectedCurrency,
	mode,
}) => {
	const [open, setOpen] = useToggle(false)
	const [curOpen, setCurOpen] = useToggle(false)
	const [modelOpen, modalSetOpen] = useState(false)

	const handleOpen = () => modalSetOpen(true)
	const handleClose = () => modalSetOpen(false)

	const handleFiatSelection = (newCurrency) => {
		if (newCurrency.currency === selectedCurrency.currency) {
			return
		}

		const { currency, symbol } = newCurrency

		exchange(fields, currency, selectedCurrency.currency, mode)

		setSelectedCurrency({
			...selectedCurrency,
			currency,
			symbol,
		})
	}

	return (
		<Box
			sx={{ ...style.fabBox }}
			bgcolor='background.default'
			aria-label='menu'>
			<Fade in={open} {...(open ? { timeout: 800 } : { timeout: 600 })}>
				<Box sx={{ ...style.fabMenu }} bgcolor='primary.main'>
					<Stack
						direction='column'
						alignItems='flex-end'
						sx={{ mb: 4.2 }}>
						<Box sx={style.fabMenuButtonBox}>
							<Fab
								color='secondary'
								sx={{ mr: 9 }}
								aria-label='search-crypto-currency'
								onClick={() => handleOpen()}>
								<SearchIcon />
							</Fab>
							<Typography
								variant='caption'
								color='secondary'
								sx={{
									...style.fabMenuButtonLabel,
									bottom: 218,
									left: 248,
									mb: 2,
								}}>
								Search
							</Typography>
						</Box>

						<Box sx={style.fabMenuButtonBox}>
							<Link 
								underline="none"
								href="https://forms.gle/YYc541x2QiF1CfaKA"
								target="_blank"
								rel="noreferrer"
							>
							<Fab
								color='secondary'
								sx={{ mr: 20, mb: 2.3 }}
								aria-label='feedback'>
								<FeedbackIcon />
							</Fab>
							<Typography
								variant='caption'
								color='secondary'
								sx={{
									...style.fabMenuButtonLabel,
									bottom: 162,
									left: 154,
									mb: 2,
								}}>
								Feedback
							</Typography>
							</Link>
						</Box>

						<Box sx={style.fabMenuButtonBox}>
							<Fab
								color='secondary'
								sx={{ mr: 28, mb: 5 }}
								onClick={() => setCurOpen()}
								aria-label='change-fiat-currency'>
								<AttachMoneyIcon />
							</Fab>
							<Typography
								variant='caption'
								color='secondary'
								sx={{
									...style.fabMenuButtonLabel,
									bottom: 90,
									left: 90,
									mb: 2,
								}}>
								Currency
							</Typography>
						</Box>

						<Box sx={style.fabMenuButtonBox}>
							<Fab
								color='secondary'
								sx={{ mr: 32 }}
								aria-label='darkmode'
								onClick={handleThemeChange}>
								<NightsStayIcon />
							</Fab>
							<Typography
								variant='caption'
								color='secondary'
								sx={{
									...style.fabMenuButtonLabel,
									bottom: 6,
									left: 54,
								}}>
								Darkmode
							</Typography>
						</Box>
					</Stack>

					<CurrencySelect
						curOpen={curOpen}
						handleFiatSelection={handleFiatSelection}
					/>
				</Box>
			</Fade>

			<Fab
				color={open ? 'secondary' : 'primary'}
				onClick={() => setOpen()}
				aria-label='menu-button'>
				{open ? <CloseIcon /> : <AppsIcon />}
			</Fab>

			<CryptoSearch
				open={modelOpen}
				handleClose={handleClose}
				selectedCoin={selectedCoin}
				cryptoList={cryptoList}
				handleCoinSelection={handleCoinSelection}
			/>
		</Box>
	)
}

export default Menu
