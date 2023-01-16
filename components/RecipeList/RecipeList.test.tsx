import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import RecipeList from "./RecipeList";

describe('<RecipeList />', () => {
    const data = [
        {
            id: 1,
            image: "chicken.jpg",
            title: "Chicken",
            time: 60,
            difficulty: "Easy"
        },
        {
            id: 2,
            image: "chocolate-cake.jpg",
            title: "Chocolate Cake",
            time: 75,
            difficulty: "Medium"
        }
    ]

    it('should render Recipe List successfully', () => {
        render(<RecipeList
            cards={data}
        />)

        screen.getByRole('img', {
          name: /chicken/i
        })
        screen.getByRole('heading', {
          name: /chicken/i
        })
        screen.getByText(/easy/i)
        screen.getByText(/60 minutes/i)
        
        screen.getByRole('img', {
          name: /chocolate cake/i
        })
        screen.getByRole('heading', {
          name: /chocolate cake/i
        })
        screen.getByText(/medium/i)
        screen.getByText(/75 minutes/i)
    })
})