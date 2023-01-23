import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { RECIPES_URL } from '../constants/apiUrls'
import { RecipeMock, RecipesMock } from './mocks/Recipes'

const handlers = [
  rest.get(`${RECIPES_URL}/:id`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(RecipeMock)
    )
  }),
  rest.get(`${RECIPES_URL}`, (req, res, ctx) => {
    if (req.url.searchParams.get('q')) {
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
