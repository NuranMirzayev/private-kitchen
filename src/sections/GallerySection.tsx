import { Box, Typography } from '@mui/material'
import MainContainer from '../layout/MainContainer'

const images = [
	'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200',
	'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1200',
	'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200',
]

const GallerySection = () => {
	return (
		<MainContainer id='gallery'>
			<Box
				id='gallery'
				sx={{
					marginBottom: '120px',
				}}
			>
				<Typography
					variant='h3'
					sx={{
						fontWeight: 800,
						marginBottom: '40px',
					}}
				>
					GALLERY
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
					{images.map(image => (
						<Box
							key={image}
							sx={{
								height: '400px',
								borderRadius: '28px',
								backgroundImage: `url(${image})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						/>
					))}
				</Box>
			</Box>
		</MainContainer>
	)
}

export default GallerySection
