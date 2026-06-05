import { Box, TextField, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import {
	deleteOrder,
	subscribeToOrders,
	updateOrderStatus,
} from '../services/admin.service'

type MenuItem = {
	name: string
	price: number
}

type Order = {
	id: string
	name: string
	phone: string
	guests: number
	total: number
	date: string
	time?: string
	location: string
	status: string
	email: string
	menu?: MenuItem[]
	extras?: MenuItem[]
}

const AdminPage = () => {
	const [orders, setOrders] = useState<Order[]>([])

	const previousNewOrdersRef = useRef(0)

	const [statusFilter, setStatusFilter] = useState('all')
	const navigate = useNavigate()
	const [search, setSearch] = useState('')

	const handleLogout = () => {
		localStorage.removeItem('admin-auth')
		navigate('/admin-login')
	}

	const handleDeleteOrder = async (id: string) => {
		const confirmed = window.confirm(
			'Are you sure you want to delete this order?',
		)

		if (!confirmed) return

		try {
			await deleteOrder(id)

			setOrders(prev => prev.filter(order => order.id !== id))
		} catch (error) {
			console.error(error)
		}
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
		const unsubscribe = subscribeToOrders(data => {
			const normalizedOrders = data.map(order => ({
				...order,
				status: order.status || 'new',
			}))

			const currentNewOrders = normalizedOrders.filter(
				order => order.status === 'new',
			).length

			if (
				previousNewOrdersRef.current > 0 &&
				currentNewOrders > previousNewOrdersRef.current
			) {
				toast.success('🔔 New Order Received!')
			}

			previousNewOrdersRef.current = currentNewOrders

			setOrders(normalizedOrders)
		})

		return () => unsubscribe()
	}, [])

	const newOrders = orders.filter(
		order => (order.status || 'new') === 'new',
	).length

	const confirmedOrders = orders.filter(
		order => order.status === 'confirmed',
	).length

	const completedOrders = orders.filter(
		order => order.status === 'completed',
	).length

	const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)

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
					alignItems: 'center',
					flexWrap: 'wrap',
					gap: '16px',
					marginBottom: '24px',
				}}
			>
				<Typography
					variant='h3'
					sx={{
						fontWeight: 800,
						margin: 0,
						fontSize: {
							xs: '36px',
							md: '48px',
						},
					}}
				>
					ORDERS
				</Typography>

				<Box
					onClick={handleLogout}
					sx={{
						background: '#e74c3c',
						color: 'white',
						padding: '10px 20px',
						borderRadius: '10px',
						cursor: 'pointer',
						fontWeight: 700,
						transition: '0.3s',

						'&:hover': {
							transform: 'translateY(-2px)',
						},
					}}
				>
					Logout
				</Box>
			</Box>
			<TextField
				placeholder='Search by name or phone...'
				value={search}
				onChange={e => setSearch(e.target.value)}
				fullWidth
				sx={{
					marginBottom: '24px',

					'& .MuiOutlinedInput-root': {
						borderRadius: '14px',
					},
				}}
			/>
			<Box
				sx={{
					display: 'flex',
					gap: '10px',
					flexWrap: 'wrap',
					marginBottom: '24px',
				}}
			>
				{['all', 'new', 'confirmed', 'completed'].map(status => (
					<Box
						key={status}
						onClick={() => setStatusFilter(status)}
						sx={{
							padding: '8px 16px',
							borderRadius: '10px',
							cursor: 'pointer',
							fontWeight: 700,
							background: statusFilter === status ? '#d4a017' : '#151515',
							color: statusFilter === status ? 'black' : 'white',
							border: '1px solid #222',
						}}
					>
						{status.toUpperCase()}
					</Box>
				))}
			</Box>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: '1fr 1fr',
						md: 'repeat(4, 1fr)',
					},
					gap: '16px',
					marginBottom: '30px',
				}}
			>
				<Box
					onClick={() => setStatusFilter('new')}
					sx={{
						background: '#151515',
						padding: '20px',

						borderRadius: '16px',
						border: '1px solid #222',
						cursor: 'pointer',

						'&:hover': {
							transform: 'translateY(-2px)',
							borderColor: '#f1c40f',
						},

						transition: '0.3s',
					}}
				>
					<Typography sx={{ color: '#f1c40f' }}>🟡 New Orders</Typography>

					<Typography variant='h4'>{newOrders}</Typography>
				</Box>

				<Box
					onClick={() => setStatusFilter('confirmed')}
					sx={{
						borderColor: '#2ecc71',
						cursor: 'pointer',
						background: '#151515',
						padding: '20px',
						borderRadius: '16px',
						border: '1px solid #222',
					}}
				>
					<Typography sx={{ color: '#2ecc71' }}>🟢 Confirmed</Typography>

					<Typography variant='h4'>{confirmedOrders}</Typography>
				</Box>

				<Box
					onClick={() => setStatusFilter('completed')}
					sx={{
						background: '#151515',
						padding: '20px',
						borderColor: '#3498db',
						cursor: 'pointer',
						borderRadius: '16px',
						border: '1px solid #222',
					}}
				>
					<Typography sx={{ color: '#3498db' }}>🔵 Completed</Typography>

					<Typography variant='h4'>{completedOrders}</Typography>
				</Box>

				<Box
					onClick={() => setStatusFilter('all')}
					sx={{
						background: '#151515',
						padding: '20px',
						borderRadius: '16px',
						border: '1px solid #222',
					}}
				>
					<Typography sx={{ color: '#d4a017' }}>💰 Revenue</Typography>

					<Typography variant='h4'>₪{totalRevenue}</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
				}}
			>
				{orders
					.filter(order => {
						const matchesSearch =
							order.name.toLowerCase().includes(search.toLowerCase()) ||
							order.phone.includes(search) ||
							(order.email || '').toLowerCase().includes(search.toLowerCase())

						const matchesStatus =
							statusFilter === 'all' || (order.status || 'new') === statusFilter

						return matchesSearch && matchesStatus
					})
					.map(order => (
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

							<Typography
								sx={{
									color: '#999',
									marginBottom: '6px',
								}}
							>
								📧 {order.email || 'No Email'}
							</Typography>

							<Typography sx={{ color: '#999' }}>📞 {order.phone}</Typography>
							<Box
								sx={{
									display: 'flex',
									gap: '8px',
									marginTop: '8px',
									marginBottom: '8px',
									flexWrap: 'wrap',
								}}
							>
								<Box
									onClick={() =>
										window.open(
											`https://wa.me/${order.phone.replace('+', '')}`,
											'_blank',
										)
									}
									sx={{
										background: '#25D366',
										color: 'white',
										padding: '6px 12px',
										borderRadius: '8px',
										cursor: 'pointer',
										fontWeight: 700,
									}}
								>
									💬 WhatsApp
								</Box>

								<Box
									onClick={() => window.open(`tel:${order.phone}`)}
									sx={{
										background: '#3498db',
										color: 'white',
										padding: '6px 12px',
										borderRadius: '8px',
										cursor: 'pointer',
										fontWeight: 700,
									}}
								>
									📞 Call
								</Box>
							</Box>

							<Typography sx={{ color: '#999' }}>📅 {order.date}</Typography>

							{order.time && (
								<Typography
									sx={{
										color: '#999',
										fontWeight: 600,
									}}
								>
									🕒 {order.time}
								</Typography>
							)}

							<Typography
								sx={{
									color: '#999',
									marginTop: '8px',
								}}
							>
								📍 {order.location}
							</Typography>

							{order.menu && order.menu.length > 0 && (
								<Typography sx={{ color: '#999', marginTop: '8px' }}>
									🍖 {order.menu.map(item => item.name).join(', ')}
								</Typography>
							)}

							{order.extras && order.extras.length > 0 && (
								<Typography sx={{ color: '#999', marginTop: '4px' }}>
									➕ {order.extras.map(item => item.name).join(', ')}
								</Typography>
							)}

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

									color: (order.status || 'new') === 'new' ? 'black' : 'white',

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
								<Box
									onClick={() => handleDeleteOrder(order.id)}
									sx={{
										padding: '8px 14px',
										background: '#e74c3c',
										color: 'white',
										borderRadius: '10px',
										cursor: 'pointer',
										fontWeight: 700,
									}}
								>
									Delete
								</Box>
							</Box>
						</Box>
					))}
			</Box>
		</Box>
	)
}

export default AdminPage
