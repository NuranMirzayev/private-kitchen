import { Box, MenuItem, TextField, Typography } from '@mui/material'

type Props = {
	location: string
	setLocation: (value: string) => void
}

const LocationSelector = ({ location, setLocation }: Props) => {
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
				Event Location
			</Typography>

			<TextField
				select
				fullWidth
				value={location}
				onChange={e => setLocation(e.target.value)}
			>
				<MenuItem value='Jerusalem'>Jerusalem</MenuItem>

				<MenuItem value='Tel Aviv'>Tel Aviv</MenuItem>

				<MenuItem value='Haifa'>Haifa</MenuItem>

				<MenuItem value='Home Event'>Home Event</MenuItem>

				<MenuItem value='Park'>Park</MenuItem>
			</TextField>
		</Box>
	)
}

export default LocationSelector
