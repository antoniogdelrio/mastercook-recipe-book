import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import IngredientsList from './IngredientsList'
import { Ingredient } from "../../../types"

describe('<IngredientsList />', () => {
    const data : Ingredient[] = [
        {
            description: "Ketchup",
            quantity: 100,
            unit: "g"
        },
        {
            description: "Mustard",
            quantity: 250,
            unit: "units"
        }
    ]

    it('should render Ingredients List successfully', () => {
        render(<IngredientsList
            cards={data}
        />)

        screen.getByText(/100 g/i)
        screen.getByText(/ketchup/i)

        screen.getByText(/250 units/i)
        screen.getByText(/mustard/i)
    })
})