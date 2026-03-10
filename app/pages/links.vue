<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

// SNSリンク（仮データ）
const links = [
  { name: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
  { name: 'X (Twitter)', url: 'https://x.com', icon: 'X' },
]
</script>

<template>
  <div class="px-5 py-20">
    <div class="mx-auto max-w-[1080px]">
      <BaseSectionTitle title="SNS等のリンク" subtitle="Links" />
      <p class="mb-12 text-text">
        那須町総合型地域スポーツクラブのSNSや関連リンクです。
      </p>
      <ul class="space-y-4">
        <li v-for="link in links" :key="link.name">
          <a
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block text-accent hover:underline"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
