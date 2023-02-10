import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { useRouter } from "next/router"
import Login from "../../pages/login"
import { fireEvent, render, screen, waitFor } from "../test-tools/test-utils"


const SUCCESS_CREDENTIALS = {
    email: 'john@doe.com',
    password: 'jd2023'
}

jest.mock('../services/auth.ts', () => ({
    login: async function login (email: string, password: string) {
        await (new Promise(res => setTimeout(res, 500)))
        if (email === SUCCESS_CREDENTIALS.email && password === SUCCESS_CREDENTIALS.password) {
            return {
                data: {
                    username: 'John Doe',
                    token: '123456'
                }
            }
        }
    }
}))

jest.mock('next/router', () => {
  return {
    useRouter: jest.fn().mockReturnValue({
      push: jest.fn(),
    }),
  }
})

describe('<Login />', () => {
    it('should render the Login page successfully', () => {
        render(<Login />)

        expect(screen.getByRole('textbox', {
            name: 'Email'
        })).toBeInTheDocument()

        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()

        expect(screen.getByRole('button', {
            name: 'Sign in',
        })).toBeInTheDocument()
    })

    it('should redirect to the home page if login successfully', async () => {
        render(<Login />)
        
        const emailInput = screen.getByRole('textbox', {
            name: 'Email'
        })

        const passwordInput = screen.getByPlaceholderText('Password')

        const signInButton = screen.getByRole('button', {
            name: 'Sign in'
        })
        fireEvent.change(emailInput, { target: { value: SUCCESS_CREDENTIALS.email } })
        fireEvent.change(passwordInput, { target: { value: SUCCESS_CREDENTIALS.password } })

        const router = useRouter()
        const spyPush = jest.spyOn(router, 'push')

        userEvent.click(signInButton)
        
        await waitFor(() => {
            expect(spyPush).toHaveBeenCalledWith('/')
        })
    })
})