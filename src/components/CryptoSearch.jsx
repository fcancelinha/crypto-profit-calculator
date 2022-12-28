import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar'
import Autocomplete from '@mui/material/Autocomplete'
import Modal from '@mui/material/Modal'
import { useTheme } from '@mui/system'

const style = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	position: 'absolute',
	top: '42%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.default',
	color: 'text.primary',
	borderRadius: 5,
	p: 4,
}

const CryptoSearch = ({
	open,
	handleClose,
	cryptoList,
	handleCoinSelection,
}) => {
	const theme = useTheme()
	const shadow =
		theme.palette.mode === 'dark' ? '0px 0px 10px 1px #ffb300' : 23

	const handleChange = (_, newValue) => {
		handleCoinSelection(newValue)
	}

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'>
			<Box sx={style} boxShadow={shadow}>
				<Typography
					sx={{ alignSelf: 'center' }}
					id='modal-modal-title'
					variant='h6'
					component='h2'>
					[ SEARCH ]
				</Typography>

				<Autocomplete
					id='crypto-search'
					options={cryptoList}
					onChange={handleChange}
					getOptionLabel={(option) => `${option.id} ${option.name}`}
					sx={{ width: 250, mt: 3, ml: 2, alignSelf: 'center' }}
					renderOption={(props, option) => (
						<Box
							component='li'
							sx={{ '& > img': { mr: 5, flexShrink: 1 } }}
							{...props}>
							<Avatar
								alt={option.currency}
								src={option.logo_url}
							/>
							<Typography
								variant='caption'
								sx={{ ml: 4, fontWeight: 'bold' }}>
								{option.id} - {option.name}{' '}
							</Typography>
						</Box>
					)}
					renderInput={(params) => (
						<TextField
							{...params}
							label='Search by tag or name'
							variant='standard'
						/>
					)}
				/>
			</Box>
		</Modal>
	)
}

export default CryptoSearch
