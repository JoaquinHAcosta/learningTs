import React from "react"

export const LoggedIn = () => {

    const [ isLoggedIn, setIsLoggedIn ] = React.useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is { isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}