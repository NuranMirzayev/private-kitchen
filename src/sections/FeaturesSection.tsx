import { Box, Typography } from '@mui/material'
import MainContainer from '../layout/MainContainer'

const items = [
	{
		title: 'Premium Meat',
		subtitle: 'Fresh and high quality BBQ',
		icon: '🥩',
	},
	{
		title: 'Fresh Salads',
		subtitle: 'Prepared daily for every event',
		icon: '🥗',
	},
	{
		title: 'Professional Service',
		subtitle: 'Private events and catering',
		icon: '👨‍🍳',
	},
	{
		title: 'Available Across Israel',
		subtitle: 'We come to your location',
		icon: '🚚',
	},
]

const FeaturesSection = () => {
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
						xs: '1fr',
						md: 'repeat(4,1fr)',
					},

					gap: '24px',
				}}
			>
				{items.map(item => (
					<Box
						key={item.title}
						sx={{
							background: '#151515',

							border: '1px solid #222',

							borderRadius: '24px',

							padding: '32px',

							transition: '0.3s',

							cursor: 'pointer',

							'&:hover': {
								borderColor: '#d4a017',

								transform: 'translateY(-5px)',
							},
						}}
					>
						<Typography
							sx={{
								fontSize: '42px',

								marginBottom: '16px',
							}}
						>
							{item.icon}
						</Typography>

						<Typography
							variant='h5'
							sx={{
								fontWeight: 700,

								marginBottom: '12px',
							}}
						>
							{item.title}
						</Typography>

						<Typography
							sx={{
								color: '#999',

								lineHeight: 1.8,
							}}
						>
							{item.subtitle}
						</Typography>
					</Box>
				))}
			</Box>
		</MainContainer>
	)
}

export default FeaturesSection
