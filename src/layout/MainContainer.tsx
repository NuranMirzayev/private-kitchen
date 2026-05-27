import { Box } from '@mui/material'
import type { ReactNode } from 'react'

type Props = {
	children: ReactNode
	id?: string
}

const MainContainer = ({ children, id }: Props) => {
	return (
		<Box
			id={id}
			sx={{
				maxWidth: '1400px',
				margin: '0 auto',
				padding: {
					xs: '20px',
					md: '40px',
				},
			}}
		>
			{children}
		</Box>
	)
}

export default MainContainer
