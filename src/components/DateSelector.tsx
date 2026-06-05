import { Box, Typography } from '@mui/material'

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { Dayjs } from 'dayjs'

type Props = {
	date: Dayjs | null
	setDate: (value: Dayjs | null) => void
}

const DateSelector = ({ date, setDate }: Props) => {
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
				Event Date
			</Typography>

			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					format='DD/MM/YYYY'
					value={date}
					onChange={newValue => setDate(newValue)}
					sx={{
						width: '100%',
					}}
				/>
			</LocalizationProvider>
		</Box>
	)
}

export default DateSelector
