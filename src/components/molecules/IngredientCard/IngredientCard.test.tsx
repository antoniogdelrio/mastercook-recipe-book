import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import IngredientCard from './IngredientCard'
import { Ingredient } from "../../types"

describe('<IngredientCard />', () => {
    const data : Ingredient = {
        description: "Ketchup",
        quantity: 100,
        unit: "g"
    }

    it('should render Ingredient Card successfully', () => {
        render(<IngredientCard
            description={data.description}
            quantity={data.quantity}
            unit={data.unit}
        />)

        screen.getByText(/100 g/i)
        screen.getByText(/ketchup/i)
    })
})