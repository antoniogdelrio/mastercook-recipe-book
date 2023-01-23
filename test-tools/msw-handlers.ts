import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { RECIPES_URL } from '../constants/apiUrls'
import { RecipeMock, RecipesMock } from './mocks/Recipes'

const handlers = [
  rest.get(`${RECIPES_URL}/:id`, (_req, res, ctx) => {
    console.log('rodando o primeiro mock')
    return res(
      ctx.status(200),
      ctx.json(RecipeMock)
    )
  }),
  rest.get(`${RECIPES_URL}`, (req, res, ctx) => {
    console.log('the second mock is running')
    if (req.url.searchParams.get('q')) {
      console.log('rodando mock com busca')
      return res(
        ctx.delay(500),
        ctx.status(200),
        ctx.json([RecipesMock[1]])
      )
    }
    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json(RecipesMock)
    )
  })
]

export const server = setupServer(...handlers)
