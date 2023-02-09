import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

interface Props {}

export default function withAuth <P extends Props> (Component: NextPage<P>) {
    return (props: P) => {
        const router = useRouter()
        const [token] = useLocalStorage('token')

        useEffect(() => {
            if(!token) {
                router.push('/login')
            }
        }, [])
    
        return (<Component  {...props} />)
    }
}