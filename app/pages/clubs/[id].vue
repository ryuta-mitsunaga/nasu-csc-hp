<script setup lang="ts">
import type { ClubItem } from '~/types/club'

definePageMeta({
  layout: 'default',
})

const route = useRoute()
const id = computed(() => route.params.id as string)

const { data: club } = await useFetch<ClubItem>(
  () => `/api/clubs/${id.value}`
)
</script>

<template>
  <div class="px-5 py-10">
    <div class="mx-auto max-w-[720px]">
      <NuxtLink
        to="/clubs"
        class="mb-8 inline-block text-accent underline underline-offset-2 hover:text-main-deep transition-colors"
      >
        ← 活動クラブ一覧に戻る
      </NuxtLink>
      <BaseSectionTitle :title="club?.name ?? ''" />
      <div class="prose text-text">
        <img
          v-if="club?.thumbnail"
          :src="club.thumbnail"
          :alt="club.name"
          class="mb-6 h-[200px] w-full object-cover"
        />
        <BaseRichText v-if="club?.detail" class="mb-6" :html="club.detail" />
        <section v-if="club?.location" class="mb-6">
          <h3 class="text-main text-lg font-semibold">活動場所</h3>
          <BaseRichText class="mt-2" :html="club.location" />
        </section>
        <section v-if="club?.target" class="mb-6">
          <h3 class="text-main text-lg font-semibold">対象者</h3>
          <BaseRichText class="mt-2" :html="club.target" />
        </section>
        <section v-if="club?.items" class="mb-6">
          <h3 class="text-main text-lg font-semibold">持ち物</h3>
          <BaseRichText class="mt-2" :html="club.items" />
        </section>
        <section v-if="club?.fee" class="mb-6">
          <h3 class="text-main text-lg font-semibold">費用</h3>
          <BaseRichText class="mt-2" :html="club.fee" />
        </section>
        <section v-if="club?.description">
          <h3 class="text-main text-lg font-semibold">その他</h3>
          <BaseRichText class="mt-2" :html="club.description" />
        </section>
      </div>
    </div>
  </div>
</template>
