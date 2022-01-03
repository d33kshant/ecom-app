import axios from "axios"
import { useState } from "react"
import "../styles/SignUpPage.css"

const SignUpPage = () => {

	const [message, setMessage] = useState(null)
	const [state, setState] = useState({ name: '', email: '', password: '', _password: '' })

	const isValidEmail = email => {
		return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)
	}

	const onInputChange = (event) => {
		const _state = { ...state }
		_state[event.target.name] = event.target.value
		setState(_state)
		setMessage(null)
	}

	const onFormSubmit = event => {
		event.preventDefault()
		if(!state.name || !state.password || !state._password || !state.email){
			return setMessage({error: "All the input field are required."})
		}
		if(state.password !== state._password) {
			return setMessage({error: 'Password do not match.'})
		}
		if(!isValidEmail(state.email)){
			return setMessage({error: 'Invalid email address.'})
		}
		const user = { name: state.name, email: state.email, password: state.password }
		axios.post('/api/v1/signup', user).then(res => {
			const data = res.data
			if(data.error) {
				return setMessage({error: data.error})
			}
			return setMessage({result: data.result})
		})

	}

	return (
		<div className="signup-page-main">
			<div className="signup-form-container">
				<form className="signup-form" onSubmit={onFormSubmit} >
					<h2 className="signup-form-title">Sign Up</h2>
					<input className="signup-input-email" type="text" placeholder="Email" name="email" value={state.email} onChange={onInputChange} />
					<input className="signup-input-email" type="text" placeholder="Name" name="name" value={state.name} onChange={onInputChange} />
					<input className="signup-input-password" type="password" placeholder="Password" name="password" value={state.password} onChange={onInputChange} />
					<input className="signup-input-password" type="password" placeholder="Confirm Password" name="_password" value={state._password} onChange={onInputChange} />
					<button className="signup-button-submit" type="submit">Sign Up</button>
					<span className="signup-form-text">Already have an account ? <a className="signup-form-login" href="/login">Login</a></span>
				</form>
			</div>
			<div className="signup-message-container" >
				{
					message &&
					<div className={ message.error ? "signup-message-box" : "signup-message-box success"} >
						<p className="signup-message" >{message.result || message.error}</p>
						<button className="signup-message-close" onClick={()=>setMessage(null)}>
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

export default SignUpPage