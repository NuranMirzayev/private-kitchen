import { Box, Button, Typography } from '@mui/material'
import MainContainer from '../layout/MainContainer'

const CTASection = () => {
	return (
		<MainContainer id='contact'>
			<Box
				sx={{
					marginTop: '120px',
					marginBottom: '120px',
					background: '#151515',
					border: '1px solid #222',
					borderRadius: '32px',
					padding: {
						xs: '40px 24px',
						md: '80px',
					},
					textAlign: 'center',
				}}
			>
				<Typography
					variant='h3'
					sx={{
						fontWeight: 800,
						marginBottom: '20px',
					}}
				>
					READY FOR YOUR EVENT?
				</Typography>

				<Typography
					sx={{
						color: '#999',
						maxWidth: '700px',
						margin: '0 auto',
						marginBottom: '32px',
						fontSize: '18px',
					}}
				>
					Let us create an unforgettable BBQ experience for your family and
					friends.
				</Typography>

				<Button
					href='/order'
					variant='contained'
					sx={{
						background: '#d4a017',
						color: 'black',
						fontWeight: 700,
						borderRadius: '14px',
						padding: '14px 32px',
						fontSize: '16px',
					}}
				>
					Book Now
				</Button>
			</Box>
		</MainContainer>
	)
}

export default CTASection
