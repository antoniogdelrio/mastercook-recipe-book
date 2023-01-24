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
    const totalItems = RecipesMock.page1.length + RecipesMock.page2.length

    if (req.url.searchParams.get('q')) {
      return res(
        ctx.delay(500),
        ctx.status(200),
        ctx.set('X-Total-Count', `${totalItems}`),
        ctx.json([RecipesMock.page1[1]])
      )
    }

    if (req.url.searchParams.get('_page') === '2') {
      return res(
        ctx.delay(500),
        ctx.status(200),
        ctx.set('X-Total-Count', `${totalItems}`),
        ctx.json(RecipesMock.page2)
      )
    }

    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.set('X-Total-Count', `${totalItems}`),
      ctx.json(RecipesMock.page1)
    )
  })
]

export const server = setupServer(...handlers)
