import { addDoc, collection } from 'firebase/firestore'

import { db } from '../firebase/firebase'
import type { Order } from '../types/order'

export const createOrder = async (order: Order) => {
	const docRef = await addDoc(collection(db, 'orders'), order)

	console.log('ORDER CREATED', docRef.id)
}
