/** microCMS 画像フィールドのレスポンス形式 */
export interface MicroCmsImage {
  url: string
  height?: number
  width?: number
}

/** microCMS お知らせカテゴリ形式 */
export interface MicroCmsNewsCategory {
  id: string
  name: string
  color?: string[]
}

/** microCMS お知らせAPI のコンテンツ形式 */
export interface MicroCmsNewsContent {
  id: string
  title: string
  body: string
  thumbnail?: MicroCmsImage | null
  category?: MicroCmsNewsCategory | MicroCmsNewsCategory[] | null
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  revisedAt?: string
}

/** microCMS お知らせリストAPI のレスポンス形式 */
export interface MicroCmsNewsListResponse {
  contents: MicroCmsNewsContent[]
  totalCount: number
  offset: number
  limit: number
}

/** アプリ内で使用するお知らせカテゴリ（正規化済み） */
export interface NewsCategory {
  id: string
  name: string
  color?: string[]
}

/** アプリ内で使用するお知らせ項目（正規化済み） */
export interface NewsItem {
  id: string
  title: string
  body: string
  thumbnail?: string | null
  category?: NewsCategory[]
  publishedAt?: string
}
