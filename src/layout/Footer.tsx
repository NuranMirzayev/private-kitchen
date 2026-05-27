import { Box, Typography } from '@mui/material'

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
				<Box>
					<Typography
						variant='h5'
						sx={{
							fontWeight: 800,

							color: '#d4a017',

							marginBottom: '12px',
						}}
					>
						PRIVATE KITCHEN
					</Typography>

					<Typography
						sx={{
							color: '#777',
							maxWidth: '320px',
						}}
					>
						Premium BBQ catering for unforgettable private events.
					</Typography>
				</Box>

				<Box>
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
		</Box>
	)
}

export default Footer
