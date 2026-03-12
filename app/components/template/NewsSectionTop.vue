<script setup lang="ts">
const { data: items, pending, error } = await useFetch<import('~/types/news').NewsItem[]>(
  () => '/api/news?limit=3'
)
</script>

<template>
  <section id="news" class="px-5 py-10">
    <div class="mx-auto max-w-[1080px]">
      <BaseSectionTitleCompact title="お知らせ" subtitle="News" />

      <BaseLoading v-if="pending" />
      <div v-else-if="error" class="py-12 text-center text-muted text-base">
        お知らせの取得に失敗しました
      </div>
      <template v-else-if="items?.length">
        <BaseNewsItemList :items="items" :linkable="true" />
        <BaseLinkToList text="お知らせ" to="/news" size="compact" />
      </template>
      <p v-else class="py-12 text-center text-muted text-base">
        お知らせはありません
      </p>
    </div>
  </section>
</template>
