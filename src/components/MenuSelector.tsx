import { Box, Checkbox, Typography } from '@mui/material'

type MenuItem = {
	name: string
	price: number
}

type Props = {
	selectedItems: MenuItem[]
	setSelectedItems: (items: MenuItem[]) => void
}

const menu = [
	{
		name: 'Pargit',
		price: 45,
	},
	{
		name: 'Kebab',
		price: 35,
	},
	{
		name: 'Beef BBQ',
		price: 60,
	},
	{
		name: 'Entrecote',
		price: 90,
	},
]

const MenuSelector = ({ selectedItems, setSelectedItems }: Props) => {
	const handleToggle = (item: MenuItem) => {
		const exists = selectedItems.find(i => i.name === item.name)

		if (exists) {
			setSelectedItems(selectedItems.filter(i => i.name !== item.name))
		} else {
			setSelectedItems([...selectedItems, item])
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
				Select Meat
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '12px',
				}}
			>
				{menu.map(item => {
					const checked = selectedItems.some(i => i.name === item.name)

					return (
						<Box
							key={item.name}
							sx={{
								background: '#1d1d1d',
								borderRadius: '16px',
								padding: '16px',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Box>
								<Typography
									sx={{
										fontWeight: 700,
									}}
								>
									{item.name}
								</Typography>

								<Typography
									sx={{
										color: '#999',
									}}
								>
									₪{item.price} / person
								</Typography>
							</Box>

							<Checkbox checked={checked} onChange={() => handleToggle(item)} />
						</Box>
					)
				})}
			</Box>
		</Box>
	)
}

export default MenuSelector
