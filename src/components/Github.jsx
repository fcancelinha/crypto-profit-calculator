import React from 'react'

const style = {
	github: {
		borderRadius: 5,
	},
}

const Github = () => {
	return (
		<a
			href='https://www.github.com/fcancelinha/crypto-profit-calculator'
			target='_blank'
			rel='noreferrer'>
			<img
				src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'
				width='100'
				alt='github'
				style={style.github}
			/>
		</a>
	)
}

export default Github
