export type MenuItem = {
	name: string
	price: number
}

export type Order = {
	name: string
	phone: string

	location: string

	guests: number

	date: string

	menu: MenuItem[]

	extras: MenuItem[]

	total: number

	createdAt: string

	status: 'new' | 'confirmed' | 'completed'
}
