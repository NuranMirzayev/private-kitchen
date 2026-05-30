import { Box, Typography } from '@mui/material'
import logoIcon from '../assets/logo-icon.png'

const Preloader = () => {
	return (
		<Box
			sx={{
				position: 'fixed',
				inset: 0,

				background: '#0D0D0D',

				display: 'flex',

				flexDirection: 'column',

				alignItems: 'center',

				justifyContent: 'center',

				zIndex: 9999,
			}}
		>
			<Box
				component='img'
				src={logoIcon}
				alt='Private Kitchen'
				sx={{
					width: '220px',

					animation: 'logoAnimation 1.8s ease forwards',
				}}
			/>

			<Typography
				sx={{
					marginTop: '24px',

					color: '#d4a017',

					fontWeight: 700,

					letterSpacing: '4px',

					animation: 'fadeText 1.8s ease forwards',
				}}
			>
				PREPARING PREMIUM BBQ...
			</Typography>
		</Box>
	)
}

export default Preloader
