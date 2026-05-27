const scrollToSection = (id: string) => {
	// if user is on another page

	if (window.location.pathname !== '/') {
		sessionStorage.setItem('scroll-target', id)

		window.location.href = '/'

		return
	}

	// scroll on homepage

	const section = document.getElementById(id)

	if (section) {
		section.scrollIntoView({
			behavior: 'smooth',
		})
	}
}

export default scrollToSection
