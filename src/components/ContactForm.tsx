import { Box, TextField, Typography } from '@mui/material'

type Props = {
	name: string
	setName: (value: string) => void

	phone: string
	setPhone: (value: string) => void
}

const ContactForm = ({ name, setName, phone, setPhone }: Props) => {
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
				Contact Details
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '16px',
				}}
			>
				<TextField
					label='Full Name'
					value={name}
					onChange={e => setName(e.target.value)}
					fullWidth
				/>

				<TextField
					label='Phone Number'
					value={phone}
					onChange={e => setPhone(e.target.value)}
					fullWidth
				/>
			</Box>
		</Box>
	)
}

export default ContactForm
