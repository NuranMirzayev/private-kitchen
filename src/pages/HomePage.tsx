import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

import CTASection from '../sections/CTASection'
import FeaturesSection from '../sections/FeaturesSection'
import GallerySection from '../sections/GallerySection'
import HeroSection from '../sections/HeroSection'
import PackagesSection from '../sections/PackagesSection'
import ReviewsSection from '../sections/ReviewsSection'
import StatsSection from '../sections/StatsSection'

const HomePage = () => {
	return (
		<>
			<Navbar />

			<HeroSection />

			<FeaturesSection />

			<StatsSection />

			<PackagesSection />

			<GallerySection />

			<ReviewsSection />

			<CTASection />

			<Footer />
		</>
	)
}

export default HomePage
