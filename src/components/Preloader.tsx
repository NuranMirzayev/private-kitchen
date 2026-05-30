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
					width: '180px',
					animation: 'pulse 1.5s infinite',
				}}
			/>

			<Typography
				sx={{
					marginTop: '20px',
					color: '#d4a017',
					fontSize: '18px',
					letterSpacing: '3px',
					fontWeight: 700,
				}}
			>
				PREPARING PREMIUM BBQ...
			</Typography>
		</Box>
	)
}

export default Preloader
