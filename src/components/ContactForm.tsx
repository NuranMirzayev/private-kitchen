import { Box, MenuItem, TextField, Typography } from '@mui/material'

type Props = {
	name: string
	setName: (value: string) => void

	phone: string
	setPhone: (value: string) => void

	prefix: string
	setPrefix: (value: string) => void

	email: string
	setEmail: (value: string) => void
}

const ContactForm = ({
	name,
	setName,
	phone,
	setPhone,
	prefix,
	setPrefix,
	email,
	setEmail,
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
					label='Email'
					type='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					fullWidth
				/>
				<Box
					sx={{
						display: 'flex',
						gap: '12px',
					}}
				>
					<TextField
						select
						value={prefix}
						onChange={e => setPrefix(e.target.value)}
						sx={{
							width: '120px',
						}}
					>
						<MenuItem value='050'>050</MenuItem>
						<MenuItem value='051'>051</MenuItem>
						<MenuItem value='052'>052</MenuItem>
						<MenuItem value='053'>053</MenuItem>
						<MenuItem value='054'>054</MenuItem>
						<MenuItem value='055'>055</MenuItem>
						<MenuItem value='058'>058</MenuItem>
					</TextField>

					<TextField
						label='Phone'
						placeholder='1234567'
						value={phone}
						onChange={e => {
							const value = e.target.value.replace(/\D/g, '')

							if (value.length <= 7) {
								setPhone(value)
							}
						}}
						fullWidth
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default ContactForm
