<script setup lang="ts">
import type { NewsItem } from '~/types/news'

definePageMeta({
  layout: 'default',
})

const route = useRoute()
const id = computed(() => route.params.id as string)

const { data: newsItem, pending, error } = await useFetch<NewsItem>(
  () => `/api/news/${id.value}`
)
</script>

<template>
  <div class="px-5 py-10">
    <div class="mx-auto max-w-[720px]">
      <NuxtLink
        to="/news"
        class="mb-8 inline-block text-accent underline underline-offset-2 hover:text-main-deep transition-colors"
      >
        ← お知らせ一覧に戻る
      </NuxtLink>

      <BaseLoading v-if="pending" />
      <div v-else-if="error" class="py-12 text-center text-muted">
        お知らせの取得に失敗しました
      </div>
      <div v-else-if="newsItem">
        <TemplateNewsDetail :item="newsItem" />
      </div>
      <div v-else class="py-12 text-center text-muted">
        お知らせが見つかりません
      </div>
    </div>
  </div>
</template>
