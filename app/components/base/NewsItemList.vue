<script setup lang="ts">
import type { NewsItem as NewsItemType } from '~/types/news'

withDefaults(
  defineProps<{
    items: NewsItemType[]
    linkable?: boolean
  }>(),
  { linkable: false }
)
</script>

<template>
  <div class="space-y-0 [&>*:last-child>*]:border-b-0">
    <template v-for="item in items" :key="item.id">
      <NuxtLink
        v-if="linkable"
        :to="`/news/${item.id}`"
        class="block cursor-pointer hover:opacity-80 transition-opacity"
      >
        <BaseNewsItem :item="item" />
      </NuxtLink>
      <BaseNewsItem v-else :item="item" />
    </template>
  </div>
</template>
