import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import PreparationSection from "./PreparationSection";

describe('<PreparationSection />', () => {
    const data = [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe fugiat eius earum, placeat repellat soluta tenetur fuga, provident, ut laboriosam incidunt mollitia perspiciatis? Debitis voluptatum fugit nesciunt asperiores incidunt.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo et assumenda quod quaerat error, ut, nulla autem cum exercitationem soluta ea. Ducimus itaque sint minus dolorem, optio ipsam corrupti!"
    ]

    it('should display Preparation Section items successfully', () => {
        render(<PreparationSection
            steps={data}
        />)

        screen.getByText(data[0])
        screen.getByText(data[1])
    })
})