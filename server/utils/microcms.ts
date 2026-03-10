import type {
  MicroCmsNewsContent,
  MicroCmsNewsListResponse,
  NewsItem,
} from '../../app/types/news'
import type {
  MicroCmsClubContent,
  MicroCmsClubListResponse,
} from '../../app/types/club'

function getConfig() {
  const {
    microcmsApiBase,
    microcmsApiKey,
  } = useRuntimeConfig()
  return {
    apiBase: microcmsApiBase as string,
    apiKey: microcmsApiKey as string,
  }
}

/** microCMS のカテゴリをアプリ用に正規化 */
function toNewsCategory(
  cat: MicroCmsNewsContent['category']
): NewsItem['category'] {
  if (!cat) return undefined
  const arr = Array.isArray(cat) ? cat : [cat]
  return arr.map((c) => ({ id: c.id, name: c.name, color: c.color ?? [] }))
}

/** microCMS のレスポンスをアプリ用の NewsItem に変換 */
function toNewsItem(
  content: MicroCmsNewsListResponse['contents'][number]
) {
  return {
    id: content.id,
    title: content.title,
    body: content.body,
    thumbnail: content.thumbnail?.url ?? undefined,
    category: toNewsCategory(content.category),
    publishedAt: content.publishedAt ?? content.createdAt,
  }
}

/** お知らせ一覧を取得（公開日時の新しい順） */
export async function fetchNewsList(limit = 10) {
  const { apiBase, apiKey } = getConfig()
  if (!apiKey || !apiBase) return []
  const url = `${apiBase}/news?limit=${limit}&orders=-publishedAt`
  const res = await fetch(url, {
    headers: { 'X-MICROCMS-API-KEY': apiKey },
  })
  if (!res.ok) return []
  const data: MicroCmsNewsListResponse = await res.json()
  return data.contents.map(toNewsItem)
}

/** お知らせ1件を取得 */
export async function fetchNewsById(id: string) {
  const { apiBase, apiKey } = getConfig()
  if (!apiKey || !apiBase) return null
  const url = `${apiBase}/news/${id}`
  const res = await fetch(url, {
    headers: { 'X-MICROCMS-API-KEY': apiKey },
  })
  if (!res.ok) return null
  const content: MicroCmsNewsContent = await res.json()
  return toNewsItem(content)
}

/** microCMS のレスポンスをアプリ用の ClubItem に変換 */
function toClubItem(
  content: MicroCmsClubListResponse['contents'][number]
) {
  return {
    id: content.id,
    name: content.name,
    detail: content.detail ?? undefined,
    location: content.location,
    target: content.target,
    items: content.items,
    fee: content.fee,
    description: content.description ?? undefined,
    thumbnail: content.thumbnail?.url ?? undefined,
  }
}

/** 活動クラブ一覧を取得 */
export async function fetchClubList(limit = 100) {
  const { apiBase, apiKey } = getConfig()
  if (!apiKey || !apiBase) return []
  const url = `${apiBase}/clubs?limit=${limit}&orders=-publishedAt`
  const res = await fetch(url, {
    headers: { 'X-MICROCMS-API-KEY': apiKey },
  })
  if (!res.ok) return []
  const data: MicroCmsClubListResponse = await res.json()
  return data.contents.map(toClubItem)
}

/** 活動クラブ1件を取得 */
export async function fetchClubById(id: string) {
  const { apiBase, apiKey } = getConfig()
  if (!apiKey || !apiBase) return null
  const url = `${apiBase}/clubs/${id}`
  const res = await fetch(url, {
    headers: { 'X-MICROCMS-API-KEY': apiKey },
  })
  if (!res.ok) return null
  const content: MicroCmsClubContent = await res.json()
  return toClubItem(content)
}
