import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import RecipeCard from './RecipeCard'
import { Recipe } from '../../types'

describe('<RecipeCard />', () => {
    const data : Recipe = {
        id: 1,
        title: "Chicken",
        difficulty: "Hard",
        image: "/image.jpg",
        ingredients: [],
        steps: [],
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

    it('should match snapshot', () => {
        const { container } = render(<RecipeCard
            id={data.id}
            title={data.title}
            difficulty={data.difficulty}
            image={data.image}
            time={data.time}
        />)

        expect(container).toMatchSnapshot()
    })
})