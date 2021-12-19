import { useEffect, useState } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'
import AuthProvider from './contexts/AuthContext'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const App = () => {

	const [user, setUser] = useState(null)

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('user'))
		if(data) {
			setUser(data)
		}
	}, [])

	return (
		<AuthProvider value={{ user, setUser }} >
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</Router>
		</AuthProvider>
	)
}

export default App