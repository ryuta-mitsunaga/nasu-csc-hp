import { fetchNewsById } from '../../utils/microcms'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Bad Request' })
  }
  const item = await fetchNewsById(id)
  if (!item) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found' })
  }
  return item
})
