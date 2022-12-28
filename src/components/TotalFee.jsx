import React from 'react'
import Box from '@mui/system/Box'

const TotalFee = ({ totalFees }) => {
	return (
		<Box sx={{ fontSize: 11, color: 'primary.main', ml:'auto', mr: 'auto' }}>
             &nbsp;&nbsp;&nbsp;&nbsp;( - {totalFees.toFixed(2)} $ Total fees )
		</Box>
	)
}

export default TotalFee
