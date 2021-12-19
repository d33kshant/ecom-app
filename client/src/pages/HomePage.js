import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AppBar from "../components/AppBar"
import Categories from "../components/Categories"
import { AuthContext } from "../contexts/AuthContext"

const HomePage = () => {

	const { user } = useContext(AuthContext)

	if(!user) {
		return <Navigate to="/login" />
	}

	return (
		<>
			<AppBar />
			<Categories />
		</>
	)
}

export default HomePage