<script setup lang="ts">
const isOpen = ref(false)

const navItems = [
  { to: '/', label: 'トップ' },
  { to: '/clubs', label: '活動クラブ' },
  { to: '/membership', label: '入会案内' },
  { to: '/organization', label: '組織紹介' },
  { to: '/news', label: 'お知らせ' },
  { to: '/contact', label: 'お問い合わせ' },
]

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border backdrop-blur-sm">
    <div class="mx-auto flex max-w-[1080px] items-center justify-between px-5 py-4">
      <NuxtLink to="/" class="block" @click="closeMenu">
        <p class="font-display text-main text-base">（仮称）那須町総合型地域スポーツクラブ</p>
      </NuxtLink>

      <nav class="hidden items-center gap-6 md:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          class="text-main-deep text-base hover:text-accent transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <button
        type="button"
        class="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        aria-label="メニューを開く"
        :aria-expanded="isOpen"
        @click="toggleMenu"
      >
        <span
          class="block h-0.5 w-6 bg-main-deep transition-all duration-300"
          :class="isOpen ? 'translate-y-2 rotate-45' : ''"
        />
        <span
          class="block h-0.5 w-6 bg-main-deep transition-all duration-300"
          :class="isOpen ? 'opacity-0' : ''"
        />
        <span
          class="block h-0.5 w-6 bg-main-deep transition-all duration-300"
          :class="isOpen ? '-translate-y-2 -rotate-45' : ''"
        />
      </button>
    </div>

    <div v-show="isOpen" class="fixed inset-0 z-40 md:hidden">
      <div class="absolute inset-0 h-screen bg-main-deep/20" @click="closeMenu" />
      <nav class="absolute right-0 top-0 h-screen w-[80%] border-l border-border bg-bg p-8">
        <ul class="space-y-6">
          <li v-for="item in navItems" :key="item.label">
            <NuxtLink
              :to="item.to"
              class="block text-main-deep text-lg hover:text-accent transition-colors"
              @click="closeMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
