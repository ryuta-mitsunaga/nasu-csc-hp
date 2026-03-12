<script setup lang="ts">
import type { NewsItem } from '~/types/news'

definePageMeta({
  layout: 'default',
})

const { data: newsItems, pending, error } = await useFetch<NewsItem[]>(
  () => '/api/news?limit=20'
)
</script>

<template>
  <div class="px-5 py-10">
    <div class="mx-auto max-w-[1080px]">
      <BaseSectionTitle title="クラブからのお知らせ" subtitle="News" />
      <p class="mb-12 text-text">
        那須町総合型地域スポーツクラブからのお知らせ一覧です。
      </p>

      <BaseLoading v-if="pending" />
      <div v-else-if="error" class="py-12 text-center text-muted">
        お知らせの取得に失敗しました
      </div>
      <template v-else-if="newsItems?.length">
        <BaseNewsItemList :items="newsItems" :linkable="true" />
      </template>
      <p v-else class="py-12 text-center text-muted">
        お知らせはありません
      </p>
    </div>
  </div>
</template>
