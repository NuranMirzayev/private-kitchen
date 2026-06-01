import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLoginPage = () => {
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const handleLogin = () => {
		if (password === 'privatekitchen2026') {
			localStorage.setItem('admin-auth', 'true')
			navigate('/admin')
		} else {
			alert('Wrong password')
		}
	}

	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background: '#0d0d0d',
			}}
		>
			<Box
				sx={{
					background: '#151515',
					padding: '40px',
					borderRadius: '20px',
					border: '1px solid #222',
					width: '400px',
				}}
			>
				<Typography
					variant='h4'
					sx={{
						fontWeight: 800,
						marginBottom: '24px',
					}}
				>
					Admin Login
				</Typography>

				<TextField
					fullWidth
					type='password'
					label='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>

				<Button
					fullWidth
					variant='contained'
					onClick={handleLogin}
					sx={{
						marginTop: '20px',
						background: '#d4a017',
						color: 'black',
						fontWeight: 700,
					}}
				>
					LOGIN
				</Button>
			</Box>
		</Box>
	)
}

export default AdminLoginPage
