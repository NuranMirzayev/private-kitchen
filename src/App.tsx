import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useEffect } from 'react'

import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'

const ScrollHandler = () => {
	useEffect(() => {
		const target = sessionStorage.getItem('scroll-target')

		if (target) {
			setTimeout(() => {
				const section = document.getElementById(target)

				if (section) {
					section.scrollIntoView({
						behavior: 'smooth',
					})
				}

				sessionStorage.removeItem('scroll-target')
			}, 100)
		}

		window.onbeforeunload = () => {
			window.scrollTo(0, 0)
		}
	}, [])

	return null
}

function App() {
	return (
		<BrowserRouter>
			<ScrollHandler />

			<Routes>
				<Route path='/' element={<HomePage />} />

				<Route path='/order' element={<OrderPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
