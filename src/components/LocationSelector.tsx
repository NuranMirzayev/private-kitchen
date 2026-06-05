import { Box, TextField, Typography } from '@mui/material'

type Props = {
	city: string
	setCity: (value: string) => void

	street: string
	setStreet: (value: string) => void

	houseNumber: string
	setHouseNumber: (value: string) => void

	apartment: string
	setApartment: (value: string) => void

	notes: string
	setNotes: (value: string) => void
}

const LocationSelector = ({
	city,
	setCity,
	street,
	setStreet,
	houseNumber,
	setHouseNumber,
	apartment,
	setApartment,
	notes,
	setNotes,
}: Props) => {
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
				Event Address
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '16px',
				}}
			>
				<TextField
					label='City'
					value={city}
					onChange={e => setCity(e.target.value)}
					fullWidth
				/>

				<TextField
					label='Street'
					value={street}
					onChange={e => {
						const value = e.target.value
						if (/^[A-Za-zА-Яа-я\s]*$/.test(value)) {
							setStreet(value)
						}
					}}
					fullWidth
				/>

				<TextField
					label='House Number'
					value={houseNumber}
					onChange={e => setHouseNumber(e.target.value)}
					fullWidth
				/>

				<TextField
					label='Apartment (optional)'
					value={apartment}
					onChange={e => setApartment(e.target.value)}
					fullWidth
				/>

				<TextField
					label='Additional Notes'
					value={notes}
					onChange={e => setNotes(e.target.value)}
					fullWidth
					multiline
					rows={3}
				/>
			</Box>
		</Box>
	)
}

export default LocationSelector
