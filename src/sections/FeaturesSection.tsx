import { Box, Typography } from '@mui/material'
import MainContainer from '../layout/MainContainer'

const items = [
	{
		title: 'Premium Meat',
		subtitle: 'Fresh and high quality BBQ',
	},
	{
		title: 'Fresh Salads',
		subtitle: 'Prepared daily for every event',
	},
	{
		title: 'Professional Service',
		subtitle: 'Private events and catering',
	},
]

const FeaturesSection = () => {
	return (
		<MainContainer>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: '1fr',
						md: 'repeat(3,1fr)',
					},
					gap: '24px',
					marginTop: '40px',
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
						}}
					>
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
