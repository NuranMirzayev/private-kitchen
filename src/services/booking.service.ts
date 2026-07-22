import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/firebase'

export const subscribeToBookedSlots = (
	callback: (slots: { date: string; time: string }[]) => void,
) => {
	return onSnapshot(collection(db, 'orders'), snapshot => {
		const orders = snapshot.docs.map(doc => doc.data())

		const bookedSlots = orders
			.filter(order => order.status?.toLowerCase() === 'confirmed')
			.map(order => ({
				date: order.date,
				time: order.time,
			}))

		callback(bookedSlots)
	})
}
