import { Box, Typography } from '@mui/material'

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
}

const PriceSummary = ({
	guests,
	selectedItems,
	extras,
	location,
	name,
	phone,
}: Props) => {
	const totalPerPerson = selectedItems.reduce(
		(acc, item) => acc + item.price,
		0,
	)

	const extrasPrice = extras.reduce((acc, item) => acc + item.price, 0)

	const total = (totalPerPerson + extrasPrice) * guests

	const whatsappMessage = `
New Catering Order

Name: ${name}
Phone: ${phone}

Guests: ${guests}
Location: ${location}

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
				<a
					href={`https://wa.me/972587802226?text=${encodeURIComponent(
						whatsappMessage,
					)}`}
					target='_blank'
					style={{ textDecoration: 'none' }}
				>
					<Box
						sx={{
							background: '#25D366',
							padding: '16px',
							borderRadius: '14px',
							textAlign: 'center',
							fontWeight: 700,
							color: 'white',
						}}
					>
						ORDER WHATSAPP
					</Box>
				</a>
			</Box>
		</Box>
	)
}

export default PriceSummary
