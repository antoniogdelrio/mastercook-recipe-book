import { useRouter } from "next/router"
import React, { createContext, useState } from "react"
import useLocalStorage from "../../hooks/useLocalStorage"
import * as authService from '../../services/auth'

interface AuthContextTypes {
    login: (email: string, password: string) => void,
    logout: () => void,
    isAuthenticated: boolean,
    userData: {
        username: string | null
    }
}

export const AuthContext = createContext<AuthContextTypes>({} as AuthContextTypes)

const AuthContextProvider = ({
    children
} : React.PropsWithChildren) => {
    const [username, setUsername] = useState<string | null>(null)
    const [token, setToken, removeToken] = useLocalStorage('token')
    const router = useRouter()

    const login = async (email : string, password : string) => {
        try {
            const response = await authService.login(email, password)
            setUsername(response.data.username)
            setToken(response.data.token)
            router.push('/')
        } catch (err) {
            setUsername(null)
        }
     }

    const logout = () => {
        setUsername(null)
        removeToken()
    }

    const isAuthenticated = Boolean(token)

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            isAuthenticated,
            userData: {
                username
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
