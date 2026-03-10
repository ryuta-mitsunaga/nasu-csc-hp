/** microCMS 画像フィールドのレスポンス形式 */
export interface MicroCmsImage {
  url: string
  height?: number
  width?: number
}

/** microCMS 活動クラブAPI のコンテンツ形式 */
export interface MicroCmsClubContent {
  id: string
  name: string
  detail?: string | null
  location: string
  target: string
  items: string
  fee: string
  description?: string | null
  thumbnail?: MicroCmsImage | null
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  revisedAt?: string
}

/** microCMS 活動クラブリストAPI のレスポンス形式 */
export interface MicroCmsClubListResponse {
  contents: MicroCmsClubContent[]
  totalCount: number
  offset: number
  limit: number
}

/** アプリ内で使用する活動クラブ項目（正規化済み） */
export interface ClubItem {
  id: string
  name: string
  detail?: string | null
  location: string
  target: string
  items: string
  fee: string
  description?: string | null
  thumbnail?: string | null
}
