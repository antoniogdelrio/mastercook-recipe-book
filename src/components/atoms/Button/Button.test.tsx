import { screen, render, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import Button from "./Button"
import userEvent from "@testing-library/user-event"

describe('<Button />', () => {
    const data = {
        onClick: jest.fn()
    }

    it('should render the Button successfully', () => {
        render(
            <Button
                onClick={data.onClick}
            >
                Click me
            </Button>
        )

        expect(screen.getByRole('button', {
            name: "Click me"
        })).toBeInTheDocument()
    })

    it('should fire the onClick function on click the button', async () => {
        render(
            <Button
                onClick={data.onClick}
            >
                Click me
            </Button>
        )

        const button = screen.getByRole('button')

        userEvent.click(button)

        await waitFor(() => {
            expect(data.onClick).toHaveBeenCalled()
        })
    })
})