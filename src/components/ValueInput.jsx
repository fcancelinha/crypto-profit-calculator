import React, { useState } from 'react'
import useToggle from '../hooks/useToggle'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import InputAdornment from '@mui/material/InputAdornment'
import { calculate } from '../utils/calculation'
import ValueDisplay from '../components/ValueDisplay'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Collapse from '@mui/material/Collapse'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import CachedIcon from '@mui/icons-material/Cached'
import Fade from '@mui/material/Fade'

const style = {
	textInput: {
		width: 300
	},
	textInputFee: {
		width: 230
	}
}


const ValueInput = ({ fields, selectedCurrency, btc, mode, setMode }) => {
	const [collapsed, setCollapsed] = useToggle(false)

	const values = calculate(fields, btc, mode)

	const investmentFee = `Investment Fee: ${values.investmentFee.toFixed(2)} $`
	const sellingFee = `Selling Fee: ${values.exitFee.toFixed(2)} $`

	return (
		<Stack
			direction='column'
			justifyContent='center'
			alignItems='center'
			sx={{ mt: 2 }}
			aria-labelledby='stack-stack'
			aria-describedby='stack-stack-description'>
			
			<TextField
				id='investement-amount'
				fullWidth
				{...fields.coinAmount}
				variant='outlined'
				sx={{...style.textInput, mt: 1}}
				helperText={`≈ ${values.investToBtc} BTC`}
				placeholder='0'
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							{mode ? selectedCurrency.symbol : '₿'}
						</InputAdornment>
					),
					endAdornment: (
						<IconButton
							variant='contained'
							size='medium'
							onClick={setMode}
							sx={{
								width: 3,
								minWidth: 3,
								height: 31,
								borderRadius: 5,
							}}>
							<Tooltip
								title='Change between fiat investment and token amount'
								placement='top'
								TransitionComponent={Fade}
								TransitionProps={{ timeout: 500 }}>
								<CachedIcon position='end' />
							</Tooltip>
						</IconButton>
					),
				}}
				label={mode ? 'Investment Amount' : 'Coin Amount'}
			/>

			<TextField
				id='buy-value'
				{...fields.buyValue}
				variant='outlined'
				placeholder='0'
				sx={{...style.textInput, mt: 2, mb: 2 }}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							{selectedCurrency.symbol}
						</InputAdornment>
					),
				}}
				label='Buy Value'
			/>

			<TextField
				id='sell-value'
				{...fields.sellValue}
				variant='outlined'
				placeholder='0'
				sx={{ ...style.textInput, mt: 2, mb: 2}}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							{selectedCurrency.symbol}
						</InputAdornment>
					),
				}}
				label='Sell Value'
			/>

			<Tooltip
				title='Fees'
				placement='top'
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 500 }}>
				<Button
					variant='contained'
					color='primary'
					size='small'
					style={{
						minWidth: 2,
						width: 40,
						height: 40,
						borderRadius: 20,
					}}
					onClick={() => {
						setCollapsed()
					}}>
					{collapsed ? (
						<ExpandLess size='large' />
					) : (
						<ExpandMore size='large' />
					)}
				</Button>
			</Tooltip>

			<Collapse in={collapsed}>
				<Stack>
					<TextField
						id='buy-fee'
						{...fields.buyFee}
						variant='outlined'
						sx={{...style.textInputFee, mt: 2, mb: 1}}
						helperText={investmentFee}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									%
								</InputAdornment>
							),
						}}
						label='Buy Fee'
						placeholder='0'
					/>

					<TextField
						id='sell-fee'
						{...fields.sellFee}
						variant='outlined'
						sx={{ ...style.textInputFee, mt: 2 }}
						helperText={sellingFee}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									%
								</InputAdornment>
							),
						}}
						label='Sell Fee'
						placeholder='0'
					/>
				</Stack>
			</Collapse>

			<ValueDisplay values={values} selectedCurrency={selectedCurrency} />
		</Stack>
	)
}

export default ValueInput
