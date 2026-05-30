import { Box, Button, Typography } from '@mui/material'

import logoStaled from '../assets/logo-staled.png'
import FadeIn from '../components/FadeIn'
import MainContainer from '../layout/MainContainer'

const HeroSection = () => {
	return (
		<MainContainer>
			<Box
				id='home'
				sx={{
					display: 'grid',

					gridTemplateColumns: {
						xs: '1fr',
						md: '1fr 1fr',
					},

					gap: '40px',

					alignItems: 'center',

					minHeight: '85vh',
				}}
			>
				<FadeIn>
					<Box>
						<Box
							component='img'
							src={logoStaled}
							sx={{
								height: '150px',
								marginBottom: '20px',
							}}
						/>
						<Typography
							sx={{
								color: '#d4a017',
								fontWeight: 700,
								marginBottom: '16px',
								letterSpacing: '2px',
							}}
						>
							PREMIUM BBQ CATERING
						</Typography>

						<Typography
							variant='h1'
							sx={{
								fontWeight: 900,

								lineHeight: 1.05,

								marginBottom: '24px',

								fontSize: {
									xs: '52px',
									md: '92px',
								},
							}}
						>
							PRIVATE
							<br />
							KITCHEN
						</Typography>

						<Typography
							sx={{
								color: '#999',

								fontSize: '18px',

								maxWidth: '520px',

								marginBottom: '40px',

								lineHeight: 1.8,
							}}
						>
							Premium BBQ catering for private events, birthdays, family
							gatherings and luxury celebrations.
						</Typography>

						<Button
							href='/order'
							variant='contained'
							sx={{
								background: '#d4a017',

								color: 'black',

								padding: '14px 32px',

								borderRadius: '14px',

								fontWeight: 700,

								fontSize: '16px',

								boxShadow: '0 0 30px rgba(212,160,23,0.4)',

								transition: '0.3s',

								'&:hover': {
									background: '#e6b325',

									transform: 'translateY(-2px)',
								},
							}}
						>
							Start Order
						</Button>
					</Box>
				</FadeIn>

				<FadeIn>
					<Box
						sx={{
							position: 'relative',

							height: {
								xs: '400px',
								md: '700px',
							},

							borderRadius: '32px',

							overflow: 'hidden',
						}}
					>
						<Box
							sx={{
								position: 'absolute',
								inset: 0,

								backgroundImage:
									"url('https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1400')",

								backgroundSize: 'cover',

								backgroundPosition: 'center',

								transition: '0.6s',

								'&:hover': {
									transform: 'scale(1.05)',
								},
							}}
						/>

						<Box
							sx={{
								position: 'absolute',
								inset: 0,

								background:
									'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
							}}
						/>
					</Box>
				</FadeIn>
			</Box>
		</MainContainer>
	)
}

export default HeroSection
