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
})

export default theme
