import React from "react"
import { UserContext } from "./UserContext"

export const User = () => {
    const userContext = React.useContext(UserContext)
    const handleLogin = () => {
            userContext.setUser({
                name: 'Zoma',
                email: 'correo@gmail.com'
            })
        
    }
    const handleLogOut = () => {
            userContext.setUser(null)
        
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>Logouts</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email}</div>
        </div>
    )
}