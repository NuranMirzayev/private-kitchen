const scrollToSection = (id: string) => {
	if (window.location.pathname !== '/') {
		sessionStorage.setItem('scroll-target', id)

		window.location.href = '/'

		return
	}

	const section = document.getElementById(id)

	if (!section) return

	const navbarHeight = 360

	const y = section.getBoundingClientRect().top + window.scrollY - navbarHeight

	console.log('SECTION:', id)
	console.log('offsetTop:', section.offsetTop)
	console.log('window.scrollY:', window.scrollY)
	console.log('final y:', y)

	window.scrollTo({
		top: y,
		behavior: 'smooth',
	})
}

export default scrollToSection
