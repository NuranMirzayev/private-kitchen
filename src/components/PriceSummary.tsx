import { Box, Dialog, Typography } from '@mui/material'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { createOrder } from '../services/order.service'
import type { Order } from '../types/order'

type MenuItem = {
	name: string
	price: number
}

type Extra = {
	name: string
	price: number
}

type Props = {
	extras: Extra[]
	guests: number
	selectedItems: MenuItem[]
	location: string
	name: string
	phone: string
	date: string
	prefix: string
	isAddressValid: boolean
	onOrderSuccess: () => void
}

const PriceSummary = ({
	guests,
	selectedItems,
	extras,
	location,
	name,
	phone,
	prefix,
	date,
	isAddressValid,
	onOrderSuccess,
}: Props) => {
	const totalPerPerson = selectedItems.reduce(
		(acc, item) => acc + item.price,
		0,
	)

	const extrasPrice = extras.reduce((acc, item) => acc + item.price, 0)

	const total = (totalPerPerson + extrasPrice) * guests

	const order: Order = {
		name,
		phone: `${prefix}${phone}`,

		location,
		date,
		guests,
		menu: selectedItems,
		extras,
		total,

		createdAt: new Date().toISOString(),
		status: 'new',
	}
	const israeliPhoneRegex = /^[0-9]{7}$/

	const isValid =
		name.trim() !== '' &&
		isAddressValid &&
		israeliPhoneRegex.test(phone) &&
		selectedItems.length > 0 &&
		guests > 0

	const [loading, setLoading] = useState(false)
	const [successOpen, setSuccessOpen] = useState(false)
	// const [success, setSuccess] = useState(false)

	const handleCreateOrder = async () => {
		if (!name.trim()) {
			toast.error('Please enter your name')
			return
		}

		if (!location.trim()) {
			toast.error('Please enter event address')
			return
		}

		if (!israeliPhoneRegex.test(phone.replace(/\D/g, ''))) {
			toast.error('Please enter a valid Israeli phone number')
			return
		}

		if (selectedItems.length === 0) {
			toast.error('Please select menu items')
			return
		}

		if (!isValid) {
			toast.error('Please fill all required fields')
			return
		}

		setLoading(true)

		try {
			window.open(
				`https://wa.me/972587802226?text=${encodeURIComponent(
					whatsappMessage,
				)}`,
				'_blank',
			)

			await createOrder(order)

			// toast.success('Thank you for choosing Private Kitchen!')
			// onOrderSuccess()

			setSuccessOpen(true)
			onOrderSuccess()
		} catch {
			toast.error('Failed to create order')
		} finally {
			setLoading(false)
		}
	}

	const whatsappMessage = `
New Catering Order

Name: ${name}
Phone: ${prefix}${phone}

Guests: ${guests}
Location: ${location}
Date: ${date}

Menu:
${selectedItems.map(item => item.name).join(', ')}

Extras:
${extras.map(item => item.name).join(', ')}

Total: ₪${total}
`

	return (
		<Box
			sx={{
				background: '#151515',
				borderRadius: '24px',
				padding: '24px',
				border: '1px solid #222',
				position: 'sticky',
				top: '100px',
			}}
		>
			<Typography
				variant='h6'
				sx={{
					fontWeight: 700,
					marginBottom: '24px',
				}}
			>
				Summary
			</Typography>

			<Typography
				sx={{
					color: '#999',
					marginBottom: '12px',
				}}
			>
				Guests: {guests}
			</Typography>

			<Typography sx={{ color: '#999' }}>👤 {name || 'No name'}</Typography>

			<Typography
				sx={{
					color: '#999',
					// marginBottom: '12px',
				}}
			>
				📞 {prefix}
				{phone}
			</Typography>

			<Typography
				sx={{
					color: '#999',
					marginBottom: '12px',
				}}
			>
				📍 {location || 'No address'}
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '8px',
				}}
			>
				{selectedItems.map(item => (
					<Typography key={item.name}>{item.name}</Typography>
				))}

				{extras.map(item => (
					<Typography key={item.name}>{item.name}</Typography>
				))}
			</Box>

			<Typography
				variant='h4'
				sx={{
					marginTop: '32px',
					fontWeight: 800,
					color: '#d4a017',
				}}
			>
				₪{total}
			</Typography>

			<Box
				sx={{
					marginTop: '32px',
				}}
			>
				<Box
					onClick={handleCreateOrder}
					sx={{
						background: '#25D366',

						padding: '16px',

						borderRadius: '14px',

						textAlign: 'center',

						fontWeight: 700,

						color: 'white',

						cursor: 'pointer',

						opacity: !isValid ? 0.5 : 1,

						pointerEvents: !isValid ? 'none' : 'auto',

						transition: '0.3s',

						'&:hover': {
							transform: 'translateY(-2px)',
						},
					}}
				>
					{loading ? 'Creating Order...' : 'PLACE ORDER'}
				</Box>
			</Box>

			<Dialog open={successOpen} onClose={() => setSuccessOpen(false)}>
				<Box
					sx={{
						padding: '32px',
						background: '#151515',
						textAlign: 'center',
						maxWidth: '500px',
					}}
				>
					<Typography
						variant='h4'
						sx={{
							color: '#d4a017',
							fontWeight: 800,
							marginBottom: '20px',
						}}
					>
						🎉 Thank You!
					</Typography>

					<Typography sx={{ marginBottom: '12px' }}>
						Thank you for choosing Private Kitchen.
					</Typography>

					<Typography sx={{ marginBottom: '12px' }}>
						Your order has been received and our team will contact you shortly.
					</Typography>

					<Typography>
						We appreciate your trust and look forward to serving you.
						<br />
						See you soon! 🔥
					</Typography>
				</Box>
			</Dialog>
		</Box>
	)
}

export default PriceSummary
