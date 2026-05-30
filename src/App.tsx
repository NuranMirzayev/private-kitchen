import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useEffect } from 'react'

import { useState } from 'react'
import Preloader from './components/Preloader'
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'

import WhatsappButton from './components/WhatsappButton'

import AdminPage from './pages/AdminPage'

const ScrollHandler = () => {
	useEffect(() => {
		const target = sessionStorage.getItem('scroll-target')

		if (target) {
			setTimeout(() => {
				const section = document.getElementById(target)

				if (section) {
					const y =
						section.getBoundingClientRect().top + window.pageYOffset - 140

					window.scrollTo({
						top: y,
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
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 2000)

		return () => clearTimeout(timer)
	}, [])

	if (loading) {
		return <Preloader />
	}

	return (
		<BrowserRouter>
			<ScrollHandler />

			<Routes>
				<Route path='/' element={<HomePage />} />

				<Route path='/order' element={<OrderPage />} />
				<Route path='/admin' element={<AdminPage />} />
			</Routes>

			<WhatsappButton />
		</BrowserRouter>
	)
}

export default App
