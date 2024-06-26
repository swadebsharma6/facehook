import { useState } from "react"
import { AuthContext } from "../context"




const AuthProviders = ({children}) => {

    const [auth, setAuth] = useState({})

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders