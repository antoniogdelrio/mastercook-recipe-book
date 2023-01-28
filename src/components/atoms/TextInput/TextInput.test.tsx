import { useRef } from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import "./TextInput"
import TextInput from "./TextInput"

describe("<TextInput />", () => {
    const data = {
        alt: "My Text Input",
        ariaLabel: "My Text Input"
    }

    it("should render the Text Input successfully", () => {
        render (<TextInput
            alt={data.alt}
            ariaLabel={data.ariaLabel}
        />)

        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
})