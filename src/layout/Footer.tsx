import { Box, Typography } from '@mui/material'
import logoStaled from '../assets/logo-staled.png'

const Footer = () => {
	return (
		<Box
			sx={{
				borderTop: '1px solid #222',

				padding: {
					xs: '40px 20px',
					md: '60px',
				},

				marginTop: '120px',
			}}
		>
			<Box
				sx={{
					maxWidth: '1400px',

					margin: '0 auto',

					display: 'flex',

					flexDirection: {
						xs: 'column',
						md: 'row',
					},

					justifyContent: 'space-between',

					gap: '32px',
				}}
			>
				<Box
					component='img'
					src={logoStaled}
					alt='Private Kitchen'
					sx={{
						height: '90px',

						objectFit: 'contain',

						marginBottom: '12px',
					}}
				/>

				<Typography
					sx={{
						color: '#777',
						maxWidth: '320px',
					}}
				>
					Premium BBQ catering for unforgettable private events.
				</Typography>
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<Typography
					sx={{
						color: '#777',
						textAlign: 'center',
					}}
				>
					© 2026 PRIVATE KITCHEN
				</Typography>
			</Box>
		</Box>
	)
}

export default Footer
