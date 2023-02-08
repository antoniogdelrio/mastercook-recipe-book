import React, { createContext, useState } from "react"

interface AuthContextTypes {
    login: () => void,
    logout: () => void,
    isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextTypes>({} as AuthContextTypes)

const AuthContextProvider = ({
    children
} : React.PropsWithChildren) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = () => {
        setIsAuthenticated(true)
    }

    const logout = () => {
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
