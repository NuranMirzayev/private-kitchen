import { Box } from '@mui/material'

import MainContainer from '../layout/MainContainer'

import SectionTitle from '../components/SectionTitle'

import PackageCard from '../components/PackageCard'

const packages = [
	{
		title: 'Economy',
		price: '110₪',
		features: ['2 Meat Types', '4 Salads', '1 Side Dish', 'Drinks'],
	},
	{
		title: 'Standard',
		price: '160₪',
		features: ['3 Meat Types', '6 Salads', '2 Side Dishes', 'Fruit Table'],
	},
	{
		title: 'Premium',
		price: '230₪',
		features: ['Premium Meat', '8 Salads', 'Full Service', 'Desserts'],
	},
]

const PackagesSection = () => {
	return (
		<MainContainer>
			<Box
				id='packages'
				sx={{
					marginTop: {
						xs: '80px',
						md: '5px',
					},
				}}
			>
				<SectionTitle subtitle='OUR MENU' title='PACKAGES' />

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: {
							xs: '1fr',
							md: 'repeat(3,1fr)',
						},
						gap: '24px',
					}}
				>
					{packages.map(item => (
						<PackageCard
							key={item.title}
							title={item.title}
							price={item.price}
							features={item.features}
						/>
					))}
				</Box>
			</Box>
		</MainContainer>
	)
}

export default PackagesSection
