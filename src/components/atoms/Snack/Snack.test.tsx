import "@testing-library/jest-dom"
import { render, screen, waitFor } from "../../../test-tools/test-utils"
import Snack from "./Snack"

jest.mock('next/router', () => {
    return {
      useRouter: jest.fn().mockReturnValue({
        push: jest.fn(),
      }),
    }
})

jest.setTimeout(8500)

describe('<Snack />', () => {
    const data = {
        title: 'Alert',
        description: 'Alert description',
        color: 'error'
    }

    it ('should display the snack data, and hide after 8 seconds', async () => {
        const { debug } = render(<Snack data={data} />)

        const alert = screen.getByRole('alert', {
            name: data.description
        })

        expect(screen.getByRole('alert', {
            name: data.description
        })).toBeInTheDocument()

        await waitFor(() => {
            expect(screen.queryByRole('alert', {
                name: data.description
            })).not.toBeInTheDocument()
        }, {
            timeout: 8000
        })
    })
})