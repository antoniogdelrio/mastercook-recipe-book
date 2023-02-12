import { AuthContext } from "../../contexts/AuthContext"

interface FakeAuthTypes {
    isAuthenticated?: boolean
}

const FakeAuthContextProvider = ({ children, isAuthenticated = true } : React.PropsWithChildren<FakeAuthTypes>) => {
    return (<AuthContext.Provider value={{
        isAuthenticated: isAuthenticated,
        login: () => (new Promise(res => res(true))),
        userData: { username: '' }
    }}>
        {children}
    </AuthContext.Provider>)
}

export default FakeAuthContextProvider
