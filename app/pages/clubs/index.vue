<script setup lang="ts">
import type { ClubItem } from '~/types/club'

definePageMeta({
  layout: 'default',
})

const { data: clubs } = await useFetch<ClubItem[]>('/api/clubs')
</script>

<template>
  <div class="px-5 py-20">
    <div class="mx-auto max-w-[1080px]">
      <BaseSectionTitle title="活動クラブ" subtitle="Activity Clubs" />
      <p class="mb-12 text-text">
        那須町総合型地域スポーツクラブでは、様々な活動クラブが活動しています。
      </p>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <BaseClubCard
          v-for="club in clubs ?? []"
          :key="club.id"
          :club="{ id: club.id, name: club.name, thumbnail: club.thumbnail }"
        />
      </div>
    </div>
  </div>
</template>
