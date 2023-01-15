import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"
import RecipeHead from "./RecipeHead";
import { useRouter } from "next/router";

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}))

describe('<RecipeHead />', () => {
    const data = {
        difficulty: 'Medium',
        time: 60,
        title: "Chocolate Cake",
        image: "/chocolate-cake.jpeg",
        serveQuantity: 6
    }

    it('should display the Recipe Head successfully', () => {
        render(<RecipeHead
            title={data.title}
            difficulty={data.difficulty}
            image={data.image}
            serveQuantity={data.serveQuantity}
            time={data.time}
        />)

        screen.getByRole('img', {
          name: /chocolate cake/i
        })
        screen.getByRole('heading', {
          name: /chocolate cake/i
        })
        screen.getByText(/60 minutes/i)
        screen.getByText(/medium/i)
        screen.getByText(/serves 6 people/i)

        screen.getByRole('link', {
          name: /< back to home/i
        })
    })

    it('should redirect to the home page on click in the "Back" button', () => {
        render(<RecipeHead
            title={data.title}
            difficulty={data.difficulty}
            image={data.image}
            serveQuantity={data.serveQuantity}
            time={data.time}
        />)

        const backButton = screen.getByRole('link', {
          name: /< back to home/i
        })

        fireEvent.click(backButton)
  
        const { push } = useRouter()

        waitFor(() => {
            expect(push).toHaveBeenCalledWith('/')
        })
    })
})