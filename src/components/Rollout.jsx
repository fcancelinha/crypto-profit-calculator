import React from 'react'
import Box from '@mui/system/Box'
import Marquee from 'react-fast-marquee'
import RolloutItem from './RolloutItem'

const Rollout = ({ cryptoList, currency }) => {
	return (
		<Box sx={{ pt: 0.2 }}>
			<Marquee
				pauseOnHover={true}
				gradientColor={[0, 0, 0]}
				gradientWidth={80}>
				{cryptoList.map((crypto) => {
					return (
						crypto['1h'] &&
						crypto['1h']?.price_change && (
							<RolloutItem
								key={crypto.id}
								currency={currency}
								symbol={crypto.symbol}
								cryptoPrice={crypto.price}
								priceChange={crypto['1h'].price_change}
							/>
						)
					)
				})}
			</Marquee>
		</Box>
	)
}

export default Rollout
