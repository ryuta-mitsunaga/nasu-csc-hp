import { fetchNewsList } from '../../utils/microcms'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Number(query.limit) || 20
  return fetchNewsList(limit)
})
