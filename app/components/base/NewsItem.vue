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
  <article class="flex flex-col gap-1 border-b border-border py-4">
    <div class="flex flex-wrap items-center gap-2">
      <time
        v-if="item.publishedAt"
        :datetime="item.publishedAt"
        class="text-muted text-sm"
      >
        {{ formatDate(item.publishedAt) }}
      </time>
      <span
        v-if="item.category?.length"
        class="rounded px-2 py-0.5 text-xs"
        :class="{
          'bg-main/10 text-main': item.category[0].color?.includes('green'),
          'bg-accent/10 text-accent': item.category[0].color?.includes('blue'),
          'bg-border text-muted': !item.category[0].color?.length || (!item.category[0].color?.includes('green') && !item.category[0].color?.includes('blue')),
        }"
      >
        {{ item.category[0].name }}
      </span>
    </div>
    <h3 class="min-w-0 text-main-deep text-base line-clamp-2">
      {{ item.title }}
    </h3>
  </article>
</template>
