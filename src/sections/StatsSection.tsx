import { Box, Typography } from '@mui/material'
import MainContainer from '../layout/MainContainer'

const stats = [
	{
		number: '50+',
		label: 'Events',
	},
	{
		number: '500+',
		label: 'Guests Served',
	},
	{
		number: '5★',
		label: 'Average Rating',
	},
	{
		number: '24/7',
		label: 'Support',
	},
]

const StatsSection = () => {
	return (
		<MainContainer>
			<Box
				sx={{
					marginTop: {
						xs: '80px',
						md: '140px',
					},

					display: 'grid',

					gridTemplateColumns: {
						xs: 'repeat(2,1fr)',
						md: 'repeat(4,1fr)',
					},

					gap: '24px',
				}}
			>
				{stats.map(item => (
					<Box
						key={item.label}
						sx={{
							textAlign: 'center',

							padding: '32px',

							background: '#151515',

							borderRadius: '24px',

							border: '1px solid #222',
						}}
					>
						<Typography
							variant='h2'
							sx={{
								fontWeight: 900,

								color: '#d4a017',
							}}
						>
							{item.number}
						</Typography>

						<Typography
							sx={{
								color: '#999',

								marginTop: '12px',
							}}
						>
							{item.label}
						</Typography>
					</Box>
				))}
			</Box>
		</MainContainer>
	)
}

export default StatsSection
