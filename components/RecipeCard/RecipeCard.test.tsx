import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import RecipeCard from './RecipeCard'
import { RecipeSummary } from '../../types'

describe('<RecipeCard />', () => {
    const data : RecipeSummary = {
        id: 1,
        title: "Chicken",
        difficulty: "Hard",
        image: "/image.jpg",
        time: 120,
    }

    it('should render the recipe card successfully', () => {
        render(<RecipeCard
            id={data.id}
            title={data.title}
            difficulty={data.difficulty}
            image={data.image}
            time={data.time}
        />)

        screen.getByRole('heading', {
          name: /chicken/i
        })
        screen.getByText(/hard/i)
        screen.getByText(/120/i)
    })
})