import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Investment from './Investment'
import TotalFee from './TotalFee'

const ValueDisplay = ({ values, selectedCurrency }) => {
	const options = {
		style: 'currency',
		currency: selectedCurrency.currency,
	}

	return (
		<Box sx={{ textAlign: 'center', mt: 3 }}>
			
			<Typography variant="subtitle2" color="primary.main">
				NET GAIN
			</Typography>
			
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Investment
					value={values.profit}
					inProfit={values.inProfit}
					options={{ ...options, signDisplay: 'exceptZero' }}
					display={true}
				/>
			</Box>
			
			<Typography variant="caption">
				{values.totalFee > 0 && <TotalFee totalFees={values.totalFee} />}
			</Typography>

			<Typography variant="subtitle2" sx={{ mt: 1 }} color="primary.main">
				TOTAL
			</Typography>
			
			<Investment
				value={values.total}
				inProfit={values.inProfit}
				options={options}
				display={false}
			/>
		</Box>
	)
}

export default ValueDisplay
