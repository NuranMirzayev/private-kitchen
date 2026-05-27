import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const FadeIn = ({ children }: Props) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 40,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			viewport={{
				once: true,
			}}
			transition={{
				duration: 0.6,
			}}
		>
			{children}
		</motion.div>
	)
}

export default FadeIn
