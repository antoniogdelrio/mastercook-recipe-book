import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { RecipeMock } from "../../src/test-tools/mocks/Recipes";
import { server } from "../../src/test-tools/msw-handlers";
import { render, screen } from "../../src/test-tools/test-utils";
import { Recipe } from "../../src/types";
import RecipeDetails, { getServerSideProps } from "../../pages/recipes/[id]";

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Page Recipe Details (/recipes/[id])', () => {
    const data : Recipe =  {
        id: 1,
        title: "Chicken",
        image: "chicken.jpg",
        time: 65,
        difficulty: "Medium",
        ingredients: [
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
        ],
        steps: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe fugiat eius earum, placeat repellat soluta tenetur fuga, provident, ut laboriosam incidunt mollitia perspiciatis? Debitis voluptatum fugit nesciunt asperiores incidunt.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illo et assumenda quod quaerat error, ut, nulla autem cum exercitationem soluta ea. Ducimus itaque sint minus dolorem, optio ipsam corrupti!"
        ],
        serve: 6
    }

    describe('<RecipeDetails />', () => {
        it ('should render the page Recipe Details successfully', () => {
            render(<RecipeDetails
                recipe={data}
            />)
    
            screen.getByRole('link', {
                name: /< back to home/i
            })
    
            screen.getByRole('heading', {
              name: /chicken/i
            })
    
            screen.getByText(/serves 6 people/i)
    
            screen.getByRole('heading', {
              name: /ingredients:/i
            })
    
            screen.getByText(/250 units/i)
    
            screen.getByText(data.steps[1])
        })
    })

    describe('getServerSideProps', () => {
        const data = {
            query: {
                id: 1
            }
        }

        it ('getServerSideProps', async () => {
            const result = await getServerSideProps(data as unknown as GetServerSidePropsContext<ParsedUrlQuery, PreviewData>)

            expect(result).toMatchObject({
                props: {
                    recipe: RecipeMock
                }
            })
        })
    })
})