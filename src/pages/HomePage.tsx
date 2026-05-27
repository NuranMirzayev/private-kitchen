import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

import CTASection from '../sections/CTASection'
import FeaturesSection from '../sections/FeaturesSection'
import GallerySection from '../sections/GallerySection'
import HeroSection from '../sections/HeroSection'
import PackagesSection from '../sections/PackagesSection'

const HomePage = () => {
	return (
		<>
			<Navbar />

			<HeroSection />

			<FeaturesSection />

			<PackagesSection />

			<GallerySection />

			<CTASection />

			<Footer />
		</>
	)
}

export default HomePage
