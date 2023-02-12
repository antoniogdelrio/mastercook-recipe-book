import "@testing-library/jest-dom"
import { render, screen, waitFor } from "@testing-library/react"
import { useRouter } from "next/router"
import withAuth from "../components/HOCs/withAuth"
import FakeAuthContextProvider from "../test-tools/mocks/AuthContext"

jest.mock('next/router', () => {
    return {
      useRouter: jest.fn().mockReturnValue({
        push: jest.fn(),
      }),
    }
})

describe('withAuth', () => {
    const PageComponent = () => (<div>Page component</div>)
    const WrappedPageComponent = withAuth<any>(PageComponent)

    it('should show wrapper page componente when user is authenticated', () => {
        render(<FakeAuthContextProvider>
            <WrappedPageComponent />
        </FakeAuthContextProvider>)

        expect(screen.getByText('Page component')).toBeInTheDocument()
    })

    it('should not show the component if is not authenticated', async () => {
        render(<FakeAuthContextProvider isAuthenticated={false}>
            <WrappedPageComponent />
        </FakeAuthContextProvider>)

        const router = useRouter()
        const spyPush = jest.spyOn(router, 'push')
        
        await waitFor(() => {
            expect(spyPush).toHaveBeenCalledWith('/login')
        })

        expect(screen.queryByText('Page component')).not.toBeInTheDocument()
    })
})