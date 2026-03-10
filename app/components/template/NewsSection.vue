<script setup lang="ts">
const { data: items, pending, error } = await useFetch<import('~/types/news').NewsItem[]>(
  () => '/api/news?limit=3'
)
</script>

<template>
  <section id="news" class="px-5 py-20">
    <div class="mx-auto max-w-[1080px]">
      <BaseSectionTitle title="お知らせ" subtitle="News" />

      <BaseLoading v-if="pending" />
      <div v-else-if="error" class="py-12 text-center text-muted">
        お知らせの取得に失敗しました
      </div>
      <template v-else-if="items?.length">
        <BaseNewsItemList :items="items" :linkable="true" />
        <NuxtLink
          to="/news"
          class="mt-8 inline-block text-accent underline underline-offset-2 hover:text-main-deep transition-colors"
        >
          もっとみる
        </NuxtLink>
      </template>
      <p v-else class="py-12 text-center text-muted">
        お知らせはありません
      </p>
    </div>
  </section>
</template>
