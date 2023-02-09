import 'isomorphic-fetch'
import { AUTH_URL } from '../constants/apiUrls'

export async function login (email : string, password : string) {
    // Fake auth
    await (new Promise(res => setTimeout(res, 3000)))

    if (email === 'admin@admin.com' && password === 'xpto1234') {
        return {
            data: {
                username: 'Admin',
                token: 'abcdef'
            }
        }
    } else {
        console.error('Auth error')
        throw (new Error('Authentication failed'))
    }
}