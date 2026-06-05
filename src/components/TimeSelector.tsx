import { Box, MenuItem, TextField, Typography } from '@mui/material'

type Props = {
	time: string
	setTime: (value: string) => void
	isToday: boolean
}

const TimeSelector = ({ time, setTime, isToday }: Props) => {
	const times: string[] = []

	const now = new Date()

	const minTimeToday = now.getHours() * 60 + now.getMinutes() + 180

	for (let hour = 10; hour <= 23; hour++) {
		for (const minute of [0, 30]) {
			if (hour === 23 && minute === 30) continue

			const totalMinutes = hour * 60 + minute

			if (isToday && totalMinutes < minTimeToday) {
				continue
			}

			times.push(
				`${hour.toString().padStart(2, '0')}:${minute
					.toString()
					.padStart(2, '0')}`,
			)
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
