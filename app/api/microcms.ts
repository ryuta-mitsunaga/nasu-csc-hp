import type { NewsItem } from '~/types/news'
import type { ClubItem } from '~/types/club'

/** お知らせ一覧を取得（公開日時の新しい順） */
export async function fetchNewsList(limit = 10): Promise<NewsItem[]> {
  return $fetch<NewsItem[]>('/api/news', { query: { limit } })
}

/** お知らせ1件を取得 */
export async function fetchNewsById(id: string): Promise<NewsItem | null> {
  try {
    return await $fetch<NewsItem>(`/api/news/${id}`)
  } catch {
    return null
  }
}

/** 活動クラブ一覧を取得 */
export async function fetchClubList(limit = 100): Promise<ClubItem[]> {
  return $fetch<ClubItem[]>('/api/clubs', { query: { limit } })
}

/** 活動クラブ1件を取得 */
export async function fetchClubById(id: string): Promise<ClubItem | null> {
  try {
    return await $fetch<ClubItem>(`/api/clubs/${id}`)
  } catch {
    return null
  }
}
