import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import "./Typography"
import Typography from "./Typography"

describe("<Typography />", () => {
    it("should render a <p> tag successfully", () => {
        const { container } = render(<Typography
            value="My text"
        />)

        expect(screen.getByText("My text")).toBeInTheDocument()
        expect(container.querySelector('p')).toBeTruthy()
    })

    it("should render a <h1> tag successfully", () => {
        const { container } = render(<Typography
            value="My text"
            type="h1"
        />)

        expect(screen.getByText("My text")).toBeInTheDocument()
        expect(container.querySelector('h1')).toBeTruthy()
    })

    it("should render a <h2> tag successfully", () => {
        const { container } = render(<Typography
            value="My text"
            type="h2"
        />)

        expect(screen.getByText("My text")).toBeInTheDocument()
        expect(container.querySelector('h2')).toBeTruthy()
    })

    it("should render a <h3> tag successfully", () => {
        const { container } = render(<Typography
            value="My text"
            type="h3"
        />)

        expect(screen.getByText("My text")).toBeInTheDocument()
        expect(container.querySelector('h3')).toBeTruthy()
    })

    it("should render a <h4> tag successfully", () => {
        const { container } = render(<Typography
            value="My text"
            type="h4"
        />)

        expect(screen.getByText("My text")).toBeInTheDocument()
        expect(container.querySelector('h4')).toBeTruthy()
    })

    it("should render a <span> tag successfully", () => {
        const { container } = render(<Typography
            value="My text"
            type="span"
        />)

        expect(screen.getByText("My text")).toBeInTheDocument()
        expect(container.querySelector('span')).toBeTruthy()
    })

    it("should render a bold <p> tag successfully", () => {
        const { container } = render(<Typography
            value="My text"
            type="p"
            isBold={true}
        />)

        expect(screen.getByText("My text")).toBeInTheDocument()
        expect(container.querySelector('b')).toBeTruthy()
        expect(container.querySelector('b')?.innerHTML).toBe('<p>My text</p>')
    })
})