import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		mode: 'dark',

		primary: {
			main: '#d4a017',
		},

		background: {
			default: '#0d0d0d',
			paper: '#1a1a1a',
		},
	},

	typography: {
		fontFamily: 'Inter, sans-serif',
	},

	components: {
		MuiCssBaseline: {
			styleOverrides: {
				'input:-webkit-autofill': {
					WebkitBoxShadow: '0 0 0 1000px #151515 inset',
					WebkitTextFillColor: '#fff',
					caretColor: '#fff',
					borderRadius: 'inherit',
				},

				'input:-webkit-autofill:hover': {
					WebkitBoxShadow: '0 0 0 1000px #151515 inset',
				},

				'input:-webkit-autofill:focus': {
					WebkitBoxShadow: '0 0 0 1000px #151515 inset',
				},
			},
		},
	},
})

export default theme
