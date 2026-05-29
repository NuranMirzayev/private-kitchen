import type { Order } from '../types/order'

export const createOrder = async (order: Order) => {
	console.log('ORDER CREATED', order)
}
