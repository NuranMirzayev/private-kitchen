import { Navigate } from 'react-router-dom'

type Props = {
	children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
	const isAuthenticated = localStorage.getItem('admin-auth') === 'true'

	if (!isAuthenticated) {
		return <Navigate to='/admin-login' replace />
	}

	return <>{children}</>
}

export default ProtectedRoute
