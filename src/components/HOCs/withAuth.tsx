import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

interface Props {}

export default function withAuth <P extends Props> (Component: NextPage<P>) {
    return function AuthWrapper (props: P) {
        const { isAuthenticated } = useContext(AuthContext)
        const router = useRouter()

        useEffect(() => {
            if(!isAuthenticated) {
                router.push('/login')
            }
        }, [])
    
        return (<Component  {...props} />)
    }
}