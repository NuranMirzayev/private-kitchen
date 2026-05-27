import { Button } from '@mui/material'
import type { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const PrimaryButton = ({ children }: Props) => {
	return (
		<Button
			variant='contained'
			sx={{
				background: '#d4a017',
				color: 'black',
				fontWeight: 700,
				padding: '14px 28px',
				borderRadius: '14px',
				fontSize: '16px',

				'&:hover': {
					background: '#e6b325',
				},
			}}
		>
			{children}
		</Button>
	)
}

export default PrimaryButton
