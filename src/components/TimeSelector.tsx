import { Box, MenuItem, TextField, Typography } from '@mui/material'

type Props = {
	time: string
	setTime: (value: string) => void

	bookedSlots: {
		date: string
		time: string
	}[]

	selectedDate: string
}

const PREPARATION_TIME = 180 // 3 часа до
const EVENT_DURATION = 180 // 3 часа после

const TimeSelector = ({ time, setTime, bookedSlots, selectedDate }: Props) => {
	const times: string[] = []

	for (let hour = 10; hour <= 23; hour++) {
		for (const minute of [0, 30]) {
			if (hour === 23 && minute === 30) continue

			const currentTime = `${hour.toString().padStart(2, '0')}:${minute
				.toString()
				.padStart(2, '0')}`

			const currentMinutes = hour * 60 + minute

			const isBooked = bookedSlots.some(slot => {
				if (slot.date !== selectedDate) return false

				const [bookedHour, bookedMinute] = slot.time.split(':').map(Number)

				const bookedMinutes = bookedHour * 60 + bookedMinute

				return (
					currentMinutes >= bookedMinutes - PREPARATION_TIME &&
					currentMinutes <= bookedMinutes + EVENT_DURATION
				)
			})

			if (isBooked) continue

			times.push(currentTime)
		}
	}

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
				Event Time
			</Typography>

			<TextField
				select
				fullWidth
				value={time}
				onChange={e => setTime(e.target.value)}
			>
				{times.map(time => (
					<MenuItem key={time} value={time}>
						{time}
					</MenuItem>
				))}
			</TextField>
		</Box>
	)
}

export default TimeSelector
