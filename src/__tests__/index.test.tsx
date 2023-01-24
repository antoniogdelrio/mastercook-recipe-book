import Home, { getServerSideProps } from "../../pages/index";
import "@testing-library/jest-dom"
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "../test-tools/test-utils";
import userEvent from "@testing-library/user-event";
import { server } from "../test-tools/msw-handlers";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { RecipesMock } from "../test-tools/mocks/Recipes";

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
    const totalItems = RecipesMock.page1.length + RecipesMock.page2.length

    describe('<Home />', () => {
        const data = {
            serverData: {
              data: RecipesMock.page1,
              totalItems: totalItems
            },
            queryPage: 1,
            querySearch: ""
        }

        it('should render the Home page successfully', () => {
            render(<Home
                serverData={data.serverData}
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
              serverData={{
                data: [],
                totalItems: 0
              }}
              queryPage={data.queryPage}
              querySearch={data.querySearch}
            />)

            screen.getByText('Not recipes to show')
        })

        it('should return searched recipe', async () => {
          render(<Home
            serverData={data.serverData}
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

        it('should change between paginated data successfully', async () => {
          render(<Home
            serverData={data.serverData}
            queryPage={data.queryPage}
            querySearch={data.querySearch}
          />)

          const nextPageButton = screen.getByRole('button', {
            name: /next page >/i
          })

          userEvent.click(nextPageButton)

          await waitFor(() => {
            screen.getByRole('progressbar')
          })

          await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'))

          await waitFor(() => {
            expect(screen.queryByRole('heading', {
              name: /apple pie/i
            })).toBeInTheDocument()
          })

          expect(screen.queryByRole('heading', {
            name: /chicken/i
          })).not.toBeInTheDocument()
          expect(screen.queryByRole('heading', {
            name: /chocolate cake/i
          })).not.toBeInTheDocument()
        })

    })

    describe('getServerSideProps', () => {
      const data = {
          query: {
              page: 1,
              search: ""
          }
      }

      it ('getServerSideProps', async () => {
          const result = await getServerSideProps(data as unknown as GetServerSidePropsContext<ParsedUrlQuery, PreviewData>)

          expect(result).toMatchObject({
              props: {
                  serverData: {
                    data: RecipesMock.page1,
                    totalItems: `${totalItems}`
                  },
                  queryPage: 1,
                  querySearch: ""
              }
          })
      })
  })
})