<script setup lang="ts">
import type { ClubItem } from '~/types/club'

defineProps<{
  club: Pick<ClubItem, 'id' | 'name' | 'thumbnail'>
}>()
</script>

<template>
  <NuxtLink
    :to="`/clubs/${club.id}`"
    class="group relative block overflow-hidden rounded-lg border border-border bg-bg-soft shadow-[0_2px_12px_-2px_rgba(27,67,50,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-[0_8px_24px_-4px_rgba(27,67,50,0.12)]"
  >
    <div class="relative aspect-[4/3] overflow-hidden">
      <img
        v-if="club.thumbnail"
        :src="club.thumbnail"
        :alt="club.name"
        class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        v-else
        class="absolute inset-0 flex items-center justify-center bg-bg-soft text-muted text-4xl"
      >
        —
      </div>

      <!-- 下部グラデーション（影） -->
      <div
        class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-main-deep/85 via-main-deep/30 to-transparent"
        aria-hidden
      />

      <!-- 名前とボタン -->
      <div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 pb-4 pt-12">
        <h3
          class="relative inline-block text-bg text-lg font-semibold drop-shadow-sm transition-colors duration-300 group-hover:text-accent after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-0 after:bg-accent after:content-[''] after:transition-all after:duration-300 group-hover:after:w-full"
        >
          {{ club.name }}
        </h3>
        <span
          class="flex shrink-0 items-center gap-1 rounded-md border border-bg/50 bg-bg/20 px-3 py-1.5 text-bg text-sm font-medium backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:border-accent group-hover:bg-accent group-hover:text-bg translate-x-1 opacity-90 group-hover:opacity-100"
        >
          詳細を見る
          <span class="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
