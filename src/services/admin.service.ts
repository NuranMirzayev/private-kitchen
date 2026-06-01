import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import type { Order } from '../types/order'

export const getOrders = async (): Promise<(Order & { id: string })[]> => {
	const snapshot = await getDocs(collection(db, 'orders'))

	return snapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data(),
	})) as (Order & { id: string })[]
}

export const updateOrderStatus = async (id: string, status: string) => {
	const orderRef = doc(db, 'orders', id)

	await updateDoc(orderRef, {
		status,
	})
}
