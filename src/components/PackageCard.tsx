import { Box, Button, Typography } from '@mui/material'

type Props = {
	title: string
	price: string
	features: string[]
}

const PackageCard = ({ title, price, features }: Props) => {
	return (
		<Box
			sx={{
				background: '#151515',
				borderRadius: '28px',
				padding: '32px',
				border: '1px solid #222',

				transition: '0.3s',

				'&:hover': {
					transform: 'translateY(-6px)',
					borderColor: '#d4a017',
				},
			}}
		>
			<Typography
				variant='h5'
				sx={{
					fontWeight: 700,
					marginBottom: '12px',
				}}
			>
				{title}
			</Typography>

			<Typography
				variant='h3'
				sx={{
					color: '#d4a017',
					fontWeight: 800,
					marginBottom: '24px',
				}}
			>
				{price}
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '12px',
					marginBottom: '32px',
				}}
			>
				{features.map(feature => (
					<Typography key={feature}>✓ {feature}</Typography>
				))}
			</Box>

			<Button
				href='/order'
				fullWidth
				variant='contained'
				sx={{
					background: '#d4a017',
					color: 'black',
					fontWeight: 700,
					borderRadius: '14px',
					padding: '14px',

					'&:hover': {
						background: '#e6b325',
					},
				}}
			>
				Select Package
			</Button>
		</Box>
	)
}

export default PackageCard
