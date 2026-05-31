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

				overflow: 'hidden',

				zIndex: 9999,
			}}
		>
			<Box
				sx={{
					position: 'absolute',

					width: {
						xs: '280px',
						md: '420px',
					},

					height: {
						xs: '280px',
						md: '420px',
					},

					borderRadius: '50%',

					background:
						'radial-gradient(circle, rgba(212,160,23,0.35) 0%, rgba(212,160,23,0.15) 40%, transparent 75%)',

					filter: 'blur(30px)',

					animation: 'pulseGlow 2s ease-in-out infinite',
				}}
			/>
			<Box
				component='img'
				src={logoIcon}
				alt='Private Kitchen'
				sx={{
					width: '220px',

					position: 'relative',

					zIndex: 2,

					filter: 'drop-shadow(0 0 25px rgba(212,160,23,0.5))',

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
