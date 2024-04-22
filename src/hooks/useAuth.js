import { useContext, useDebugValue } from "react"
import { AuthContext } from "../context"


export const useAuth = () => {
    const {auth} = useContext(AuthContext);
    // console.log(auth)

    useDebugValue(auth, auth => auth?.user ? "User Logged in" : "User Logged out")
    
  return useContext(AuthContext)
}
