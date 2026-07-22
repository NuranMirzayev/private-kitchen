import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_gns2041'
const TEMPLATE_ID = 'template_ysbhoup'
const PUBLIC_KEY = 'mWxX8zP2RlUuBqc4i'

type BookingEmail = {
	name: string
	email: string
	date: string
	time: string
	guests: number
	location: string
	total: number
}

export const sendBookingEmail = async ({
	name,
	email,
	date,
	time,
	guests,
	location,
	total,
}: BookingEmail) => {
	try {
		await emailjs.send(
			SERVICE_ID,
			TEMPLATE_ID,
			{
				name,
				email,
				date,
				time,
				guests,
				location,
				total,
			},
			PUBLIC_KEY,
		)

		console.log('Email sent successfully!')
	} catch (error) {
		console.error('Email error:', error)
	}
}
