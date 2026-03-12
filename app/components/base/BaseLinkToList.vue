<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string
    to: string
    size?: 'default' | 'compact'
  }>(),
  { size: 'default' }
)
</script>

<template>
  <div class="text-right" :class="[size === 'compact' ? 'mt-3' : 'mt-4']">
    <NuxtLink
      :to="to"
      class="inline-flex items-center gap-1 text-accent hover:text-main-deep transition-colors"
      :class="[size === 'compact' ? 'text-base' : 'text-lg']"
    >
      {{ text }}一覧へ
      <span aria-hidden="true">→</span>
    </NuxtLink>
  </div>
</template>
