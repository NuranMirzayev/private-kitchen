import { Box, Checkbox, Typography } from '@mui/material'

type Extra = {
	name: string
	price: number
}

type Props = {
	extras: Extra[]
	setExtras: (items: Extra[]) => void
}

const items = [
	{
		name: 'Fruit Table',
		price: 20,
	},
	{
		name: 'Drinks',
		price: 10,
	},
	{
		name: 'Full Service',
		price: 35,
	},
]

const ExtrasSelector = ({ extras, setExtras }: Props) => {
	const toggleExtra = (item: Extra) => {
		const exists = extras.find(i => i.name === item.name)

		if (exists) {
			setExtras(extras.filter(i => i.name !== item.name))
		} else {
			setExtras([...extras, item])
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
				Extras
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '12px',
				}}
			>
				{items.map(item => {
					const checked = extras.some(i => i.name === item.name)

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

							<Checkbox checked={checked} onChange={() => toggleExtra(item)} />
						</Box>
					)
				})}
			</Box>
		</Box>
	)
}

export default ExtrasSelector
