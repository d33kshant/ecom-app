import { useContext, useState } from "react"
import axios from 'axios'
import { AuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"

const LoginPage = () => {

	const [state, setState] = useState({ email: "", password: "" })
	const { user, setUser } = useContext(AuthContext)

	const onInputChange = (event) => {
		const _state = { ...state }
		_state[event.target.name] = event.target.value
		setState(_state)
	}

	const onFormSubmit = (event) => {
		
		axios.post('/login', state).then(response => {
			const { email, name, error } = response.data
			if (error) {
				console.log(error)
			} else {
				const data = { email, name }
				setUser(data)
				localStorage.setItem( 'user', JSON.stringify(data))
			}
		})
		event.preventDefault()
	}

	if(user) {
		return <Navigate to="/" />
	}

	return (
		<form className="login-form" onSubmit={onFormSubmit} >
			<input type="text" placeholder="Email" name="email" value={state.email} onChange={onInputChange} />
			<input type="password" placeholder="Password" name="password" value={state.password} onChange={onInputChange} />
			<button type="submit">Login</button>
			<span>Don't have an account ? <a href="/signup">Sign up</a></span>
		</form>
	)
}

export default LoginPage