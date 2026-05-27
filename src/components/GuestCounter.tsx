import { Box, Button, Typography } from '@mui/material'

type Props = {
	guests: number
	setGuests: (value: number) => void
}

const GuestCounter = ({ guests, setGuests }: Props) => {
	return (
		<Box
			sx={{
				background: '#151515',
				borderRadius: '24px',
				padding: '24px',
				border: '1px solid #222',
			}}
		>
			<Typography
				variant='h6'
				sx={{
					marginBottom: '20px',
					fontWeight: 700,
				}}
			>
				Guests
			</Typography>

			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: '20px',
				}}
			>
				<Button
					variant='contained'
					onClick={() => setGuests(Math.max(1, guests - 1))}
				>
					-
				</Button>

				<Typography variant='h5'>{guests}</Typography>

				<Button variant='contained' onClick={() => setGuests(guests + 1)}>
					+
				</Button>
			</Box>
		</Box>
	)
}

export default GuestCounter
