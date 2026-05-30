import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

import { useState } from 'react'

import scrollToSection from '../utils/scrollToSection'

import logoNavbar from '../assets/logo-navbar.png'

const Navbar = () => {
	const [mobileMenu, setMobileMenu] = useState(false)

	const linkStyles = {
		color: 'white',

		transition: '0.3s',

		cursor: 'pointer',

		'&:hover': {
			color: '#d4a017',
		},
	}

	return (
		<AppBar
			position='sticky'
			elevation={0}
			sx={{
				borderBottom: '1px solid #222',

				backdropFilter: 'blur(10px)',

				background: 'rgba(13,13,13,0.7)',

				zIndex: 1000,
			}}
		>
			<Toolbar
				sx={{
					maxWidth: '1400px',

					width: '100%',

					margin: '0 auto',

					display: 'flex',

					justifyContent: 'space-between',

					padding: {
						xs: '10px 20px',
						md: '10px 40px',
					},
				}}
			>
				{/* Logo */}

				<Box
					component='img'
					src={logoNavbar}
					alt='Private Kitchen'
					onClick={() => scrollToSection('home')}
					sx={{
						height: {
							xs: '45px',
							md: '55px',
						},

						cursor: 'pointer',

						objectFit: 'contain',
					}}
				/>

				{/* Desktop Menu */}

				<Box
					sx={{
						display: {
							xs: 'none',
							md: 'flex',
						},

						alignItems: 'center',

						gap: '32px',
					}}
				>
					<Typography onClick={() => scrollToSection('home')} sx={linkStyles}>
						Home
					</Typography>

					<Typography
						onClick={() => scrollToSection('packages')}
						sx={linkStyles}
					>
						Menu
					</Typography>

					<Typography
						onClick={() => scrollToSection('gallery')}
						sx={linkStyles}
					>
						Gallery
					</Typography>

					<Typography
						onClick={() => scrollToSection('contact')}
						sx={linkStyles}
					>
						Contact
					</Typography>

					<Button
						href='/order'
						variant='contained'
						sx={{
							background: '#d4a017',

							color: 'black',

							fontWeight: 700,

							borderRadius: '12px',

							padding: '10px 20px',

							boxShadow: '0 0 20px rgba(212,160,23,0.3)',

							transition: '0.3s',

							'&:hover': {
								background: '#e6b325',

								transform: 'translateY(-2px)',
							},
						}}
					>
						Order Now
					</Button>
				</Box>

				{/* Mobile Burger */}

				<Typography
					onClick={() => setMobileMenu(!mobileMenu)}
					sx={{
						display: {
							xs: 'block',
							md: 'none',
						},

						fontSize: '28px',

						cursor: 'pointer',

						userSelect: 'none',
					}}
				>
					☰
				</Typography>
			</Toolbar>

			{/* Mobile Menu */}

			{mobileMenu && (
				<Box
					sx={{
						display: {
							xs: 'flex',
							md: 'none',
						},

						flexDirection: 'column',

						padding: '24px',

						gap: '20px',

						borderTop: '1px solid #222',

						background: 'rgba(10,10,10,0.96)',

						backdropFilter: 'blur(20px)',
					}}
				>
					<Typography
						onClick={() => {
							scrollToSection('home')

							setMobileMenu(false)
						}}
						sx={linkStyles}
					>
						Home
					</Typography>

					<Typography
						onClick={() => {
							scrollToSection('packages')

							setMobileMenu(false)
						}}
						sx={linkStyles}
					>
						Menu
					</Typography>

					<Typography
						onClick={() => {
							scrollToSection('gallery')

							setMobileMenu(false)
						}}
						sx={linkStyles}
					>
						Gallery
					</Typography>

					<Typography
						onClick={() => {
							scrollToSection('contact')

							setMobileMenu(false)
						}}
						sx={linkStyles}
					>
						Contact
					</Typography>

					<Button
						href='/order'
						variant='contained'
						onClick={() => setMobileMenu(false)}
						sx={{
							background: '#d4a017',

							color: 'black',

							fontWeight: 700,

							borderRadius: '12px',

							marginTop: '12px',

							'&:hover': {
								background: '#e6b325',
							},
						}}
					>
						Order Now
					</Button>
				</Box>
			)}
		</AppBar>
	)
}

export default Navbar
