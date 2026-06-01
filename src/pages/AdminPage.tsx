import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getOrders, updateOrderStatus } from '../services/admin.service'

type Order = {
	id: string
	name: string
	phone: string
	guests: number
	total: number
	date: string
	location: string
	status: string
}

const AdminPage = () => {
	const [orders, setOrders] = useState<Order[]>([])
	const navigate = useNavigate()

	const handleLogout = () => {
		localStorage.removeItem('admin-auth')
		navigate('/admin-login')
	}

	const handleStatusChange = async (id: string, status: string) => {
		try {
			await updateOrderStatus(id, status)

			setOrders(prev =>
				prev.map(order => (order.id === id ? { ...order, status } : order)),
			)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		const loadOrders = async () => {
			const data = await getOrders()

			setOrders(
				data.map(order => ({
					...order,
					status: order.status || 'new',
				})),
			)
		}

		loadOrders()
	}, [])

	return (
		<Box
			sx={{
				padding: '40px',
				maxWidth: '1400px',
				margin: '0 auto',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',

					// alignItems: 'center',
					// flexWrap: 'wrap',
					// gap: '12px',
				}}
			>
				<Typography
					variant='h3'
					sx={{
						fontWeight: 800,
						marginBottom: '40px',
					}}
				>
					ORDERS
				</Typography>
				<Box
					onClick={handleLogout}
					sx={{
						height: '40px',
						background: '#e74c3c',
						color: 'white',
						padding: '10px 16px',
						borderRadius: '10px',
						cursor: 'pointer',
						fontWeight: 700,
						marginBottom: '24px',
						textAlign: 'center',
						lineHeight: '20px',
						fontSize: '14px',
						whiteSpace: 'nowrap',
					}}
				>
					Logout
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
				}}
			>
				{orders.map(order => (
					<Box
						key={order.id}
						sx={{
							background: '#151515',
							border: '1px solid #222',
							borderRadius: '20px',
							padding: '24px',
						}}
					>
						<Typography
							sx={{
								fontSize: '22px',
								fontWeight: 700,
								marginBottom: '16px',
							}}
						>
							👤 {order.name}
						</Typography>

						<Typography sx={{ color: '#999' }}>📞 {order.phone}</Typography>

						<Typography sx={{ color: '#999' }}>📍 {order.location}</Typography>

						<Typography sx={{ color: '#999' }}>📅 {order.date}</Typography>

						<Typography sx={{ color: '#999' }}>
							👥 {order.guests} Guests
						</Typography>

						<Typography
							sx={{
								color: '#d4a017',
								fontWeight: 700,
								marginTop: '12px',
								fontSize: '20px',
							}}
						>
							💰 ₪{order.total}
						</Typography>

						<Typography
							sx={{
								marginTop: '16px',
								background:
									(order.status || 'new') === 'completed'
										? '#3498db'
										: (order.status || 'new') === 'confirmed'
											? '#2ecc71'
											: '#d4a017',

								color: order.status === 'new' ? 'black' : 'white',

								padding: '6px 12px',

								borderRadius: '999px',

								display: 'inline-block',

								fontWeight: 700,
							}}
						>
							{(order.status || 'new').toUpperCase()}
						</Typography>

						<Box
							sx={{
								display: 'flex',
								gap: '10px',
								marginTop: '16px',
								flexWrap: 'wrap',
							}}
						>
							<Box
								onClick={() => handleStatusChange(order.id, 'new')}
								sx={{
									padding: '8px 14px',
									background: '#f1c40f',
									color: 'black',
									borderRadius: '10px',
									cursor: 'pointer',
									fontWeight: 700,
								}}
							>
								New
							</Box>

							<Box
								onClick={() => handleStatusChange(order.id, 'confirmed')}
								sx={{
									padding: '8px 14px',
									background: '#2ecc71',
									color: 'white',
									borderRadius: '10px',
									cursor: 'pointer',
									fontWeight: 700,
								}}
							>
								Confirmed
							</Box>

							<Box
								onClick={() => handleStatusChange(order.id, 'completed')}
								sx={{
									padding: '8px 14px',
									background: '#3498db',
									color: 'white',
									borderRadius: '10px',
									cursor: 'pointer',
									fontWeight: 700,
								}}
							>
								Completed
							</Box>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	)
}

export default AdminPage
