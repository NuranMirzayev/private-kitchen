import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	onSnapshot,
	updateDoc,
} from 'firebase/firestore'
import { db } from '../firebase/firebase'
import type { Order } from '../types/order'

export const deleteOrder = async (id: string) => {
	const orderRef = doc(db, 'orders', id)

	await deleteDoc(orderRef)
}

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

export const subscribeToOrders = (
	callback: (orders: (Order & { id: string })[]) => void,
) => {
	return onSnapshot(collection(db, 'orders'), snapshot => {
		const orders = snapshot.docs.map(doc => ({
			id: doc.id,
			...doc.data(),
		})) as (Order & { id: string })[]

		callback(
			orders.sort(
				(a, b) =>
					new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
			),
		)
	})
}
