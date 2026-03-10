<script setup lang="ts">
import type { NewsItem as NewsItemType } from '~/types/news'

defineProps<{
  item: NewsItemType
}>()

function formatDate(iso?: string) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article class="py-8">
    <img
      v-if="item.thumbnail"
      :src="item.thumbnail"
      :alt="item.title"
      class="mb-4 h-[200px] w-full object-cover"
    />
    <header>
      <div class="flex flex-wrap items-center gap-2">
        <span
          v-for="cat in item.category"
          :key="cat.id"
          class="rounded px-2 py-0.5 text-xs"
          :class="{
            'bg-main/10 text-main': cat.color?.includes('green'),
            'bg-accent/10 text-accent': cat.color?.includes('blue'),
            'bg-border text-muted': !cat.color?.length || (!cat.color?.includes('green') && !cat.color?.includes('blue')),
          }"
        >
          {{ cat.name }}
        </span>
        <time
          v-if="item.publishedAt"
          :datetime="item.publishedAt"
          class="text-muted text-sm"
        >
          {{ formatDate(item.publishedAt) }}
        </time>
      </div>
      <h3 class="mt-1 text-main-deep text-lg font-semibold">
        {{ item.title }}
      </h3>
    </header>
    <BaseRichText class="mt-6 text-text" :html="item.body" />
  </article>
</template>
