import { Box } from '@mui/material'

const WhatsappButton = () => {
	return (
		<Box
			component='a'
			href='https://wa.me/972587802226'
			target='_blank'
			sx={{
				position: 'fixed',

				right: '24px',

				bottom: '24px',

				width: '65px',

				height: '65px',

				borderRadius: '50%',

				background: '#25D366',

				display: 'flex',

				alignItems: 'center',

				justifyContent: 'center',

				fontSize: '34px',

				textDecoration: 'none',

				zIndex: 9999,

				boxShadow: '0 0 25px rgba(37,211,102,0.5)',

				transition: '0.3s',

				animation: 'pulse 2s infinite',

				'&:hover': {
					transform: 'scale(1.1)',
				},
			}}
		>
			💬
		</Box>
	)
}

export default WhatsappButton
