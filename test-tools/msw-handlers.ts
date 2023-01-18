import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { RECIPES_URL } from '../constants/apiUrls'
import { RecipeMock } from './mocks/Recipes'

const handlers = [
  rest.get(`${RECIPES_URL}/:id`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(RecipeMock)
    )
  })
]

export const server = setupServer(...handlers)
