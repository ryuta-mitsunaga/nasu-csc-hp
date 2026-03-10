import { fetchClubList } from '../../utils/microcms'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Number(query.limit) || 100
  return fetchClubList(limit)
})
