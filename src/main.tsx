import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import App from './App.tsx'
import theme from './theme/theme'

import './index.css'
if ('scrollRestoration' in history) {
	history.scrollRestoration = 'manual'
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
			<ToastContainer position='top-right' theme='dark' />
		</ThemeProvider>
	</StrictMode>,
)
