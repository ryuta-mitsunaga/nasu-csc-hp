<script setup lang="ts">
const footerNavItems = [
  { to: '/', label: 'トップ' },
  { to: '/overview', label: '概要' },
  { to: '/clubs', label: '活動クラブ' },
  { to: '/membership', label: '入会案内' },
  { to: '/organization', label: '組織紹介' },
  { to: '/news', label: 'お知らせ' },
  { to: '/contact', label: 'お問い合わせ' },
  { to: '/links', label: 'リンク' },
  { to: '/privacy', label: 'プライバシーポリシー' },
]
</script>

<template>
  <footer class="border-t border-border">
    <div class="mx-auto max-w-[1080px] px-5 py-8 pb-10">
      <nav class="mb-6">
        <ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li v-for="item in footerNavItems" :key="item.label">
            <NuxtLink
              :to="item.to"
              class="text-main hover:text-accent transition-colors"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <p class="m-0 text-main">（仮称）那須町総合型地域スポーツクラブ</p>
      <p class="mt-2 m-0 text-muted text-sm">© 那須町総合型地域スポーツクラブ</p>
    </div>
  </footer>
</template>
