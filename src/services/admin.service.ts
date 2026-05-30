import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'

import { db } from '../firebase/firebase'

export const getOrders = async () => {
	const snapshot = await getDocs(collection(db, 'orders'))

	return snapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data(),
	}))
}

export const updateOrderStatus = async (id: string, status: string) => {
	const orderRef = doc(db, 'orders', id)

	await updateDoc(orderRef, {
		status,
	})
}
