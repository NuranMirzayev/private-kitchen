import { Box, Typography } from '@mui/material'
import MainContainer from '../layout/MainContainer'

const reviews = [
	{
		name: 'David Cohen',
		text: 'Amazing BBQ and professional service. Everything was perfect.',
		avatar: '👨',
	},
	{
		name: 'Sarah Levi',
		text: 'Best catering experience we have ever had. Highly recommended.',
		avatar: '👩',
	},
	{
		name: 'Michael Ben',
		text: 'Fresh food, great atmosphere and excellent communication.',
		avatar: '🧔',
	},
]

const ReviewsSection = () => {
	return (
		<MainContainer>
			<Box
				sx={{
					marginTop: {
						xs: '80px',
						md: '140px',
					},
				}}
			>
				<Typography
					variant='h3'
					sx={{
						fontWeight: 800,
						textAlign: 'center',
						marginBottom: '16px',
					}}
				>
					WHAT OUR CLIENTS SAY
				</Typography>

				<Typography
					sx={{
						color: '#999',
						textAlign: 'center',
						marginBottom: '50px',
						fontSize: '18px',
					}}
				>
					Trusted by families, private events and celebrations across Israel.
				</Typography>

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							xs: '1fr',
							md: 'repeat(3,1fr)',
						},
						gap: '24px',
					}}
				>
					{reviews.map(review => (
						<Box
							key={review.name}
							sx={{
								background: '#151515',
								border: '1px solid #222',
								borderRadius: '24px',
								padding: '32px',
								transition: '0.3s',
								cursor: 'pointer',

								'&:hover': {
									borderColor: '#d4a017',
									transform: 'translateY(-6px)',
									boxShadow: '0 0 30px rgba(212,160,23,0.15)',
								},
							}}
						>
							<Box
								sx={{
									fontSize: '54px',
									marginBottom: '16px',
								}}
							>
								{review.avatar}
							</Box>

							<Typography
								sx={{
									color: '#d4a017',
									fontSize: '20px',
									marginBottom: '12px',
								}}
							>
								★★★★★
							</Typography>

							<Typography
								variant='h6'
								sx={{
									fontWeight: 700,
									marginBottom: '12px',
								}}
							>
								{review.name}
							</Typography>

							<Typography
								sx={{
									color: '#999',
									lineHeight: 1.8,
								}}
							>
								{review.text}
							</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</MainContainer>
	)
}

export default ReviewsSection
