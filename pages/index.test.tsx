import Home from ".";
import "@testing-library/jest-dom"
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "../test-tools/test-utils";
import userEvent from "@testing-library/user-event";
import { server } from "../test-tools/msw-handlers";

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    query: {},
    push: jest.fn()
  }))
}))

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Page Home (/)', () => {
    describe('<Home />', () => {
        const data = {
            recipes: [
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
            ],
            queryPage: 1,
            querySearch: ""
        }

        it('should render the Home page successfully', () => {
            render(<Home
                recipes={data.recipes}
                queryPage={data.queryPage}
                querySearch={data.querySearch}
            />)

            screen.getByRole('img', {
              name: /mastercook logo/i
            })

            screen.getByRole('textbox')

            screen.getByRole('button', {
              name: /search/i
            })

            screen.getByRole('heading', {
              name: /chicken/i
            })
        })

        it('should not render any cards when not have data', () => {
            render(<Home
              recipes={[]}
              queryPage={data.queryPage}
              querySearch={data.querySearch}
            />)

            screen.getByText('Not recipes to show')
        })

        it('should return searched recipe', async () => {
          render(<Home
            recipes={data.recipes}
            queryPage={data.queryPage}
            querySearch={data.querySearch}
          />)

          const searchTextBox = screen.getByAltText("Search recipes")
          fireEvent.change(searchTextBox, { target: { value: "chocolate" } })

          const searchButton = screen.getByRole("button", {
            name: "Search"
          })
          userEvent.click(searchButton)

          await waitFor(() => {
            screen.getByRole('progressbar')
          })

          await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'))

          expect(screen.getByRole('heading', {
            name: /chocolate cake/i
          })).toBeInTheDocument()

          expect(screen.queryByRole('heading', {
            name: /chicken/i
          })).not.toBeInTheDocument()
        })

    })
})