const { createContext } = require("react");

export const AuthContext = createContext({ user: null, setUser: ()=>{} })

const AuthProvider = ({children, ...props}) => {
	return (
		<AuthContext.Provider {...props} >
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider