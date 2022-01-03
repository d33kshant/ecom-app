const { createContext } = require("react");

export const AuthContext = createContext({ user: null, setUser: ()=>{} })
const AuthProvider = AuthContext.Provider
export default AuthProvider