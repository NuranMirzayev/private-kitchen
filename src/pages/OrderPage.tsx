import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'
import DateSelector from '../components/DateSelector'
import ExtrasSelector from '../components/ExtrasSelector'

import MainContainer from '../layout/MainContainer'
import Navbar from '../layout/Navbar'

import { Box, Typography } from '@mui/material'

import ContactForm from '../components/ContactForm'
import GuestCounter from '../components/GuestCounter'
import LocationSelector from '../components/LocationSelector'
import MenuSelector from '../components/MenuSelector'
import PriceSummary from '../components/PriceSummary'

type MenuItem = {
	name: string
	price: number
}

const OrderPage = () => {
	const [date, setDate] = useState<Dayjs | null>(dayjs())

	const [location, setLocation] = useState('Jerusalem')

	const [name, setName] = useState('')

	const [phone, setPhone] = useState('')

	const [extras, setExtras] = useState<MenuItem[]>([])
	const [guests, setGuests] = useState(1)

	const [selectedItems, setSelectedItems] = useState<MenuItem[]>([])

	return (
		<>
			<Navbar />

			<MainContainer>
				<Box
					sx={{
						paddingTop: '40px',
					}}
				>
					<Typography
						variant='h3'
						sx={{
							fontWeight: 800,
							marginBottom: '16px',
						}}
					>
						CREATE YOUR EVENT
					</Typography>

					<Typography
						sx={{
							color: '#999',
							marginBottom: '40px',
						}}
					>
						Build your perfect catering experience
					</Typography>

					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: {
								xs: '1fr',
								lg: '2fr 1fr',
							},
							gap: '24px',
							alignItems: 'start',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: '24px',
							}}
						>
							<GuestCounter guests={guests} setGuests={setGuests} />
							<DateSelector date={date} setDate={setDate} />

							<MenuSelector
								selectedItems={selectedItems}
								setSelectedItems={setSelectedItems}
							/>
							<LocationSelector location={location} setLocation={setLocation} />
							<ContactForm
								name={name}
								setName={setName}
								phone={phone}
								setPhone={setPhone}
							/>
							<ExtrasSelector extras={extras} setExtras={setExtras} />
						</Box>

						<PriceSummary
							extras={extras}
							guests={guests}
							selectedItems={selectedItems}
							location={location}
							name={name}
							phone={phone}
							date={date?.format('DD/MM/YYYY') || ''}
						/>
					</Box>
				</Box>
			</MainContainer>
		</>
	)
}

export default OrderPage
