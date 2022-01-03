import { useContext, useState } from "react"
import axios from 'axios'
import { AuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"
import "../styles/LoginPage.css"

const LoginPage = () => {

	const [state, setState] = useState({ email: "", password: "" })
	const { user, setUser } = useContext(AuthContext)
	const [ message, setMessage ] = useState('')

	const onInputChange = (event) => {
		const _state = { ...state }
		_state[event.target.name] = event.target.value
		setState(_state)
	}

	const onFormSubmit = (event) => {
		
		axios.post('api/v1/login', state).then(response => {
			const { email, name, error } = response.data
			if (error) {
				setMessage(error)
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
		<div className="login-page-main">
			<div className="login-form-container">
				<form className="login-form" onSubmit={onFormSubmit} >
					<h2 className="login-form-title">Login</h2>
					<input className="login-input-email" type="text" placeholder="Email" name="email" value={state.email} onChange={onInputChange} />
					<input className="login-input-password" type="password" placeholder="Password" name="password" value={state.password} onChange={onInputChange} />
					<button className="login-button-submit" type="submit">Login</button>
					<span className="login-form-text">Don't have an account ? <a className="login-form-signup" href="/signup">Sign up</a></span>
				</form>
			</div>
			<div className="login-message-container" >
				{
					message &&
					<div className="login-message-box" >
						<p className="login-message" >{message}</p>
						<button className="login-message-close" onClick={()=>setMessage('')}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
							</svg>
						</button>
					</div>
				}
			</div>
		</div>
	)
}

export default LoginPage