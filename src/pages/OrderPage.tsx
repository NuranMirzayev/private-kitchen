import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'
import DateSelector from '../components/DateSelector'
import ExtrasSelector from '../components/ExtrasSelector'

import MainContainer from '../layout/MainContainer'
import Navbar from '../layout/Navbar'

import { useEffect } from 'react'
import { subscribeToBookedSlots } from '../services/booking.service'

import { Box, Typography } from '@mui/material'

import ContactForm from '../components/ContactForm'
import GuestCounter from '../components/GuestCounter'
import LocationSelector from '../components/LocationSelector'
import MenuSelector from '../components/MenuSelector'
import PriceSummary from '../components/PriceSummary'
import TimeSelector from '../components/TimeSelector'

type MenuItem = {
	name: string
	price: number
}

const OrderPage = () => {
	const [city, setCity] = useState('')
	const [street, setStreet] = useState('')
	const [houseNumber, setHouseNumber] = useState('')
	const [apartment, setApartment] = useState('')
	const [notes, setNotes] = useState('')

	const [name, setName] = useState('')

	const [extras, setExtras] = useState<MenuItem[]>([])
	const [guests, setGuests] = useState(1)

	const [selectedItems, setSelectedItems] = useState<MenuItem[]>([])

	const [prefix, setPrefix] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [date, setDate] = useState<Dayjs | null>(dayjs())
	const [time, setTime] = useState('')

	// const isToday = date ? date.isSame(dayjs(), 'day') : false

	const [bookedSlots, setBookedSlots] = useState<
		{ date: string; time: string }[]
	>([])

	const handleOrderSuccess = () => {
		setTime('')
		setName('')
		setPhone('')
		setPrefix('')
		setEmail('')
		setGuests(1)

		setSelectedItems([])
		setExtras([])

		setCity('')
		setStreet('')
		setHouseNumber('')
		setApartment('')
		setNotes('')

		setDate(dayjs())
	}

	const location = [
		city,
		`${street} ${houseNumber}`,
		apartment ? `Apartment ${apartment}` : '',
		notes,
	]
		.filter(Boolean)
		.join(', ')

	const isAddressValid =
		city.trim() !== '' && street.trim() !== '' && houseNumber.trim() !== ''

	useEffect(() => {
		const unsubscribe = subscribeToBookedSlots(bookedSlots => {
			setBookedSlots(bookedSlots)
		})

		return () => unsubscribe()
	}, [])

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

							<TimeSelector
								time={time}
								setTime={setTime}
								bookedSlots={bookedSlots}
								selectedDate={date?.format('DD/MM/YYYY') || ''}
							/>

							<MenuSelector
								selectedItems={selectedItems}
								setSelectedItems={setSelectedItems}
							/>
							<LocationSelector
								city={city}
								setCity={setCity}
								street={street}
								setStreet={setStreet}
								houseNumber={houseNumber}
								setHouseNumber={setHouseNumber}
								apartment={apartment}
								setApartment={setApartment}
								notes={notes}
								setNotes={setNotes}
							/>
							<ContactForm
								name={name}
								setName={setName}
								phone={phone}
								setPhone={setPhone}
								prefix={prefix}
								setPrefix={setPrefix}
								email={email}
								setEmail={setEmail}
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
							prefix={prefix}
							date={date?.format('DD/MM/YYYY') || ''}
							isAddressValid={isAddressValid}
							onOrderSuccess={handleOrderSuccess}
							time={time}
							email={email}
						/>
					</Box>
				</Box>
			</MainContainer>
		</>
	)
}

export default OrderPage
